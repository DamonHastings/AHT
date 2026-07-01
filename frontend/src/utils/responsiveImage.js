/**
 * Build srcset strings for the optimized home-page images produced by
 * scripts/optimize-images.mjs. Keep WIDTHS / naming in sync with that script.
 *
 * Usage:
 *   const img = responsiveImage("hero");
 *   <img src={img.src} srcSet={img.webpSrcSet} ... />
 *
 * `name` is the basename passed in the script's SOURCES (e.g. "hero", "meet").
 */
const WIDTHS = [480, 768, 1200, 1800];

export function responsiveImage(name) {
  const webpSrcSet = WIDTHS.map((w) => `/photos/${name}-${w}.webp ${w}w`).join(", ");
  const jpegSrcSet = WIDTHS.map((w) => `/photos/${name}-${w}.jpg ${w}w`).join(", ");
  return {
    // Fallback src for browsers that ignore srcSet — mid-size JPEG.
    src: `/photos/${name}-1200.jpg`,
    webpSrcSet,
    jpegSrcSet,
    // Smallest WebP, handy for <link rel="preload"> of the LCP image.
    preloadHref: `/photos/${name}-1200.webp`,
  };
}
