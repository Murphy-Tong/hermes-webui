import type { ParsedNode, ParseOptions } from 'stream-markdown-parser';

// 仅处理解析后的普通文本，不在代码块、行内代码或 HTML 属性里解释 MEDIA 协议。
export function mediaParseOptions(source: () => string, final: () => boolean): ParseOptions {
  function transform(node: ParsedNode): ParsedNode[] {
    const record = node as ParsedNode & Record<string, unknown>;
    if (node.type === 'text' && typeof record.content === 'string' && record.content.includes('MEDIA:')) {
      const text = record.content;
      const result: ParsedNode[] = [];
      let offset = 0;
      for (const match of text.matchAll(/MEDIA:([^\s<>\)\]]+)/g)) {
        const start = match.index!;
        if (start > offset) result.push({ type: 'text', raw: text.slice(offset, start), content: text.slice(offset, start) });
        const raw = match[0];
        const value = match[1];
        const pending = !final() && source().endsWith(raw);
        const src = /^(?:https?:|file:|workspace:)/i.test(value) ? value : value.startsWith('/') ? `file://${value}` : `workspace://${value}`;
        const path = value.split(/[?#]/)[0].toLowerCase();
        const tag = /\.(png|jpe?g|gif|webp|avif|bmp)$/.test(path) ? 'img'
          : /\.(mp4|webm|mov|m4v|ogv)$/.test(path) ? 'video'
          : /\.(mp3|wav|ogg|m4a|flac|aac|opus)$/.test(path) ? 'audio' : 'file';
        result.push({ type: 'hermes_media', raw, src, tag, loading: pending, alt: value.split('/').pop() || value });
        offset = start + raw.length;
      }
      if (offset < text.length) result.push({ type: 'text', raw: text.slice(offset), content: text.slice(offset) });
      return result;
    }
    // HTML 由安全节点独立处理；代码和链接保持字面内容。
    if (['html_block', 'html_inline', 'code_block', 'inline_code', 'link', 'image'].includes(node.type)) return [node];
    let next = record;
    for (const key of ['children', 'items', 'rows', 'cells', 'term', 'definition']) {
      const values = record[key];
      if (!Array.isArray(values)) continue;
      const transformed = values.flatMap(child => child && typeof child.type === 'string' ? transform(child) : [child]);
      if (transformed.length !== values.length || transformed.some((child, index) => child !== values[index])) next = { ...next, [key]: transformed };
    }
    return [next];
  }
  return { postTransformNodes: nodes => nodes.flatMap(transform) };
}
