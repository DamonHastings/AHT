import { useEffect } from "react";
import { usePage } from "../hooks/usePage";
import { useSiteSettings } from "../hooks/useSiteSettings";
import PageRenderer from "../components/PageRenderer";
import SiteLayout from "../layouts/SiteLayout";
import Seo from "../components/Seo";
import { responsiveImage } from "../utils/responsiveImage";
import { canonicalFor, buildPracticeJsonLd, buildFaqJsonLd } from "../utils/seo";
import { urlFor } from "../utils/sanityClient";
import { HeroSection } from "../design-system";
import {
  PullQuote,
  WhoIHelp,
  TheSpace,
  ExpressiveArts,
  Meet,
  FeelingsCheckIn,
  Faq,
} from "../design-system/site";
import { DEFAULT_FAQ_ITEMS } from "../content/faqDefaults";

const SITE_BLOCK_TYPES = new Set([
  "heroBlock",
  "pullQuoteBlock",
  "whoIHelpBlock",
  "theSpaceBlock",
  "expressiveArtsBlock",
  "meetBlock",
  "feelingsCheckInBlock",
  "faqBlock",
  "feesBlock",
  "ctaBlock",
  "proseSectionBlock",
  "spacerBlock",
]);

const DEFAULT_TITLE =
  "Expressive Arts Therapy in Davis, CA | Arielle Hastings, LMFT";
const DEFAULT_DESCRIPTION =
  "Warm, playful, collaborative expressive arts therapy in Davis, CA with Arielle Hastings, LMFT. Movement, art, metaphor, and talk for kids, teens, young adults, and parents. Book a free consultation.";

export default function HomePage() {
  const { page, loading } = usePage("home");
  const { siteSettings, loading: settingsLoading } = useSiteSettings();

  // Signal the build-time prerenderer that the page is fully resolved
  // (see renderAfterDocumentEvent in vite.config.js). Wait for BOTH the page
  // and site-settings fetches so the snapshot includes the JSON-LD / OG image.
  // Fires on success, the static fallback, or error — so prerender never hangs.
  useEffect(() => {
    if (!loading && !settingsLoading) {
      document.dispatchEvent(new Event("app-prerender-ready"));
    }
  }, [loading, settingsLoading]);

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

  // Note: a Sanity fetch error is not surfaced as a full-screen error here.
  // When `page` is null (error or missing), we fall back to StaticHomeLayout —
  // the complete hardcoded marketing page — so the site stays up if the CMS is
  // unreachable and the build-time prerender always captures real content.
  const hasSiteBlocks =
    page?.components?.some((c) => SITE_BLOCK_TYPES.has(c._type)) ?? false;

  const showSanityContent = page && hasSiteBlocks;

  // FAQ is a Sanity block when authored; otherwise the hardcoded <Faq/> fallback
  // (below) renders the defaults. Keep both the render and the JSON-LD in sync.
  const faqComponent = page?.components?.find((c) => c._type === "faqBlock");
  const hasFaqBlock = Boolean(faqComponent);
  const faqItems = faqComponent?.items?.length
    ? faqComponent.items.map((it) => ({ q: it.question, a: it.answer }))
    : DEFAULT_FAQ_ITEMS;

  const canonical = canonicalFor("/");
  const ogImage = siteSettings?.ogImage
    ? urlFor(siteSettings.ogImage).width(1200).height(630).fit("crop").url()
    : undefined;
  const jsonLd = [
    buildPracticeJsonLd(siteSettings, { url: canonical, image: ogImage }),
    buildFaqJsonLd(faqItems),
  ];

  return (
    <>
      <Seo
        title={page?.metaTitle || DEFAULT_TITLE}
        description={page?.metaDescription || DEFAULT_DESCRIPTION}
        image={ogImage}
        canonical={canonical}
        jsonLd={jsonLd}
      />
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
        {!hasFaqBlock && <Faq />}
      </SiteLayout>
    </>
  );
}

const headshotImage = responsiveImage("meet");
const backgroundImage = responsiveImage("background");
const exaImages = [
  responsiveImage("exa1"),
  responsiveImage("exa2"),
  responsiveImage("exa3"),
];

function StaticHomeLayout() {
  return (
    <>
      <HeroSection
        blobImage={headshotImage.src}
        blobImageSrcSet={headshotImage.jpegSrcSet}
        blobImageWebpSrcSet={headshotImage.webpSrcSet}
        blobImageSizes="(min-width: 1024px) 22rem, 60vw"
        priority
        variant="organic"
        compact
        overlay={null}
        kickerText="Expressive Arts Therapy · Davis, CA"
        heading="THERAPEUTIC SUPPORT TO HELP SEE A WAY THROUGH"
        headingEmphasis="THERAPEUTIC SUPPORT"
        subheading="Warm, relational, and creative psychotherapy in Davis — for role transitions, loss and grief, anxiety, and life alongside parenthood."
        heroLinks={[
          { label: "More about me", href: "#meet" },
          { label: "More about my approach", href: "#the-approach" },
        ]}
        alignment="left"
        className="pt-[4.5rem]"
      />
      <PullQuote />
      <WhoIHelp />
      <TheSpace />
      <ExpressiveArts images={exaImages} />
      <Meet
        imageSrc={backgroundImage.src}
        imageSrcSet={backgroundImage.jpegSrcSet}
        imageWebpSrcSet={backgroundImage.webpSrcSet}
        imageSizes="(min-width: 1024px) 50vw, 100vw"
        imageAlt="A garden in golden light — the environment that shapes the work"
      />
      <FeelingsCheckIn />
    </>
  );
}
