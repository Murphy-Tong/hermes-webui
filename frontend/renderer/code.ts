import { computed, defineComponent, h, ref, type PropType, type VNodeChild } from 'vue';
import type { CodeBlockNode } from 'stream-markdown-parser';
import Prism from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-diff';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-sql';
import { parse as parseYaml } from 'yaml';

function tokenNode(token: string | Prism.Token): VNodeChild {
  if (typeof token === 'string') return token;
  const children = Array.isArray(token.content) ? token.content.map(tokenNode) : tokenNode(token.content);
  return h('span', { class: ['token', token.type, ...(Array.isArray(token.alias) ? token.alias : [token.alias || ''])] }, [children]);
}

function objectTree(value: unknown, key = 'root', depth = 0): VNodeChild {
  if (depth > 16) return h('span', '…');
  if (value === null || typeof value !== 'object') return h('span', { class: `hm-json-${typeof value}` }, JSON.stringify(value));
  const items = Object.entries(value);
  return h('details', { key, open: depth < 1 }, [
    h('summary', `${Array.isArray(value) ? 'Array' : 'Object'} (${items.length})`),
    h('ul', items.slice(0, 300).map(([name, child]) => h('li', { key: name }, [h('strong', `${name}: `), objectTree(child, name, depth + 1)]))),
    items.length > 300 ? h('small', '仅展开前 300 项；完整内容可在源码中查看。') : null,
  ]);
}

export function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [], cell = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === '"') {
      if (quoted && text[i + 1] === '"') { cell += '"'; i++; }
      else quoted = !quoted;
    } else if (!quoted && (c === ',' || c === '\n')) {
      row.push(cell); cell = '';
      if (c === '\n') { rows.push(row); row = []; }
    } else if (c !== '\r' || quoted) cell += c;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  return rows;
}

export const Code = defineComponent({
  name: 'HermesCode',
  props: { node: { type: Object as PropType<CodeBlockNode>, required: true } },
  setup(props) {
    const copied = ref('');
    const mode = ref('source');
    const language = computed(() => ({ js: 'javascript', ts: 'typescript', sh: 'bash', py: 'python', yml: 'yaml' }[props.node.language] || props.node.language || 'text'));
    const structured = computed(() => {
      if (props.node.loading || props.node.code.length > 256 * 1024) return null;
      try {
        if (language.value === 'json') return { tree: JSON.parse(props.node.code) };
        if (language.value === 'yaml') return { tree: parseYaml(props.node.code, { maxAliasCount: 50 }) };
        if (language.value === 'csv') return { rows: parseCsv(props.node.code) };
      } catch { /* 无效内容保留源码，不影响相邻节点。 */ }
      return null;
    });
    const tokens = computed(() => {
      const grammar = Prism.languages[language.value];
      if (!grammar || props.node.code.length > 256 * 1024) return [props.node.code];
      try { return Prism.tokenize(props.node.code, grammar).map(tokenNode); } catch { return [props.node.code]; }
    });
    return () => h('div', { class: 'hm-code' }, [
      h('div', { class: 'hm-code-header' }, [
        h('span', language.value),
        structured.value ? h('button', { type: 'button', onClick: () => { mode.value = mode.value === 'source' ? 'tree' : 'source'; } }, mode.value === 'source' ? '结构视图' : '源码') : null,
        h('button', { type: 'button', onClick: async () => {
          const code = props.node.code;
          try { await navigator.clipboard.writeText(code); copied.value = code; } catch { copied.value = ''; }
        } }, copied.value && copied.value === props.node.code ? '已复制' : '复制'),
      ]),
      mode.value !== 'source' && structured.value
        ? structured.value.rows ? h('div', { class: 'hm-table-scroll' }, h('table', structured.value.rows.map((row, index) =>
          h('tr', { key: index }, row.map((cell, col) => h(index ? 'td' : 'th', { key: col }, cell))))))
          : h('div', { class: 'hm-object-tree' }, [objectTree(structured.value.tree)])
        : h('pre', [h('code', { class: `language-${language.value}` }, tokens.value)]),
    ]);
  },
});
