/* eslint-env node */
/**
 * Single source of truth for "which routes should be indexed / prerendered".
 * Queries Sanity for published, non-noindex `page` docs and merges in static
 * routes that aren't backed by a Sanity page. Consumed by:
 *   - scripts/gen-sitemap.mjs  → sitemap.xml <url> entries (with <lastmod>)
 *   - vite.config.js           → the build-time prerender route list
 *
 * Keep EXCLUDED_SLUGS in sync with the router in src/App.jsx: any slug the
 * router does NOT serve as a standalone page (e.g. /about, /services currently
 * redirect to home) must be excluded so we never list an unserved URL. When you
 * restore those routes, remove them here and they flow through automatically.
 */
import { createClient } from '@sanity/client';

const projectId =
  process.env.VITE_SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID || 'gpgx1ndq';
const dataset =
  process.env.VITE_SANITY_DATASET || process.env.SANITY_STUDIO_DATASET || 'production';

const client = createClient({ projectId, dataset, apiVersion: '2024-01-01', useCdn: true });

// Slugs the router redirects/does not serve as standalone pages (see src/App.jsx).
const EXCLUDED_SLUGS = new Set(['about', 'services']);

// Routes served by the app but not backed by a Sanity `page` document.
const STATIC_ROUTES = [{ path: '/privacy', changefreq: 'yearly', priority: '0.3' }];

/** Map a Sanity page slug to a site path. The home page ("home") lives at "/". */
function slugToPath(slug) {
  if (!slug || slug === 'home') return '/';
  return `/${slug}`;
}

/**
 * @returns {Promise<Array<{ path, lastmod?, changefreq, priority }>>}
 * Always includes "/" and the static routes even if the Sanity query fails.
 */
export async function getIndexableRoutes() {
  let pages = [];
  try {
    pages = await client.fetch(
      `*[_type == "page" && published == true && coalesce(seo.noIndex, false) == false]{
        "slug": slug.current,
        _updatedAt
      }`
    );
  } catch (err) {
    console.warn(
      `[indexable-routes] Sanity query failed (${err.message}); falling back to static routes.`
    );
  }

  const fromSanity = pages
    .filter((p) => !EXCLUDED_SLUGS.has(p.slug))
    .map((p) => {
      const path = slugToPath(p.slug);
      const isHome = path === '/';
      return {
        path,
        lastmod: p._updatedAt,
        changefreq: 'monthly',
        priority: isHome ? '1.0' : '0.7',
      };
    });

  // Merge + de-dupe by path (Sanity data wins for shared paths).
  const byPath = new Map();
  for (const r of [...STATIC_ROUTES, ...fromSanity]) {
    byPath.set(r.path, { ...byPath.get(r.path), ...r });
  }
  // Guarantee the home route is present even if Sanity is unreachable.
  if (!byPath.has('/')) {
    byPath.set('/', { path: '/', changefreq: 'monthly', priority: '1.0' });
  }

  return [...byPath.values()];
}

/** Convenience: just the path strings (for the prerender plugin). */
export async function getPrerenderRoutes() {
  const routes = await getIndexableRoutes();
  return routes.map((r) => r.path);
}
