import { SiteNav, PageFooter } from "../design-system/site";

const DEFAULT_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
];

export default function SiteLayout({ children }) {
  return (
    <div
      className="site-theme min-h-screen overflow-x-hidden flex flex-col"
      style={{ background: "var(--warm-white)" }}
    >
      <SiteNav links={DEFAULT_LINKS} ctaHref="#contact" />
      <main className="flex-grow w-full">{children}</main>
      <PageFooter />
    </div>
  );
}
