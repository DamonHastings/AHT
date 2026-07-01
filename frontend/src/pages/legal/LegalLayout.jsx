import PropTypes from "prop-types";
import SiteLayout from "../../layouts/SiteLayout";
import Seo from "../../components/Seo";
import { canonicalFor } from "../../utils/seo";
import { usePrerenderReady } from "../../utils/usePrerenderReady";

/**
 * Shared shell for static legal pages (Privacy Policy, Good Faith Estimate).
 * Wraps content in SiteLayout (nav + footer + consult modal) and a readable
 * prose column, and sets per-page <head> meta.
 */
export default function LegalLayout({ title, metaDescription, path, lastUpdated, children }) {
  usePrerenderReady(true);

  return (
    <>
      <Seo
        title={`${title} | Arielle Hastings, LMFT`}
        description={metaDescription}
        canonical={canonicalFor(path)}
      />
      <SiteLayout>
        <article
          className="site-theme site-prose mx-auto max-w-[42rem] px-6 pb-24 pt-32 md:pt-40"
          style={{ color: "var(--ink)" }}
        >
          <h1 className="site-display text-3xl md:text-4xl mb-3">{title}</h1>
          {lastUpdated && (
            <p className="site-ui-label mb-10" style={{ color: "var(--ink)", opacity: 0.55 }}>
              Last updated: {lastUpdated}
            </p>
          )}
          {children}
        </article>
      </SiteLayout>
    </>
  );
}

LegalLayout.propTypes = {
  title: PropTypes.string.isRequired,
  metaDescription: PropTypes.string,
  path: PropTypes.string,
  lastUpdated: PropTypes.string,
  children: PropTypes.node,
};
