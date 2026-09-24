// @vitest-environment node
import { describe, expect, it } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../../static/renderer/', import.meta.url));
describe('已生成的同源静态资源', () => {
  it('清单覆盖全部运行资源，字体不内嵌到 CSS', () => {
    const manifest: string[] = JSON.parse(readFileSync(root + 'assets.json', 'utf8'));
    const files = readdirSync(root, { recursive: true }).map(String).filter(path => statSync(root + path).isFile());
    expect(manifest.filter(path => path.includes('..') || path.startsWith('/'))).toEqual([]);
    expect(manifest.slice().sort()).toEqual(files.filter(path => path !== 'assets.json').sort());
    const css = readFileSync(root + 'renderer.css', 'utf8');
    expect(css).not.toMatch(/data:(?:font|application\/(?:font|x-font))/);
    const fonts = [...css.matchAll(/url\(\.\/([^)]*\.(?:woff2?|ttf))\)/g)].map(match => match[1]);
    expect(fonts.length).toBeGreaterThan(0);
    for (const font of fonts) expect(manifest).toContain(font);
    expect(css.length).toBeLessThan(300_000);
  });
});
