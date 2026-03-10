import { useState } from "react";
import PropTypes from "prop-types";

const DEFAULT_SWATCHES = [
  {
    color: "var(--terracotta)",
    feel: "overwhelmed",
    reply: "Overwhelmed makes sense. There's a lot. You don't have to sort it out alone.",
  },
  {
    color: "var(--teal)",
    feel: "okay-ish",
    reply: "Okay-ish is honest. And sometimes okay-ish is actually brave.",
  },
  {
    color: "var(--mauve)",
    feel: "numb",
    reply: "Numb is its own kind of hard. You're still here — that matters.",
  },
  {
    color: "var(--gold)",
    feel: "hopeful",
    reply: "Hopeful is a good place to begin. Let's build something from that.",
  },
  {
    color: "var(--terra-light)",
    feel: "tender",
    reply: "Tender means something is close to the surface. That's worth attending to.",
  },
  {
    color: "var(--navy)",
    feel: "lost",
    reply: "Lost is a real feeling. And sometimes what looks like lost is actually a beginning.",
  },
];

/**
 * V3 Feelings Check-In - interactive color swatches
 */
export default function FeelingsCheckInV3({
  eyebrow = "a moment for you",
  heading = "How are you feeling right now?",
  subheading = "Choose a color. No explanation needed.",
  swatches = DEFAULT_SWATCHES,
}) {
  const [picked, setPicked] = useState(null);
  const [reply, setReply] = useState("Choose a color above.");

  const handleClick = (s) => {
    setPicked(s.feel);
    setReply(s.reply);
  };

  return (
    <section
      className="py-16 md:py-24 px-6 md:px-20 text-center relative overflow-hidden"
      style={{ background: "var(--navy)", color: "var(--linen)" }}
    >
      {/* Ambient blobs */}
      <div
        className="absolute w-64 h-64 md:w-[280px] md:h-[280px] rounded-full -top-20 -left-20 opacity-[0.08]"
        style={{ background: "var(--teal)", animation: "blobFloat 14s ease-in-out infinite" }}
        aria-hidden
      />
      <div
        className="absolute w-48 h-48 md:w-[220px] md:h-[220px] rounded-full -bottom-14 -right-14 opacity-[0.1]"
        style={{
          background: "var(--terracotta)",
          animation: "blobFloat 14s ease-in-out infinite",
          animationDelay: "-6s",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-[640px] mx-auto">
        <span
          className="block mb-2 text-lg"
          style={{ fontFamily: "'Caveat', cursive", color: "var(--teal)" }}
        >
          {eyebrow}
        </span>
        <h2
          className="font-serif italic text-2xl md:text-3xl font-normal mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {heading}
        </h2>
        <p className="text-[0.9rem] opacity-55 mb-12 font-light">{subheading}</p>

        <div className="flex justify-center flex-wrap gap-5 mb-12">
          {swatches.map((s) => (
            <button
              key={s.feel}
              type="button"
              className="w-14 h-14 rounded-full border-[3px] border-transparent cursor-pointer transition-all duration-200 relative hover:scale-125 hover:shadow-[0_0_0_4px_rgba(253,251,247,0.3)] hover:border-white focus:outline-none focus:ring-2 focus:ring-white/50"
              style={{
                background: s.color,
                transform: picked === s.feel ? "scale(1.25)" : undefined,
                boxShadow: picked === s.feel ? "0 0 0 4px rgba(253,251,247,0.3)" : undefined,
                borderColor: picked === s.feel ? "white" : undefined,
              }}
              aria-label={`Feeling: ${s.feel}`}
              onClick={() => handleClick(s)}
            >
              <span
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.85rem] transition-opacity"
                style={{
                  fontFamily: "'Caveat', cursive",
                  color: "var(--linen)",
                  opacity: picked === s.feel ? 0.75 : 0,
                }}
              >
                {s.feel}
              </span>
            </button>
          ))}
        </div>

        <p
          className="font-serif italic text-xl leading-relaxed min-h-[3rem] transition-opacity duration-400"
          style={{
            fontFamily: "'Playfair Display', serif",
            opacity: 0.9,
          }}
        >
          {reply}
        </p>
      </div>
    </section>
  );
}

FeelingsCheckInV3.propTypes = {
  eyebrow: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  swatches: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      feel: PropTypes.string.isRequired,
      reply: PropTypes.string.isRequired,
    })
  ),
};
