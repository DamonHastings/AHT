import PropTypes from "prop-types";

/**
 * V3 CTA - terracotta gradient section with consultation CTA
 */
export default function CTA({
  heading = "Curious if we're a fit?",
  headingEmphasis = "The first conversation is free.",
  subheading =
    "Most people reach out the same way you might have — email or voicemail after reading a profile. We'll schedule a short consultation (about 15 minutes), no commitment. Telehealth and in-person in Davis when available.",
  buttonText = "Schedule a free consultation",
  buttonHref = "#contact",
}) {
  return (
    <section
      id="contact"
      className="py-16 md:py-28 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 flex-wrap relative overflow-hidden"
      style={{
        background: "linear-gradient(120deg, var(--terracotta) 0%, #8A4035 100%)",
        color: "white",
      }}
    >
      {/* Ambient circles */}
      <div
        className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full -top-20 -right-14 opacity-[0.16]"
        style={{
          background: "rgba(255,255,255,0.9)",
          animation: "orbitFloat 10s ease-in-out infinite",
          animationDelay: "-2s",
        }}
        aria-hidden
      />
      <div
        className="absolute w-36 h-36 md:w-44 md:h-44 rounded-full border-2 border-white/35 -bottom-8 left-[40%]"
        style={{ background: "transparent", animation: "spinSlow 20s linear infinite" }}
        aria-hidden
      />

      <div>
        <h2
          className="site-heading text-3xl md:text-5xl max-w-[620px]"
        >
          {heading}
          <br />
          <em style={{ fontStyle: "italic", opacity: 0.7 }}>{headingEmphasis}</em>
        </h2>
        <p className="max-w-[680px] text-base leading-[1.7] opacity-80 font-normal mt-4">
          {subheading}
        </p>
      </div>

      <a
        href={buttonHref}
        data-analytics-source="cta-section"
        className="site-button-text inline-block py-4 px-10 rounded-full text-[0.92rem] whitespace-nowrap transition-all hover:-translate-y-0.5 relative z-10"
        style={{
          background: "white",
          color: "var(--terracotta)",
          textDecoration: "none",
          boxShadow: "0 8px 30px rgba(0,0,0,0.18)",
        }}
      >
        {buttonText}
      </a>
    </section>
  );
}

CTA.propTypes = {
  heading: PropTypes.string,
  headingEmphasis: PropTypes.string,
  subheading: PropTypes.string,
  buttonText: PropTypes.string,
  buttonHref: PropTypes.string,
};
