import { afterEach, describe, expect, it, vi } from 'vitest';
import source from '../../static/markdown.js?raw';
import { HermesMarkdown, type MarkdownOptions, type MarkdownView } from 'hermes-renderer-under-test';

type Bridge = { mount: typeof HermesMarkdown.mount; destroyWithin: typeof HermesMarkdown.destroyWithin; ready: Promise<unknown> };
let bridge: Bridge;
function install(load: (url: string) => Promise<{ HermesMarkdown: typeof HermesMarkdown }>) {
  const script = document.createElement('script');
  script.src = 'https://hermes.test/prefix/static/markdown.js?v=test';
  vi.spyOn(document, 'currentScript', 'get').mockReturnValue(script);
  // 只替换网络加载 seam；执行产品的原生桥接代码，组件仍来自源码或真实产物。
  new Function('load', source.replace('import(entry.href)', 'load(entry.href)'))(load);
  bridge = (window as unknown as { HermesMarkdown: Bridge }).HermesMarkdown;
  return bridge;
}
function host() { const root = document.createElement('div'); document.body.append(root); return root; }
afterEach(() => { bridge?.destroyWithin(document.body); document.body.replaceChildren(); vi.restoreAllMocks(); });
const options: MarkdownOptions = { key: 'm1', content: '开始', final: false, context: { sessionId: 'a' } };

describe('原生桥接生命周期', () => {
  it('共用一次子路径加载，并在加载后渲染最新内容', async () => {
    let resolve!: (value: { HermesMarkdown: typeof HermesMarkdown }) => void;
    const load = vi.fn(() => new Promise<{ HermesMarkdown: typeof HermesMarkdown }>(done => { resolve = done; }));
    install(load);
    const root = host();
    const view = bridge.mount(root, options);
    bridge.mount(host(), { ...options, key: 'm2' });
    view.update({ content: '**最新**', final: true });
    expect(root.textContent).toBe('**最新**');
    expect(load).toHaveBeenCalledExactlyOnceWith('https://hermes.test/prefix/static/renderer/index.js?v=test');
    resolve({ HermesMarkdown });
    await view.settled();
    expect(root.querySelector('strong')?.textContent).toBe('最新');
  });
  it('加载失败仍保留可复制原文，后续更新不执行 HTML', async () => {
    install(() => Promise.reject(new Error('offline')));
    const root = host();
    const view = bridge.mount(root, { ...options, content: '<img src=x onerror=evil()>' });
    await view.settled();
    expect(root.querySelector('[role=status]')?.textContent).toContain('加载失败');
    expect(root.querySelector('pre')?.textContent).toContain('<img');
    expect(root.querySelector('img')).toBeNull();
    view.update({ content: '<script>evil()</script>' });
    expect(root.querySelector('pre')?.textContent).toContain('<script>');
    expect(root.querySelector('script')).toBeNull();
  });
  it('加载期间销毁或切换身份，旧回调不能覆盖新内容', async () => {
    let resolve!: (value: { HermesMarkdown: typeof HermesMarkdown }) => void;
    install(() => new Promise(done => { resolve = done; }));
    const root = host();
    const old = bridge.mount(root, options);
    const current = bridge.mount(root, { ...options, content: '新会话', context: { sessionId: 'b' } });
    old.update({ content: '迟到' });
    resolve({ HermesMarkdown });
    await old.settled(); await current.settled();
    expect(root.textContent).toBe('新会话');
  });
  it('同步移动不卸载；真正移除后迟到更新不会复活', async () => {
    install(async () => ({ HermesMarkdown }));
    const root = host();
    const view = bridge.mount(root, { ...options, content: '<details open><summary>更多</summary>正文</details>' });
    await view.settled();
    const details = root.querySelector('details');
    const wrapper = host(); wrapper.append(root);
    await Promise.resolve();
    expect(root.querySelector('details')).toBe(details);
    root.remove();
    await Promise.resolve();
    view.update({ content: '迟到' }); await view.settled();
    expect(root.childNodes.length).toBe(0);
    expect(root.hasAttribute('data-hermes-markdown-host')).toBe(false);
  });
  it('同身份重用同一实例，禁止跨 profile 更新', async () => {
    install(async () => ({ HermesMarkdown }));
    const root = host();
    const view: MarkdownView = bridge.mount(root, options);
    await view.settled();
    expect(bridge.mount(root, { ...options, content: '追加' })).toBe(view);
    expect(() => view.update({ context: { sessionId: 'a', profileId: 'other' } })).toThrow(/profile/);
    await view.settled(); expect(root.textContent).toBe('追加');
  });
});
