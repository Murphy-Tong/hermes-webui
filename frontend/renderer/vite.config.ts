import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'node:url';
import { existsSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const root = fileURLToPath(new URL('../../', import.meta.url));
const optional = new Set(['stream-diffs', '@terrastruct/d2', '@antv/infographic', 'vue-i18n']);

export default defineConfig(({ mode }) => ({
  plugins: [{
    name: 'hermes-offline-renderer',
    enforce: 'post',
    resolveId(id) { return optional.has(id) ? `\0hermes-disabled:${id}` : null; },
    load(id) {
      if (id.startsWith('\0hermes-disabled:')) return 'export default {};';
    },
    generateBundle(_, bundle) {
      const emitted = new Set<string>();
      // library build 默认内嵌字体；拆为同源文件，避免每次加载整段 base64 CSS。
      for (const asset of Object.values(bundle)) {
        if (asset.type !== 'asset' || !asset.fileName.endsWith('.css')) continue;
        asset.source = String(asset.source).replace(/url\((['"]?)data:([^;,]+);base64,([a-z\d+/=]+)\1\)/gi, (original, _quote, mime, data) => {
          if (!/(?:font|woff|truetype)/i.test(mime)) return original;
          const content = Buffer.from(data, 'base64');
          const suffix = /woff2/i.test(mime) ? 'woff2' : /woff/i.test(mime) ? 'woff' : 'ttf';
          const fileName = `fonts/${createHash('sha256').update(content).digest('hex').slice(0, 16)}.${suffix}`;
          if (!emitted.has(fileName)) this.emitFile({ type: 'asset', fileName, source: content });
          emitted.add(fileName);
          return `url(./${fileName})`;
        });
      }
      const lock = JSON.parse(readFileSync(`${root}package-lock.json`, 'utf8'));
      const notices: string[] = [];
      for (const [path, pkg] of Object.entries(lock.packages) as [string, { dev?: boolean; version?: string; license?: string }][]) {
        if (!path || pkg.dev) continue;
        const file = ['LICENSE', 'LICENSE.md', 'LICENSE.txt', 'license', 'license.md', 'LICENSE-MIT', 'COPYING']
          .map(name => `${root}${path}/${name}`).find(existsSync);
        notices.push(`${path} @ ${pkg.version} (${pkg.license || '参见包许可证'})\n${file ? readFileSync(file, 'utf8') : ''}`);
      }
      this.emitFile({ type: 'asset', fileName: 'THIRD_PARTY_LICENSES.txt', source: notices.join('\n\n----------------\n\n') });
      this.emitFile({ type: 'asset', fileName: 'assets.json', source: JSON.stringify([...new Set([...Object.keys(bundle), ...emitted])].sort(), null, 2) + '\n' });
    },
  }],
  resolve: { alias: {
    vue: 'vue/dist/vue.runtime.esm-bundler.js',
    'hermes-renderer-under-test': `${root}${mode === 'built' ? 'static/renderer/index.js' : 'frontend/renderer/index.ts'}`,
  } },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    __VUE_OPTIONS_API__: false,
    __VUE_PROD_DEVTOOLS__: false,
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
  },
  build: {
    target: 'es2022',
    assetsInlineLimit: () => false,
    outDir: `${root}static/renderer`,
    emptyOutDir: true,
    lib: {
      entry: `${root}frontend/renderer/index.ts`,
      formats: ['es'],
      fileName: () => 'index.js',
      cssFileName: 'renderer',
    },
    rollupOptions: {
      // 未启用的可选节点由本地空模块封闭，不遗留浏览器裸导入。
      output: { chunkFileNames: '[name]-[hash].js' },
    },
  },
  test: {
    environment: 'jsdom',
    environmentOptions: { jsdom: { url: 'https://hermes.test/' } },
    include: ['frontend/renderer/**/*.test.ts'],
    restoreMocks: true,
  },
}));
