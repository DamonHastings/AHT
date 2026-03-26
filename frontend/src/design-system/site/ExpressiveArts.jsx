import PropTypes from "prop-types";

/**
 * V3 Expressive Arts - modalities list + quote blocks
 */
export default function ExpressiveArts({
  eyebrow = "the approach",
  heading = "Therapy that makes something with the mess.",
  paragraphs = [
    "Expressive Arts therapy is an evidence-informed approach that weaves together multiple creative modalities — not because you need to be an artist, but because the body, the imagination, and the hands sometimes know things the mind hasn't caught up to yet.",
    "You might draw what you can't say. Write a letter you'll never send. Move through something instead of sitting still with it. The form follows what you need.",
  ],
  modalities = [
    { name: "Drawing & painting", detail: "for what has no shape yet" },
    { name: "Sandtray play", detail: "especially for children & teens" },
    { name: "Movement & embodiment", detail: "what the body holds" },
    { name: "Writing & poetry", detail: "finding language sideways" },
    { name: "Music & sound", detail: "rhythm as regulation" },
    { name: "Drama & storytelling", detail: "new ways to hold old stories" },
  ],
  quotes = [
    {
      text: "I kept thinking therapy wasn't for me — I'm not good at talking about myself. Turns out I'm really good at drawing what I feel. That was the door I needed.",
      attrib: "— Teen, age 15",
    },
    {
      text: "My daughter went from dreading Mondays to asking to go. I don't know exactly what happens in that room, but she comes home lighter.",
      attrib: "— Parent of a 10-year-old",
    },
    {
      text: "She gets what it means to be first-gen. I've never had to explain the whole context before. We just started from where I actually was.",
      attrib: "— SEED Scholar, UC Davis",
    },
  ],
}) {
  return (
    <section className="py-16 md:py-28 px-6 md:px-20 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start relative">
      {/* Orbiting circles */}
      <div className="absolute top-20 right-4 hidden lg:block pointer-events-none" aria-hidden>
        <div className="relative w-[100px] h-[100px]">
          <div
            className="absolute w-[90px] h-[90px] rounded-full border-[1.5px] border-[rgba(91,158,160,0.25)]"
            style={{ animation: "spinSlow 18s linear infinite" }}
          />
          <div
            className="absolute w-[55px] h-[55px] rounded-full border-[1.5px] border-[rgba(176,90,74,0.2)] top-[17.5px] left-[17.5px]"
            style={{ animation: "spinSlowRev 12s linear infinite" }}
          />
          <div
            className="absolute w-6 h-6 rounded-full bg-[rgba(196,151,58,0.2)] top-8 left-8"
            style={{ animation: "orbitFloat 6s ease-in-out infinite" }}
          />
        </div>
      </div>

      <div>
        <span
          className="block mb-2"
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: "1.15rem",
            color: "var(--terracotta)",
          }}
        >
          {eyebrow}
        </span>
        <h2
          className="font-serif text-xl md:text-2xl font-normal leading-snug mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {heading}
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

        <div className="mt-8 flex flex-col">
          {modalities.map((m, idx) => (
            <div
              key={idx}
              className="py-4 border-b border-[rgba(28,39,48,0.08)] flex justify-between items-center text-[0.95rem] cursor-default transition-colors hover:text-[var(--teal-deep)]"
            >
              <span className="font-normal">{m.name}</span>
              <span
                className="text-base"
                style={{
                  fontFamily: "'Caveat', cursive",
                  color: "var(--terracotta)",
                  opacity: 0.7,
                }}
              >
                {m.detail}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:sticky lg:top-24 space-y-6">
        {quotes.map((q, idx) => (
          <div
            key={idx}
            className="rounded-[20px] p-8 md:p-10 relative overflow-hidden"
            style={{ background: "var(--navy)", color: "var(--linen)" }}
          >
            <span
              className="absolute -top-5 left-4 text-8xl font-serif opacity-20 leading-none"
              style={{ fontFamily: "'Playfair Display', serif", color: "var(--teal)" }}
            >
              "
            </span>
            <div
              className="absolute bottom-4 right-4 w-8 h-8 rounded-full border-[1.5px] border-[rgba(91,158,160,0.25)]"
              style={{ animation: "spinSlow 15s linear infinite" }}
              aria-hidden
            />
            <p
              className="font-serif italic text-lg leading-[1.65] mb-4 relative z-10"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {q.text}
            </p>
            <span
              className="text-xs tracking-[0.1em] uppercase opacity-45 font-medium"
              style={{ fontFamily: "'Jost', sans-serif", fontStyle: "normal" }}
            >
              {q.attrib}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

ExpressiveArts.propTypes = {
  eyebrow: PropTypes.string,
  heading: PropTypes.string,
  paragraphs: PropTypes.arrayOf(PropTypes.string),
  modalities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      detail: PropTypes.string.isRequired,
    })
  ),
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      attrib: PropTypes.string.isRequired,
    })
  ),
};
