/**
 * SEO helpers shared by page-level <Seo> usage.
 *
 * SITE_URL is used for canonical + og:url + JSON-LD @id/url. Set VITE_SITE_URL to
 * the production origin (e.g. https://www.example.com) at build time so the
 * prerendered HTML gets correct absolute URLs. If unset, canonical/url are omitted
 * rather than pointing at the prerender's localhost origin.
 */
export const SITE_URL = (import.meta.env.VITE_SITE_URL || "").replace(/\/$/, "");

export function canonicalFor(path = "/") {
  return SITE_URL ? `${SITE_URL}${path}` : undefined;
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
    seo,
  } = siteSettings;

  const practiceId = url ? `${url}#practice` : "#practice";
  const personName = seo?.author || "Arielle Hastings";

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
