import PropTypes from "prop-types";

/**
 * V3 Hero - split layout with animated composition
 * Left: kicker, heading, body, CTAs. Right: animated blob/circle composition.
 */
export default function HeroV3({
  kickerText = "Expressive Arts Therapy · Davis, CA",
  heading = "You don't have to find the words.",
  headingEmphasis = "words.",
  headingLines,
  body = "Therapy doesn't have to look like sitting still and explaining yourself. Together, we find another way in — through color, movement, making, and play — so that healing can happen even when language falls short.",
  primaryCtaText = "Start with a free consultation",
  primaryCtaHref = "#",
  secondaryCtaText = "How it works →",
  secondaryCtaHref = "#",
}) {
  return (
    <section
      className="min-h-screen grid grid-cols-1 lg:grid-cols-[55%_45%] pt-[4.5rem] relative overflow-hidden"
      style={{ background: "var(--linen)" }}
    >
      {/* Sheer window-light effect */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none z-[1]"
        style={{
          background: `linear-gradient(105deg,
            transparent 0%,
            rgba(255,255,255,0.15) 30%,
            rgba(255,255,255,0.42) 50%,
            rgba(255,255,255,0.15) 70%,
            transparent 100%)`,
        }}
      />

      <div className="flex flex-col justify-center px-6 md:px-12 lg:px-[5.5rem] py-12 lg:py-20 relative z-[2]">
        <div
          className="flex items-center gap-3 mb-6 opacity-0 animate-[rise_0.8s_ease_0.2s_both]"
          style={{ animationName: "rise" }}
        >
          <div className="w-8 h-[1.5px] bg-[var(--teal)]" />
          <span
            className="text-[0.72rem] tracking-[0.16em] uppercase font-medium"
            style={{ color: "var(--teal-deep)" }}
          >
            {kickerText}
          </span>
        </div>

        <h1
          className="font-serif text-3xl md:text-4xl lg:text-[clamp(2.6rem,4.5vw,4rem)] font-normal leading-[1.15] mb-8 opacity-0"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "var(--ink)",
            animation: "rise 0.8s ease 0.4s both",
          }}
        >
          {headingLines ? (
            <>
              {headingLines[0]}
              <br />
              {headingLines[1]?.replace(headingEmphasis, "")}
              <em style={{ fontStyle: "italic", color: "var(--terracotta)" }}>{headingEmphasis}</em>
            </>
          ) : (
            <>
              {heading.replace(headingEmphasis, "")}
              <em style={{ fontStyle: "italic", color: "var(--terracotta)" }}>{headingEmphasis}</em>
            </>
          )}
        </h1>

        <p
          className="text-[1.05rem] leading-[1.85] font-light max-w-[430px] mb-11 opacity-0"
          style={{ color: "var(--ink)", animation: "rise 0.8s ease 0.6s both" }}
        >
          {body}
        </p>

        <div
          className="flex gap-4 flex-wrap opacity-0"
          style={{ animation: "rise 0.8s ease 0.8s both" }}
        >
          <a
            href={primaryCtaHref}
            className="inline-block py-3.5 px-8 rounded-full text-[0.88rem] font-medium transition-all hover:-translate-y-0.5"
            style={{
              background: "var(--terracotta)",
              color: "white",
              fontFamily: "'Jost', sans-serif",
              textDecoration: "none",
              boxShadow: "0 6px 24px rgba(176,90,74,0.28)",
            }}
          >
            {primaryCtaText}
          </a>
          <a
            href={secondaryCtaHref}
            className="inline-block py-3.5 px-8 rounded-full text-[0.88rem] border-[1.5px] transition-colors"
            style={{
              background: "transparent",
              color: "var(--ink)",
              borderColor: "rgba(28,39,48,0.25)",
              fontFamily: "'Jost', sans-serif",
              textDecoration: "none",
            }}
          >
            {secondaryCtaText}
          </a>
        </div>
      </div>

      {/* Hero right: animated composition */}
      <div
        className="flex items-center justify-center py-12 lg:py-20 px-6 lg:pr-14 lg:pl-4 relative z-[2] opacity-0"
        style={{ animation: "rise 1.1s ease 0.6s both" }}
      >
        <HeroComposition />
      </div>
    </section>
  );
}

function HeroComposition() {
  return (
    <div className="relative w-[300px] h-[360px] lg:w-[380px] lg:h-[460px]">
      {/* Background blob */}
      <div
        className="absolute w-64 h-64 lg:w-80 lg:h-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[60%_40%_70%_30%/50%_60%_40%_50%]"
        style={{
          background:
            "radial-gradient(ellipse at 40% 40%, rgba(91,158,160,0.18) 0%, rgba(176,90,74,0.1) 55%, transparent 80%)",
          animation: "blobFloat 16s ease-in-out infinite",
        }}
      />

      {/* Orbiting circles */}
      <div
        className="absolute w-32 h-32 lg:w-[180px] lg:h-[180px] rounded-full border-2 border-[rgba(91,158,160,0.35)] top-12 left-16 lg:top-[60px] lg:left-20"
        style={{ animation: "spinSlow 22s linear infinite" }}
      />
      <div
        className="absolute w-24 h-24 lg:w-[110px] lg:h-[110px] rounded-full border-2 border-[rgba(176,90,74,0.3)] top-20 right-8 lg:top-24 lg:right-10"
        style={{ animation: "spinSlowRev 17s linear infinite" }}
      />
      <div
        className="absolute w-12 h-12 lg:w-[60px] lg:h-[60px] rounded-full border-2 border-[rgba(196,151,58,0.4)] bottom-24 left-12 lg:bottom-[120px] lg:left-14"
        style={{ animation: "spinSlow 13s linear infinite" }}
      />

      {/* Filled blobs */}
      <div
        className="absolute w-16 h-12 lg:w-[90px] lg:h-[70px] rounded-full opacity-55 top-12 right-12 lg:top-14 lg:right-14 blur-[2px]"
        style={{ background: "var(--teal)", animation: "orbitFloat 9s ease-in-out infinite" }}
      />
      <div
        className="absolute w-12 h-10 lg:w-[65px] lg:h-[55px] rounded-full opacity-45 bottom-28 right-10 lg:bottom-[130px] lg:right-12 blur-[1.5px]"
        style={{
          background: "var(--terracotta)",
          animation: "orbitFloat 12s ease-in-out infinite",
          animationDelay: "-4s",
        }}
      />

      {/* Crystal mobile */}
      <div
        className="absolute top-7 left-1/2 -translate-x-1/2 flex flex-col items-center"
        aria-hidden
      >
        {[
          { size: 14, color: "var(--terra-light)", delay: 0 },
          { line: true },
          { size: 10, color: "var(--teal)", delay: -1.2 },
          { line: true },
          { size: 16, color: "var(--gold)", delay: -2.4 },
          { line: true },
          { size: 8, color: "var(--mauve)", delay: -0.8 },
          { line: true },
          { size: 12, color: "var(--terra-light)", delay: -3 },
        ].map((item, i) =>
          item.line ? (
            <div key={i} className="w-px h-3 lg:h-4 bg-[rgba(196,151,58,0.3)] rounded-sm" />
          ) : (
            <div
              key={i}
              className="rounded-full flex-shrink-0"
              style={{
                width: item.size,
                height: item.size,
                background: item.color,
                animation: "gemSway 4s ease-in-out infinite",
                animationDelay: `${item.delay}s`,
              }}
            />
          )
        )}
      </div>

      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm opacity-40"
        style={{ fontFamily: "'Caveat', cursive", color: "var(--ink)" }}
      >
        a room that meets you where you are
      </div>
    </div>
  );
}

HeroV3.propTypes = {
  kickerText: PropTypes.string,
  heading: PropTypes.string,
  headingLines: PropTypes.arrayOf(PropTypes.string),
  headingEmphasis: PropTypes.string,
  body: PropTypes.string,
  primaryCtaText: PropTypes.string,
  primaryCtaHref: PropTypes.string,
  secondaryCtaText: PropTypes.string,
  secondaryCtaHref: PropTypes.string,
};
