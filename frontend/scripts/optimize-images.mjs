/* eslint-env node */
/**
 * Generate optimized, responsive image variants for the home page.
 *
 * Source photos live in frontend/photos/ (large originals). This script writes
 * resized WebP + JPEG variants into frontend/public/photos/ so they are copied
 * into the production build (Vite only ships files under public/) and served at
 * /photos/<name>-<width>.<ext>. Run via `npm run optimize:images`; also chained
 * into `npm run build`.
 *
 * The companion srcset helper lives in src/utils/responsiveImage.js and must use
 * the same WIDTHS / naming convention as this script.
 */
import { access, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const FRONTEND = path.resolve(dirname, "..");

const WIDTHS = [480, 768, 1200, 1800];
const OUT_DIR = path.join(FRONTEND, "public", "photos");

// Source images used on the home page. `name` becomes the output basename.
const SOURCES = [
  { src: path.join(FRONTEND, "photos", "IMG_2506.jpeg"), name: "hero" },
  { src: path.join(FRONTEND, "photos", "IMG_2481.jpeg"), name: "meet" },
];

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function outputsExist(name) {
  const checks = WIDTHS.flatMap((width) => [
    fileExists(path.join(OUT_DIR, `${name}-${width}.webp`)),
    fileExists(path.join(OUT_DIR, `${name}-${width}.jpg`)),
  ]);
  const results = await Promise.all(checks);
  return results.every(Boolean);
}

async function processOne({ src, name }) {
  const hasSource = await fileExists(src);
  if (!hasSource) {
    if (await outputsExist(name)) {
      console.log(`✓ ${name}: using existing optimized files (source not uploaded)`);
      return;
    }
    throw new Error(`Missing source image and optimized outputs for ${name}`);
  }

  const generated = [];
  for (const width of WIDTHS) {
    const base = sharp(src).rotate().resize({ width, withoutEnlargement: true });

    const webpPath = path.join(OUT_DIR, `${name}-${width}.webp`);
    const jpegPath = path.join(OUT_DIR, `${name}-${width}.jpg`);

    await base.clone().webp({ quality: 72 }).toFile(webpPath);
    await base.clone().jpeg({ quality: 78, mozjpeg: true }).toFile(jpegPath);

    generated.push(webpPath, jpegPath);
  }
  console.log(`✓ ${name}: ${generated.length} files from ${path.basename(src)}`);
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  await Promise.all(SOURCES.map(processOne));
  console.log(`Done. Output → ${path.relative(FRONTEND, OUT_DIR)}/`);
}

main().catch((err) => {
  console.error("Image optimization failed:", err);
  process.exit(1);
});
