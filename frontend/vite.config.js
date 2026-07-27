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

// Prerender can be skipped for fast local builds; it always runs otherwise —
// including on Vercel (see serverlessLaunchOptions for how we make headless
// Chromium work in the Vercel build image, which lacks Chrome system libs).
const skipPrerender = process.env.SKIP_PRERENDER === "1";
const isServerless =
  process.env.VERCEL === "1" || Boolean(process.env.AWS_LAMBDA_FUNCTION_NAME);

// In serverless/CI build images (Vercel) the OS lacks the shared libraries a
// normal Chromium needs, so puppeteer's bundled binary fails to launch. Point
// the renderer at @sparticuz/chromium, which ships a self-contained Chromium +
// libs built for exactly these environments. Locally we use puppeteer's own
// bundled Chromium.
async function serverlessLaunchOptions() {
  if (!isServerless) {
    return { args: ['--no-sandbox', '--disable-setuid-sandbox'] };
  }
  const { default: chromium } = await import('@sparticuz/chromium');
  return {
    args: chromium.args,
    executablePath: await chromium.executablePath(),
    headless: chromium.headless,
  };
}

export default defineConfig(async ({ command }) => {
  const doPrerender = command === "build" && !skipPrerender;
  // Query Sanity for the routes to bake (home + any published, non-noindex
  // pages, minus router-excluded slugs). Same list feeds the sitemap.
  const [prerenderRoutes, launchOptions] = doPrerender
    ? await Promise.all([
        import('./scripts/lib/indexable-routes.mjs').then((m) => m.getPrerenderRoutes()),
        serverlessLaunchOptions(),
      ])
    : [[], null];

  return {
  plugins: [
    react(),
    // Build-time prerender: bake crawlable static HTML for each indexable route
    // so search engines/social scrapers get real content + per-page meta in the
    // initial HTML. Only runs on `vite build` (not dev/storybook/test). Each
    // route dispatches 'app-prerender-ready' once its data/loading resolves.
    ...(doPrerender
      ? [
          prerender({
            routes: prerenderRoutes,
            // Serve + navigate over an explicit IPv4 origin on a dedicated port.
            // The headless browser's client-side Sanity fetches send this exact
            // Origin; it MUST be in Sanity's CORS allowlist or the fetch is
            // blocked and only the static fallback (not the Sanity-managed SEO)
            // gets baked in. We use explicit 127.0.0.1 (not "localhost") to avoid
            // IPv4/IPv6 resolution ambiguity, and a dedicated port to avoid
            // colliding with a running dev server. Keep this origin in sync with
            // the Sanity CORS allowlist entry (http://127.0.0.1:4319).
            server: { host: '127.0.0.1', listenHost: '127.0.0.1', port: 4319 },
            renderer: '@prerenderer/renderer-puppeteer',
            rendererOptions: {
              renderAfterDocumentEvent: 'app-prerender-ready',
              maxConcurrentRoutes: 1,
              timeout: 40000,
              headless: true,
              launchOptions,
            },
          }),
        ]
      : []),
  ],
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
  };
});