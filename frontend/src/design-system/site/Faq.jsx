import PropTypes from "prop-types";
import { DEFAULT_FAQ_ITEMS } from "../../content/faqDefaults";

/**
 * FAQ accordion built on native <details>/<summary> (keyboard- and
 * screen-reader-accessible by default, and open-able by crawlers). Answers the
 * predictable pre-booking questions. Pair with FAQPage JSON-LD (see
 * buildFaqJsonLd in utils/seo.js) using the same item list.
 */
export default function Faq({
  eyebrow = "questions",
  heading = "Things people often ask.",
  items = DEFAULT_FAQ_ITEMS,
}) {
  return (
    <section
      id="faq"
      className="scroll-mt-24 py-16 md:py-28 px-6 md:px-20"
      style={{ background: "var(--warm-white)" }}
    >
      <div className="max-w-[760px] mx-auto">
        <span className="site-eyebrow block mb-2" style={{ color: "var(--terracotta)" }}>
          {eyebrow}
        </span>
        <h2 className="site-heading text-2xl md:text-3xl mb-10">{heading}</h2>

        <div className="flex flex-col">
          {items.map((item, idx) => (
            <details
              key={idx}
              className="group border-b py-2"
              style={{ borderColor: "rgba(28,39,48,0.1)" }}
            >
              <summary
                className="site-heading text-lg md:text-xl cursor-pointer list-none flex items-center justify-between gap-4 py-4"
                style={{ fontStyle: "normal" }}
              >
                {item.q}
                <span
                  className="flex-shrink-0 transition-transform duration-200 group-open:rotate-45"
                  style={{ color: "var(--terracotta)", fontSize: "1.4rem", lineHeight: 1 }}
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="site-body-copy text-base pb-5 pr-8">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

Faq.propTypes = {
  eyebrow: PropTypes.string,
  heading: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      q: PropTypes.string.isRequired,
      a: PropTypes.string.isRequired,
    })
  ),
};
