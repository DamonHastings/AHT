/// <reference types="vitest/config" />
/* eslint-env node */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import prerender from '@prerenderer/rollup-plugin';

// https://vitejs.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    // Build-time prerender: bake crawlable static HTML for the home route so
    // search engines/social scrapers get real content + meta in the initial HTML.
    // Only runs on `vite build` (not dev/storybook/test). Waits for the bottom
    // CTA (#contact) which renders once the page is fully built.
    ...(command === 'build'
      ? [
          prerender({
            routes: ['/', '/about', '/services', '/privacy', '/good-faith-estimate'],
            renderer: '@prerenderer/renderer-puppeteer',
            rendererOptions: {
              // Each route dispatches this once its data/loading resolves
              // (see usePrerenderReady + HomePage).
              renderAfterDocumentEvent: 'app-prerender-ready',
              maxConcurrentRoutes: 1,
              timeout: 40000,
              headless: true,
              launchOptions: {
                args: ['--no-sandbox', '--disable-setuid-sandbox'],
              },
            },
          }),
        ]
      : []),
  ],
  server: {
    port: 5173,
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
}));