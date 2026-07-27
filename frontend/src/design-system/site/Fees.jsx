import PropTypes from "prop-types";
import { PortableText } from "@portabletext/react";
import { sitePortableTextComponents } from "../../content/sitePortableText";
import { trackEvent } from "../../utils/analytics";

/**
 * Investment / Insurance / Fees + Billing section. Renders an editable set of
 * cards (title + rich-text body) plus an optional intro and a consult CTA. Cards
 * and their formatted copy are managed in the Sanity feesBlock (WYSIWYG). A card
 * `body` may be Portable Text (from Sanity) or a plain string (the defaults).
 */
export default function Fees({
  eyebrow = "investment, insurance & billing",
  heading = "An investment in yourself — and the people in your life.",
  headingEmphasis = "in yourself",
  intro = "Therapy is an investment of time, energy, and money — and it can be one of the most worthwhile: a steadier relationship with yourself that ripples out to everyone around you.",
  cards = [
    {
      title: "Why therapy is a good investment",
      body: "Working privately — rather than through insurance — keeps our work confidential and clinically driven by you and me, not by an insurer's requirements, diagnoses, or session caps. That means care that's flexible, personal, and paced to what you actually need, for as long (or short) as it serves you.",
    },
    {
      title: "How fees & billing are handled",
      body: "Session rates are shared during your free consultation. I'm an out-of-network provider and can provide a monthly superbill (a detailed receipt) you can submit to your insurance for possible partial reimbursement — check your plan for out-of-network mental health benefits. Payment methods are set at our first session, and a limited number of reduced-fee / sliding-scale spots are available; if cost is a barrier, please mention it when you reach out.",
    },
  ],
  contactEmail,
  contactPhone,
  ctaText = "Schedule a free consultation",
  ctaHref = "#book",
}) {
  const renderHeading = () => {
    if (!headingEmphasis || !heading.includes(headingEmphasis)) return heading;
    const [before, after] = heading.split(headingEmphasis);
    return (
      <>
        {before}
        <em style={{ color: "var(--terracotta)", fontStyle: "italic" }}>{headingEmphasis}</em>
        {after}
      </>
    );
  };

  const resolvedCards = (cards || []).filter((c) => c && (c.title || c.body));

  return (
    <section
      id="fees"
      className="scroll-mt-24 py-16 md:py-28 px-6 md:px-20 relative overflow-hidden"
      style={{ background: "var(--mist)" }}
    >
      <div className="max-w-[1100px] mx-auto">
        <span className="site-eyebrow block mb-2" style={{ color: "var(--terracotta)" }}>
          {eyebrow}
        </span>
        <h2 className="site-heading text-2xl md:text-3xl mb-4 max-w-[24ch]">{renderHeading()}</h2>
        {intro && <p className="site-body-copy text-base mb-10 max-w-[62ch]">{intro}</p>}

        {resolvedCards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {resolvedCards.map((c, idx) => (
              <div
                key={idx}
                className="rounded-[20px] p-8 md:p-10"
                style={{ background: "var(--warm-white)", border: "1px solid rgba(57,67,79,0.08)" }}
              >
                {c.title && (
                  <p
                    className="site-ui-label mb-3"
                    style={{ color: "var(--teal-deep)", fontStyle: "normal" }}
                  >
                    {c.title}
                  </p>
                )}
                <div className="site-fees-card-body text-[0.98rem]">
                  {Array.isArray(c.body) ? (
                    <PortableText value={c.body} components={sitePortableTextComponents} />
                  ) : (
                    <p className="site-body-copy text-[0.98rem]">{c.body}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA + contact */}
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-x-8 gap-y-4 flex-wrap">
          <a
            href={ctaHref}
            data-analytics-source="fees"
            className="site-button-text inline-flex items-center justify-center rounded-full px-7 py-3 text-[0.8rem] uppercase transition-all hover:-translate-y-px"
            style={{ background: "var(--terracotta)", color: "white", textDecoration: "none" }}
          >
            {ctaText}
          </a>
          {(contactPhone || contactEmail) && (
            <p className="site-body-copy text-[0.95rem]">
              Prefer to reach out directly?{" "}
              {contactPhone && (
                <a
                  href={`tel:${contactPhone.replace(/[^0-9+]/g, "")}`}
                  onClick={() => trackEvent("Phone Click", { source: "fees" })}
                  style={{ color: "var(--teal-deep)", textDecoration: "underline" }}
                >
                  {contactPhone}
                </a>
              )}
              {contactPhone && contactEmail && " · "}
              {contactEmail && (
                <a
                  href={`mailto:${contactEmail}`}
                  onClick={() => trackEvent("Email Click", { source: "fees" })}
                  style={{ color: "var(--teal-deep)", textDecoration: "underline" }}
                >
                  {contactEmail}
                </a>
              )}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

const cardShape = PropTypes.shape({
  title: PropTypes.string,
  // Portable Text array (Sanity) or a plain string (defaults).
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
});

Fees.propTypes = {
  eyebrow: PropTypes.string,
  heading: PropTypes.string,
  headingEmphasis: PropTypes.string,
  intro: PropTypes.string,
  cards: PropTypes.arrayOf(cardShape),
  contactEmail: PropTypes.string,
  contactPhone: PropTypes.string,
  ctaText: PropTypes.string,
  ctaHref: PropTypes.string,
};
