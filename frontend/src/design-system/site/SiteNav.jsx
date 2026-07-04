import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import logoMarkTeal from "../../assets/LogoMarkTeal.svg";
import { SITE_BRAND_LOCKUP } from "../../content/siteBrand";

/**
 * V3 Navigation - fixed top nav with logo, links, and CTA.
 * Desktop shows inline links + CTA; below md the links collapse into a
 * hamburger-triggered drawer so mobile visitors can still navigate.
 * Styled per therapist-homepage-v3.html
 */
export default function SiteNav({
  logoName = SITE_BRAND_LOCKUP,
  links = [
    { label: "About", href: "#" },
    { label: "Who I Help", href: "#" },
    { label: "The Approach", href: "#" },
    { label: "Resources", href: "#" },
  ],
  ctaText = "Free Consultation",
  ctaHref = "#",
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef(null);

  // Split "Arielle Rae Hastings, LMFT" into name + credential so the credential
  // can render as a smaller eyebrow beneath the name. No comma → single line.
  const commaIndex = logoName.lastIndexOf(",");
  const logoDisplayName =
    commaIndex === -1 ? logoName : logoName.slice(0, commaIndex).trim();
  const logoCredential =
    commaIndex === -1 ? "" : logoName.slice(commaIndex + 1).trim();

  // While the drawer is open: lock body scroll, close on Escape, and close if
  // the viewport grows past the md breakpoint (drawer is mobile-only).
  useEffect(() => {
    if (!menuOpen) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const mq = window.matchMedia("(min-width: 768px)");
    const handleViewport = (event) => {
      if (event.matches) setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    mq.addEventListener("change", handleViewport);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      mq.removeEventListener("change", handleViewport);
      // Return focus to the toggle for keyboard users.
      toggleRef.current?.focus();
    };
  }, [menuOpen]);

  const linkStyle = {
    color: "var(--ink)",
    opacity: 0.75,
    textDecoration: "none",
  };
  const handleLinkEnter = (e) => {
    e.currentTarget.style.opacity = "1";
    e.currentTarget.style.color = "var(--teal-deep)";
  };
  const handleLinkLeave = (e) => {
    e.currentTarget.style.opacity = "0.75";
    e.currentTarget.style.color = "var(--ink)";
  };

  return (
    <>
    <nav
      className="fixed inset-x-0 top-0 z-[200] flex justify-between items-center px-6 md:px-14 py-4"
      style={{
        background: "rgba(253,251,247,0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(91,158,160,0.15)",
      }}
    >
      <a
        href="/"
        className="flex items-center gap-3 md:gap-3.5 no-underline shrink-0"
        aria-label={logoName}
      >
        <img
          src={logoMarkTeal}
          alt=""
          // Sized to roughly match the height of the stacked wordmark so the
          // emblem reads as a peer to the name, not an oversized badge.
          className="h-11 w-11 md:h-14 md:w-14 object-contain shrink-0"
        />
        {/* Split "Name, CREDENTIAL" into a two-line lockup: the name leads and
            the credential sits beneath it as a small letter-spaced eyebrow.
            Falls back to a single line when there's no comma. */}
        <span className="flex flex-col leading-[1.05]">
          <span
            className="font-serif text-xl md:text-[1.55rem] tracking-[-0.01em]"
            style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
          >
            {logoDisplayName}
          </span>
          {logoCredential && (
            <span
              className="site-eyebrow mt-1 text-[0.62rem] md:text-[0.68rem]"
              style={{ color: "var(--teal-deep)" }}
            >
              {logoCredential}
            </span>
          )}
        </span>
      </a>

      <ul className="hidden md:flex gap-10 list-none">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.openInNewTab ? "_blank" : undefined}
              rel={link.openInNewTab ? "noopener noreferrer" : undefined}
              className="site-ui-label transition-opacity hover:opacity-100"
              style={linkStyle}
              onMouseEnter={handleLinkEnter}
              onMouseLeave={handleLinkLeave}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href={ctaHref}
        data-analytics-source="nav"
        className="site-button-text hidden md:inline-block rounded-full px-6 py-2.5 text-[0.8rem] uppercase transition-all hover:-translate-y-px"
        style={{
          background: "var(--terracotta)",
          color: "white",
          textDecoration: "none",
        }}
      >
        {ctaText}
      </a>

      {/* Mobile hamburger — hidden at md and up where inline nav takes over. */}
      <button
        ref={toggleRef}
        type="button"
        className="md:hidden flex h-11 w-11 items-center justify-center rounded-full border transition hover:-translate-y-px"
        style={{
          borderColor: "rgba(91,158,160,0.25)",
          background: "rgba(255,255,255,0.6)",
          color: "var(--ink)",
        }}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-nav-panel"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          aria-hidden="true"
        >
          {menuOpen ? (
            <>
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </>
          )}
        </svg>
      </button>
    </nav>

      {/* Mobile drawer — rendered as a sibling of <nav> (not a child) so the
          nav's backdrop-filter doesn't become its containing block and clip it. */}
      {menuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden fixed inset-0 top-[64px] z-[150] flex flex-col px-6 pt-6 pb-10"
          style={{
            background: "rgba(253,251,247,0.98)",
            backdropFilter: "blur(16px)",
            animation: "fadeInPanel 0.22s ease",
          }}
        >
          <ul className="flex flex-col gap-1 list-none">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.openInNewTab ? "_blank" : undefined}
                  rel={link.openInNewTab ? "noopener noreferrer" : undefined}
                  className="site-ui-label block py-4 text-[1.05rem] border-b transition-opacity"
                  style={{
                    color: "var(--ink)",
                    textDecoration: "none",
                    borderColor: "rgba(91,158,160,0.15)",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={ctaHref}
            data-analytics-source="nav-mobile"
            className="site-button-text mt-8 block rounded-full px-6 py-4 text-center text-[0.85rem] uppercase transition-all hover:-translate-y-px"
            style={{
              background: "var(--terracotta)",
              color: "white",
              textDecoration: "none",
            }}
            onClick={() => setMenuOpen(false)}
          >
            {ctaText}
          </a>
        </div>
      )}
    </>
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
