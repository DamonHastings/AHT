import { usePage } from "../hooks/usePage";
import PageRenderer from "../components/PageRenderer";
import SiteLayout from "../layouts/SiteLayout";
import {
  Hero,
  PullQuote,
  WhoIHelp,
  TheSpace,
  ExpressiveArts,
  Meet,
  FeelingsCheckIn,
  CTA,
} from "../design-system/site";

const SITE_BLOCK_TYPES = new Set([
  "heroBlock",
  "pullQuoteBlock",
  "whoIHelpBlock",
  "theSpaceBlock",
  "expressiveArtsBlock",
  "meetBlock",
  "feelingsCheckInBlock",
  "ctaBlock",
  "proseSectionBlock",
  "spacerBlock",
]);

export default function HomePage() {
  const { page, loading, error } = usePage("home");

  if (loading) {
    return (
      <div
        className="min-h-screen flex justify-center items-center site-theme"
        style={{ background: "var(--warm-white)" }}
      >
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-[var(--teal)] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p style={{ color: "var(--ink)" }}>Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="min-h-screen flex justify-center items-center site-theme"
        style={{ background: "var(--warm-white)" }}
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4" style={{ color: "var(--terracotta)" }}>
            Error Loading Page
          </h1>
          <p style={{ color: "var(--ink)" }}>{error}</p>
        </div>
      </div>
    );
  }

  const hasSiteBlocks =
    page?.components?.some((c) => SITE_BLOCK_TYPES.has(c._type)) ?? false;

  const showSanityContent = page && hasSiteBlocks;

  return (
    <SiteLayout>
      {showSanityContent ? (
        <PageRenderer pageData={page} variant="bare" />
      ) : (
        <>
          {import.meta.env.DEV && (!page || !hasSiteBlocks) && (
            <div
              className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 p-4 rounded-lg shadow-lg text-sm"
              style={{
                background: "var(--ink)",
                color: "var(--warm-white)",
              }}
            >
              <strong>
                {!page ? "No Sanity home page found." : "Home page has no site blocks."}
              </strong>{" "}
              {!page ? "To seed it:" : "Add blocks in Studio, or re-seed:"}{" "}
              <code className="text-xs bg-white/20 px-1 rounded">cd sanity && npm run seed-home</code>
              . Ensure the page is <strong>Published</strong> in Sanity Studio.
            </div>
          )}
          <StaticHomeLayout />
        </>
      )}
    </SiteLayout>
  );
}

function StaticHomeLayout() {
  return (
    <>
      <Hero headingLines={["You don't have to", "find the words."]} />
      <PullQuote />
      <WhoIHelp />
      <TheSpace />
      <ExpressiveArts />
      <Meet />
      <FeelingsCheckIn />
      <CTA />
    </>
  );
}
