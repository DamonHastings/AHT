import PropTypes from "prop-types";

/**
 * V3 "The Approach" — intro copy, an optional photo strip (expressive-arts work),
 * and the modalities list rendered as an aligned two-column table.
 */
export default function TheApproach({
  eyebrow = "the approach",
  heading = "Collaborative, directive, and tuned to the moment.",
  paragraphs = [
    "I can specify your treatment based on needs and strengths — whether it's brief or targeted (behavior-based, acute challenges, a short-term goal, life transitions) or spanning several years (relational, attachment-based, processing complex grief), and perhaps there are mixtures of it all.",
    "I connect with a client-centered and relational framework, incorporating biopsychology, existential influence, movement-based and narrative therapy, and other creative modalities to find or deepen your sense of self-awareness, introspection, and authentic expression — always looking through a larger societal lens to support understanding life's many layers.",
    "My style is warm, accepting, flexible, curious, and playful — and I'll utilize gentle, shifting challenges to support your growth, celebrate with you, and share your frustrations and pain. The therapeutic process should feel alive, active, and fluid.",
  ],
  images = [],
  modalities = [
    { name: "Drawing & painting", detail: "for what has no shape yet" },
    { name: "Sandtray & play", detail: "especially for children & teens" },
    { name: "Movement & embodiment", detail: "optional, never forced" },
    { name: "Metaphor & symbolism", detail: "thinking sideways" },
    { name: "Writing & poetry", detail: "letters you never send" },
    { name: "Music & sound", detail: "rhythm as regulation" },
    { name: "Nature & space", detail: "when the room isn't enough" },
  ],
}) {
  const galleryImages = (images || []).filter(Boolean).slice(0, 3);

  return (
    <section
      id="the-approach"
      className="scroll-mt-24 py-16 md:py-28 px-6 md:px-20 max-w-[1200px] mx-auto relative"
    >
      {/* Orbiting circles */}
      <div className="absolute top-20 right-4 hidden lg:block pointer-events-none" aria-hidden>
        <div className="relative w-[100px] h-[100px]">
          <div
            className="absolute w-[90px] h-[90px] rounded-full border-[1.5px] border-[rgba(91,158,160,0.42)]"
            style={{ animation: "spinSlow 18s linear infinite" }}
          />
          <div
            className="absolute w-[55px] h-[55px] rounded-full border-[1.5px] border-[rgba(176,90,74,0.38)] top-[17.5px] left-[17.5px]"
            style={{ animation: "spinSlowRev 12s linear infinite" }}
          />
          <div
            className="absolute w-6 h-6 rounded-full bg-[rgba(196,151,58,0.4)] top-8 left-8"
            style={{ animation: "orbitFloat 6s ease-in-out infinite" }}
          />
        </div>
      </div>

      <div className="max-w-[760px] mx-auto">
        <span className="site-eyebrow block mb-2" style={{ color: "var(--terracotta)" }}>
          {eyebrow}
        </span>
        <h2 className="site-heading text-2xl md:text-3xl mb-6">{heading}</h2>

        {paragraphs.map((p, idx) => (
          <p key={idx} className="site-body-copy text-base mb-4">
            {p}
          </p>
        ))}

        {galleryImages.length > 0 && (
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {galleryImages.map((img, i) => (
              <div
                key={img.src || i}
                className="overflow-hidden rounded-2xl aspect-[4/5] shadow-md"
              >
                <picture>
                  {img.webpSrcSet && (
                    <source
                      type="image/webp"
                      srcSet={img.webpSrcSet}
                      sizes="(min-width: 1024px) 240px, 40vw"
                    />
                  )}
                  <img
                    src={img.src}
                    srcSet={img.jpegSrcSet}
                    sizes="(min-width: 1024px) 240px, 40vw"
                    alt={img.alt || ""}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </picture>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 flex flex-col">
          {modalities.map((m, idx) => (
            <div
              key={idx}
              className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 py-4 border-b border-[rgba(57,67,79,0.1)] text-[0.95rem] cursor-default transition-colors hover:text-[var(--teal-deep)]"
            >
              <span className="font-normal">{m.name}</span>
              <span
                className="site-ui-label text-[0.75rem] text-right"
                style={{ color: "var(--terracotta)", opacity: 0.78 }}
              >
                {m.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const imageShape = PropTypes.shape({
  src: PropTypes.string,
  jpegSrcSet: PropTypes.string,
  webpSrcSet: PropTypes.string,
  alt: PropTypes.string,
});

TheApproach.propTypes = {
  eyebrow: PropTypes.string,
  heading: PropTypes.string,
  paragraphs: PropTypes.arrayOf(PropTypes.string),
  images: PropTypes.arrayOf(imageShape),
  modalities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      detail: PropTypes.string.isRequired,
    })
  ),
};
