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
  whatToExpect = {
    heading: "What a first session is like",
    intro:
      "If you've never done this before — or it's been a while — here's roughly how it goes. No need to prepare anything.",
    steps: [
      {
        title: "We start where you are",
        body: "We talk. I get a feel for what brought you in and what you're hoping for. You don't have to have it all figured out.",
      },
      {
        title: "You set the pace",
        body: "Art, movement, and the rest are invitations — never requirements. If you'd rather just talk the first time, that's completely fine.",
      },
      {
        title: "We notice what helps",
        body: "Together we pay attention to what feels useful, and shape the work around that — collaboratively, at your speed.",
      },
      {
        title: "No pressure to commit",
        body: "After the free consultation you decide whether we're a good fit. There's no obligation to continue.",
      },
    ],
  },
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

      <div className="lg:sticky lg:top-24">
        <div
          className="rounded-[20px] p-8 md:p-10 relative overflow-hidden"
          style={{ background: "var(--navy)", color: "var(--linen)" }}
        >
          <div
            className="absolute bottom-4 right-4 w-8 h-8 rounded-full border-[1.5px] border-[rgba(91,158,160,0.25)]"
            style={{ animation: "spinSlow 15s linear infinite" }}
            aria-hidden
          />
          <span
            className="site-eyebrow block mb-3 relative z-10"
            style={{ color: "var(--teal-light)" }}
          >
            before we begin
          </span>
          <h3 className="site-heading text-xl md:text-2xl mb-3 relative z-10">
            {whatToExpect.heading}
          </h3>
          {whatToExpect.intro && (
            <p className="site-body-copy text-[0.95rem] mb-6 relative z-10" style={{ color: "var(--linen)", opacity: 0.8 }}>
              {whatToExpect.intro}
            </p>
          )}
          <ol className="relative z-10 space-y-5">
            {whatToExpect.steps.map((s, idx) => (
              <li key={idx} className="flex gap-4">
                <span
                  className="site-ui-label flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[0.8rem]"
                  style={{ background: "rgba(91,158,160,0.22)", color: "var(--linen)", fontStyle: "normal" }}
                  aria-hidden
                >
                  {idx + 1}
                </span>
                <div>
                  <p className="site-heading text-base mb-1" style={{ fontStyle: "normal" }}>
                    {s.title}
                  </p>
                  <p className="site-body-copy text-[0.9rem]" style={{ color: "var(--linen)", opacity: 0.78 }}>
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
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
  whatToExpect: PropTypes.shape({
    heading: PropTypes.string,
    intro: PropTypes.string,
    steps: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
      })
    ),
  }),
};
