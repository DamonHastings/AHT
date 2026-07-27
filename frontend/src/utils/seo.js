/**
 * SEO helpers shared by page-level <Seo> usage.
 *
 * SITE_URL is used for canonical + og:url + JSON-LD @id/url. Set VITE_SITE_URL to
 * the production origin (e.g. https://www.example.com) at build time so the
 * prerendered HTML gets correct absolute URLs. If unset, canonical/url are omitted
 * rather than pointing at the prerender's localhost origin.
 */
import { urlFor } from "./sanityClient";

export const SITE_URL = (import.meta.env.VITE_SITE_URL || "").replace(/\/$/, "");

export function canonicalFor(path = "/") {
  return SITE_URL ? `${SITE_URL}${path}` : undefined;
}

/** Apply a title template like "%s | Brand" to a page title. */
function applyTitleTemplate(template, pageTitle) {
  if (!pageTitle) return undefined;
  if (!template || !template.includes("%s")) return pageTitle;
  return template.replace("%s", pageTitle);
}

/** Build an absolute 1200×630 social-share URL from a Sanity image source. */
function ogImageUrl(source) {
  if (!source) return undefined;
  try {
    return urlFor(source).width(1200).height(630).fit("crop").url();
  } catch {
    return undefined;
  }
}

/**
 * Resolve the final SEO values for a route by layering page-level settings over
 * site-wide defaults. This is the single source of truth every route uses so
 * behaviour stays consistent.
 *
 * @param pageSeo   Either a `page` document (reads `.seo` + legacy flat
 *                  metaTitle/metaDescription + `.title` for templating) or a
 *                  plain `{ metaTitle, metaDescription, ogImage, ... }` object.
 * @param siteSettings  The siteSettings singleton (reads `.defaultSeo` + legacy
 *                      top-level title/description/ogImage as fallback).
 * @param opts  { path, isHome } — path drives the canonical URL; isHome uses the
 *              default title as-is instead of templating a page title.
 * @returns { title, description, image, canonical, noindex, twitterHandle }
 */
export function resolveSeo(pageSeo, siteSettings, { path = "/", isHome = false } = {}) {
  const dseo = siteSettings?.defaultSeo || {};
  // The SEO object: page.seo when present, else a bare object passed directly
  // (e.g. from LegalLayout). We do NOT fall back to the whole page doc here, to
  // avoid leaking unrelated page fields; legacy flat fields are handled below.
  const seo = pageSeo?.seo || (pageSeo && !pageSeo._type ? pageSeo : {}) || {};
  // Legacy flat fields living on older page docs (pre-migration).
  const legacyMetaTitle = pageSeo?.metaTitle;
  const legacyMetaDescription = pageSeo?.metaDescription;

  const template = dseo.titleTemplate;
  const defaultTitle = dseo.defaultTitle || siteSettings?.title;
  const explicitTitle = seo.metaTitle || legacyMetaTitle;
  const pageTitle = pageSeo?.title; // internal page title, e.g. "About"

  let title;
  if (explicitTitle) {
    title = explicitTitle; // an editor-set meta title is used verbatim
  } else if (isHome) {
    title = defaultTitle;
  } else {
    title = applyTitleTemplate(template, pageTitle) || defaultTitle;
  }

  const description =
    seo.metaDescription ||
    legacyMetaDescription ||
    dseo.defaultDescription ||
    siteSettings?.description ||
    undefined;

  const image = ogImageUrl(seo.ogImage || dseo.defaultOgImage || siteSettings?.ogImage);

  const canonical = seo.canonicalUrl || canonicalFor(path);

  return {
    title,
    description,
    image,
    canonical,
    noindex: seo.noIndex === true,
    twitterHandle: dseo.twitterHandle || undefined,
  };
}

/**
 * LocalBusiness + Person structured data for the practice, built from Sanity
 * siteSettings. Returns null until settings load so we never emit half-empty data.
 */
export function buildPracticeJsonLd(siteSettings, { url, image } = {}) {
  if (!siteSettings) return null;

  const {
    businessName,
    title,
    description,
    contactPhone,
    contactEmail,
    address,
    geo,
    credentials,
    licenseNumber,
    defaultSeo,
    seo,
  } = siteSettings;

  const practiceId = url ? `${url}#practice` : "#practice";
  const personName = defaultSeo?.author || seo?.author || "Arielle Rae Hastings";

  const postalAddress = address
    ? {
        "@type": "PostalAddress",
        streetAddress: address.street,
        addressLocality: address.city,
        addressRegion: address.state,
        postalCode: address.zipCode,
        addressCountry: "US",
      }
    : undefined;

  const business = {
    "@type": ["LocalBusiness", "MedicalBusiness", "ProfessionalService"],
    "@id": practiceId,
    name: businessName || title,
    ...(description ? { description } : {}),
    ...(url ? { url } : {}),
    ...(image ? { image } : {}),
    ...(contactPhone ? { telephone: contactPhone } : {}),
    ...(contactEmail ? { email: contactEmail } : {}),
    ...(postalAddress ? { address: postalAddress } : {}),
    ...(geo?.lat && geo?.lng
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: geo.lat,
            longitude: geo.lng,
          },
        }
      : {}),
  };

  const person = {
    "@type": "Person",
    name: personName,
    jobTitle: credentials || "Licensed Marriage & Family Therapist",
    ...(licenseNumber
      ? {
          identifier: {
            "@type": "PropertyValue",
            name: "LMFT License",
            value: licenseNumber,
          },
        }
      : {}),
    worksFor: { "@id": practiceId },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [business, person],
  };
}

/**
 * FAQPage structured data from a list of { q, a } items — eligible for FAQ rich
 * results. Use the same item list the <Faq> component renders.
 */
export function buildFaqJsonLd(items) {
  if (!items?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
