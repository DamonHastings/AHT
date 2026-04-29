import { useCallback, useMemo, useState } from "react";
import { ConsultationModal, SiteNav, PageFooter } from "../design-system/site";
import { useSiteSettings } from "../hooks/useSiteSettings";

const DEFAULT_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
];

function getNavHref(item) {
  if (item.linkType === "anchor") {
    return item.anchor || `#${item.label?.toLowerCase() || ""}`;
  }

  if (item.linkType === "external") {
    return item.externalUrl || "#";
  }

  const slug =
    item.internalPageSlug ||
    (typeof item.internalPage === "string" ? item.internalPage : item.internalPage?.slug?.current) ||
    "";

  if (!slug || slug === "home") {
    return "/";
  }

  return `/${slug.replace(/^\/+/, "")}`;
}

function getNavLinks(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return DEFAULT_LINKS;
  }

  return items
    .filter((item) => item?.label)
    .map((item) => ({
      label: item.label,
      href: getNavHref(item),
      openInNewTab: item.linkType === "external" ? item.openInNewTab : false,
    }));
}

export default function SiteLayout({ children }) {
  const { siteSettings } = useSiteSettings();
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const links = useMemo(
    () => getNavLinks(siteSettings?.navigation?.items),
    [siteSettings?.navigation?.items],
  );
  const contactLink = links.find((link) => link.href === "#contact" || link.href === "/#contact");

  const handleCloseConsultationModal = useCallback(() => {
    setIsConsultationModalOpen(false);
  }, []);

  const handleConsultationLinkClick = useCallback((event) => {
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
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
        links={links}
        ctaHref={contactLink?.href || "/#contact"}
      />
      <main className="flex-grow w-full">{children}</main>
      <PageFooter />
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={handleCloseConsultationModal}
      />
    </div>
  );
}
