import PropTypes from "prop-types";

/**
 * V3 Expressive Arts - modalities list + quote blocks
 */
export default function ExpressiveArts({
  eyebrow = "the approach",
  heading = "Collaborative, directive, and tuned to the moment.",
  paragraphs = [
    "Expressive arts therapy weaves drawing, movement, writing, music, metaphor, symbolism, and play — not because you need to be an artist, but because imagination and the body sometimes know things the mind hasn't caught up to yet. We can go outside or stay in the room; we can stay verbal when that's what you need.",
    "I'm responsive to what you bring and direct when that's useful — so you're not carrying the whole hour alone, and you're also not being talked at. Loving challenge and tolerable discomfort are part of growth; so is humor and curiosity. The form follows what you need.",
  ],
  modalities = [
    { name: "Drawing & painting", detail: "for what has no shape yet" },
    { name: "Sandtray & play", detail: "especially for children & teens" },
    { name: "Movement & embodiment", detail: "optional, never forced" },
    { name: "Metaphor & symbolism", detail: "thinking sideways" },
    { name: "Writing & poetry", detail: "letters you never send" },
    { name: "Music & sound", detail: "rhythm as regulation" },
    { name: "Nature & space", detail: "when the room isn't enough" },
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
          className="site-eyebrow block mb-2"
          style={{
            color: "var(--terracotta)",
          }}
        >
          {eyebrow}
        </span>
        <h2
          className="site-heading text-2xl md:text-3xl mb-6"
        >
          {heading}
        </h2>

        {paragraphs.map((p, idx) => (
          <p
            key={idx}
            className="site-body-copy text-base mb-4"
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
                className="site-ui-label text-[0.75rem]"
                style={{
                  color: "var(--terracotta)",
                  opacity: 0.78,
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
              style={{ fontFamily: "var(--font-display)", color: "var(--teal)" }}
            >
              {"\u201C"}
            </span>
            <div
              className="absolute bottom-4 right-4 w-8 h-8 rounded-full border-[1.5px] border-[rgba(91,158,160,0.25)]"
              style={{ animation: "spinSlow 15s linear infinite" }}
              aria-hidden
            />
            <p
              className="site-heading italic text-lg mb-4 relative z-10"
            >
              {q.text}
            </p>
            <span
              className="site-ui-label opacity-55"
              style={{ fontStyle: "normal" }}
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
