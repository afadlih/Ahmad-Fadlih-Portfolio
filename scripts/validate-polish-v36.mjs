import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const read = (path) => readFileSync(resolve(root, path), "utf8");
const errors = [];
const home = read("src/styles/v36/home.css");
const pages = [read("src/styles/v36/pages.css"), read("src/styles/v36/polish.css")].join("\n");
const responsive = read("src/styles/v36/responsive.css");
const projectPreview = read("src/components/portfolio/ProjectCodePreview.tsx");
const projects = JSON.parse(read("src/content/projects.json"));
const orthobreath = projects.find((project) => project.slug === "orthobreath");

for (const token of [
  "font-size: clamp(2.55rem, 4.25vw, 4.05rem)",
  "max-width: 420px",
  "aspect-ratio: 4 / 5",
]) {
  if (!home.includes(token)) errors.push(`homepage polish rule missing: ${token}`);
}

for (const token of [
  "grid-template-columns: repeat(auto-fit, minmax(min(100%, 230px), 1fr))",
  ".project-code-layers ul",
  ".system-map-tab-trigger",
  "overflow-wrap: anywhere",
  "scrollbar-gutter: stable both-edges",
  "contain: inline-size",
  "grid-template-columns: 58px max-content",
]) {
  if (!pages.includes(token)) errors.push(`page overflow rule missing: ${token}`);
}

if (!responsive.includes("font-size: clamp(2.25rem, 10vw, 3.15rem)")) {
  errors.push("mobile hero type scale is not bounded");
}
if (!projectPreview.includes("Prototype layers") || !projectPreview.includes("stageLabel")) {
  errors.push("project preview fallback or localized stage is missing");
}
if (!orthobreath) {
  errors.push("OrthoBreath project is missing");
} else {
  if (!orthobreath.category.id.includes("PKM-KC 2026")) errors.push("OrthoBreath category must identify PKM-KC 2026");
  if (!orthobreath.architecture.components.some((item) => item.name === "API service layer")) {
    errors.push("OrthoBreath architecture must explain the API service layer");
  }
  if (!orthobreath.limitations.some((item) => item.id.includes("belum menghasilkan klaim medis"))) {
    errors.push("OrthoBreath must keep a clear medical-claim limitation");
  }
}

if (errors.length) {
  console.error("V36 polish validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("V36 layout, typography, and OrthoBreath polish validation passed.");
