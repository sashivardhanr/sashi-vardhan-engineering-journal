import { defineConfig } from 'astro/config';

// Fixtures have a separate source root and output; never add them to src/pages.
export default defineConfig({
  srcDir: './tests/review',
  outDir: './.review-dist',
  cacheDir: './node_modules/.astro-review',
  output: 'static',
  devToolbar: { enabled: false },
});
