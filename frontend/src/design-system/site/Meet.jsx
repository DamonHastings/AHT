import PropTypes from "prop-types";

/**
 * V3 Meet - therapist profile with photo placeholder and credentials
 */
export default function Meet({
  eyebrow = "a little about me",
  heading = "Hi, I'm [Her Name] — and I became a therapist because I know what it's like to need a way through.",
  headingEmphasis = "[Her Name]",
  paragraphs = [
    "I trained at the California Institute of Integral Studies in San Francisco with a deep emphasis in Expressive Arts therapy — a field that treats creativity not as a nice-to-have, but as the center of healing.",
    "I work with children, teens, and women in Davis and the surrounding area. I'm also proud to work alongside SEED scholars at UC Davis — students who are doing something remarkable, often without a roadmap or a safety net.",
    "My practice is warm and playful, but also genuinely rigorous. I'll meet you where you are, I'll stay curious about who you are, and I genuinely believe that where you are right now is already a good place to start.",
  ],
  credentials = [
    "LMFT · Licensed 2024",
    "MA, CIIS San Francisco",
    "Expressive Arts Emphasis",
    "SEED Scholar Partner",
  ],
  badgeText = "LMFT\nDavis, CA",
  imageSrc,
  imageAlt,
}) {
  return (
    <section
      className="py-16 md:py-28 px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative overflow-hidden"
      style={{ background: "var(--linen)" }}
    >
      {/* Ambient mobile top-left */}
      <div
        className="absolute top-10 left-10 md:left-14 hidden md:flex flex-col items-center opacity-40 pointer-events-none"
        aria-hidden
      >
        <div
          className="w-2.5 h-2.5 rounded-full bg-[var(--teal)]"
          style={{ animation: "gemSway 6s ease-in-out infinite" }}
        />
        <div className="w-px h-4 bg-[rgba(196,151,58,0.35)]" />
        <div
          className="w-3.5 h-3.5 rounded-full bg-[var(--terra-light)]"
          style={{ animation: "gemSway 6s ease-in-out infinite", animationDelay: "-2s" }}
        />
        <div className="w-px h-4 bg-[rgba(196,151,58,0.35)]" />
        <div
          className="w-2 h-2 rounded-full bg-[var(--mauve)]"
          style={{ animation: "gemSway 6s ease-in-out infinite", animationDelay: "-4s" }}
        />
        <div className="w-px h-5 bg-[rgba(196,151,58,0.35)]" />
        <div
          className="w-3 h-3 rounded-full bg-[var(--gold)]"
          style={{ animation: "gemSway 6s ease-in-out infinite", animationDelay: "-1s" }}
        />
      </div>

      <div className="relative">
        <div
          className="rounded-t-[60px] rounded-b-xl aspect-[3/4] overflow-hidden flex items-center justify-center border-2 border-dashed border-[rgba(91,158,160,0.3)]"
          style={{
            background: "linear-gradient(145deg, var(--teal-pale) 0%, var(--terra-pale) 100%)",
          }}
        >
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt || "Therapist"}
              className="w-full h-full object-cover"
            />
          ) : (
            <span
              className="text-center p-4"
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "1.1rem",
                color: "var(--ink)",
                opacity: 0.45,
              }}
            >
              [ photo of therapist ]
            </span>
          )}
        </div>
        <div
          className="absolute -bottom-4 -right-4 w-24 h-24 md:w-[110px] md:h-[110px] rounded-full flex flex-col items-center justify-center text-center text-sm leading-snug text-white shadow-lg"
          style={{
            background: "var(--terracotta)",
            fontFamily: "'Caveat', cursive",
            boxShadow: "0 8px 24px rgba(176,90,74,0.35)",
          }}
        >
          {badgeText.split("\n").map((line, i) => (
            <span key={i}>{line}</span>
          ))}
        </div>
      </div>

      <div>
        <span
          className="block mb-2"
          style={{ fontFamily: "'Caveat', cursive", fontSize: "1.15rem", color: "var(--gold)" }}
        >
          {eyebrow}
        </span>
        <h2
          className="font-serif text-2xl md:text-3xl font-normal leading-snug mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {heading.replace(headingEmphasis, "")}
          <em style={{ fontStyle: "italic", color: "var(--terracotta)" }}>{headingEmphasis}</em>
        </h2>

        {paragraphs.map((p, idx) => (
          <p
            key={idx}
            className="text-base leading-[1.88] font-light mb-4"
            style={{ opacity: 0.82 }}
          >
            {p}
          </p>
        ))}

        <div className="flex flex-wrap gap-2 mt-8">
          {credentials.map((c, idx) => (
            <span
              key={idx}
              className="py-1 px-4 rounded-full text-[0.78rem] font-normal border-[1.5px]"
              style={{
                background: "white",
                borderColor: "rgba(91,158,160,0.3)",
                color: "var(--ink)",
                letterSpacing: "0.03em",
              }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

Meet.propTypes = {
  eyebrow: PropTypes.string,
  heading: PropTypes.string,
  headingEmphasis: PropTypes.string,
  paragraphs: PropTypes.arrayOf(PropTypes.string),
  credentials: PropTypes.arrayOf(PropTypes.string),
  badgeText: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
};
