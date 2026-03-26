import { usePage } from "../hooks/usePage";
import PageRenderer from "../components/PageRenderer";
import SiteLayout from "../layouts/SiteLayout";

export default function Page({ slug }) {
  const { page, loading, error } = usePage(slug);

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center site-theme"
        style={{ background: "var(--warm-white)" }}
      >
        <div className="text-center">
          <div
            className="animate-spin rounded-full h-12 w-12 border-2 mx-auto mb-4"
            style={{ borderColor: "var(--teal)", borderTopColor: "transparent" }}
          />
          <p style={{ color: "var(--ink)" }}>Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="min-h-screen flex items-center justify-center site-theme"
        style={{ background: "var(--warm-white)" }}
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 font-serif" style={{ color: "var(--terracotta)" }}>
            Error Loading Page
          </h1>
          <p style={{ color: "var(--ink)" }}>{error}</p>
        </div>
      </div>
    );
  }

  if (!page) {
    return (
      <SiteLayout>
        <div className="min-h-[50vh] flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 font-serif" style={{ color: "var(--ink)" }}>
              404
            </h1>
            <p className="mb-6" style={{ color: "var(--ink)" }}>
              Page not found
            </p>
            <a
              href="/"
              className="inline-block rounded-full px-8 py-3 text-sm font-medium transition-opacity hover:opacity-90"
              style={{ background: "var(--terracotta)", color: "white", textDecoration: "none" }}
            >
              Go Home
            </a>
          </div>
        </div>
      </SiteLayout>
    );
  }

  const first = page.components?.[0];
  const needsTopPad = first && first._type !== "heroBlock";

  return (
    <SiteLayout>
      <div className={needsTopPad ? "pt-[4.5rem]" : undefined}>
        <PageRenderer pageData={page} variant="bare" />
      </div>
    </SiteLayout>
  );
}
