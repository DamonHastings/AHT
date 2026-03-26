import PropTypes from "prop-types";

/**
 * V3 Pull Quote - dark navy section with large quote
 */
export default function PullQuote({
  eyebrow = "a different kind of therapy",
  quote = '"What if the way through isn\'t talking about it — but making something with it?"',
  body = "Expressive Arts therapy uses drawing, movement, writing, music, and play to open doors that words alone can't. It's not about being creative. It's about being human — and trusting that some things are easier to show than to say. Whether you're 8 or 28, this work meets you where you are.",
}) {
  return (
    <section
      className="py-16 md:py-22 px-6 md:px-20 text-center relative overflow-hidden"
      style={{ background: "var(--navy)", color: "var(--linen)" }}
    >
      {/* Ambient blobs */}
      <div
        className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full -top-24 -right-16 opacity-[0.07]"
        style={{ background: "var(--teal)", animation: "blobFloat 14s ease-in-out infinite" }}
        aria-hidden
      />
      <div
        className="absolute w-48 h-48 md:w-52 md:h-52 rounded-full -bottom-14 -left-10 opacity-[0.07]"
        style={{
          background: "var(--terracotta)",
          animation: "blobFloat 14s ease-in-out infinite",
          animationDelay: "-5s",
        }}
        aria-hidden
      />

      <div className="max-w-[760px] mx-auto relative z-10">
        <span
          className="block mb-5"
          style={{ fontFamily: "'Caveat', cursive", fontSize: "1.15rem", color: "var(--teal)" }}
        >
          {eyebrow}
        </span>
        <p
          className="font-serif italic text-xl md:text-2xl lg:text-[clamp(1.7rem,3.2vw,2.6rem)] font-normal leading-[1.45] mb-7"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {quote}
        </p>
        <p
          className="text-base leading-[1.9] font-light opacity-70 max-w-[600px] mx-auto"
          style={{ opacity: 0.68 }}
        >
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
