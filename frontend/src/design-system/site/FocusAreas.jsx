import { useEffect, useState } from "react";
import PropTypes from "prop-types";

/**
 * A quiet band (usually right under the hero): an eyebrow, a "Support for ___"
 * line whose trailing phrase gently rotates through the focus areas, and a
 * smaller static line naming who the practice works with.
 *
 * Motion is decorative — the rotating phrase is aria-hidden and the full list is
 * exposed once to screen readers. Under prefers-reduced-motion (or with a single
 * area) it renders every area as a static, wrapped "·"-separated line instead,
 * so no content depends on the animation.
 */
const DEFAULT_AREAS = [
  "role transitions, loss & grief",
  "life alongside parenthood",
  "anxiety, shame, guilt & fear",
  "ADHD and its relational impacts",
  "self-esteem, self-worth & self-compassion",
];

const ROTATE_MS = 3000;

export default function FocusAreas({
  eyebrow = "areas of focus",
  leadIn = "Support for",
  areas = DEFAULT_AREAS,
  audienceLine = "Teens, students, young adults, parents, and professionals",
}) {
  const items = (areas?.length ? areas : DEFAULT_AREAS).filter(Boolean);
  const [reduced, setReduced] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  const animate = !reduced && items.length > 1;

  useEffect(() => {
    if (!animate) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [animate, items.length]);

  return (
    <section
      className="site-theme text-center px-6 py-12 md:py-16"
      style={{ background: "var(--warm-white)", color: "var(--ink)" }}
    >
      <style>{`@keyframes faRise{from{opacity:0;transform:translateY(0.45em)}to{opacity:1;transform:translateY(0)}}`}</style>

      <div className="max-w-[760px] mx-auto">
        {eyebrow && (
          <span className="site-eyebrow block mb-4" style={{ color: "var(--teal-deep)" }}>
            {eyebrow}
          </span>
        )}

        <p
          className="site-heading text-[clamp(1.5rem,3.4vw,2.4rem)] leading-[1.25]"
          style={{ minHeight: "2.5em" }}
        >
          {leadIn}{" "}
          {animate ? (
            <>
              {/* Animated, decorative: SR users get the static list below instead. */}
              <span
                className="inline-flex justify-center items-baseline align-baseline"
                style={{ minHeight: "1.3em" }}
                aria-hidden="true"
              >
                <span
                  key={index}
                  className="italic"
                  style={{
                    color: "var(--terracotta)",
                    animation: "faRise 0.6s ease-out",
                    willChange: "opacity, transform",
                  }}
                >
                  {items[index]}
                </span>
              </span>
              <span className="sr-only">{items.join(", ")}.</span>
            </>
          ) : (
            <span className="italic" style={{ color: "var(--terracotta)" }}>
              {items.join(" · ")}
            </span>
          )}
        </p>

        {audienceLine && (
          <p
            className="site-ui-label mt-5"
            style={{ color: "var(--ink)", opacity: 0.6 }}
          >
            {audienceLine}
          </p>
        )}
      </div>
    </section>
  );
}

FocusAreas.propTypes = {
  eyebrow: PropTypes.string,
  leadIn: PropTypes.string,
  areas: PropTypes.arrayOf(PropTypes.string),
  audienceLine: PropTypes.string,
};
