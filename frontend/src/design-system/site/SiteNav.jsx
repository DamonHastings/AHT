import PropTypes from "prop-types";

/**
 * V3 Navigation - fixed top nav with logo, links, and CTA
 * Styled per therapist-homepage-v3.html
 */
export default function SiteNav({
  logoName = "[Practice Name]",
  links = [
    { label: "About", href: "#" },
    { label: "Who I Help", href: "#" },
    { label: "The Approach", href: "#" },
    { label: "Resources", href: "#" },
  ],
  ctaText = "Free Consultation",
  ctaHref = "#",
}) {
  return (
    <nav
      className="fixed inset-x-0 top-0 z-[200] flex justify-between items-center px-6 md:px-14 py-4"
      style={{
        background: "rgba(253,251,247,0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(91,158,160,0.15)",
      }}
    >
      <div className="flex flex-col">
        <span
          className="font-serif italic text-lg md:text-[1.2rem] tracking-[-0.01em]"
          style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
        >
          {logoName}
        </span>
        {/* <span
          className="text-[0.65rem] tracking-[0.14em] uppercase block mt-0.5"
          style={{ color: "var(--teal)", fontFamily: "var(--font-ui-condensed)", fontWeight: 400 }}
        >
          {logoSubtext}
        </span> */}
      </div>

      <ul className="hidden md:flex gap-10 list-none">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.openInNewTab ? "_blank" : undefined}
              rel={link.openInNewTab ? "noopener noreferrer" : undefined}
              className="site-ui-label transition-opacity hover:opacity-100"
              style={{
                color: "var(--ink)",
                opacity: 0.62,
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.color = "var(--teal-deep)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0.62";
                e.currentTarget.style.color = "var(--ink)";
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href={ctaHref}
        className="site-button-text rounded-full px-6 py-2.5 text-[0.8rem] uppercase transition-all hover:-translate-y-px"
        style={{
          background: "var(--terracotta)",
          color: "white",
          textDecoration: "none",
        }}
      >
        {ctaText}
      </a>
    </nav>
  );
}

SiteNav.propTypes = {
  logoName: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      openInNewTab: PropTypes.bool,
    }),
  ),
  ctaText: PropTypes.string,
  ctaHref: PropTypes.string,
};
