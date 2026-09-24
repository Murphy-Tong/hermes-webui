import { computed, createApp, defineComponent, h, nextTick, onErrorCaptured, provide, ref, shallowRef } from 'vue';
import MarkdownRender, { VueRendererMarkdown, disableD2, disableInfographic, enableKatex, enableMermaid } from 'markstream-vue';
import { contextKey, immediateProps, overrides } from './nodes';
import type { RenderContext } from './security';
import { mediaParseOptions } from './media';
import 'markstream-vue/index.css';
import 'katex/dist/katex.min.css';
import './renderer.css';

export type { RenderContext } from './security';
export interface MarkdownOptions {
  key: string;
  content: string;
  final?: boolean;
  context?: RenderContext;
}
export interface MarkdownView {
  update(options: Partial<Omit<MarkdownOptions, 'key'>>): void;
  destroy(): void;
  settled(): Promise<void>;
}

// 所有运行时依赖来自同源构建产物，不使用 CDN worker 或动态脚本。
disableD2();
disableInfographic();
enableKatex(() => import('katex'));
enableMermaid(async () => {
  const { default: mermaid } = await import('mermaid');
  return { ...mermaid, initialize: (config: Parameters<typeof mermaid.initialize>[0]) => mermaid.initialize({
    ...config, startOnLoad: false, securityLevel: 'strict', suppressErrorRendering: true,
    secure: ['secure', 'securityLevel', 'startOnLoad', 'maxTextSize', 'suppressErrorRendering'],
  }) };
});

const views = new WeakMap<HTMLElement, { identity: string; view: MarkdownView }>();
const identityOf = (key: string, ctx: RenderContext = {}) => JSON.stringify([key, ctx.surface || 'chat', ctx.profileId || '', ctx.sessionId || '']);
const snapshot = (ctx: RenderContext = {}): RenderContext => ({ ...ctx,
  snapshots: { ...ctx.snapshots }, iframeOrigins: [...(ctx.iframeOrigins || [])],
});

export function mount(element: HTMLElement, initial: MarkdownOptions): MarkdownView {
  const identity = identityOf(initial.key, initial.context);
  const existing = views.get(element);
  if (existing?.identity === identity) { existing.view.update(initial); return existing.view; }
  existing?.view.destroy();
  const state = shallowRef({ content: String(initial.content || ''), final: !!initial.final, context: snapshot(initial.context) });
  const parseOptions = mediaParseOptions(() => state.value.content, () => state.value.final);
  let pending = state.value;
  let frame = 0;
  let destroyed = false;
  const notify = () => {
    if (!destroyed && element.isConnected) element.dispatchEvent(new CustomEvent('hermes-markdown-layout', { bubbles: true }));
  };
  const App = defineComponent({
    setup() {
      const error = ref(false);
      provide(contextKey, computed(() => state.value.context));
      onErrorCaptured(() => { error.value = true; return false; });
      return () => error.value ? h('div', { class: 'hm-fallback' }, [
        h('small', { role: 'status' }, 'Markdown 渲染失败，已显示原文。'), h('pre', state.value.content),
      ]) : h(MarkdownRender, {
        ...immediateProps, content: state.value.content, final: state.value.final, parseOptions,
        indexKey: initial.key, mode: 'minimal',
        codeBlockProps: { isShowPreview: false, showPreviewButton: false, htmlPreviewAllowScripts: false },
        mermaidProps: { isStrict: true, enableMermaidInteractions: false, enableWheelZoom: false, showExportButton: false },
      });
    },
  });
  const app = createApp(App);
  app.use(VueRendererMarkdown, { components: overrides });
  element.classList.add('hermes-markdown');
  element.dataset.hermesMarkdown = initial.key;
  app.mount(element);
  const resize = typeof ResizeObserver === 'function' ? new ResizeObserver(notify) : null;
  resize?.observe(element);
  const flush = () => {
    frame = 0;
    if (destroyed) return;
    state.value = pending;
    void nextTick(notify);
  };
  const view: MarkdownView = {
    update(options) {
      if (destroyed) return;
      if (options.context && identityOf(initial.key, options.context) !== identity) {
        throw new Error('Markdown 实例不能跨 session/profile 复用；请重新 mount。');
      }
      const content = options.content === undefined ? pending.content : String(options.content);
      const final = options.final === undefined ? pending.final : !!options.final;
      if (content === pending.content && final === pending.final && !options.context) return;
      pending = { content, final, context: options.context ? snapshot(options.context) : pending.context };
      if (!frame) frame = requestAnimationFrame(flush);
    },
    async settled() {
      if (frame) { cancelAnimationFrame(frame); flush(); }
      await nextTick();
    },
    destroy() {
      if (destroyed) return;
      destroyed = true;
      if (frame) cancelAnimationFrame(frame);
      resize?.disconnect();
      app.unmount();
      element.classList.remove('hermes-markdown');
      delete element.dataset.hermesMarkdown;
      views.delete(element);
    },
  };
  views.set(element, { identity, view });
  void nextTick(notify);
  return view;
}

export function destroyWithin(root: Element): void {
  if (root instanceof HTMLElement) views.get(root)?.view.destroy();
  root.querySelectorAll<HTMLElement>('[data-hermes-markdown]').forEach(element => views.get(element)?.view.destroy());
}

export function owns(element: Element): boolean {
  return !!element.closest('[data-hermes-markdown]');
}

export const HermesMarkdown = { mount, destroyWithin, owns };
