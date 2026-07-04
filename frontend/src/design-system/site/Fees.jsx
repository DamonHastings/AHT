import PropTypes from "prop-types";
import { trackEvent } from "../../utils/analytics";

/**
 * Fees / "Investment & fit" section. Private-pay / out-of-network framing with
 * superbill + sliding-scale notes. All copy is sourced from Sanity siteSettings.fees
 * so it stays editable; any blank field simply hides that line. Includes visible
 * contact details (phone/email) and a consult CTA.
 */
export default function Fees({
  eyebrow = "investment & fit",
  heading = "Straightforward about cost.",
  headingEmphasis = "cost.",
  sessionFee,
  consultNote = "Free 15-minute phone consultation",
  paymentNote = "I'm an out-of-network provider. I can provide a monthly superbill (a detailed receipt) you can submit to your insurance for possible partial reimbursement — check your plan for out-of-network mental health benefits.",
  slidingScaleNote = "A limited number of reduced-fee / sliding-scale spots are available. If cost is a barrier, please mention it when you reach out — we can talk it through.",
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
        <h2 className="site-heading text-2xl md:text-3xl mb-10 max-w-[24ch]">{renderHeading()}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Consultation + session fee */}
          <div
            className="rounded-[20px] p-8 md:p-10"
            style={{ background: "var(--warm-white)", border: "1px solid rgba(28,39,48,0.08)" }}
          >
            <p className="site-ui-label mb-2" style={{ color: "var(--teal-deep)", fontStyle: "normal" }}>
              first step
            </p>
            <p className="site-heading text-xl mb-1" style={{ fontStyle: "normal" }}>
              {consultNote}
            </p>
            <p className="site-body-copy text-[0.95rem] mb-6">
              A no-pressure chance to see if we&rsquo;re a good match before booking anything.
            </p>

            <p className="site-ui-label mb-2" style={{ color: "var(--teal-deep)", fontStyle: "normal" }}>
              ongoing sessions
            </p>
            <p className="site-heading text-xl" style={{ fontStyle: "normal" }}>
              {sessionFee || "Rates shared during your free consultation"}
            </p>
          </div>

          {/* Payment / insurance / sliding scale */}
          <div className="flex flex-col gap-6">
            {paymentNote && (
              <div
                className="rounded-[20px] p-7 md:p-8"
                style={{ background: "var(--warm-white)", border: "1px solid rgba(28,39,48,0.08)" }}
              >
                <p className="site-ui-label mb-2" style={{ color: "var(--teal-deep)", fontStyle: "normal" }}>
                  insurance
                </p>
                <p className="site-body-copy text-[0.95rem]">{paymentNote}</p>
              </div>
            )}
            {slidingScaleNote && (
              <div
                className="rounded-[20px] p-7 md:p-8"
                style={{ background: "var(--warm-white)", border: "1px solid rgba(28,39,48,0.08)" }}
              >
                <p className="site-ui-label mb-2" style={{ color: "var(--teal-deep)", fontStyle: "normal" }}>
                  if cost is a barrier
                </p>
                <p className="site-body-copy text-[0.95rem]">{slidingScaleNote}</p>
              </div>
            )}
          </div>
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

Fees.propTypes = {
  eyebrow: PropTypes.string,
  heading: PropTypes.string,
  headingEmphasis: PropTypes.string,
  sessionFee: PropTypes.string,
  consultNote: PropTypes.string,
  paymentNote: PropTypes.string,
  slidingScaleNote: PropTypes.string,
  contactEmail: PropTypes.string,
  contactPhone: PropTypes.string,
  ctaText: PropTypes.string,
  ctaHref: PropTypes.string,
};
