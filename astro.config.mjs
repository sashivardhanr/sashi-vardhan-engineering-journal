import { defineConfig } from 'astro/config';

// Static personal pages. Domain/canonical metadata waits for an approved domain.
export default defineConfig({ output: 'static', devToolbar: { enabled: false } });
