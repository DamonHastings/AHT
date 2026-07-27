/* eslint-env node */
/**
 * Generate public/robots.txt and public/sitemap.xml at build time.
 *
 * Routes come from Sanity (published, non-noindex pages) via
 * scripts/lib/indexable-routes.mjs — the same list the prerender uses — so new
 * pages appear automatically and noindex pages are excluded.
 *
 * Uses VITE_SITE_URL (the production origin, e.g. https://arielleraehastings.com).
 * If unset, falls back to a placeholder and warns — set VITE_SITE_URL in the
 * deploy environment so the sitemap/robots reference real absolute URLs.
 * Chained into `npm run build` via the `prebuild` script.
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getIndexableRoutes } from "./lib/indexable-routes.mjs";

// Load .env for local builds (Vercel injects env vars directly, and has no
// .env file — so ignore the "file not found" error there).
try {
  process.loadEnvFile(path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", ".env"));
} catch {
  /* no .env (e.g. CI/Vercel) — rely on process.env */
}

const dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(dirname, "..", "public");

const RAW = process.env.VITE_SITE_URL || "";
const SITE_URL = RAW.replace(/\/$/, "");
if (!SITE_URL) {
  console.warn(
    "[gen-sitemap] VITE_SITE_URL not set — using placeholder https://example.com. " +
      "Set VITE_SITE_URL in the build environment for correct sitemap/robots URLs."
  );
}
const BASE = SITE_URL || "https://example.com";

function urlEntry(route) {
  const lastmod = route.lastmod ? `\n    <lastmod>${route.lastmod.slice(0, 10)}</lastmod>` : "";
  return (
    `  <url>\n    <loc>${BASE}${route.path}</loc>${lastmod}` +
    `\n    <changefreq>${route.changefreq}</changefreq>` +
    `\n    <priority>${route.priority}</priority>\n  </url>`
  );
}

async function main() {
  const routes = await getIndexableRoutes();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(urlEntry).join("\n")}
</urlset>
`;

  const robots = `User-agent: *
Allow: /

Sitemap: ${BASE}/sitemap.xml
`;

  await mkdir(PUBLIC_DIR, { recursive: true });
  await writeFile(path.join(PUBLIC_DIR, "sitemap.xml"), sitemap, "utf8");
  await writeFile(path.join(PUBLIC_DIR, "robots.txt"), robots, "utf8");
  console.log(`✓ sitemap.xml (${routes.length} routes) + robots.txt written for ${BASE}`);
}

main().catch((err) => {
  console.error("Sitemap generation failed:", err);
  process.exit(1);
});
