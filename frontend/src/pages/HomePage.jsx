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
  CTA,
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

  const canonical = canonicalFor("/");
  const ogImage = siteSettings?.ogImage
    ? urlFor(siteSettings.ogImage).width(1200).height(630).fit("crop").url()
    : undefined;
  const jsonLd = [
    buildPracticeJsonLd(siteSettings, { url: canonical, image: ogImage }),
    buildFaqJsonLd(DEFAULT_FAQ_ITEMS),
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
        <Faq />
        {/* <CTA /> */}
      </SiteLayout>
    </>
  );
}

const heroImage = responsiveImage("hero");
const meetImage = responsiveImage("meet");

function StaticHomeLayout() {
  return (
    <>
      <HeroSection
        backgroundImage={heroImage.src}
        blobImageSrcSet={heroImage.jpegSrcSet}
        blobImageWebpSrcSet={heroImage.webpSrcSet}
        blobImageSizes="(min-width: 1024px) 52vw, 100vw"
        priority
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
        secondaryCtaHref="/#who-i-help"
        ctaVariant="accent"
        alignment="left"
        className="pt-[4.5rem]"
      />
      <PullQuote />
      <WhoIHelp />
      <TheSpace />
      <ExpressiveArts />
      <Meet
        imageSrc={meetImage.src}
        imageSrcSet={meetImage.jpegSrcSet}
        imageWebpSrcSet={meetImage.webpSrcSet}
        imageSizes="(min-width: 1024px) 50vw, 100vw"
        imageAlt="Arielle Hastings, LMFT"
      />
      <FeelingsCheckIn />
    </>
  );
}
