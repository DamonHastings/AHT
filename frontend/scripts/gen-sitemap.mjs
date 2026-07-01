/* eslint-env node */
/**
 * Generate public/robots.txt and public/sitemap.xml at build time.
 *
 * Uses VITE_SITE_URL (the production origin, e.g. https://www.ariellehastings.com).
 * If unset, falls back to a placeholder and warns — set VITE_SITE_URL in the
 * deploy environment so the sitemap/robots reference real absolute URLs.
 * Chained into `npm run build`.
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

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

// Public, indexable routes. Keep in sync with App.jsx (exclude legal noise if desired).
const ROUTES = [
  { path: "/", priority: "1.0", changefreq: "monthly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/services", priority: "0.7", changefreq: "monthly" },
  { path: "/privacy", priority: "0.3", changefreq: "yearly" },
  { path: "/good-faith-estimate", priority: "0.3", changefreq: "yearly" },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
  (r) =>
    `  <url>\n    <loc>${BASE}${r.path}</loc>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`
).join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${BASE}/sitemap.xml
`;

async function main() {
  await mkdir(PUBLIC_DIR, { recursive: true });
  await writeFile(path.join(PUBLIC_DIR, "sitemap.xml"), sitemap, "utf8");
  await writeFile(path.join(PUBLIC_DIR, "robots.txt"), robots, "utf8");
  console.log(`✓ sitemap.xml + robots.txt written for ${BASE}`);
}

main().catch((err) => {
  console.error("Sitemap generation failed:", err);
  process.exit(1);
});
