import { afterEach, describe, expect, it, vi } from 'vitest';
import workspace from '../../static/workspace.js?raw';
import boot from '../../static/boot.js?raw';
import ui from '../../static/ui.js?raw';
import panels from '../../static/panels.js?raw';
import { HermesMarkdown, type MarkdownView } from 'hermes-renderer-under-test';

// 执行原生调用方，只有网络和无关外壳服务替身；渲染组件使用真实构建产物。
const between = (source: string, start: string, end: string) => {
  const from = source.indexOf(start), to = source.indexOf(end, from + start.length);
  if (from < 0 || to < 0) throw new Error(`测试 seam 不存在：${start}`);
  return source.slice(from, to);
};
function setup() {
  const ids = ['previewMd','previewCode','previewImgWrap','previewHtmlWrap','previewEditArea',
    'previewBadge','previewPathText','previewArea','fileTree','btnRenderMarkdownAnyway',
    'skillDetailTitle','skillDetailBody','skillDetailEmpty',
    'memoryDetailTitle','memoryDetailBody','memoryDetailEmpty'];
  document.body.innerHTML = ids.map(id => `<div id="${id}"></div>`).join('');
  const S = { session: { session_id: 'a' }, activeProfile: 'default' };
  const views: MarkdownView[] = [];
  const mount = vi.fn((...args: Parameters<typeof HermesMarkdown.mount>) => {
    const view = HermesMarkdown.mount(...args); views.push(view); return view;
  });
  const destroyWithin = vi.fn(HermesMarkdown.destroyWithin);
  Object.assign(window, { HermesMarkdown: { ...HermesMarkdown, mount, destroyWithin } });
  const api = vi.fn<(route: string) => Promise<{ content?: string; pages?: object[]; linked_files?: object }>>();
  const setStatus = vi.fn();
  const globals = { S, $: (id: string) => document.getElementById(id), api, setStatus,
    renderMd: () => '旧渲染器不应被调用', renderFileBreadcrumb: vi.fn(),
    _workspaceRouteForPath: (path: string) => path, _workspacePathIsReadOnly: () => false,
    downloadFile: vi.fn(), t: (key: string) => key, renderBreadcrumb: vi.fn(),
    closeWorkspacePanel: vi.fn(), syncWorkspacePanelUI: vi.fn(), openWorkspacePanel: vi.fn(),
    esc: (text: unknown) => { const el = document.createElement('div'); el.textContent = String(text ?? ''); return el.innerHTML.replace(/"/g, '&quot;'); },
    jsArg: (value: unknown) => JSON.stringify(value), li: () => '',
    _closeMobileSidebarAfterPanelSelection: vi.fn() };
  const code = between(ui, 'function hermesMarkdownContext(', 'function assistantDisplayName(')
    + between(workspace, 'const IMAGE_EXTS', 'function downloadFile(')
    + "\nlet _workspacePanelMode='browse';\n"
    + between(boot, 'function clearPreview(', "$('btnClearPreview')")
    + between(boot, 'window.renderTranscript=', '// ── Turn-based voice mode')
    + between(panels, 'async function _openWikiBrowser()', '/**\n * Bucket daily token rows')
    + between(panels, 'let _currentSkillDetail =', '// ── Memory (main view) ──')
    + between(panels, 'let _memoryData =', 'async function loadMemory(')
    + '\nreturn {openFile,renderMarkdownPreviewContent,showPreview,clearPreview,forceRenderMarkdownPreview,'
    + '_openWikiBrowser,openSkill,openSkillFile,_renderSkillForm,cancelSkillForm,'
    + '_renderMemoryDetail,_renderMemoryEdit,_renderExternalNotesSources,'
    + 'memory(data){_memoryData=data;},notes(data,note){_notesSourcesData=data;_notesPreviewNote=note;}};';
  const app = new Function(...Object.keys(globals), code)(...Object.values(globals));
  return { app, S, api, mount, destroyWithin, setStatus, views, globals,
    root: document.getElementById('previewMd')!,
    settle: async () => { for (const view of views) await view.settled(); } };
}
type WikiWindow = Window & { _wikiBrowserOpenPage: (path: string) => Promise<void>; _wikiBrowserBack: () => void };
const wiki = window as unknown as WikiWindow;
afterEach(() => {
  document.querySelector<HTMLButtonElement>('[data-wiki-close]')?.click();
  HermesMarkdown.destroyWithin(document.body); document.body.replaceChildren(); vi.restoreAllMocks();
});

function setupKanban() {
  const h = setup();
  document.body.insertAdjacentHTML('beforeend', '<div id="kanbanBoard"></div><div id="kanbanTaskPreview"></div>');
  const api = vi.fn<(route: string) => Promise<Record<string, unknown>>>();
  const globals = { ...h.globals, api, showToast: vi.fn(), _kanbanColumnLabel: (s: string) => s,
    _kanbanCurrentFilters: () => ({ q: '' }), _kanbanLinksHtml: () => '' };
  const code = between(ui, 'function hermesMarkdownContext(', 'function assistantDisplayName(')
    + between(panels, "let _currentPanel =", '// Map of panel names')
    + between(panels, 'function _kanbanTaskTitle(', 'function _kanbanApplyConfigDefaults(')
    + between(panels, 'function _kanbanVisibleTasks(', 'async function hardRefreshWebUIClient(')
    + between(panels, 'function _kanbanBoardQuery(', 'async function nudgeKanbanDispatcher(')
    + between(panels, 'function closeKanbanTaskDetail(', 'function _kanbanLinkableTaskOptions(')
    + between(panels, 'function _kanbanRenderTaskDetail(', '// Phase 2: Single-source-of-truth render.')
    + '\nreturn {_kanbanRenderBoard,loadKanbanTask,closeKanbanTaskDetail,openKanbanCard,'
    + 'board(data,slug){_kanbanBoard=data;_kanbanCurrentBoard=slug;},lanes(value){_kanbanLanesByProfile=value;}};';
  const app = new Function(...Object.keys(globals), code)(...Object.values(globals));
  return { ...h, app, api, showToast: globals.showToast };
}

describe('Kanban Markdown 调用方', () => {
  it.each([true, false])('泳道布局 %s 使用统一组件并在重绘/清空时销毁', async lanes => {
    const h = setupKanban(); h.app.lanes(lanes);
    h.app.board({ columns: [{ name: 'todo', tasks: [{ id: '1', body: '**任务正文**', assignee: 'alice' }] }] }, 'work');
    h.app._kanbanRenderBoard(); await h.settle();
    const host = document.querySelector('.kanban-card-body')!;
    expect(HermesMarkdown.owns(host)).toBe(true);
    expect(host.querySelector('strong')?.textContent).toBe('任务正文');
    h.app.board({ columns: [] }, 'work'); h.app._kanbanRenderBoard();
    expect(HermesMarkdown.owns(host)).toBe(false);
  });
  it('正文交互控件的点击不被卡片导航接管', async () => {
    const h = setupKanban();
    h.app.board({ columns: [{ name: 'todo', tasks: [{ id: '1', body: '<details><summary>展开</summary>正文</details>' }] }] }, null);
    h.app._kanbanRenderBoard(); await h.settle();
    const card = document.querySelector('.kanban-card')!;
    const summary = card.querySelector('summary')!;
    expect(h.app.openKanbanCard({ target: summary, currentTarget: card }, '1')).toBe(true);
    expect(h.api).not.toHaveBeenCalled();
  });
  it('详情和评论共用安全渲染，关闭时销毁且不改原文', async () => {
    const h = setupKanban();
    h.api.mockResolvedValueOnce({ task: { id: '1', body: '<details><summary>任务</summary>正文</details>' },
      comments: [{ id: 'c1', body: '**评论** <img src="javascript:evil()" onerror="evil()">' }] });
    h.api.mockResolvedValueOnce({ content: 'log' });
    await h.app.loadKanbanTask('1'); await h.settle();
    const root = document.getElementById('kanbanTaskPreview')!;
    expect(root.querySelector('.kanban-task-preview-body details')).not.toBeNull();
    expect(root.querySelector('.kanban-detail-comments strong')?.textContent).toBe('评论');
    expect(root.querySelector('[onerror]')).toBeNull();
    const hosts = [...root.querySelectorAll('[data-hermes-markdown]')];
    expect(hosts).toHaveLength(2);
    h.app.closeKanbanTaskDetail();
    expect(hosts.every(host => !HermesMarkdown.owns(host))).toBe(true);
    expect(root.childNodes).toHaveLength(0);
  });
  it.each(['close', 'board', 'profile', 'session', 'newer'])('任务待加载时 %s 阻止迟到详情重新挂载', async action => {
    const h = setupKanban(); let resolve!: (data: Record<string, unknown>) => void;
    h.api.mockImplementationOnce(() => new Promise(done => { resolve = done; }));
    const pending = h.app.loadKanbanTask('old');
    if (action === 'close') h.app.closeKanbanTaskDetail();
    if (action === 'board') h.app.board({ columns: [] }, 'other');
    if (action === 'profile') h.S.activeProfile = 'other';
    if (action === 'session') h.S.session.session_id = 'other';
    if (action === 'newer') {
      h.api.mockResolvedValueOnce({ task: { id: 'new', body: '**当前任务**' } }); h.api.mockResolvedValueOnce({});
      await h.app.loadKanbanTask('new');
    }
    h.api.mockResolvedValue({}); resolve({ task: { id: 'old', body: '**过期任务**' } });
    await pending; await h.settle();
    expect(document.getElementById('kanbanTaskPreview')!.textContent).not.toContain('过期任务');
    expect(h.showToast.mock.calls.some(call => String(call[0]).includes('old'))).toBe(false);
  });
});

describe('面板 Markdown 实例生命周期', () => {
  it.each(['button', 'escape', 'backdrop'])('Wiki 打开并由 %s 关闭时同步销毁', async action => {
    const h = setup(); h.api.mockResolvedValueOnce({ pages: [{ name: '页面', path: 'a.md' }] });
    await expect(h.app._openWikiBrowser()).resolves.toBeUndefined();
    const overlay = document.getElementById('wikiBrowserOverlay')!;
    expect(overlay.querySelector('.wiki-browser-item')?.textContent).toBe('页面');
    h.api.mockResolvedValueOnce({ content: '**Wiki 正文**' });
    await wiki._wikiBrowserOpenPage('a.md'); await h.settle();
    expect(overlay.querySelector('strong')?.textContent).toBe('wiki_browse');
    const host = overlay.querySelector('#wikiBrowserMd')!;
    expect(host.querySelector('strong')?.textContent).toBe('Wiki 正文');
    if (action === 'button') overlay.querySelector<HTMLButtonElement>('[data-wiki-close]')!.click();
    if (action === 'escape') document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    if (action === 'backdrop') overlay.click();
    expect(overlay.isConnected).toBe(false);
    expect(h.destroyWithin).toHaveBeenCalledWith(overlay);
    expect(HermesMarkdown.owns(host)).toBe(false);
  });
  it.each(['back', 'close', 'profile', 'replace'])('Wiki 待加载时 %s 不复活旧组件', async action => {
    const h = setup(); h.api.mockResolvedValueOnce({ pages: [] }); await h.app._openWikiBrowser();
    let resolve!: (data: { content: string }) => void;
    h.api.mockImplementationOnce(() => new Promise(done => { resolve = done; }));
    const pending = wiki._wikiBrowserOpenPage('old.md');
    if (action === 'back') wiki._wikiBrowserBack();
    if (action === 'close') document.querySelector<HTMLButtonElement>('[data-wiki-close]')!.click();
    if (action === 'profile') h.S.activeProfile = 'other';
    if (action === 'replace') { h.api.mockResolvedValueOnce({ pages: [] }); await h.app._openWikiBrowser(); }
    resolve({ content: '**过期页面**' }); await pending; await h.settle();
    expect(h.mount).not.toHaveBeenCalled();
    expect(document.body.textContent).not.toContain('过期页面');
  });
  it('技能 frontmatter 保持字面，正文与关联文件用组件，切表单销毁', async () => {
    const h = setup();
    h.api.mockResolvedValueOnce({ content: '---\nname: <script>x</script>\n---\n**正文**' });
    await h.app.openSkill('sample'); await h.settle();
    const root = document.getElementById('skillDetailBody')!;
    expect(root.querySelector('.skill-frontmatter code')?.textContent).toContain('<script>');
    expect(root.querySelector('.preview-md strong')?.textContent).toBe('正文');
    const oldHost = root.querySelector('.preview-md')!;
    h.api.mockResolvedValueOnce({ content: '<details><summary>关联文档</summary>内容</details>' });
    await h.app.openSkillFile('sample', 'refs/a.md'); await h.settle();
    expect(HermesMarkdown.owns(oldHost)).toBe(false);
    expect(root.querySelector('.preview-md details')).not.toBeNull();
    h.app._renderSkillForm({ name: 'sample', content: '**原文**', isEdit: true });
    expect(root.querySelector('textarea')?.value).toBe('**原文**');
    expect(root.querySelector('[data-hermes-markdown]')).toBeNull();
    expect(h.setStatus).not.toHaveBeenCalled();
  });
  it.each(['form', 'profile', 'newer'])('技能请求被 %s 取代后不覆盖当前内容', async action => {
    const h = setup(); let resolve!: (data: { content: string }) => void;
    h.api.mockImplementationOnce(() => new Promise(done => { resolve = done; }));
    const pending = h.app.openSkill('old');
    if (action === 'form') h.app._renderSkillForm({ name: '', content: '', isEdit: false });
    if (action === 'profile') h.S.activeProfile = 'other';
    if (action === 'newer') { h.api.mockResolvedValueOnce({ content: '**新正文**' }); await h.app.openSkill('new'); }
    resolve({ content: '**过期正文**' }); await pending; await h.settle();
    expect(document.getElementById('skillDetailBody')!.textContent).not.toContain('过期正文');
  });
  it('memory 与笔记使用相同安全渲染，编辑及切空清理实例', async () => {
    const h = setup(); h.app.memory({ memory: '**记忆** <script>evil()</script>' });
    h.app._renderMemoryDetail('memory'); await h.settle();
    const root = document.getElementById('memoryDetailBody')!;
    const host = root.querySelector('.preview-md')!;
    expect(host.querySelector('strong')?.textContent).toBe('记忆');
    expect(host.querySelector('script')).toBeNull();
    h.app._renderMemoryEdit('memory');
    expect(HermesMarkdown.owns(host)).toBe(false);
    expect(root.querySelector('textarea')?.value).toContain('<script>evil()</script>');
    h.app.notes({ sources: [{ name: 'joplin' }] }, { id: 'n1', source: 'joplin', body: '**笔记**' });
    h.app._renderExternalNotesSources(); await h.settle();
    expect(root.querySelector('.notes-preview-card strong + span')?.textContent).toBe('joplin');
    expect(root.querySelector('.preview-md strong')?.textContent).toBe('笔记');
    const noteHost = root.querySelector('.preview-md')!;
    h.app.notes({ sources: [] }, null); h.app._renderExternalNotesSources();
    expect(HermesMarkdown.owns(noteHost)).toBe(false);
  });
});

describe('原生 Markdown 表面接入', () => {
  it('预览使用统一组件，同一文件更新保持 details 节点及用户展开状态', async () => {
    const h = setup();
    const content = '<details><summary>更多</summary>正文</details>';
    h.api.mockResolvedValue({ content });
    await h.app.openFile('readme.md'); await h.settle();
    const details = h.root.querySelector('details');
    expect(details).not.toBeNull(); details!.open = true;
    h.app.renderMarkdownPreviewContent({ content: content + '\n\n追加' }); await h.settle();
    expect(h.root.querySelector('details')).toBe(details);
    expect(details!.open).toBe(true);
    expect(h.mount.mock.calls[0][1].context).toMatchObject({ surface: 'preview', sessionId: 'a', profileId: 'default' });
  });
  it('切换预览模式或关闭时同步卸载，旧 view 不能写回复用容器', async () => {
    const h = setup(); h.api.mockResolvedValue({ content: '**正文**' });
    await h.app.openFile('readme.md'); await h.settle();
    const old = h.views[0]; expect(old).toBeDefined();
    h.app.showPreview('csv');
    expect(h.destroyWithin).toHaveBeenCalledWith(h.root);
    h.root.textContent = 'CSV'; old.update({ content: '迟到' }); await old.settled();
    expect(h.root.textContent).toBe('CSV');
    await h.app.openFile('readme.md'); await h.settle();
    h.app.clearPreview();
    expect(h.root.childNodes).toHaveLength(0);
    expect(h.root.hasAttribute('data-hermes-markdown')).toBe(false);
  });
  it('A→B→A 后最早 A 的迟到响应不能覆盖新 A', async () => {
    const h = setup(); let resolve!: (value: { content: string }) => void;
    h.api.mockImplementationOnce(() => new Promise(done => { resolve = done; }));
    const pending = h.app.openFile('a.md');
    h.api.mockResolvedValueOnce({ content: 'B' }); await h.app.openFile('b.md');
    h.api.mockResolvedValueOnce({ content: '**新 A**' }); await h.app.openFile('a.md');
    resolve({ content: '过期 A' }); await pending; await h.settle();
    expect(h.root.textContent).toBe('新 A');
  });
  it.each(['close', 'profile', 'session'])('待加载时 %s 不得挂载旧内容', async action => {
    const h = setup(); let resolve!: (value: { content: string }) => void;
    h.api.mockImplementationOnce(() => new Promise(done => { resolve = done; }));
    const pending = h.app.openFile('readme.md');
    if (action === 'close') h.app.clearPreview();
    if (action === 'profile') h.S.activeProfile = 'other';
    if (action === 'session') h.S.session.session_id = 'other';
    resolve({ content: '**过期**' }); await pending; await h.settle();
    expect(h.root.textContent).not.toContain('过期');
    expect(h.mount).not.toHaveBeenCalled();
  });
  it('大文件降级保持，手动强制渲染不能读取其他 profile 的原文缓存', async () => {
    const h = setup(); const large = 'x'.repeat(256 * 1024 + 1);
    h.api.mockResolvedValueOnce({ content: large }); await h.app.openFile('readme.md');
    expect(document.getElementById('previewCode')!.textContent).toBe(large);
    expect(h.mount).not.toHaveBeenCalled();
    h.S.activeProfile = 'other'; h.api.mockResolvedValueOnce({ content: '**新 profile**' });
    await h.app.openFile('readme.md', { forceRichMarkdown: true }); await h.settle();
    expect(h.api).toHaveBeenCalledTimes(2);
    expect(h.root.textContent).toBe('新 profile');
  });
  it('扩展 transcript 保留公开签名、文本块和 skipEmpty，重绘前销毁组件', async () => {
    const h = setup();
    const render = (window as unknown as { renderTranscript: (root: HTMLElement, messages: unknown[], opts?: object) => HTMLElement }).renderTranscript;
    const messages = [{ role: 'assistant', message_id: '1', content: [{ text: '**正文**' }],
      _media_snapshots: { '/tmp/image.png': '/api/media?path=snapshot' } },
      { role: 'tool', content: '不可见' }, { role: 'user', content: '', media_snapshots: {} }];
    expect(render(h.root, messages, { skipEmpty: true })).toBe(h.root); await h.settle();
    expect(h.root.querySelectorAll('.msg-row')).toHaveLength(1);
    expect(h.root.querySelector('strong')?.textContent).toBe('正文');
    expect(h.mount.mock.calls[0][1].context?.surface).toBe('transcript');
    expect(h.mount.mock.calls[0][1].context?.snapshots).toEqual(messages[0]._media_snapshots);
    render(h.root, [], {}); expect(h.destroyWithin).toHaveBeenCalledWith(h.root);
    expect(h.root.childNodes).toHaveLength(0);
  });
});
