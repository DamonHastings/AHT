import PropTypes from "prop-types";

/**
 * V3 CTA - terracotta gradient section with consultation CTA
 */
export default function CTA({
  heading = "Ready to find a different way in?",
  headingEmphasis = "The first conversation is free.",
  subheading = "15-minute consultations · No commitment · Telehealth & in-person available",
  buttonText = "Schedule a free consultation",
  buttonHref = "#",
}) {
  return (
    <section
      className="py-16 md:py-28 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 flex-wrap relative overflow-hidden"
      style={{
        background: "linear-gradient(120deg, var(--terracotta) 0%, #8A4035 100%)",
        color: "white",
      }}
    >
      {/* Ambient circles */}
      <div
        className="absolute w-48 h-48 md:w-60 md:h-60 rounded-full -top-20 -right-14 opacity-[0.07]"
        style={{
          background: "rgba(255,255,255,0.9)",
          animation: "orbitFloat 10s ease-in-out infinite",
          animationDelay: "-2s",
        }}
        aria-hidden
      />
      <div
        className="absolute w-32 h-32 md:w-36 md:h-36 rounded-full border-2 border-white/20 -bottom-8 left-[40%]"
        style={{ background: "transparent", animation: "spinSlow 20s linear infinite" }}
        aria-hidden
      />

      <div>
        <h2
          className="font-serif text-2xl md:text-4xl font-normal leading-tight max-w-[560px]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {heading}
          <br />
          <em style={{ fontStyle: "italic", opacity: 0.7 }}>{headingEmphasis}</em>
        </h2>
        <p className="text-base opacity-75 font-light mt-3">{subheading}</p>
      </div>

      <a
        href={buttonHref}
        className="inline-block py-4 px-10 rounded-full text-[0.9rem] font-medium whitespace-nowrap transition-all hover:-translate-y-0.5 relative z-10"
        style={{
          background: "white",
          color: "var(--terracotta)",
          fontFamily: "'Jost', sans-serif",
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
