import { urlFor } from "./sanityClient";

/**
 * Build responsive srcset strings for a Sanity image using the image URL API's
 * on-the-fly transforms (resize + format). Returns a JPEG fallback srcset and a
 * WebP srcset suitable for <picture><source type="image/webp">.
 *
 * Usage in a component that forwards these to <img>/<picture>:
 *   const img = sanityImage(component.image, { widths: [768, 1200, 1800] });
 *   <Meet imageSrc={img.src} imageSrcSet={img.jpegSrcSet} imageWebpSrcSet={img.webpSrcSet} />
 */
export function sanityImage(source, { widths = [480, 768, 1200, 1800] } = {}) {
  if (!source) return null;

  const jpegSrcSet = widths
    .map((w) => `${urlFor(source).width(w).format("jpg").quality(78).url()} ${w}w`)
    .join(", ");
  const webpSrcSet = widths
    .map((w) => `${urlFor(source).width(w).format("webp").quality(72).url()} ${w}w`)
    .join(", ");

  const mid = widths[Math.floor(widths.length / 2)] ?? widths[0];

  return {
    src: urlFor(source).width(mid).format("jpg").quality(78).url(),
    jpegSrcSet,
    webpSrcSet,
  };
}
