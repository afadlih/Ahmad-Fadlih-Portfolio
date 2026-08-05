import { readFileSync } from "node:fs";

const css = readFileSync(new URL("../src/styles/v36/responsive.css", import.meta.url), "utf8");
const home = readFileSync(new URL("../src/styles/v36/home.css", import.meta.url), "utf8");
const localeLayout = readFileSync(new URL("../src/app/[lang]/layout.tsx", import.meta.url), "utf8");
const rootLayout = readFileSync(new URL("../src/app/layout.tsx", import.meta.url), "utf8");
const errors = [];

for (const token of [
  "@media (max-width: 1040px)",
  "@media (max-width: 900px)",
  "@media (max-width: 760px)",
  "@media (max-width: 560px)",
  "@media (prefers-reduced-motion: reduce)",
]) {
  if (!css.includes(token)) errors.push(`responsive CSS missing ${token}`);
}

if (!home.includes("grid-template-columns: repeat(3, minmax(0, 1fr))")) {
  errors.push("desktop featured grid is missing");
}
if (localeLayout.includes("next/script") || localeLayout.includes("<Script")) {
  errors.push("locale layout must stay free of beforeInteractive scripts");
}
if (!rootLayout.includes('src="/theme-init.js"') || !rootLayout.includes('strategy="beforeInteractive"')) {
  errors.push("root theme initializer is missing");
}

if (errors.length) {
  console.error("Responsive layout validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Responsive layout validation passed.");
