import { computed, defineComponent, h, inject, ref, type InjectionKey, type PropType, type Ref, type VNodeChild } from 'vue';
import MarkdownRender from 'markstream-vue';
import type { BaseNode, TableNode, LinkNode as LinkData } from 'stream-markdown-parser';
import { Code } from './code';
import { iframeUrl, linkUrl, resourceUrl, safeStyle, sanitizeHtml, type RenderContext } from './security';

export const contextKey: InjectionKey<Ref<RenderContext>> = Symbol('HermesMarkdownContext');
const useContext = () => inject(contextKey, ref<RenderContext>({}));
export const immediateProps = {
  htmlPolicy: 'safe' as const, smoothStreaming: false, typewriter: false, fade: false,
  nodeVirtual: false, maxLiveNodes: 0, viewportPriority: false,
  batchRendering: false, deferNodesUntilVisible: false, parseCoalesceMs: 0,
};

function dimension(value: string | undefined, fallback: number): number {
  return value && /^\d{1,4}$/.test(value) ? Math.max(1, Math.min(1920, Number(value))) : fallback;
}

export const Media = defineComponent({
  name: 'HermesMedia',
  props: {
    tag: { type: String, required: true },
    attrs: { type: Object as PropType<Record<string, string>>, required: true },
    sources: { type: Array as PropType<Record<string, string>[]>, default: () => [] },
    pending: Boolean,
  },
  setup(props) {
    const context = useContext();
    const consent = ref('');
    const failed = ref('');
    const source = computed(() => props.pending ? null : props.tag === 'iframe'
      ? iframeUrl(props.attrs.src, context.value)
      : resourceUrl(props.attrs.src, context.value, props.tag));
    const children = computed<Record<string, string>[]>(() => props.pending ? [] : props.sources.flatMap(attrs => {
      const src = resourceUrl(attrs.src, context.value, props.tag);
      return src ? [{ ...attrs, src }] : [];
    }));
    const identity = computed(() => JSON.stringify([source.value, children.value]));
    return () => {
      const ctx = context.value;
      const attrs = props.attrs;
      const src = source.value;
      const tag = props.tag;
      const requiresConsent = tag === 'iframe' || ctx.surface === 'share';
      const available = !!src || ((tag === 'video' || tag === 'audio') && children.value.length > 0);
      const width = dimension(attrs.width, tag === 'img' ? 480 : 640);
      const height = dimension(attrs.height, tag === 'audio' ? 54 : tag === 'img' ? 270 : 360);
      const label = attrs.alt || attrs.title || (tag === 'iframe' ? '嵌入页面' : '媒体');
      const href = linkUrl(attrs.src, ctx);
      const placeholder = () => h('span', { class: 'hm-media-placeholder', style: { aspectRatio: `${width}/${height}` } }, [
        h('span', label),
        available && requiresConsent ? h('button', {
          type: 'button', onClick: () => { consent.value = identity.value; },
        }, `点击加载${src?.startsWith('https:') ? ` · ${new URL(src).hostname}` : ''}`) : null,
        !available && href ? h('a', { href, target: '_blank', rel: 'noopener noreferrer' }, '打开安全链接') : null,
        !available ? h('small', props.pending ? '等待完整地址…' : '此资源未获准加载') : null,
      ]);
      if (!available || (requiresConsent && consent.value !== identity.value)) return placeholder();
      if (failed.value === identity.value) return h('span', { class: 'hm-media-placeholder' }, [
        '资源无法显示；目标站点可能禁止嵌入。', href ? h('a', { href, target: '_blank', rel: 'noopener noreferrer' }, '打开链接') : null,
      ]);
      const common = { width, height, title: attrs.title, referrerpolicy: 'no-referrer',
        onError: () => { failed.value = identity.value; } };
      if (tag === 'iframe') return h('iframe', { ...common, src, sandbox: 'allow-scripts', loading: 'lazy', title: label });
      if (tag === 'img') return h('img', { ...common, src, alt: attrs.alt || '', loading: 'lazy', decoding: 'async',
        class: 'msg-media-img', onClick: () => { if (src) ctx.openImage?.(src, attrs.alt || ''); } });
      return h(tag, { ...common, src: src || undefined, controls: true, preload: 'none',
        poster: tag === 'video' ? resourceUrl(attrs.poster, ctx) || undefined : undefined,
      }, children.value.map((child, index) => h(child.tag === 'track' ? 'track' : 'source', {
        key: `${index}:${child.src}`, src: child.src, type: child.type, kind: child.kind,
        srclang: child.srclang, label: child.label,
      })));
    };
  },
});

export const MediaToken = defineComponent({
  props: { node: { type: Object as PropType<BaseNode & { src: string; alt: string; tag: string }>, required: true } },
  setup(props) {
    const context = useContext();
    return () => {
      if (props.node.tag !== 'file') return h(Media, { tag: props.node.tag, attrs: { src: props.node.src, alt: props.node.alt }, pending: props.node.loading });
      const href = props.node.loading ? null : resourceUrl(props.node.src, context.value, 'file');
      return href ? h('a', { href, target: '_blank', rel: 'noopener noreferrer', class: 'msg-file-badge' }, props.node.alt)
        : h('span', props.node.loading ? '等待完整媒体地址…' : props.node.alt);
    };
  },
});

export const Image = defineComponent({
  props: { node: { type: Object as PropType<BaseNode & { src: string; alt?: string; title?: string }>, required: true } },
  setup: props => () => h(Media, { tag: 'img', attrs: { src: props.node.src, alt: props.node.alt || '', title: props.node.title || '' }, pending: props.node.loading }),
});

export const Link = defineComponent({
  props: { node: { type: Object as PropType<LinkData>, required: true } },
  setup(props) {
    const context = useContext();
    return () => {
      const href = props.node.loading ? null : linkUrl(props.node.href, context.value);
      const children = () => h(MarkdownRender, { ...immediateProps, nodes: props.node.children, renderAsFragment: true });
      if (!href) return h('span', {}, children());
      const internal = /^(?:workspace|file|session):\/\//i.test(href);
      return h('a', { href, title: props.node.title, rel: 'noopener noreferrer',
        target: internal || href.startsWith('#') ? undefined : '_blank',
        onClick: internal ? (event: MouseEvent) => { event.preventDefault(); context.value.openLink?.(href); } : undefined,
      }, children());
    };
  },
});

// 不接受解析器合成的半截属性。只保留已收到完整结束尖括号的标签。
function completeHtml(source: string): string {
  let start = -1;
  let quote = '';
  for (let i = 0; i < source.length; i++) {
    const c = source[i];
    if (start < 0) { if (c === '<') start = i; continue; }
    if (quote) { if (c === quote) quote = ''; }
    else if (c === '"' || c === "'") quote = c;
    else if (c === '>') start = -1;
  }
  return start < 0 ? source : source.slice(0, start);
}

export const Html = defineComponent({
  props: { node: { type: Object as PropType<BaseNode & { content?: string }>, required: true } },
  setup(props) {
    const context = useContext();
    const tree = computed(() => sanitizeHtml(completeHtml(props.node.raw || props.node.content || '')));
    function renderNode(node: Node, key: string): VNodeChild {
      if (node.nodeType === Node.TEXT_NODE) return node.textContent || '';
      if (!(node instanceof Element)) return null;
      const tag = node.tagName.toLowerCase();
      const attrs = Object.fromEntries([...node.attributes].map(a => [a.name, a.value]));
      if (['img', 'video', 'audio', 'iframe'].includes(tag)) {
        const sources = [...node.children].filter(el => ['SOURCE', 'TRACK'].includes(el.tagName))
          .map(el => ({ ...Object.fromEntries([...el.attributes].map(a => [a.name, a.value])), tag: el.tagName.toLowerCase() }));
        return h(Media, { key, tag, attrs, sources });
      }
      if (tag === 'source' || tag === 'track') return null;
      const children = [...node.childNodes].map((child, index) => renderNode(child, `${key}.${index}`));
      const safe: Record<string, unknown> = { key };
      for (const attr of ['title', 'colspan', 'rowspan', 'scope', 'start', 'reversed', 'value', 'open']) {
        if (attr in attrs) safe[attr] = ['open', 'reversed'].includes(attr) ? true : attrs[attr];
      }
      if (attrs.style) safe.style = safeStyle(attrs.style);
      if (tag === 'a') {
        const href = linkUrl(attrs.href, context.value);
        if (!href) return h('span', { key }, children);
        const internal = /^(?:workspace|file|session):\/\//i.test(href);
        safe.href = href;
        safe.rel = 'noopener noreferrer';
        if (!internal && !href.startsWith('#')) safe.target = '_blank';
        if (internal) safe.onClick = (event: MouseEvent) => { event.preventDefault(); context.value.openLink?.(href); };
      }
      return h(tag, safe, children);
    }
    return () => [...tree.value.childNodes].map((node, index) => renderNode(node, String(index)));
  },
});

const plainText = (node: unknown): string => {
  if (!node || typeof node !== 'object') return '';
  const n = node as { content?: string; code?: string; text?: string; children?: unknown[] };
  return n.children ? n.children.map(plainText).join('') : n.content || n.code || n.text || '';
};

export const Table = defineComponent({
  props: { node: { type: Object as PropType<TableNode>, required: true } },
  setup(props) {
    const filter = ref('');
    const sort = ref(-1);
    const direction = ref(1);
    const copied = ref(false);
    const rows = computed(() => {
      const query = filter.value.toLocaleLowerCase();
      const rows = props.node.rows.map((row, key) => ({ row, key }))
        .filter(({ row }) => !query || row.cells.some(cell => plainText(cell).toLocaleLowerCase().includes(query)));
      if (sort.value >= 0) rows.sort((a, b) => direction.value *
        plainText(a.row.cells[sort.value]).localeCompare(plainText(b.row.cells[sort.value]), undefined, { numeric: true }));
      return rows;
    });
    const cell = (children: BaseNode[]) => h(MarkdownRender, { ...immediateProps, nodes: children, renderAsFragment: true });
    return () => h('div', { class: 'hm-table' }, [
      h('div', { class: 'hm-table-tools' }, [
        h('input', { type: 'search', value: filter.value, placeholder: '筛选表格', 'aria-label': '筛选表格',
          onInput: (event: Event) => { filter.value = (event.target as HTMLInputElement).value; } }),
        h('button', { type: 'button', onClick: async () => {
          const text = [props.node.header, ...rows.value.map(item => item.row)]
            .map(row => row.cells.map(plainText).join('\t')).join('\n');
          try { await navigator.clipboard.writeText(text); copied.value = true; } catch { copied.value = false; }
        } }, copied.value ? '已复制' : '复制表格'),
      ]),
      h('div', { class: 'hm-table-scroll' }, [h('table', [
        h('thead', [h('tr', props.node.header.cells.map((column, index) => h('th', {
          key: index, style: { textAlign: column.align },
          'aria-sort': sort.value === index ? direction.value > 0 ? 'ascending' : 'descending' : 'none',
        }, [h('button', { type: 'button', onClick: () => {
          direction.value = sort.value === index ? -direction.value : 1; sort.value = index;
        } }, [cell(column.children)])])))]),
        h('tbody', rows.value.map(({ row, key }) => h('tr', { key }, row.cells.map((column, index) =>
          h('td', { key: index, style: { textAlign: column.align } }, [cell(column.children)]))))),
      ])]),
    ]);
  },
});

export const overrides = { image: Image, link: Link, html_block: Html, html_inline: Html, code_block: Code, table: Table, hermes_media: MediaToken };
