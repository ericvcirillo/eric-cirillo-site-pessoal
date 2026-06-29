import puppeteer from "puppeteer";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const files = [
  {
    input: resolve(root, "cv/cv-pt.html"),
    output: resolve(root, "public/docs/Eric_Cirillo_CV_2026.pdf"),
  },
  {
    input: resolve(root, "cv/cv-en.html"),
    output: resolve(root, "public/docs/Eric_Cirillo_CV_EN_2026.pdf"),
  },
];

const browser = await puppeteer.launch({ headless: true });

for (const { input, output } of files) {
  const page = await browser.newPage();
  await page.goto(`file:///${input.replace(/\\/g, "/")}`, {
    waitUntil: "networkidle0",
  });
  await page.pdf({
    path: output,
    format: "A4",
    printBackground: true,
    margin: { top: "14mm", bottom: "14mm", left: "15mm", right: "15mm" },
  });
  await page.close();
  console.log(`PDF gerado: ${output}`);
}

await browser.close();
