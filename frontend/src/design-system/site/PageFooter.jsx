import PropTypes from "prop-types";
import { studioUrl } from "../../utils/sanityClient";
import { trackEvent } from "../../utils/analytics";
import logoMarkKnockout from "../../assets/LogoMarkKnockout.svg";
import { SITE_BRAND_CREDENTIAL, SITE_BRAND_NAME } from "../../content/siteBrand";
import { formatCityState } from "../../content/siteContact";

/**
 * V3 Footer - dark ink footer with logo and links
 */
export default function PageFooter({
  logoName,
  logoSubtext,
  licenseNumber,
  supervisorInfo,
  copyrightText,
  address,
  contactEmail,
  contactPhone,
  info,
  links = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Good Faith Estimate", href: "/good-faith-estimate" },
    { label: "Contact", href: "#contact" },
  ],
}) {
  const name = logoName || SITE_BRAND_NAME;
  const subtext = logoSubtext || SITE_BRAND_CREDENTIAL;

  // Bottom-bar legal line: prefer an explicit `info`/`copyrightText` override,
  // otherwise compose "© {year} {name} · LMFT License #… · {supervisor}".
  const year = new Date().getFullYear();
  const legalLine =
    info ||
    copyrightText ||
    [
      `© ${year} ${name}`,
      licenseNumber ? `LMFT License #${licenseNumber}` : null,
      supervisorInfo || null,
    ]
      .filter(Boolean)
      .join("  ·  ");

  return (
    <footer
      className="px-6 md:px-20 pt-16 pb-9"
      style={{ background: "var(--ink)", color: "var(--linen)" }}
    >
      {/* Tier 1: brand lockup + labeled contact column */}
      <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-12">
        <div className="flex items-center gap-5">
          <img
            src={logoMarkKnockout}
            alt=""
            className="h-20 w-20 md:h-24 md:w-24 object-contain shrink-0"
          />
          <div>
            <div
              className="font-serif text-[1.5rem] leading-tight tracking-[-0.01em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {name}
            </div>
            <div className="site-eyebrow site-footer-label mt-1.5">{subtext}</div>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <div className="site-eyebrow site-footer-label">Contact</div>
          <div className="text-[0.9rem] leading-relaxed flex flex-col gap-0.5">
            <span className="site-footer-muted">{formatCityState(address)}</span>
            {contactPhone && (
              <a
                href={`tel:${contactPhone.replace(/[^0-9+]/g, "")}`}
                onClick={() => trackEvent("Phone Click", { source: "footer" })}
                className="site-footer-link"
              >
                {contactPhone}
              </a>
            )}
            {contactEmail && (
              <a
                href={`mailto:${contactEmail}`}
                onClick={() => trackEvent("Email Click", { source: "footer" })}
                className="site-footer-link"
              >
                {contactEmail}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Tier 2: legal line + links + de-emphasized admin action */}
      <div
        className="mt-12 pt-6 flex flex-col gap-5 md:flex-row md:items-center md:justify-between"
        style={{ borderTop: "1px solid rgba(244,240,232,0.12)" }}
      >
        <p className="site-footer-muted text-[0.78rem] leading-relaxed">{legalLine}</p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-analytics-source={
                link.href === "#contact" ? "footer" : undefined
              }
              className="site-ui-label site-footer-link"
            >
              {link.label}
            </a>
          ))}
          <a
            href={studioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="site-ui-label site-footer-admin inline-flex items-center gap-1.5"
            aria-label="Sign into Sanity to edit content"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Sign into Sanity
          </a>
        </div>
      </div>
    </footer>
  );
}

PageFooter.propTypes = {
  logoName: PropTypes.string,
  logoSubtext: PropTypes.string,
  licenseNumber: PropTypes.string,
  supervisorInfo: PropTypes.string,
  copyrightText: PropTypes.string,
  address: PropTypes.shape({
    city: PropTypes.string,
    state: PropTypes.string,
  }),
  contactEmail: PropTypes.string,
  contactPhone: PropTypes.string,
  info: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
};
