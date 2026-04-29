import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { urlFor } from "../../utils/sanityClient";
import { useSiteSettings } from "../../hooks/useSiteSettings";
import Button from "../../design-system/Button";
import { CONTAINER } from "../../design-system/layout";

export default function Header({ therapist }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { siteSettings } = useSiteSettings();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navigation = siteSettings?.navigation;

  if (!therapist) return null;

  const getNavLink = (item) => {
    if (item.linkType === "anchor") {
      return item.anchor || `#${item.label.toLowerCase()}`;
    } else if (item.linkType === "internal") {
      // Special case: if internalPage is 'home', use root path
      const page = item.internalPage || "";
      if (page === "home") {
        return "/";
      }
      return page ? `/${page}` : "/";
    } else if (item.linkType === "external") {
      return item.externalUrl;
    }
    return "#";
  };

  const renderNavItem = (item, index, isMobile = false) => {
    const link = getNavLink(item);
    const commonClasses = isMobile
      ? "block py-3 px-6 font-medium text-therapy-burgundy-600 hover:bg-therapy-sand-50 transition-colors"
      : "font-medium";

    // Skip "Home" link
    if (item.label === "Home" || link === "/") {
      return null;
    }

    const handleClick = () => {
      if (isMobile) {
        setMobileMenuOpen(false);
      }
    };

    // External links
    if (item.linkType === "external") {
      return (
        <a
          key={index}
          href={link}
          className={commonClasses}
          target={item.openInNewTab ? "_blank" : undefined}
          rel={item.openInNewTab ? "noopener noreferrer" : undefined}
          onClick={handleClick}
        >
          {item.label}
        </a>
      );
    }

    // Anchor links (for same-page navigation)
    if (item.linkType === "anchor") {
      return (
        <a key={index} href={link} className={commonClasses} onClick={handleClick}>
          {item.label}
        </a>
      );
    }

    // Internal page links (use React Router Link)
    return (
      <Link key={index} to={link} className={commonClasses} onClick={handleClick}>
        {item.label}
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 left-5 right-5 z-50 md:rounded-b-[20px] transition-all duration-300 ${
        scrolled ? "bg-white/80 shadow-lg" : "bg-transparent shadow-none"
      }`}
    >
      <div className={CONTAINER}>
        <div className="py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <Link to="/" className="flex items-center space-x-3">
              {therapist.profileImage && (
                <img
                  src={urlFor(therapist.profileImage).width(50).height(50).url()}
                  alt={therapist.name}
                  className="rounded-full w-12 h-12 object-cover"
                />
              )}
              <div>
                <h1 className="text-xl font-semibold ">{therapist.name}</h1>
                {/* <p className="text-xs ">{therapist.credentials}</p> */}
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigation?.items ? (
                navigation.items.map((item, index) => renderNavItem(item, index))
              ) : (
                // Fallback navigation with page links (excluding Home)
                <>
                  <Link to="/about" className="font-medium">
                    About
                  </Link>
                  <Link to="/services" className="font-medium">
                    Services
                  </Link>
                  <a href="#contact" className="font-medium">
                    Contact
                  </a>
                </>
              )}

              {/* Book Consultation CTA */}
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Book Consultation
              </Button>
            </nav>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden p-2 text-therapy-burgundy-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pt-4 border-t border-therapy-sand-200">
              <div className="flex flex-col space-y-1">
                {navigation?.items ? (
                  navigation.items.map((item, index) => renderNavItem(item, index, true))
                ) : (
                  <>
                    <Link
                      to="/about"
                      className="block py-3 px-6 font-medium text-therapy-burgundy-600 hover:bg-therapy-sand-50 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About
                    </Link>
                    <Link
                      to="/services"
                      className="block py-3 px-6 font-medium text-therapy-burgundy-600 hover:bg-therapy-sand-50 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Services
                    </Link>
                    <a
                      href="#contact"
                      className="block py-3 px-6 font-medium text-therapy-burgundy-600 hover:bg-therapy-sand-50 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact
                    </a>
                  </>
                )}

                {/* Mobile CTA Button */}
                <div className="px-6 pt-4 pb-2">
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      const contactSection = document.querySelector("#contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Book Consultation
                  </Button>
                </div>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
