import { usePage } from "../hooks/usePage";
import PageRenderer from "../components/PageRenderer";
import {
  NavV3,
  HeroV3,
  PullQuoteV3,
  WhoIHelpV3,
  TheSpaceV3,
  ExpressiveV3,
  MeetV3,
  FeelingsCheckInV3,
  CTAV3,
  FooterV3,
} from "../design-system/v3";

/**
 * V3 Home Page - implements therapist-homepage-v3.html design
 * Fetches from Sanity when page "home" exists with components; otherwise renders static layout
 */
export default function HomePageV3() {
  const { page, loading, error } = usePage("home");

  if (loading) {
    return (
      <div
        className="min-h-screen flex justify-center items-center v3-theme"
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
        className="min-h-screen flex justify-center items-center v3-theme"
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

  const hasV3Components =
    page?.components?.some((c) =>
      [
        "heroV3Component",
        "pullQuoteV3Component",
        "whoIHelpV3Component",
        "theSpaceV3Component",
        "expressiveV3Component",
        "meetV3Component",
        "feelingsCheckInV3Component",
        "ctaV3Component",
      ].includes(c._type)
    ) ?? false;

  const showSanityContent = page && hasV3Components;

  return (
    <div
      className="v3-theme min-h-screen overflow-x-hidden"
      style={{ background: "var(--warm-white)" }}
    >
      <NavV3 />
      <main>
        {showSanityContent ? (
          <PageRenderer pageData={page} showHeader={false} showFooter={false} />
        ) : (
          <>
            {import.meta.env.DEV && (!page || !hasV3Components) && (
              <div
                className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 p-4 rounded-lg shadow-lg text-sm"
                style={{
                  background: "var(--ink)",
                  color: "var(--warm-white)",
                }}
              >
                <strong>
                  {!page ? "No Sanity home page found." : "Home page has no V3 components."}
                </strong>{" "}
                {!page ? "To seed it:" : "Add V3 components in Studio, or re-seed:"}{" "}
                <code className="text-xs bg-white/20 px-1 rounded">
                  cd sanity && node seedV3Home.js
                </code>
                . Ensure the page is <strong>Published</strong> in Sanity Studio.
              </div>
            )}
            <StaticV3Layout />
          </>
        )}
      </main>
      <FooterV3 />
    </div>
  );
}

/** Static v3 layout when no Sanity page or no v3 components */
function StaticV3Layout() {
  return (
    <>
      <HeroV3 headingLines={["You don't have to", "find the words."]} />
      <PullQuoteV3 />
      <WhoIHelpV3 />
      <TheSpaceV3 />
      <ExpressiveV3 />
      <MeetV3 />
      <FeelingsCheckInV3 />
      <CTAV3 />
    </>
  );
}
