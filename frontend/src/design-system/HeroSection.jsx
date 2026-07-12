import PropTypes from "prop-types";
import Button from "./Button";
import HeroCollage from "./HeroCollage";
import { CONTAINER, GRID_12 } from "./layout";

export default function HeroSection({
  backgroundImage,
  overlay = "dark",
  overlayOpacity = 0.4,
  heading,
  subheading,
  ctaText = "Book Consultation",
  onCtaClick,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  kickerText,
  headingEmphasis,
  ctaVariant = "accent",
  alignment = "center",
  ctaAlignment,
  height = "screen",
  variant = "overlay",
  blobSide = null,
  blobImage,
  blobImageSrcSet,
  blobImageWebpSrcSet,
  blobImageSizes,
  collageImages,
  priority = false,
  className = "",
}) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  const blockAlignClasses = {
    left: "justify-self-start",
    center: "justify-self-center",
    right: "justify-self-end",
  };

  const ctaSelfClasses = {
    left: "self-start",
    center: "self-center",
    right: "self-end",
  };

  const effectiveCtaAlign = ctaAlignment ?? alignment;

  const heightClasses = {
    small: "h-96",
    medium: "h-[32rem]",
    large: "h-[40rem]",
    screen: "h-screen",
  };

  const overlayColors = {
    dark: "bg-black",
    light: "bg-white",
    burgundy: "bg-therapy-burgundy-900",
    teal: "bg-therapy-teal-900",
  };

  /** Collage hero: overlapping, drifting photos with a cycling focus. */
  const isCollage = variant === "collage" && Array.isArray(collageImages) && collageImages.length > 0;

  /** Masked hero image column: `variant="organic"`/`"collage"` or legacy `blobSide` left/right */
  const organicImageSide =
    blobSide ?? (variant === "organic" || isCollage ? "right" : null);

  const contentBlock = (
    <div className={`flex flex-col gap-8 ${alignmentClasses[alignment]}`}>
      {heading && (
        <h1 className="text-4xl md:text-5xl font-bold text-therapy-burgundy-700 leading-snug md:leading-[1.4]">
          {heading}
        </h1>
      )}

      {subheading && (
        <p className="text-lg md:text-xl lg:text-2xl text-therapy-burgundy-600 max-w-3xl leading-relaxed">
          {subheading}
        </p>
      )}

      {ctaText && (
        <div className={`mt-4 ${ctaSelfClasses[effectiveCtaAlign]}`}>
          <Button
            variant={ctaVariant}
            size="lg"
            onClick={onCtaClick}
            className="shadow-2xl text-lg px-10 py-4"
          >
            {ctaText}
          </Button>
        </div>
      )}
    </div>
  );

  /** Typography + CTAs match `site/Hero.jsx` (always left-aligned in that hero). */
  const primaryHref = typeof primaryCtaHref === "string" ? primaryCtaHref.trim() : "";
  /** `#` alone keeps the primary CTA as a button + `onCtaClick` (e.g. legacy handlers). Real targets use `<a>`. */
  const usePrimaryAnchor = Boolean(primaryHref) && primaryHref !== "#";

  const organicExpressiveContent = (
    <div className="flex flex-col items-start text-left">
      {kickerText && (
        <div className="mb-6 flex w-full items-center gap-3">
          <div className="w-8 h-[1.5px] shrink-0 bg-[var(--teal)]" />
          <span
            className="site-eyebrow"
            style={{ color: "var(--teal-deep)" }}
          >
            {kickerText}
          </span>
        </div>
      )}

      {heading && (
        <h1
          className="site-display text-4xl lg:text-[clamp(2.8rem,4.6vw,4.4rem)] mb-8 max-w-[min(100%,34rem)]"
          style={{ color: "var(--ink)" }}
        >
          {headingEmphasis && heading.includes(headingEmphasis) ? (
            <>
              {heading.slice(0, heading.indexOf(headingEmphasis))}
              <em style={{ fontStyle: "italic", color: "var(--terracotta)" }}>{headingEmphasis}</em>
              {heading.slice(heading.indexOf(headingEmphasis) + headingEmphasis.length)}
            </>
          ) : (
            heading
          )}
        </h1>
      )}

      {subheading && (
        <p
          className="site-body-copy text-[1.05rem] mb-11 max-w-[460px] w-full"
        >
          {subheading}
        </p>
      )}

      {(ctaText || secondaryCtaText) && (
        <div className="flex w-full flex-wrap gap-4">
          {ctaText &&
            (usePrimaryAnchor ? (
              <a
                href={primaryHref}
                data-analytics-source="hero"
                className="site-button-text inline-block py-3.5 px-8 rounded-full text-[0.88rem] transition-all hover:-translate-y-0.5"
                style={{
                  background: "var(--terracotta)",
                  color: "white",
                  textDecoration: "none",
                  boxShadow: "0 6px 24px rgba(176,90,74,0.28)",
                }}
              >
                {ctaText}
              </a>
            ) : (
              <button
                type="button"
                onClick={onCtaClick}
                className="site-button-text inline-block py-3.5 px-8 rounded-full text-[0.88rem] transition-all hover:-translate-y-0.5 border-0 cursor-pointer"
                style={{
                  background: "var(--terracotta)",
                  color: "white",
                  boxShadow: "0 6px 24px rgba(176,90,74,0.28)",
                }}
              >
                {ctaText}
              </button>
            ))}
          {secondaryCtaText && secondaryCtaHref && (
            <a
              href={secondaryCtaHref}
              className="site-button-text inline-block py-3.5 px-8 rounded-full text-[0.88rem] border-[1.5px] transition-colors"
              style={{
                background: "transparent",
                color: "var(--ink)",
                borderColor: "rgba(28,39,48,0.25)",
                textDecoration: "none",
              }}
            >
              {secondaryCtaText}
            </a>
          )}
        </div>
      )}
    </div>
  );

  const blobSrc = blobImage || backgroundImage;

  const blobFramePadding =
    organicImageSide === "right"
      ? "px-4 sm:px-6 lg:pl-2 lg:pr-8"
      : organicImageSide === "left"
        ? "px-4 sm:px-6 lg:pl-8 lg:pr-2"
        : "";

  /** Slightly wider photo column than 45% / 55%; mask size is capped so it does not spill past the hero. */
  const organicLgGridClass =
    organicImageSide === "left"
      ? "lg:grid-cols-[minmax(0,52%)_minmax(0,48%)]"
      : "lg:grid-cols-[minmax(0,48%)_minmax(0,52%)]";

  const blobVisual = (
    <div
      className={`relative flex w-full min-w-0 min-h-0 items-center justify-center py-8 sm:py-10 lg:py-12 ${blobFramePadding}`}
    >
      <div className="relative mx-auto w-full min-w-0 max-w-full max-lg:aspect-[4/3] max-lg:max-h-[min(48vh,19rem)] sm:max-lg:max-h-[min(50vh,22rem)] lg:aspect-[3/4] lg:w-full lg:max-h-[min(72vh,44rem)]">
        <div
          className="absolute inset-0 overflow-hidden shadow-2xl"
          style={{
            animation: "blobMorph 12s ease-in-out infinite",
            borderRadius: "16% 14% 18% 13% / 14% 17% 13% 16%",
            willChange: "border-radius",
          }}
        >
          {blobSrc ? (
            <picture>
              {blobImageWebpSrcSet && (
                <source
                  type="image/webp"
                  srcSet={blobImageWebpSrcSet}
                  sizes={blobImageSizes}
                />
              )}
              <img
                src={blobSrc}
                srcSet={blobImageSrcSet}
                sizes={blobImageSizes}
                alt=""
                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                loading={priority ? "eager" : "lazy"}
                // Lowercase DOM attr: React 18.2 doesn't recognize camelCase
                // `fetchPriority`; spreading the lowercase key passes it through cleanly.
                {...(priority ? { fetchpriority: "high" } : {})}
                decoding="async"
              />
            </picture>
          ) : (
            <div
              className="absolute inset-0"
              style={{ background: "var(--linen-deep)" }}
              aria-hidden
            />
          )}
        </div>
      </div>
    </div>
  );

  const visual = isCollage ? (
    <HeroCollage images={collageImages} priority={priority} />
  ) : (
    blobVisual
  );

  // Organic / blob: hero image in animated organic mask + text column (expressive typography)
  if (organicImageSide === "left" || organicImageSide === "right") {
    return (
      <section
        className={`site-theme relative w-full min-h-0 overflow-visible ${className}`}
        style={{ background: "var(--linen)" }}
      >
        <div className="relative z-[2] grid w-full min-h-0 pt-20">
          <div className={`grid w-full min-h-0 grid-cols-1 items-stretch ${organicLgGridClass}`}>
            {organicImageSide === "left" && (
              <>
                <div className="max-md:order-1 order-1 min-w-0">{visual}</div>
                <div className="max-md:order-2 order-2 flex min-w-0 flex-col justify-center px-6 py-6 md:py-12 md:px-12 lg:px-[5.5rem] lg:py-20">
                  <div className="w-full max-w-2xl">{organicExpressiveContent}</div>
                </div>
              </>
            )}
            {organicImageSide === "right" && (
              <>
                <div
                  className={`max-md:order-2 order-1 flex min-w-0 flex-col justify-center px-6 py-12 md:px-12 lg:px-[5.5rem] lg:py-20 md:pt-20 ${
                    isCollage ? "max-lg:!pt-3" : ""
                  }`}
                >
                  <div className="w-full max-w-2xl">{organicExpressiveContent}</div>
                </div>
                <div className="max-md:order-1 order-2 min-w-0">{visual}</div>
              </>
            )}
          </div>
        </div>
      </section>
    );
  }

  // Split variant: 12-col grid, gap(1) + image(6) + content(4)
  if (variant === "split") {
    return (
      <section
        className={`relative w-full max-w-7xl mx-auto min-h-[28rem] overflow-hidden ${className}`}
      >
        <div className={`${GRID_12} mx-8 min-h-[28rem]`}>
          <div className="col-span-1 sm:col-span-7 relative min-h-[20rem] order-1 sm:order-2 rounded-2xl overflow-hidden">
            {backgroundImage && (
              <div
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            )}
            {overlay && (
              <div
                className={`absolute inset-0 ${overlayColors[overlay]}`}
                style={{ opacity: overlayOpacity }}
              />
            )}
          </div>

          <div className="col-span-1 sm:col-span-5 relative z-10 grid items-center p-6 lg:p-10 order-1 lg:order-4 bg-therapy-sand-50">
            <div className={`max-w-full ${blockAlignClasses[alignment]}`}>{contentBlock}</div>
          </div>
        </div>
      </section>
    );
  }

  // Default overlay variant
  return (
    <section className={`relative w-full ${heightClasses[height]} overflow-hidden ${className}`}>
      {backgroundImage && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}

      {overlay && (
        <div
          className={`absolute inset-0 ${overlayColors[overlay]}`}
          style={{ opacity: overlayOpacity }}
        />
      )}

      <div className={`relative z-10 h-full grid items-center ${CONTAINER}`}>
        <div className={`max-w-5xl w-full ${blockAlignClasses[alignment]}`}>{contentBlock}</div>
      </div>

      {height === "screen" && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-therapy-burgundy-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-therapy-burgundy-500 rounded-full animate-pulse" />
          </div>
        </div>
      )}
    </section>
  );
}

HeroSection.propTypes = {
  backgroundImage: PropTypes.string,
  overlay: PropTypes.oneOf(["dark", "light", "burgundy", "teal", null]),
  overlayOpacity: PropTypes.number,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  ctaText: PropTypes.string,
  onCtaClick: PropTypes.func,
  primaryCtaHref: PropTypes.string,
  secondaryCtaText: PropTypes.string,
  secondaryCtaHref: PropTypes.string,
  kickerText: PropTypes.string,
  headingEmphasis: PropTypes.string,
  ctaVariant: PropTypes.oneOf(["primary", "secondary", "outline", "ghost", "accent"]),
  alignment: PropTypes.oneOf(["left", "center", "right"]),
  ctaAlignment: PropTypes.oneOf(["left", "center", "right"]),
  height: PropTypes.oneOf(["small", "medium", "large", "screen"]),
  variant: PropTypes.oneOf(["overlay", "split", "organic", "collage"]),
  blobSide: PropTypes.oneOf(["left", "right", null]),
  blobImage: PropTypes.string,
  blobImageSrcSet: PropTypes.string,
  blobImageWebpSrcSet: PropTypes.string,
  blobImageSizes: PropTypes.string,
  collageImages: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      jpegSrcSet: PropTypes.string,
      webpSrcSet: PropTypes.string,
      alt: PropTypes.string,
    })
  ),
  priority: PropTypes.bool,
  className: PropTypes.string,
};
