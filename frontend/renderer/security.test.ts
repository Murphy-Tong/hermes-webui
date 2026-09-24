import { describe, expect, it } from 'vitest';
import { iframeUrl, linkUrl, resourceUrl, safeStyle, sanitizeHtml } from './security';

describe('统一资源策略', () => {
  it.each(['javascript:alert(1)', 'http://example.com/a.png', '//example.com/a',
    'https://127.1/a', 'https://0x7f000001/a', 'https://[::1]/a', 'https://[::ffff:127.0.0.1]/a',
    'https://10.0.0.1/a', 'https://user:pass@example.com/a', 'data:image/svg+xml,<svg/>',
    '/api/session', 'https://example.com\\@localhost/a'])('拒绝不受控资源 %s', source => {
    expect(resourceUrl(source, {})).toBeNull();
  });
  it('媒体快照按完整路径绑定，使用当前实例身份', () => {
    const digest = 'a'.repeat(64);
    const context = { sessionId: 'session-a', profileId: 'profile-a', snapshots: { '/tmp/a.png': digest } };
    const url = new URL(resourceUrl('/api/media?path=%2Ftmp%2Fa.png', context)!);
    expect(url.searchParams.get('snap')).toBe(digest);
    expect(url.searchParams.get('session_id')).toBe('session-a');
    expect(url.searchParams.get('profile')).toBe('profile-a');
    expect(new URL(resourceUrl('/api/media?path=%2Ftmp%2Fa.png.backup', context)!).searchParams.has('snap')).toBe(false);
  });
  it('重新验证本地路径转换回调结果', () => {
    expect(resourceUrl('workspace://a.png', { resolveMedia: () => 'javascript:alert(1)' })).toBeNull();
    expect(resourceUrl('file:///tmp/a.png', { resolveMedia: () => '/api/session' })).toBeNull();
  });
  it('公开分享页不继承私有路由或媒体权限', () => {
    const context = { surface: 'share' as const, resolveMedia: () => '/api/media?path=secret' };
    expect(resourceUrl('/api/media?path=secret', context)).toBeNull();
    expect(resourceUrl('workspace://secret', context)).toBeNull();
    expect(linkUrl('session://secret', context)).toBeNull();
    expect(linkUrl('file:///secret', context)).toBeNull();
    expect(resourceUrl('https://example.com/a.png', context)).toBe('https://example.com/a.png');
  });
});

describe('受控 iframe', () => {
  const context = { iframeOrigins: ['https://example.com'] };
  it('仅许可精确 HTTPS origin', () => {
    expect(iframeUrl('https://example.com/embed', context)).toBe('https://example.com/embed');
    for (const source of ['https://sub.example.com/e', 'http://example.com/e', '/embed', '//example.com/e',
      'https://example.com.evil.test/e', 'https://example.com:8443/e']) {
      expect(iframeUrl(source, context)).toBeNull();
    }
  });
  it.each(['https://*.example.com', 'https://hermes.test', 'https://127.0.0.1', 'https://[::1]',
    'https://example.com/path', 'https://example.com/'])('拒绝放宽配置 %s', origin => {
    expect(iframeUrl(`${origin}/embed`, { iframeOrigins: [origin] })).toBeNull();
  });
  it('分享表面始终禁止 iframe', () => {
    expect(iframeUrl('https://example.com/embed', { ...context, surface: 'share' })).toBeNull();
  });
});

describe('结构 HTML', () => {
  it('保留结构，移除脚本和可劫持外壳的属性', () => {
    const fragment = sanitizeHtml('<details open id="msgInner" class="admin" data-session="x" onclick="alert(1)"><summary>标题</summary><table><tr><td colspan="2">内容</td></tr></table></details><script>alert(1)</script><form><input></form>');
    const details = fragment.querySelector('details')!;
    expect(details.hasAttribute('open')).toBe(true);
    expect([...details.attributes].map(a => a.name)).toEqual(['open']);
    expect(fragment.querySelector('td')?.getAttribute('colspan')).toBe('2');
    expect(fragment.querySelector('script,form,input')).toBeNull();
  });
  it('样式不允许资源加载或覆盖应用布局', () => {
    expect(safeStyle('color:red;text-align:center;position:fixed;inset:0;background:url(https://evil.test/x)'))
      .toEqual({ color: 'red', 'text-align': 'center' });
    expect(safeStyle('color:var(--secret);background-color:expression(alert(1))')).toEqual({});
  });
  it('放行常用富文本视觉属性（黑名单模型）', () => {
    const style = safeStyle('padding:8px;line-height:2;font-size:20px;letter-spacing:1px;opacity:0.5;'
      + 'border:2px solid red;border-radius:6px;box-shadow:0 0 4px black;text-shadow:1px 1px 2px black;'
      + 'transform:rotate(3deg);line-break:strict');
    const keys = Object.keys(style);
    // jsdom 保留 shorthand 原样 key，浏览器展开为 longhand；对应族有任意一项落地即视为放行。
    for (const family of ['padding', 'line-height', 'font-size', 'letter-spacing', 'opacity',
      'border', 'box-shadow', 'text-shadow', 'transform', 'line-break']) {
      expect(keys.some(key => key.startsWith(family)), family).toBe(true);
    }
    expect(style['border-radius']).toBe('6px');
  });
  it('布局劫持与资源加载属性被拦，纯视觉属性放行', () => {
    // position/inset/z-index/float/behavior 无论取值一律丢弃。
    expect(safeStyle('position:fixed;inset:0;z-index:9999;float:left;behavior:url(#x);color:red')).toEqual({ color: 'red' });
    // url() 在任意属性上都被值层拦截（含 filter/cursor/list-style-image 等未列举属性）。
    expect(safeStyle('filter:url(#x);cursor:url(https://evil.test/c);list-style-image:url(https://evil.test/d);color:blue')).toEqual({ color: 'blue' });
    // 纯视觉、旧白名单里没有的属性现在默认放行。
    expect(safeStyle('width:100px;height:50px;transform-origin:center')['width']).toBe('100px');
  });
  it('放行渐变背景但拒绝 background url() 加载', () => {
    // jsdom 保留 background shorthand，浏览器展开为 background-image；两者之一含渐变即视为放行。
    const gradient = safeStyle('background:linear-gradient(45deg, red, blue)');
    expect(gradient['background'] ?? gradient['background-image']).toContain('linear-gradient');
    expect(safeStyle('background-image:radial-gradient(circle, white, black)')['background-image']).toContain('radial-gradient');
    // 走 background-image 直接塞 url() 也必须在值层被丢弃。
    expect(safeStyle('background-image:url(https://evil.test/x);color:green')).toEqual({ color: 'green' });
  });

});
