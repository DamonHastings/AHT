import PropTypes from "prop-types";
import { studioUrl } from "../../utils/sanityClient";

/**
 * V3 Footer - dark ink footer with logo and links
 */
export default function PageFooter({
  logoName = "[Practice Name]",
  logoSubtext = "Licensed Marriage & Family Therapist",
  info = "Davis, CA · Serving Yolo County & UC Davis\nLMFT License #[000000] · Supervised by [Supervisor Name], LMFT #[000000]",
  links = [
    { label: "Privacy Policy", href: "#" },
    { label: "Good Faith Estimate", href: "#" },
    { label: "Contact", href: "#" },
  ],
}) {
  return (
    <footer
      className="py-14 px-6 md:px-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 flex-wrap"
      style={{ background: "var(--ink)", color: "var(--linen)" }}
    >
      <div>
        <span
          className="font-serif italic text-[1.15rem]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {logoName}
        </span>
        <small
          className="block font-normal text-[0.68rem] tracking-[0.14em] uppercase opacity-40 mt-1"
          style={{ fontFamily: "'Jost', sans-serif", fontStyle: "normal" }}
        >
          {logoSubtext}
        </small>
      </div>

      <div className="text-[0.8rem] leading-[1.9] opacity-40" style={{ whiteSpace: "pre-line" }}>
        {info}
      </div>

      <ul className="flex flex-wrap gap-8 list-none items-center">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-[0.74rem] tracking-[0.1em] uppercase transition-opacity hover:opacity-100"
              style={{
                color: "var(--linen)",
                opacity: 0.38,
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href={studioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[0.74rem] tracking-[0.1em] uppercase transition-opacity hover:opacity-100"
            style={{
              color: "var(--linen)",
              opacity: 0.38,
              textDecoration: "none",
            }}
            aria-label="Sign into Sanity to edit content"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Sign into Sanity
          </a>
        </li>
      </ul>
    </footer>
  );
}

PageFooter.propTypes = {
  logoName: PropTypes.string,
  logoSubtext: PropTypes.string,
  info: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
};
