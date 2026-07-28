import { useEffect, useState } from "react";
import PropTypes from "prop-types";

/**
 * Persistent bottom "book" bar for small screens only (md:hidden). The homepage
 * is a long scroll and the header CTA lives behind the hamburger, so this keeps
 * the primary action one tap away throughout the page.
 *
 * The link points at #book, which SiteLayout's onClickCapture handler intercepts
 * to open the consultation modal (same path as every other "book" CTA).
 *
 * Visibility: appears once the visitor scrolls past the hero, and retracts near
 * the very bottom so it never sits on top of the footer's own closing CTA.
 */
export default function MobileCtaBar({ ctaText = "Book a free consultation", ctaHref = "/#book" }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const nearBottom =
        window.innerHeight + y >= document.body.scrollHeight - 220;
      // Show after clearing the hero (~one screen) but not once the closing
      // CTA / footer is in view.
      setVisible(y > 560 && !nearBottom);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      className="md:hidden fixed inset-x-0 bottom-0 z-[120] px-4 pt-3 transition-all duration-300"
      style={{
        paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))",
        background:
          "linear-gradient(to top, rgba(253,251,247,0.98) 55%, rgba(253,251,247,0))",
        transform: visible ? "translateY(0)" : "translateY(120%)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
      aria-hidden={!visible}
    >
      <a
        href={ctaHref}
        data-analytics-source="mobile-sticky-cta"
        className="site-button-text flex items-center justify-center rounded-full px-6 py-4 text-[0.85rem] uppercase no-underline shadow-lg"
        style={{ background: "var(--terracotta)", color: "white" }}
        tabIndex={visible ? 0 : -1}
      >
        {ctaText}
      </a>
    </div>
  );
}

MobileCtaBar.propTypes = {
  ctaText: PropTypes.string,
  ctaHref: PropTypes.string,
};
