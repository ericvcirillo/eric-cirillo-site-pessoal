import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../public/og");
await mkdir(outDir, { recursive: true });

const esc = (s) => s.replace(/&/g, "&amp;");

const variants = {
  "og-pt": {
    eyebrow: "IMPLEMENTATION SPECIALIST  ·  IDENTITY & FRAUD",
    line: "Portal de carreira de Eric Cirillo",
  },
  "og-en": {
    eyebrow: "IMPLEMENTATION SPECIALIST  ·  IDENTITY & FRAUD",
    line: "Eric Cirillo career portal",
  },
  "og-historia": {
    eyebrow: "HISTORIA COMPLETA  ·  IDENTITY & FRAUD",
    line: "A trajetória completa, empresa por empresa",
  },
  "og-studio": {
    eyebrow: "CASE  ·  ANTIFRAUDE & IA",
    line: "Serasa Studio Identity & Fraud",
  },
};

const svg = ({ eyebrow, line }) => `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="50%" cy="-12%" r="85%">
      <stop offset="0%" stop-color="#1B2027"/>
      <stop offset="38%" stop-color="#121519"/>
      <stop offset="100%" stop-color="#0B0B0C"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <text x="1180" y="600" text-anchor="end" font-family="Helvetica, Arial, sans-serif"
    font-size="520" font-weight="700" fill="#A0B2C6" opacity="0.05">EC</text>
  <circle cx="86" cy="118" r="6" fill="#A9A2B4"/>
  <text x="104" y="125" font-family="Helvetica, Arial, sans-serif" font-size="22"
    font-weight="500" letter-spacing="6" fill="#A4A6AC">${esc(eyebrow)}</text>
  <text x="76" y="320" font-family="Helvetica, Arial, sans-serif" font-size="150"
    font-weight="700" letter-spacing="-4" fill="#F2F2F3">Eric Cirillo</text>
  <text x="80" y="420" font-family="Helvetica, Arial, sans-serif" font-size="40"
    font-weight="600" fill="#A4A6AC">${esc(line)}</text>
  <line x1="80" y1="500" x2="1120" y2="500" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
  <text x="80" y="555" font-family="Helvetica, Arial, sans-serif" font-size="26"
    font-weight="500" fill="#7E828B">São Paulo  ·  Professional Services  ·  6+ anos</text>
</svg>`;

for (const [slug, data] of Object.entries(variants)) {
  await sharp(Buffer.from(svg(data)))
    .png()
    .toFile(resolve(outDir, `${slug}.png`));
  console.log(`Generated ${slug}.png`);
}
