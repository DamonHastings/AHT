import { useEffect } from "react";
import SiteLayout from "../layouts/SiteLayout";
import Seo from "../components/Seo";

export default function NotFoundPage() {
  // Let the prerenderer know this route is ready to snapshot.
  useEffect(() => {
    document.dispatchEvent(new Event("app-prerender-ready"));
  }, []);

  return (
    <>
      <Seo title="Page not found | Arielle Hastings, LMFT" />
      <SiteLayout>
        <section
          className="site-theme flex min-h-[60vh] flex-col items-center justify-center px-6 pt-32 pb-24 text-center"
          style={{ color: "var(--ink)" }}
        >
          <p className="site-eyebrow mb-3" style={{ color: "var(--terracotta)" }}>
            page not found
          </p>
          <h1 className="site-display text-4xl md:text-5xl mb-4">
            This page wandered off.
          </h1>
          <p className="site-body-copy mb-8 max-w-md">
            The page you&rsquo;re looking for doesn&rsquo;t exist or has moved. Let&rsquo;s get you
            back on track.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/"
              className="site-button-text rounded-full px-7 py-3 text-[0.8rem] uppercase transition-all hover:-translate-y-px"
              style={{ background: "var(--terracotta)", color: "white", textDecoration: "none" }}
            >
              Back to home
            </a>
            <a
              href="/#contact"
              className="site-ui-label"
              style={{ color: "var(--teal-deep)", textDecoration: "underline" }}
            >
              Book a free consultation
            </a>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
