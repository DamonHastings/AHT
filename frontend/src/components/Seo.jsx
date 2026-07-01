import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

/**
 * Per-page document head: title, meta description, Open Graph / Twitter tags,
 * canonical URL, and optional JSON-LD structured data. Driven by react-helmet-async
 * (HelmetProvider is installed in main.jsx) and captured at build time by the
 * prerender step so crawlers/social scrapers see real tags in the initial HTML.
 */
export default function Seo({ title, description, image, canonical, jsonLd }) {
  // Accept a single JSON-LD object or an array of them (e.g. LocalBusiness + FAQPage).
  const jsonLdBlocks = (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).filter(Boolean);

  return (
    <Helmet prioritizeSeoTags>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      {canonical && <meta property="og:url" content={canonical} />}

      {/* Twitter */}
      <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}

      {jsonLdBlocks.map((block, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  );
}

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  canonical: PropTypes.string,
  jsonLd: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
