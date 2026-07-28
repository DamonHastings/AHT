import { useCallback, useEffect, useState } from "react";
import { ConsultationModal, ContactModal, SiteNav, PageFooter, MobileCtaBar } from "../design-system/site";
import {
  SITE_BRAND_CREDENTIAL,
  SITE_BRAND_LOCKUP,
  SITE_BRAND_NAME,
} from "../content/siteBrand";
import { useSiteSettings } from "../hooks/useSiteSettings";
import { trackEvent } from "../utils/analytics";

const NAV_LINKS = [
  { label: "Who I Help", href: "/#who-i-help" },
  { label: "The Approach", href: "/#the-approach" },
  { label: "Meet Arielle", href: "/#meet" },
  { label: "Fees", href: "/#fees" },
  { label: "Contact", href: "#contact" },
];

export default function SiteLayout({ children }) {
  const { siteSettings } = useSiteSettings();
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleCloseConsultationModal = useCallback(() => {
    setIsConsultationModalOpen(false);
  }, []);

  const handleCloseContactModal = useCallback(() => {
    setIsContactModalOpen(false);
  }, []);

  // Scroll to a hash anchor on first load. When arriving from outside the site
  // (e.g. a bookmark or a link to /#meet), the target section doesn't exist yet
  // while the page is fetching/rendering, so the browser's native jump finds
  // nothing. Poll for the element and keep re-aligning across a short settle
  // window — images loading above the target reflow the layout after the first
  // scroll — bailing out as soon as the visitor scrolls themselves. (scroll-mt
  // on the sections handles the fixed-nav offset.)
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.replace(/^#/, ""));
    if (!id) return undefined;

    let cancelled = false;
    let timer;
    const cleanup = () => {
      window.clearTimeout(timer);
      window.removeEventListener("wheel", onUserScroll);
      window.removeEventListener("touchmove", onUserScroll);
      window.removeEventListener("keydown", onUserScroll);
    };
    function onUserScroll() {
      cancelled = true;
      cleanup();
    }
    window.addEventListener("wheel", onUserScroll, { passive: true });
    window.addEventListener("touchmove", onUserScroll, { passive: true });
    window.addEventListener("keydown", onUserScroll);

    let attempts = 0;
    const tick = () => {
      if (cancelled) return;
      // Re-align on every tick (a no-op once the position has settled) so the
      // target stays anchored while the page finishes loading and reflowing.
      document.getElementById(id)?.scrollIntoView({ block: "start" });
      if (attempts++ < 30) {
        timer = window.setTimeout(tick, 100);
      } else {
        cleanup();
      }
    };
    timer = window.setTimeout(tick, 0);

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  // Intercept in-page anchor clicks and open the matching modal:
  //   #book  → consultation scheduler   |   #contact → standard contact form
  const handleModalLinkClick = useCallback((event) => {
    if (
      event.defaultPrevented ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const link = event.target.closest?.("a");
    if (!link) {
      return;
    }

    const href = link.getAttribute("href");
    const source = link.dataset.analyticsSource || link.textContent?.trim() || "unknown";

    if (href === "#book" || href === "/#book") {
      event.preventDefault();
      trackEvent("Consultation Started", { source });
      setIsConsultationModalOpen(true);
    } else if (href === "#contact" || href === "/#contact") {
      event.preventDefault();
      trackEvent("Contact Started", { source });
      setIsContactModalOpen(true);
    }
  }, []);

  return (
    <div
      className="site-theme min-h-screen overflow-x-hidden flex flex-col"
      style={{ background: "var(--warm-white)" }}
      onClickCapture={handleModalLinkClick}
    >
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <SiteNav logoName={SITE_BRAND_LOCKUP} links={NAV_LINKS} ctaHref="/#book" />
      <main id="main-content" className="flex-grow w-full">{children}</main>
      <MobileCtaBar ctaHref="/#book" />
      <PageFooter
        logoName={SITE_BRAND_NAME}
        logoSubtext={SITE_BRAND_CREDENTIAL}
        licenseNumber={siteSettings?.licenseNumber}
        supervisorInfo={siteSettings?.supervisorInfo}
        copyrightText={siteSettings?.copyrightText}
        address={siteSettings?.address}
        contactEmail={siteSettings?.contactEmail}
        contactPhone={siteSettings?.contactPhone}
      />
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={handleCloseConsultationModal}
        bookingUrl={siteSettings?.bookingUrl || import.meta.env.VITE_GOOGLE_BOOKING_URL}
      />
      <ContactModal isOpen={isContactModalOpen} onClose={handleCloseContactModal} />
    </div>
  );
}
