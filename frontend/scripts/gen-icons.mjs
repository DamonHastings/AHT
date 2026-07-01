/* eslint-env node */
/**
 * Rasterize public/favicon.svg into PNG app icons (apple-touch-icon + PWA icons)
 * referenced by index.html and site.webmanifest. Chained into `npm run build`.
 */
import { readFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(dirname, "..", "public");
const SVG = path.join(PUBLIC_DIR, "favicon.svg");

const OUTPUTS = [
  { name: "apple-touch-icon.png", size: 180 },
  { name: "icon-192.png", size: 192 },
  { name: "icon-512.png", size: 512 },
];

async function main() {
  await mkdir(PUBLIC_DIR, { recursive: true });
  const svg = await readFile(SVG);
  await Promise.all(
    OUTPUTS.map(({ name, size }) =>
      sharp(svg, { density: 384 })
        .resize(size, size)
        .png()
        .toFile(path.join(PUBLIC_DIR, name))
    )
  );
  console.log(`✓ app icons: ${OUTPUTS.map((o) => o.name).join(", ")}`);
}

main().catch((err) => {
  console.error("Icon generation failed:", err);
  process.exit(1);
});
