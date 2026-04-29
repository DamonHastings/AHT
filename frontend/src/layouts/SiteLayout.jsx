import { useCallback, useState } from "react";
import { ConsultationModal, SiteNav, PageFooter } from "../design-system/site";
import { useSiteSettings } from "../hooks/useSiteSettings";

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
      setIsConsultationModalOpen(true);
    }
  }, []);

  return (
    <div
      className="site-theme min-h-screen overflow-x-hidden flex flex-col"
      style={{ background: "var(--warm-white)" }}
      onClickCapture={handleConsultationLinkClick}
    >
      <SiteNav
        logoName={siteSettings?.title}
        links={[]}
        ctaHref="/#contact"
      />
      <main className="flex-grow w-full">{children}</main>
      <PageFooter />
      <ConsultationModal isOpen={isConsultationModalOpen} onClose={handleCloseConsultationModal} />
    </div>
  );
}
