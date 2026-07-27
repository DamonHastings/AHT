/// <reference types="vitest/config" />
/* eslint-env node */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// Per-route SEO tags are injected into the built HTML by scripts/inject-meta.mjs
// (chained after `vite build`), which reads Sanity directly — no headless
// browser, so it runs anywhere including Vercel's build container.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Listen on all interfaces (IPv4 + IPv6). Without this, Vite binds only
    // IPv6 localhost (::1) on some machines, so browsers that resolve
    // `localhost` to 127.0.0.1 (e.g. Chrome) can't connect.
    host: true,
    // Fail loudly if 5173 is taken instead of silently bumping to another port.
    // The Sanity CORS allowlist only includes localhost:5173, so a bumped port
    // gets its browser fetches blocked and the app falls back to static content.
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: true
      }
    }
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.js']
      }
    }]
  }
});
