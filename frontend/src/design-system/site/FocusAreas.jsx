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

        {animate ? (
          <div className="grid grid-cols-1 site-heading text-[clamp(1.5rem,3.4vw,2.4rem)] leading-[1.25]">
            {/* Every phrase is laid out (hidden) in the same grid cell, so this
                block is always as tall as the longest-wrapping phrase — the
                content below never jumps as the line rotates, at any width. */}
            {items.map((it, i) => (
              <p key={i} className="col-start-1 row-start-1 m-0 invisible" aria-hidden="true">
                {leadIn}{" "}
                <span className="italic">{it}</span>
              </p>
            ))}
            {/* The visible, rotating line, overlaid in the same cell. */}
            <p className="col-start-1 row-start-1 m-0" aria-hidden="true">
              {leadIn}{" "}
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
            </p>
            {/* The motion is decorative; screen readers get the full list once. */}
            <span className="sr-only">
              {leadIn} {items.join(", ")}.
            </span>
          </div>
        ) : (
          <p className="site-heading text-[clamp(1.5rem,3.4vw,2.4rem)] leading-[1.25]">
            {leadIn}{" "}
            <span className="italic" style={{ color: "var(--terracotta)" }}>
              {items.join(" · ")}
            </span>
          </p>
        )}

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
