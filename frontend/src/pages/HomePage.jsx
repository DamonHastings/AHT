import { usePage } from "../hooks/usePage";
import PageRenderer from "../components/PageRenderer";
import SiteLayout from "../layouts/SiteLayout";
import { HeroSection } from "../design-system";
import {
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
      <HeroSection
        backgroundImage="/photos/IMG_0346.JPG"
        variant="organic"
        blobSide="left"
        overlay={null}
        kickerText="Expressive Arts Therapy · Davis, CA"
        heading="If reaching out was hard, I'm glad you landed here."
        headingEmphasis="glad you landed here."
        subheading="I'm an expressive arts therapist in Davis — warm and playful, and also willing to bring loving challenge when it helps. We can use movement, color, metaphor, making, and nature when they fit you; we can also talk it through. When you're ready, the next step is a free consultation so we can see if we're a good match."
        ctaText="Schedule a free consultation"
        primaryCtaHref="#contact"
        secondaryCtaText="Who I help →"
        secondaryCtaHref="/#audience-children"
        ctaVariant="accent"
        alignment="left"
        className="pt-[4.5rem]"
      />
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
