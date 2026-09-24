import { afterEach, describe, expect, it } from 'vitest';
import { destroyWithin, mount, type MarkdownView } from 'hermes-renderer-under-test';

const roots: HTMLElement[] = [];
function render(content: string, final = true, context = {}) {
  const root = document.createElement('div');
  document.body.append(root);
  roots.push(root);
  const view = mount(root, { key: 'message-1', content, final, context });
  return { root, view };
}
afterEach(() => { for (const root of roots.splice(0)) { destroyWithin(root); root.remove(); } });
async function update(view: MarkdownView, content: string, final = false) {
  view.update({ content, final });
  await view.settled();
}

describe('实际 Markstream 组件', () => {
  it('支持 CommonMark、表格、脚注及安全 HTML', async () => {
    const { root, view } = render('# 标题\n\n> **加粗**\n\n| A | B |\n|---|---|\n| 1 | 2 |\n\n脚注[^a]\n\n[^a]: 注释\n\n<details><summary>更多</summary><table><tr><td colspan="2">合并</td></tr></table></details>');
    await view.settled();
    expect(root.querySelector('h1')?.textContent).toBe('标题');
    expect(root.querySelector('blockquote strong')?.textContent).toBe('加粗');
    expect(root.querySelectorAll('table').length).toBe(2);
    expect(root.querySelector('td[colspan="2"]')?.textContent).toBe('合并');
    expect(root.textContent).toContain('注释');
    expect(root.querySelector('.hm-fallback')).toBeNull();
  });
  it('不执行编码 HTML、代码或事件属性', async () => {
    const { root, view } = render('&lt;img src=x onerror=alert(1)&gt;\n\n`<script>alert(1)</script>`\n\n```html\n<iframe srcdoc="evil"></iframe>\n```\n\n<div id="msgInner" onclick="evil()" style="position:fixed;color:red">内容<script>evil()</script></div>');
    await view.settled();
    expect(root.querySelector('script, iframe, img, [onclick], #msgInner')).toBeNull();
    expect(root.querySelector('pre code')?.textContent).toContain('<iframe');
    expect(root.querySelector('[style*="fixed"]')).toBeNull();
  });
  it('流式追加与完成保持 details、media 及已完成节点身份', async () => {
    const prefix = '<details><summary>更多</summary>正文</details>\n\n<video src="https://example.com/v.mp4"></video>\n\n';
    const { root, view } = render(prefix + '开始', false);
    await view.settled();
    const details = root.querySelector('details')!;
    const media = root.querySelector('video')!;
    expect(details).not.toBeNull();
    expect(media).not.toBeNull();
    details.open = true;
    media.currentTime = 12;
    for (const [text, final] of [['开始追加', false], ['开始追加完成', true]] as const) {
      await update(view, prefix + text, final);
      expect(root.querySelector('details')).toBe(details);
      expect(details.open).toBe(true);
      expect(root.querySelector('video')).toBe(media);
      expect(media.currentTime).toBe(12);
    }
  });
  it('iframe 点击加载且完成不重建，属性不可被模型覆盖', async () => {
    const prefix = '<iframe src="https://example.com/embed" sandbox="allow-same-origin" srcdoc="evil"></iframe>\n\n';
    const { root, view } = render(prefix + '开始', false, { iframeOrigins: ['https://example.com'] });
    await view.settled();
    expect(root.querySelector('iframe')).toBeNull();
    root.querySelector<HTMLButtonElement>('.hm-media-placeholder button')!.click();
    await view.settled();
    const frame = root.querySelector('iframe')!;
    expect(frame?.getAttribute('sandbox')).toBe('allow-scripts');
    expect(frame.hasAttribute('srcdoc')).toBe(false);
    expect(frame.getAttribute('referrerpolicy')).toBe('no-referrer');
    await update(view, prefix + '完成', true);
    expect(root.querySelector('iframe')).toBe(frame);
  });
  it('公开分享外部媒体需点击，私有资源不生成请求元素', async () => {
    const { root, view } = render('![外部](https://example.com/a.png)\n\n<img src="/api/media?path=secret"><video src="https://example.com/v.mp4"></video>', true, { surface: 'share' });
    await view.settled();
    expect(root.querySelector('img,video')).toBeNull();
    const button = root.querySelector<HTMLButtonElement>('.hm-media-placeholder button')!;
    expect(button).not.toBeNull();
    button.click();
    await view.settled();
    expect(root.querySelector('img')?.src).toBe('https://example.com/a.png');
    expect(root.querySelector('[src*="secret"]')).toBeNull();
  });
  it('所有 chunk 边界不提前请求半截 URL，最终态与直接渲染等价', async () => {
    const text = '**标题**\n\n<video src="https://example.com/full.mp4"></video>\n\n![图片](https://example.com/full.png)\n\n```js\nconst a = 1;\n```';
    const { root, view } = render('', false);
    for (let i = 1; i <= text.length; i++) {
      await update(view, text.slice(0, i));
      for (const node of root.querySelectorAll<HTMLImageElement>('[src]')) {
        expect(['https://example.com/full.png', 'https://example.com/full.mp4']).toContain(node.src);
      }
    }
    await update(view, text, true);
    const direct = render(text);
    await direct.view.settled();
    expect(root.textContent).toBe(direct.root.textContent);
    expect(root.querySelectorAll('video,img,pre').length).toBe(3);
  });
  it('代码高亮、结构视图及表格交互由组件管理', async () => {
    const { root, view } = render('```json\n{"hello": "world"}\n```\n\n| 名称 | 数字 |\n|---|---|\n| b | 10 |\n| a | 2 |');
    await view.settled();
    expect(root.querySelector('.hm-code .token.property')?.textContent).toBe('"hello"');
    const toggle = [...root.querySelectorAll<HTMLButtonElement>('.hm-code button')].find(b => b.textContent === '结构视图')!;
    toggle.click();
    await view.settled();
    expect(root.querySelector('.hm-object-tree')?.textContent).toContain('hello');
    root.querySelector<HTMLButtonElement>('th:nth-child(2) button')!.click();
    await view.settled();
    expect(root.querySelector('tbody tr')?.textContent).toBe('a2');
    expect(root.querySelector('input[type="search"]')).toBeNull();
    expect(root.textContent).not.toContain('复制表格');
  });
  it('MEDIA 使用实例的媒体快照，代码里的协议保持字面内容', async () => {
    const context = { sessionId: 'a', snapshots: { '/tmp/image_1.png': 'b'.repeat(64) },
      resolveMedia: (src: string) => '/api/media?path=' + encodeURIComponent(src.replace(/^file:\/\//, '')) };
    const { root, view } = render('MEDIA:/tmp/image_1.png', false, context);
    await view.settled();
    expect(root.querySelector('img')).toBeNull();
    await update(view, 'MEDIA:/tmp/image_1.png\n\n`MEDIA:/tmp/literal.png`', true);
    const image = root.querySelector('img')!;
    expect(image).not.toBeNull();
    const url = new URL(image.src);
    expect(url.searchParams.get('path')).toBe('/tmp/image_1.png');
    expect(url.searchParams.get('snap')).toBe('b'.repeat(64));
    expect(root.querySelector('code')?.textContent).toBe('MEDIA:/tmp/literal.png');
    expect(root.querySelectorAll('img').length).toBe(1);
  });
  it('嵌套 HTML 中恶意 URL 与 CSS 不绕过受控组件', async () => {
    const { root, view } = render('<details><summary>安全</summary><img src="javascript:alert(1)" onerror="evil()"><audio autoplay src="http://example.com/a.mp3"></audio><iframe src="https://evil.test" srcdoc="x"></iframe><span style="background-image:url(https://evil.test/x);position:fixed;color:blue">内容</span></details>');
    await view.settled();
    expect(root.querySelector('[src], [autoplay], [onerror], [srcdoc]')).toBeNull();
    expect(root.querySelector('[style*="url"], [style*="fixed"]')).toBeNull();
    expect(root.querySelector('details')).not.toBeNull();
  });
  it('销毁取消待执行更新，身份切换不能泄漏旧实例', async () => {
    const { root, view } = render('旧会话', false, { sessionId: 'a' });
    view.update({ content: '迟到内容' });
    const replacement = mount(root, { key: 'message-1', content: '新会话', final: true, context: { sessionId: 'b' } });
    view.update({ content: '更晚内容' });
    await view.settled();
    await replacement.settled();
    expect(root.textContent).toBe('新会话');
    replacement.destroy();
    expect(root.childNodes.length).toBe(0);
    expect(root.hasAttribute('data-hermes-markdown')).toBe(false);
  });
});
