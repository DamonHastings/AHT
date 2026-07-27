import PropTypes from "prop-types";
import { trackEvent } from "../../utils/analytics";

/**
 * Investment / Insurance / Fees + Billing section. Private-pay / out-of-network
 * framing with two callouts — "why therapy is a good investment" and "how fees &
 * billing are handled" — plus an optional intro and a consult CTA. Copy is
 * editable via the Sanity feesBlock; rates are shared at the consultation.
 */
export default function Fees({
  eyebrow = "investment, insurance & billing",
  heading = "An investment in yourself — and the people in your life.",
  headingEmphasis = "in yourself",
  intro = "Therapy is an investment of time, energy, and money — and it can be one of the most worthwhile: a steadier relationship with yourself that ripples out to everyone around you.",
  whyInvestment = {
    title: "Why therapy is a good investment",
    body: "Working privately — rather than through insurance — keeps our work confidential and clinically driven by you and me, not by an insurer's requirements, diagnoses, or session caps. That means care that's flexible, personal, and paced to what you actually need, for as long (or short) as it serves you.",
  },
  feesBilling = {
    title: "How fees & billing are handled",
    body: "Session rates are shared during your free consultation. I'm an out-of-network provider and can provide a monthly superbill (a detailed receipt) you can submit to your insurance for possible partial reimbursement — check your plan for out-of-network mental health benefits. Payment methods are set at our first session, and a limited number of reduced-fee / sliding-scale spots are available; if cost is a barrier, please mention it when you reach out.",
  },
  sessionFee,
  contactEmail,
  contactPhone,
  ctaText = "Schedule a free consultation",
  ctaHref = "#contact",
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

  const callouts = [whyInvestment, feesBilling].filter((c) => c && (c.title || c.body));

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
        {intro && (
          <p className="site-body-copy text-base mb-10 max-w-[62ch]">{intro}</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {callouts.map((c, idx) => (
            <div
              key={idx}
              className="rounded-[20px] p-8 md:p-10"
              style={{ background: "var(--warm-white)", border: "1px solid rgba(57,67,79,0.08)" }}
            >
              <p
                className="site-ui-label mb-3"
                style={{ color: "var(--teal-deep)", fontStyle: "normal" }}
              >
                {c.title}
              </p>
              <p className="site-body-copy text-[0.98rem]">{c.body}</p>
              {idx === 1 && sessionFee && (
                <p className="site-heading text-lg mt-4" style={{ fontStyle: "normal" }}>
                  {sessionFee}
                </p>
              )}
            </div>
          ))}
        </div>

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

const calloutShape = PropTypes.shape({
  title: PropTypes.string,
  body: PropTypes.string,
});

Fees.propTypes = {
  eyebrow: PropTypes.string,
  heading: PropTypes.string,
  headingEmphasis: PropTypes.string,
  intro: PropTypes.string,
  whyInvestment: calloutShape,
  feesBilling: calloutShape,
  sessionFee: PropTypes.string,
  contactEmail: PropTypes.string,
  contactPhone: PropTypes.string,
  ctaText: PropTypes.string,
  ctaHref: PropTypes.string,
};
