import DOMPurify from 'dompurify';

export interface RenderContext {
  surface?: 'chat' | 'preview' | 'share' | 'transcript';
  profileId?: string;
  sessionId?: string;
  snapshots?: Record<string, string>;
  iframeOrigins?: string[];
  resolveMedia?: (source: string) => string;
  openLink?: (source: string) => void;
  openImage?: (source: string, alt: string) => void;
}

const mediaRoutes = ['api/media', 'api/file/raw'];
const bitmap = /^data:image\/(?:png|gif|jpe?g|webp|avif|bmp);base64,[a-z\d+/=\s]+$/i;

export function privateHost(host: string): boolean {
  const name = host.toLowerCase().replace(/^\[|\]$/g, '');
  if (name === 'localhost' || /\.(?:localhost|local|internal)$/.test(name)) return true;
  if (name.includes(':')) return /^(?:::|fc|fd|fe[89ab]|::ffff:)/i.test(name);
  if (/^\d+\.\d+\.\d+\.\d+$/.test(name)) {
    const [a, b] = name.split('.').map(Number);
    return a === 0 || a === 10 || a === 127 || a >= 224 ||
      (a === 169 && b === 254) || (a === 172 && b >= 16 && b <= 31) ||
      (a === 192 && b === 168) || (a === 100 && b >= 64 && b <= 127);
  }
  return !name.includes('.');
}

export function resourceUrl(source: string, context: RenderContext, kind = 'image'): string | null {
  let value = String(source || '').trim();
  if (!value || /[\u0000-\u001f\u007f\\]/.test(value) || value.startsWith('//')) return null;
  if (kind === 'image' && bitmap.test(value)) return value;
  if (/^(?:file|workspace):\/\//i.test(value)) {
    if (context.surface === 'share' || !context.resolveMedia) return null;
    try { value = context.resolveMedia(value); } catch { return null; }
    if (!value || /[\u0000-\u001f\u007f\\]/.test(value) || value.startsWith('//')) return null;
  }
  try {
    const url = new URL(value, document.baseURI);
    if (url.username || url.password) return null;
    if (url.origin === location.origin) {
      if (context.surface === 'share' || !mediaRoutes.some(route =>
        new URL(route, document.baseURI).pathname === url.pathname)) return null;
      const path = url.searchParams.get('path') || '';
      const digest = context.snapshots?.[path];
      if (digest && /^[0-9a-f]{64}$/.test(digest)) url.searchParams.set('snap', digest);
      if (context.sessionId) url.searchParams.set('session_id', context.sessionId);
      if (context.profileId) url.searchParams.set('profile', context.profileId);
      return url.href;
    }
    return url.protocol === 'https:' && !privateHost(url.hostname) ? url.href : null;
  } catch { return null; }
}

export function linkUrl(source: string, context: RenderContext): string | null {
  const value = String(source || '').trim();
  if (!value || /[\u0000-\u001f\u007f\\]/.test(value) || value.startsWith('//')) return null;
  if (/^(?:workspace|file|session):\/\//i.test(value)) return context.surface === 'share' ? null : value;
  if (value.startsWith('#')) return value;
  try {
    const url = new URL(value, document.baseURI);
    if (url.username || url.password || !['https:', 'http:', 'mailto:'].includes(url.protocol)) return null;
    if (context.surface === 'share' && url.origin === location.origin) return null;
    return url.href;
  } catch { return null; }
}

export function iframeUrl(source: string, context: RenderContext): string | null {
  if (context.surface === 'share' || !/^https:\/\//i.test(source || '') ||
    /[\u0000-\u0020\u007f\\*]/.test(source)) return null;
  try {
    const url = new URL(source);
    if (url.username || url.password || url.origin === location.origin || privateHost(url.hostname)) return null;
    const allowed = (context.iframeOrigins || []).some(origin => {
      try { return new URL(origin).origin === origin && origin === url.origin; } catch { return false; }
    });
    return allowed ? url.href : null;
  } catch { return null; }
}

const tags = ['p','div','span','br','hr','strong','b','em','i','u','s','del','mark','small',
  'sub','sup','kbd','samp','var','abbr','q','blockquote','pre','code','ul','ol','li','dl','dt','dd',
  'h1','h2','h3','h4','h5','h6','table','thead','tbody','tfoot','tr','th','td','caption','colgroup','col',
  'details','summary','a','img','figure','figcaption','video','audio','source','track','iframe'];
const attrs = ['href','src','alt','title','width','height','colspan','rowspan','scope','start','reversed',
  'value','open','style','align','poster','type','kind','srclang','label'];

// CSS 采用「黑名单」而非「白名单」：不受信的 LLM 输出里绝大多数样式（padding、
// 圆角、渐变、阴影、transform、字号…）都是纯视觉、零风险，逐个补白名单是无底洞。
// 真正需要拦的只有两类，因此默认放行任意属性，只丢弃下面这两类：
const BLOCKED_STYLE_PROPERTIES = new Set([
  // ① 可劫持布局做透明全屏罩 / clickjacking，或历史执行向量的属性。
  'position', 'top', 'right', 'bottom', 'left',
  'inset', 'inset-block', 'inset-inline', 'inset-block-start', 'inset-block-end',
  'inset-inline-start', 'inset-inline-end', 'z-index', 'float', 'clear',
  'behavior', '-moz-binding', '-ms-behavior',
]);
// ② 值层统一拦截：任何能加载外部资源的 url()（SSRF/内网探测，覆盖 background-image、
// border-image、filter、cursor、list-style 等所有属性）、脚本执行向量、at-rule、
// CSS 变量间接引用与反斜杠绕过。
const UNSAFE_STYLE_VALUE = /url\s*\(|expression\s*\(|javascript\s*:|vbscript\s*:|@|\\|var\s*\(/i;

export function safeStyle(source: string): Record<string, string> {
  const style = document.createElement('span').style;
  const result: Record<string, string> = {};
  style.cssText = source;
  for (let index = 0; index < style.length; index++) {
    const key = style.item(index);
    if (!key || key.startsWith('--') || BLOCKED_STYLE_PROPERTIES.has(key.toLowerCase())) continue;
    const value = style.getPropertyValue(key);
    if (value && !UNSAFE_STYLE_VALUE.test(value)) result[key] = value;
  }
  return result;
}

// 返回惰性树；所有资源地址在创建实际 Vue 节点时再次按上下文检查。
export function sanitizeHtml(source: string): DocumentFragment {
  return DOMPurify.sanitize(source, {
    ALLOWED_TAGS: tags,
    ALLOWED_ATTR: attrs,
    ALLOW_DATA_ATTR: false,
    ALLOW_ARIA_ATTR: false,
    FORBID_TAGS: ['script','style','form','object','embed','template','svg','math'],
    RETURN_DOM_FRAGMENT: true,
  });
}
