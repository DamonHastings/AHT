import PropTypes from "prop-types";

/**
 * V3 Pull Quote - dark navy section with large quote
 */
export default function PullQuote({
  eyebrow = "a different kind of therapy",
  quote = '"What if the way through isn\'t only talking about it — but making, moving, or shaping something with it?"',
  body = "Expressive arts therapy uses drawing, movement, writing, music, and play to open doors that words alone can't. It's not about being \"good at art.\" It's about being human — and trusting that some things are easier to show than to say. Taking this first step is brave; if we meet, I'll celebrate that with you.",
}) {
  return (
    <section
      className="py-16 md:py-22 px-6 md:px-20 text-center relative overflow-hidden"
      style={{ background: "var(--navy)", color: "var(--linen)" }}
    >
      {/* Ambient blobs */}
      <div
        className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full -top-24 -right-16 opacity-[0.4]"
        style={{ background: "var(--teal)", animation: "blobFloat 14s ease-in-out infinite" }}
        aria-hidden
      />
      <div
        className="absolute w-48 h-48 md:w-52 md:h-52 rounded-full -bottom-14 -left-10 opacity-[0.4]"
        style={{
          background: "var(--terracotta)",
          animation: "blobFloat 14s ease-in-out infinite",
          animationDelay: "-5s",
        }}
        aria-hidden
      />

      <div className="max-w-[760px] mx-auto relative z-10">
        <span
          className="site-eyebrow block mb-5"
          style={{ color: "var(--teal)" }}
        >
          {eyebrow}
        </span>
        <p
          className="site-heading italic text-2xl md:text-3xl lg:text-[clamp(1.9rem,3.2vw,2.7rem)] mb-7"
          style={{ color: "var(--linen)" }}
        >
          {quote}
        </p>
        <p className="max-w-[620px] mx-auto text-[0.98rem] md:text-base leading-[1.72] font-normal text-[rgba(244,240,232,0.78)]">
          {body}
        </p>
      </div>
    </section>
  );
}

PullQuote.propTypes = {
  eyebrow: PropTypes.string,
  quote: PropTypes.string,
  body: PropTypes.string,
};
