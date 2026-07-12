import { useCallback, useState } from "react";
import { ConsultationModal, SiteNav, PageFooter } from "../design-system/site";
import {
  SITE_BRAND_CREDENTIAL,
  SITE_BRAND_LOCKUP,
  SITE_BRAND_NAME,
} from "../content/siteBrand";
import { useSiteSettings } from "../hooks/useSiteSettings";
import { trackEvent } from "../utils/analytics";

const NAV_LINKS = [
  { label: "Who I Help", href: "/#who-i-help" },
  { label: "Meet Arielle", href: "/#meet" },
  { label: "Contact", href: "#contact" },
];

export default function SiteLayout({ children }) {
  const { siteSettings } = useSiteSettings();
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const handleCloseConsultationModal = useCallback(() => {
    setIsConsultationModalOpen(false);
  }, []);

  const handleConsultationLinkClick = useCallback((event) => {
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
    if (href === "#contact" || href === "/#contact") {
      event.preventDefault();
      // Attribute the open to where the visitor clicked (nav CTA, footer link,
      // in-page button…) so we can see which entry points drive consultations.
      const source = link.dataset.analyticsSource || link.textContent?.trim() || "unknown";
      trackEvent("Consultation Started", { source });
      setIsConsultationModalOpen(true);
    }
  }, []);

  return (
    <div
      className="site-theme min-h-screen overflow-x-hidden flex flex-col"
      style={{ background: "var(--warm-white)" }}
      onClickCapture={handleConsultationLinkClick}
    >
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <SiteNav logoName={SITE_BRAND_LOCKUP} links={NAV_LINKS} ctaHref="/#contact" />
      <main id="main-content" className="flex-grow w-full">{children}</main>
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
    </div>
  );
}
