import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { CONTAINER } from "./layout";

export default function Footer({
  businessName = "Arielle Hastings Psychotherapy",
  copyrightText = "© 2026 Arielle Hastings, LMFT. All Rights Reserved.",
  navigationLinks = [],
  socialLinks = [],
  className = "",
}) {
  return (
    <footer className={`bg-white border-t border-therapy-sand-200 ${className}`}>
      <div className={`${CONTAINER} py-12`}>
        {/* Top section: Logo and Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Logo and Business Name */}
          <div className="flex items-center gap-3">
            <Logo size="sm" />
            <span className="text-therapy-burgundy-700 font-medium text-lg">{businessName}</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {navigationLinks.map((link, index) => {
              const isInternal = link.url.startsWith("/") && !link.url.startsWith("//");
              const isAnchor = link.url.startsWith("#");

              if (isInternal && !isAnchor) {
                return (
                  <Link
                    key={index}
                    to={link.url}
                    className="text-therapy-burgundy-600 hover:text-therapy-burgundy-700 transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                );
              }

              if (isAnchor) {
                return (
                  <a
                    key={index}
                    href={link.url}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.url)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-therapy-burgundy-600 hover:text-therapy-burgundy-700 transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <a
                  key={index}
                  href={link.url}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-therapy-burgundy-600 hover:text-therapy-burgundy-700 transition-colors font-medium"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Social Media Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full border-2 border-therapy-burgundy-300 flex items-center justify-center text-therapy-burgundy-600 hover:bg-therapy-burgundy-600 hover:text-white hover:border-therapy-burgundy-600 transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-therapy-sand-200 mb-6"></div>

        {/* Copyright */}
        <div className="text-center text-slate-600 text-sm">{copyrightText}</div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  businessName: PropTypes.string,
  copyrightText: PropTypes.string,
  navigationLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      external: PropTypes.bool,
    })
  ),
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.node,
    })
  ),
  className: PropTypes.string,
};
