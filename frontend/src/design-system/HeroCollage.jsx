import { useEffect, useState } from "react";
import PropTypes from "prop-types";

/**
 * Hero collage: a set of offset, overlapping photos that each drift subtly and
 * organically, while the "focus" cycles through them on an interval. The focused
 * image sits at full opacity and the highest z-index (with a slight scale-up);
 * the rest are dimmed and sit behind it.
 *
 * Motion is disabled and auto-cycling is skipped under prefers-reduced-motion —
 * the CSS media query neutralizes the drift/transitions, and the interval below
 * is not started — so it settles into a calm static arrangement.
 */

// Below this width the frame is wide/short (4:3), so tiles fan out horizontally
// in a condensed row instead of the tall staggered desktop arrangement.
const SMALL_QUERY = "(max-width: 1023px)";

function useIsSmall() {
  const [small, setSmall] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return undefined;
    const mq = window.matchMedia(SMALL_QUERY);
    const sync = () => setSmall(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return small;
}

// Per-tile placement within the (position: relative) frame. `left`/`width` are
// percentages so the horizontal fan stays responsive; `top` is a fixed pixel
// offset kept within a ~30px band so the tiles line up along a near-common
// baseline (no tall diagonal stagger that would bleed past the frame). Each
// tile's height comes from its aspect-ratio. Durations/delays are intentionally
// uneven so the tiles never drift in sync.
const LAYOUTS = {
  2: [
    { top: "0px", left: "0%", width: "56%", aspect: "4 / 3", radius: "20% 16% 22% 16% / 18% 22% 16% 20%", dur: 14, delay: 0 },
    { top: "30px", left: "42%", width: "52%", aspect: "3 / 4", radius: "16% 22% 16% 20% / 20% 16% 22% 16%", dur: 17, delay: -5 },
  ],
  3: [
    { top: "0px", left: "0%", width: "50%", aspect: "4 / 3", radius: "20% 16% 22% 15% / 16% 22% 15% 20%", dur: 13, delay: 0 },
    { top: "30px", left: "25%", width: "52%", aspect: "3 / 4", radius: "16% 22% 15% 20% / 20% 15% 22% 16%", dur: 16.5, delay: -4.5 },
    { top: "14px", left: "50%", width: "48%", aspect: "1 / 1", radius: "22% 15% 20% 16% / 15% 20% 16% 22%", dur: 15, delay: -8.5 },
  ],
  4: [
    { top: "0px", left: "0%", width: "44%", aspect: "4 / 3", radius: "20% 16% 22% 15% / 16% 22% 15% 20%", dur: 13, delay: 0 },
    { top: "26px", left: "20%", width: "46%", aspect: "3 / 4", radius: "16% 22% 15% 20% / 20% 15% 22% 16%", dur: 16.5, delay: -4.5 },
    { top: "12px", left: "40%", width: "44%", aspect: "1 / 1", radius: "22% 15% 20% 16% / 15% 20% 16% 22%", dur: 15, delay: -8.5 },
    { top: "30px", left: "58%", width: "42%", aspect: "4 / 5", radius: "18% 20% 16% 22% / 22% 16% 20% 16%", dur: 18, delay: -11 },
  ],
};

// Condensed small-screen layouts: tiles offset horizontally in an overlapping
// row (no vertical stagger), sized to sit in the wide 4:3 frame. Drift is
// omitted here (no dur/delay) — only the focus transition animates.
const SMALL_LAYOUTS = {
  2: [
    { top: "6%", left: "0%", width: "70%", aspect: "1 / 1", radius: "20% 16% 22% 16% / 18% 22% 16% 20%" },
    { top: "6%", left: "30%", width: "70%", aspect: "1 / 1", radius: "16% 22% 16% 20% / 20% 16% 22% 16%" },
  ],
  3: [
    { top: "8%", left: "0%", width: "60%", aspect: "1 / 1", radius: "20% 16% 22% 16% / 18% 22% 16% 20%" },
    { top: "8%", left: "20%", width: "60%", aspect: "1 / 1", radius: "16% 20% 18% 20% / 20% 16% 20% 16%" },
    { top: "8%", left: "40%", width: "60%", aspect: "1 / 1", radius: "20% 16% 20% 18% / 16% 20% 16% 22%" },
  ],
  4: [
    { top: "10%", left: "0%", width: "52%", aspect: "1 / 1", radius: "20% 16% 22% 16% / 18% 22% 16% 20%" },
    { top: "10%", left: "16%", width: "52%", aspect: "1 / 1", radius: "16% 20% 18% 20% / 20% 16% 20% 16%" },
    { top: "10%", left: "32%", width: "52%", aspect: "1 / 1", radius: "20% 16% 20% 18% / 16% 20% 16% 22%" },
    { top: "10%", left: "48%", width: "52%", aspect: "1 / 1", radius: "18% 20% 16% 22% / 22% 16% 20% 16%" },
  ],
};

export default function HeroCollage({ images, interval = 3600, priority = false, className = "" }) {
  const tiles = (images || []).slice(0, 4);
  const count = tiles.length;
  const isSmall = useIsSmall();
  const layout = (isSmall ? SMALL_LAYOUTS : LAYOUTS)[count] || (isSmall ? SMALL_LAYOUTS : LAYOUTS)[3];

  const [focused, setFocused] = useState(0);

  useEffect(() => {
    if (count < 2) return undefined;
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined; // respect reduced motion: no auto-cycling
    }
    const id = setInterval(() => {
      setFocused((f) => (f + 1) % count);
    }, interval);
    return () => clearInterval(id);
  }, [count, interval]);

  if (count === 0) return null;

  return (
    <div
      className={`relative flex w-full min-w-0 min-h-0 lg:h-full items-center justify-center pt-4 pb-0 sm:pt-6 lg:py-12 px-4 sm:px-6 lg:pl-2 lg:pr-8 ${className}`}
      aria-hidden
    >
      {/* Bounded by max-width with the aspect ratio preserved (no max-height —
          that would break the aspect and let tiles outgrow the frame and bleed
          into the heading/next section). max-lg is a wide 4:3 row, lg a tall
          3:4 cluster. */}
      <div className="relative mx-auto w-full min-w-0 max-lg:aspect-[4/3] max-lg:max-w-[32rem] lg:aspect-[4/3] lg:max-w-[48rem]">
        {tiles.map((img, i) => {
          const l = layout[i];
          const isFocused = i === focused;
          return (
            <div
              key={img.src || i}
              className="absolute"
              style={{
                top: l.top,
                left: l.left,
                width: l.width,
                aspectRatio: l.aspect,
                zIndex: isFocused ? 40 : 10 + i,
                animation: isSmall ? "none" : `heroDrift ${l.dur}s ease-in-out infinite`,
                animationDelay: isSmall ? undefined : `${l.delay}s`,
                willChange: "transform",
              }}
              onMouseEnter={() => setFocused(i)}
            >
              <div
                className="absolute inset-0 overflow-hidden"
                style={{
                  borderRadius: l.radius,
                  opacity: isFocused ? 1 : 0.5,
                  transform: isFocused ? "scale(1.05)" : "scale(1)",
                  // Asymmetric fade so the newly-focused tile brightens quickly
                  // (matching its instant jump to the top z-index) while the
                  // previous one dims slowly behind it.
                  transition: isFocused
                    ? "opacity 450ms ease, transform 900ms ease, box-shadow 900ms ease"
                    : "opacity 1100ms ease, transform 900ms ease, box-shadow 900ms ease",
                  boxShadow: isFocused
                    ? "0 26px 64px rgba(28,39,48,0.30)"
                    : "0 10px 30px rgba(28,39,48,0.14)",
                }}
              >
                <picture>
                  {img.webpSrcSet && (
                    <source type="image/webp" srcSet={img.webpSrcSet} sizes="(min-width: 1024px) 30vw, 60vw" />
                  )}
                  <img
                    src={img.src}
                    srcSet={img.jpegSrcSet}
                    sizes="(min-width: 1024px) 30vw, 60vw"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{
                      filter: isFocused ? "none" : "saturate(0.9)",
                      transition: "filter 900ms ease",
                    }}
                    loading={priority && i === 0 ? "eager" : "lazy"}
                    {...(priority && i === 0 ? { fetchpriority: "high" } : {})}
                    decoding="async"
                  />
                </picture>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

HeroCollage.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      jpegSrcSet: PropTypes.string,
      webpSrcSet: PropTypes.string,
      alt: PropTypes.string,
    })
  ).isRequired,
  interval: PropTypes.number,
  priority: PropTypes.bool,
  className: PropTypes.string,
};
