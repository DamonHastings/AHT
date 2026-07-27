/* eslint-env node */
/**
 * Browserless per-route SEO: after `vite build`, write dist/<route>/index.html
 * with the correct <title>, meta description, Open Graph/Twitter, canonical,
 * robots, and JSON-LD injected into <head> — using the Sanity API directly (no
 * headless browser). This replaces the puppeteer prerender, which can't run in
 * Vercel's build container (missing libnss3 for Chromium).
 *
 * Non-JS crawlers and social scrapers read these static tags; the SPA still
 * hydrates and react-helmet-async manages the same tags client-side.
 *
 * The resolve + JSON-LD logic mirrors src/utils/seo.js (resolveSeo /
 * buildPracticeJsonLd / buildFaqJsonLd). Keep the two in sync.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { getIndexableRoutes } from "./lib/indexable-routes.mjs";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(dirname, "..", "dist");

try {
  process.loadEnvFile(path.resolve(dirname, "..", ".env"));
} catch {
  /* no .env (CI/Vercel) — rely on process.env */
}

const SITE_URL = (process.env.VITE_SITE_URL || "").replace(/\/$/, "");
if (!SITE_URL) {
  console.warn("[inject-meta] VITE_SITE_URL not set — canonical/og:url will be omitted.");
}

const projectId =
  process.env.VITE_SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID || "gpgx1ndq";
const dataset =
  process.env.VITE_SANITY_DATASET || process.env.SANITY_STUDIO_DATASET || "production";
const client = createClient({ projectId, dataset, apiVersion: "2024-01-01", useCdn: true });
const builder = imageUrlBuilder(client);

function ogImageUrl(src) {
  if (!src) return undefined;
  try {
    return builder.image(src).width(1200).height(630).fit("crop").url();
  } catch {
    return undefined;
  }
}

function applyTitleTemplate(template, pageTitle) {
  if (!pageTitle) return undefined;
  if (!template || !template.includes("%s")) return pageTitle;
  return template.replace("%s", pageTitle);
}

// Mirrors resolveSeo() in src/utils/seo.js.
function resolveSeo(page, settings, { routePath, isHome }) {
  const dseo = settings?.defaultSeo || {};
  const seo = page?.seo || {};
  const template = dseo.titleTemplate;
  const defaultTitle = dseo.defaultTitle || settings?.title;
  const explicitTitle = seo.metaTitle || page?.metaTitle;

  let title;
  if (explicitTitle) title = explicitTitle;
  else if (isHome) title = defaultTitle;
  else title = applyTitleTemplate(template, page?.title) || defaultTitle;

  return {
    title,
    description:
      seo.metaDescription || page?.metaDescription || dseo.defaultDescription || settings?.description,
    image: ogImageUrl(seo.ogImage || dseo.defaultOgImage || settings?.ogImage),
    canonical: seo.canonicalUrl || (SITE_URL ? `${SITE_URL}${routePath}` : undefined),
    noindex: seo.noIndex === true,
    twitterHandle: dseo.twitterHandle || undefined,
  };
}

// Mirrors buildPracticeJsonLd() in src/utils/seo.js.
function buildPracticeJsonLd(s, { url, image }) {
  if (!s) return null;
  const id = url ? `${url}#practice` : "#practice";
  const addr = s.address
    ? {
        "@type": "PostalAddress",
        streetAddress: s.address.street,
        addressLocality: s.address.city,
        addressRegion: s.address.state,
        postalCode: s.address.zipCode,
        addressCountry: "US",
      }
    : undefined;
  const business = {
    "@type": ["LocalBusiness", "MedicalBusiness", "ProfessionalService"],
    "@id": id,
    name: s.businessName || s.title,
    ...(s.description ? { description: s.description } : {}),
    ...(url ? { url } : {}),
    ...(image ? { image } : {}),
    ...(s.contactPhone ? { telephone: s.contactPhone } : {}),
    ...(s.contactEmail ? { email: s.contactEmail } : {}),
    ...(addr ? { address: addr } : {}),
    ...(s.geo?.lat && s.geo?.lng
      ? { geo: { "@type": "GeoCoordinates", latitude: s.geo.lat, longitude: s.geo.lng } }
      : {}),
  };
  const person = {
    "@type": "Person",
    name: s.defaultSeo?.author || "Arielle Rae Hastings",
    jobTitle: s.credentials || "Licensed Marriage & Family Therapist",
    ...(s.licenseNumber
      ? { identifier: { "@type": "PropertyValue", name: "LMFT License", value: s.licenseNumber } }
      : {}),
    worksFor: { "@id": id },
  };
  return { "@context": "https://schema.org", "@graph": [business, person] };
}

function buildFaqJsonLd(items) {
  if (!items?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer },
    })),
  };
}

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function headTags(seo, jsonLd) {
  const t = [];
  if (seo.description) t.push(`<meta name="description" content="${esc(seo.description)}"/>`);
  if (seo.canonical) t.push(`<link rel="canonical" href="${esc(seo.canonical)}"/>`);
  if (seo.noindex) t.push(`<meta name="robots" content="noindex,nofollow"/>`);
  t.push(`<meta property="og:type" content="website"/>`);
  if (seo.title) t.push(`<meta property="og:title" content="${esc(seo.title)}"/>`);
  if (seo.description) t.push(`<meta property="og:description" content="${esc(seo.description)}"/>`);
  if (seo.image) t.push(`<meta property="og:image" content="${esc(seo.image)}"/>`);
  if (seo.canonical) t.push(`<meta property="og:url" content="${esc(seo.canonical)}"/>`);
  t.push(`<meta name="twitter:card" content="${seo.image ? "summary_large_image" : "summary"}"/>`);
  if (seo.twitterHandle) t.push(`<meta name="twitter:site" content="${esc(seo.twitterHandle)}"/>`);
  if (seo.title) t.push(`<meta name="twitter:title" content="${esc(seo.title)}"/>`);
  if (seo.description) t.push(`<meta name="twitter:description" content="${esc(seo.description)}"/>`);
  if (seo.image) t.push(`<meta name="twitter:image" content="${esc(seo.image)}"/>`);
  for (const block of jsonLd.filter(Boolean)) {
    t.push(`<script type="application/ld+json">${JSON.stringify(block)}</script>`);
  }
  return t.join("\n    ");
}

function injectInto(template, seo, jsonLd) {
  let html = template;
  if (seo.title) {
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(seo.title)}</title>`);
  }
  return html.replace(/<\/head>/, `    ${headTags(seo, jsonLd)}\n  </head>`);
}

async function main() {
  const [settings, pages, routes, template] = await Promise.all([
    client.fetch(
      `*[_type=="siteSettings"][0]{title,description,ogImage,businessName,contactPhone,contactEmail,address,geo,credentials,licenseNumber,defaultSeo}`
    ),
    client.fetch(
      `*[_type=="page" && published==true]{
        "slug": slug.current, title, metaTitle, metaDescription,
        seo{metaTitle,metaDescription,ogImage,canonicalUrl,noIndex},
        "faq": components[_type=="faqBlock"][0].items[]{question,answer}
      }`
    ),
    getIndexableRoutes(),
    readFile(path.join(DIST, "index.html"), "utf8"),
  ]);

  const bySlug = new Map((pages || []).map((p) => [p.slug || "", p]));

  const dseo = settings?.defaultSeo || {};
  let n = 0;
  for (const route of routes) {
    const isHome = route.path === "/";
    const slug = isHome ? "home" : route.path.replace(/^\//, "");
    const page = bySlug.get(slug);

    // Sanity-backed route → resolve from the page; static route (e.g. /privacy)
    // → use the title/description carried on the route + site defaults.
    const seo = page
      ? resolveSeo(page, settings, { routePath: route.path, isHome })
      : {
          title: route.title || dseo.defaultTitle || settings?.title,
          description: route.description || dseo.defaultDescription || settings?.description,
          image: ogImageUrl(dseo.defaultOgImage || settings?.ogImage),
          canonical: SITE_URL ? `${SITE_URL}${route.path}` : undefined,
          noindex: false,
          twitterHandle: dseo.twitterHandle || undefined,
        };

    const jsonLd = isHome
      ? [
          buildPracticeJsonLd(settings, { url: seo.canonical, image: seo.image }),
          buildFaqJsonLd(page?.faq),
        ]
      : [];

    const html = injectInto(template, seo, jsonLd);
    const outFile = isHome
      ? path.join(DIST, "index.html")
      : path.join(DIST, route.path.replace(/^\//, ""), "index.html");
    await mkdir(path.dirname(outFile), { recursive: true });
    await writeFile(outFile, html, "utf8");
    n++;
    console.log(`  ✓ ${route.path} → ${path.relative(DIST, outFile)} — "${seo.title}"`);
  }
  console.log(`✓ inject-meta: wrote SEO tags for ${n} route(s)`);
}

main().catch((err) => {
  console.error("inject-meta failed:", err);
  process.exit(1);
});
