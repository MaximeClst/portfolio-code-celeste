import { readFile, mkdir } from "node:fs/promises";
import sharp from "sharp";

// Export the existing brand artwork; keep this asset in sync with the header logo.
const source = await readFile(new URL("../components/icons/CustomIcon.tsx", import.meta.url), "utf8");
const match = source.match(/codeceleste:[\s\S]*?(<svg[\s\S]*?<\/svg>)/);
if (!match) throw new Error("Code Celeste logo not found");
const attributes = {
  clipPath: "clip-path",
  fillOpacity: "fill-opacity",
  strokeWidth: "stroke-width",
  colorInterpolationFilters: "color-interpolation-filters",
  floodOpacity: "flood-opacity",
  stopColor: "stop-color",
};
let svg = match[1].replace(/\{\.\.\.props\}/g, "");
for (const [jsx, xml] of Object.entries(attributes)) {
  svg = svg.replaceAll(`${jsx}=`, `${xml}=`);
}
const logo = await sharp(Buffer.from(svg)).resize({ width: 900 }).png().toBuffer();
await mkdir(new URL("../public/social/", import.meta.url), { recursive: true });
await sharp({ create: { width: 1200, height: 630, channels: 3, background: "#0a0a0a" } })
  .composite([{ input: logo, gravity: "centre" }])
  .png()
  .toFile(new URL("../public/social/code-celeste-logo-v1.png", import.meta.url).pathname);
