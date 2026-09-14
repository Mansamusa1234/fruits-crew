import { chromium } from "playwright";
import { readFileSync } from "node:fs";

const svg = readFileSync("/workspace/.grok/favicon.svg.tmp", "utf8");
const dataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

const browser = await chromium.launch({ args: ["--no-sandbox"] });

async function snap(size, outPath) {
  const page = await browser.newPage({
    viewport: { width: size, height: size },
    deviceScaleFactor: 1,
  });
  await page.setContent(
    `<!doctype html><html><head><style>
      html,body{margin:0;padding:0;width:${size}px;height:${size}px;background:#F6F1E8}
      img{display:block;width:${size}px;height:${size}px}
    </style></head><body><img alt="" src="${dataUrl}"></body></html>`,
    { waitUntil: "load" },
  );
  await page.screenshot({ path: outPath, type: "png", omitBackground: false });
  await page.close();
}

await snap(16, "/workspace/.grok/favicon-16.png");
await snap(32, "/workspace/.grok/favicon-32.png");
await snap(192, "/workspace/.grok/icon-192.png");
await snap(512, "/workspace/.grok/icon-512.png");
await browser.close();
console.log("rasterized 16/32/192/512");
