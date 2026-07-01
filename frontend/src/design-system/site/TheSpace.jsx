import PropTypes from "prop-types";

/**
 * V3 The Space - two-column section with photo and color story
 */
export default function TheSpace({
  eyebrow = "the studio",
  heading = "A room that feels like permission to breathe.",
  headingEmphasis = "permission to breathe.",
  paragraphs = [
    "The space matters. A therapy room should feel like somewhere you'd actually want to sit — not a waiting room or a clinical office. This is a space with natural light, soft textures, and materials for making things. It was designed to be welcoming for everyone from an 8-year-old to a graduate student.",
    "There's a teal sofa. A warm terracotta chair. Art on the walls. Supplies within reach. And always, sheer curtains catching the afternoon light from Davis's wide sky.",
    "This isn't an accident — every detail is chosen to signal: you can let your guard down here.",
  ],
  colorStory = [
    { color: "var(--teal)", label: "calm" },
    { color: "var(--terracotta)", label: "warmth" },
    { color: "var(--gold)", label: "light" },
    { color: "var(--sand)", label: "groundedness" },
  ],
  imageSrc,
  imageSrcSet,
  imageWebpSrcSet,
  imageSizes,
  imageAlt = "The therapy office — a warm, light-filled room with a teal sofa, terracotta armchair, and abstract art on cream walls",
  photoTag = "✦ Davis, CA",
}) {
  return (
    <section
      id="the-space"
      className="scroll-mt-24 py-16 md:py-28 px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative overflow-hidden"
      style={{ background: "var(--mist)" }}
    >
      {/* Ambient mobile */}
      <div
        className="absolute top-8 right-8 md:right-12 hidden md:flex flex-col items-center opacity-45 pointer-events-none"
        aria-hidden
      >
        <div
          className="w-3 h-3 rounded-full bg-[var(--terra-light)]"
          style={{ animation: "gemSway 5s ease-in-out infinite" }}
        />
        <div className="w-px h-5 bg-[rgba(196,151,58,0.4)]" />
        <div
          className="w-2 h-2 rounded-full bg-[var(--teal)]"
          style={{ animation: "gemSway 5s ease-in-out infinite", animationDelay: "-1.5s" }}
        />
        <div className="w-px h-4 bg-[rgba(196,151,58,0.4)]" />
        <div
          className="w-3.5 h-3.5 rounded-full bg-[var(--gold)]"
          style={{ animation: "gemSway 5s ease-in-out infinite", animationDelay: "-3s" }}
        />
        <div className="w-px h-4 bg-[rgba(196,151,58,0.4)]" />
        <div
          className="w-2 h-2 rounded-full bg-[var(--mauve)]"
          style={{ animation: "gemSway 5s ease-in-out infinite", animationDelay: "-4s" }}
        />
        <div className="w-px h-4 bg-[rgba(196,151,58,0.4)]" />
        <div
          className="w-2.5 h-2.5 rounded-full bg-[var(--terracotta)]"
          style={{ animation: "gemSway 5s ease-in-out infinite", animationDelay: "-2s" }}
        />
      </div>

      {/* Ambient blob */}
      <div
        className="absolute -bottom-20 -left-14 w-64 h-64 md:w-[280px] md:h-[280px] rounded-full opacity-60 hidden md:block"
        style={{
          background: "var(--teal-pale)",
          animation: "blobFloat 14s ease-in-out infinite",
          animationDelay: "-3s",
        }}
        aria-hidden
      />

      <div className="relative rounded-t-lg rounded-b-[72px] overflow-hidden shadow-2xl aspect-[4/5] bg-[var(--linen)]">
        {imageSrc ? (
          <picture>
            {imageWebpSrcSet && (
              <source type="image/webp" srcSet={imageWebpSrcSet} sizes={imageSizes} />
            )}
            <img
              src={imageSrc}
              srcSet={imageSrcSet}
              sizes={imageSizes}
              alt={imageAlt}
              className="w-full h-full object-cover block"
              loading="lazy"
              decoding="async"
            />
          </picture>
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-center p-8"
            style={{
              color: "var(--ink)",
              opacity: 0.5,
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "1rem",
            }}
          >
            [ Therapy room photo ]
          </div>
        )}
        <div
          className="absolute inset-0 rounded-t-lg rounded-b-[72px] pointer-events-none"
          style={{ boxShadow: "inset 0 0 0 1px rgba(91,158,160,0.15)" }}
        />
        <div
          className="absolute bottom-6 left-6 px-4 py-2 rounded-full backdrop-blur-lg text-sm"
          style={{
            background: "rgba(253,251,247,0.92)",
            fontFamily: "var(--font-ui-condensed)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--ink)",
            opacity: 0.85,
          }}
        >
          {photoTag}
        </div>
      </div>

      <div>
        <span
          className="site-eyebrow block mb-2"
          style={{
            color: "var(--teal-deep)",
          }}
        >
          {eyebrow}
        </span>
        <h2
          className="site-heading text-3xl md:text-4xl mb-7"
        >
          {heading.replace(headingEmphasis, "")}
          <em style={{ fontStyle: "italic", color: "var(--terracotta)" }}>{headingEmphasis}</em>
        </h2>

        {paragraphs.map((p, idx) => (
          <p
            key={idx}
            className="site-body-copy text-base mb-4"
          >
            {p}
          </p>
        ))}

        <div className="flex flex-wrap gap-3 mt-8">
          {colorStory.map((item, idx) => (
            <div
              key={idx}
              className="site-ui-label flex items-center gap-2"
              style={{
                color: "var(--ink)",
                opacity: 0.7,
              }}
            >
              <div
                className="w-[18px] h-[18px] rounded-full flex-shrink-0"
                style={{ background: item.color }}
              />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

TheSpace.propTypes = {
  eyebrow: PropTypes.string,
  heading: PropTypes.string,
  headingEmphasis: PropTypes.string,
  paragraphs: PropTypes.arrayOf(PropTypes.string),
  colorStory: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  imageSrc: PropTypes.string,
  imageSrcSet: PropTypes.string,
  imageWebpSrcSet: PropTypes.string,
  imageSizes: PropTypes.string,
  imageAlt: PropTypes.string,
  photoTag: PropTypes.string,
};
