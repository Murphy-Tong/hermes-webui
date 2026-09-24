import { afterEach, describe, expect, it, vi } from 'vitest';
import messages from '../../static/messages.js?raw';
import ui from '../../static/ui.js?raw';
import { HermesMarkdown, type MarkdownView } from 'hermes-renderer-under-test';

const between = (source: string, start: string, end: string) => {
  const from = source.indexOf(start), to = source.indexOf(end, from + start.length);
  if (from < 0 || to < 0) throw new Error(`测试 seam 不存在：${start}`);
  return source.slice(from, to);
};
function setup() {
  document.body.innerHTML = '<div id="msgInner"><div class="assistant-segment"><div class="msg-body"></div></div></div>';
  const S = { session: { session_id: 'session-a' }, activeProfile: 'profile-a' };
  const views: MarkdownView[] = [];
  const mount = vi.fn((...args: Parameters<typeof HermesMarkdown.mount>) => {
    const view = HermesMarkdown.mount(...args); views.push(view); return view;
  });
  Object.assign(window, { HermesMarkdown: { ...HermesMarkdown, mount } });
  const globals = { S, $: (id: string) => document.getElementById(id),
    scrollIfPinned: vi.fn(), t: (key: string) => key, showToast: vi.fn(),
    _stripXmlToolCalls: (text: string) => text };
  const helpers = between(ui, 'function hermesMarkdownContext(', 'function assistantDisplayName(');
  const app = new Function(...Object.keys(globals), helpers + `
    const activeSid='session-a',streamId='stream-a';
    let assistantText='',segmentStart=0,_assistantSegmentSeq=1,_freshSegment=false;
    let assistantRow=document.querySelector('.assistant-segment');
    let assistantBody=assistantRow.querySelector('.msg-body');
    function _parseStreamState(){return {displayText:assistantText};}
    function _parseAndWrite(text){assistantText=text;_writeAssistantMarkdown(text);}
  ` + between(messages, '  const _streamProfile=', '  function _ownsActiveStreamOrBackground(')
    + between(messages, '  const _anchorProseViews=', '  function _anchorHasReasoningEvents(')
    + '\nreturn {write:_parseAndWrite,finish:_finishAssistantMarkdown,anchor:_anchorProseIncrementalNode,clear:_clearAnchorProseIncrementalNode};'
  )(...Object.values(globals));
  return { S, app, globals, helpers, mount, views, root: document.querySelector('.msg-body')!,
    settle: async () => { for (const view of views) await view.settled(); } };
}
afterEach(() => {
  HermesMarkdown.destroyWithin(document.body);
  document.body.replaceChildren(); vi.restoreAllMocks();
});
const prefix = '<details><summary>展开</summary>内容</details>\n\n<video src="https://example.com/a.mp4"></video>\n\n';

describe('聊天流式原生调用方', () => {
  it('追加、修正和终态共用组件，保持展开与播放状态', async () => {
    const h = setup();
    h.app.write(prefix + '初稿'); await h.settle();
    const details = h.root.querySelector('details')!;
    const video = h.root.querySelector('video')!;
    expect(details).not.toBeNull(); expect(video).not.toBeNull();
    details.open = true; video.currentTime = 9;
    for (const text of [prefix + '初稿追加', prefix + '修订']) {
      h.app.write(text); await h.settle();
      expect(h.root.querySelector('details')).toBe(details);
      expect(details.open).toBe(true);
      expect(h.root.querySelector('video')).toBe(video);
      expect(video.currentTime).toBe(9);
    }
    h.app.finish(); await h.settle();
    expect(h.root.querySelector('details')).toBe(details);
    expect(h.mount.mock.calls.at(-1)![1].final).toBe(true);
    expect(h.root.textContent).toContain('修订');
    expect(h.root.querySelector('.stream-fade-word')).toBeNull();
  });
  it.each(['session', 'profile', 'detach'])('所有权失效 %s 后不刷新旧正文', async change => {
    const h = setup(); h.app.write('已有内容'); await h.settle();
    const count = h.mount.mock.calls.length;
    if (change === 'session') h.S.session.session_id = 'session-b';
    if (change === 'profile') h.S.activeProfile = 'profile-b';
    if (change === 'detach') h.root.remove();
    h.app.write('不应出现'); h.app.finish(); await h.settle();
    expect(h.mount).toHaveBeenCalledTimes(count);
    expect(h.root.textContent).toBe('已有内容');
  });
  it('同帧最后内容在终态完整显示，不等待淡入', async () => {
    const h = setup();
    h.app.write('第一块'); h.app.write('第一块第二块'); h.app.finish();
    await h.settle();
    expect(h.root.textContent).toBe('第一块第二块');
    expect(h.mount.mock.calls.at(-1)![1].final).toBe(true);
  });
  it('Anchor 行修正与完成不更换节点，清理不清空仍连接的正文', async () => {
    const h = setup();
    const node = h.app.anchor('live-prose:stream-a:1', prefix + '初稿');
    document.getElementById('msgInner')!.append(node); await h.settle();
    const details = node.querySelector('details'); details.open = true;
    expect(h.app.anchor('live-prose:stream-a:1', prefix + '修订', { finalize: true })).toBe(node);
    await h.settle();
    expect(node.querySelector('details')).toBe(details); expect(details.open).toBe(true);
    h.app.clear(); await h.settle();
    expect(node.textContent).toContain('修订');
    expect(HermesMarkdown.owns(node.querySelector('.msg-body'))).toBe(true);
  });
  it('Anchor 缓存清理仅撤销自己的全局入口', async () => {
    const h = setup();
    const next = vi.fn();
    Object.assign(window, { __anchorProseIncrementalNode: next });
    const detached = h.app.anchor('detached', '离开窗口');
    h.app.clear(); await h.settle();
    expect((window as unknown as { __anchorProseIncrementalNode: unknown }).__anchorProseIncrementalNode).toBe(next);
    expect(detached.textContent).toBe('');
  });
});

class Source {
  static latest: Source;
  listeners = new Map<string, (event: { data: string }) => void>();
  close = vi.fn();
  onerror = () => {};
  constructor() { Source.latest = this; }
  addEventListener(name: string, fn: (event: { data: string }) => void) { this.listeners.set(name, fn); }
  emit(name: string, data = {}) { this.listeners.get(name)?.({ data: JSON.stringify(data) }); }
}
function btw() {
  const h = setup();
  const attach = new Function(...Object.keys(h.globals), 'EventSource', h.helpers
    + between(messages, 'function attachBtwStream(', '// ── /background task tracking')
    + '\nreturn attachBtwStream;')(...Object.values(h.globals), Source);
  attach('session-a', 'btw-stream', '旁支问题');
  return { ...h, source: Source.latest };
}
describe('/btw 流式生命周期', () => {
  it('流式与完成复用交互节点，并通过现有跟随入口滚动', async () => {
    const h = btw(); h.source.emit('token', { text: prefix }); await h.settle();
    const details = document.querySelector('.msg-btw-answer details')! as HTMLDetailsElement;
    details.open = true;
    h.source.emit('token', { text: '最终答案' }); h.source.emit('done'); await h.settle();
    expect(document.querySelector('.msg-btw-answer details')).toBe(details);
    expect(details.open).toBe(true); expect(h.source.close).toHaveBeenCalled();
    expect(h.globals.scrollIfPinned).toHaveBeenCalled();
    h.source.emit('token', { text: '迟到' }); await h.settle();
    expect(document.body.textContent).not.toContain('迟到');
  });
  it.each(['session', 'profile'])('%s 切换后的 token 不创建其他会话的正文', async change => {
    const h = btw();
    if (change === 'session') h.S.session.session_id = 'session-b';
    else h.S.activeProfile = 'profile-b';
    h.source.emit('token', { text: '迟到内容' }); await h.settle();
    expect(document.querySelector('.msg-row-btw')).toBeNull();
    expect(h.source.close).toHaveBeenCalled();
  });
  it.each(['apperror', 'network'])('%s 错误销毁组件', async kind => {
    const h = btw(); h.source.emit('token', { text: prefix }); await h.settle();
    const host = document.querySelector('.msg-btw-answer')!;
    if (kind === 'network') h.source.onerror(); else h.source.emit(kind);
    expect(HermesMarkdown.owns(host)).toBe(false);
    expect(host.isConnected).toBe(false);
  });
});
