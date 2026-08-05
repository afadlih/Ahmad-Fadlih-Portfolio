import { readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const read = (path) => readFileSync(join(root, path), "utf8");
const errors = [];
const home = read("src/styles/v36/home.css");
const pages = read("src/styles/v36/pages.css");
const polish = read("src/styles/v36/polish.css");
const responsive = read("src/styles/v36/responsive.css");
const source = read("src/components/portfolio/SourceCodeExcerpt.tsx");
const hero = read("src/components/portfolio/HomeHero.tsx");
const projectHero = read("src/components/portfolio/project-detail/ProjectHero.tsx");
const allCss = [home, pages, polish, responsive].join("\n");

for (const token of [
  "font-size: clamp(2.55rem, 4.25vw, 4.05rem)",
  "max-width: 16ch",
  "grid-template-columns: minmax(0, 1fr) minmax(300px, 420px)",
  "aspect-ratio: 4 / 5",
]) {
  if (!home.includes(token)) errors.push(`hero visual lock missing: ${token}`);
}

for (const token of [
  "case-heading {",
  "display: grid",
  "project-detail-hero-grid",
  "minmax(0, 640px)",
  "source-code-excerpt__viewport",
  "overflow-x: auto",
  "scrollbar-gutter: stable both-edges",
  "grid-template-columns: 58px max-content",
]) {
  if (!polish.includes(token)) errors.push(`detail polish lock missing: ${token}`);
}

for (const forbidden of [
  "word-break: break-all",
  "overflow-wrap: anywhere !important",
  "position: sticky !important",
  "min-height: 620px",
  "sticky-project-card",
]) {
  if (allCss.includes(forbidden)) errors.push(`visual anti-regression failed: ${forbidden}`);
}

if (!source.includes('className="source-code-excerpt__viewport"') || !source.includes("tabIndex={0}")) {
  errors.push("code excerpt viewport must remain keyboard-scrollable");
}
if (!hero.includes("portfolio-hero__focus") || !projectHero.includes("project-detail-code-panel")) {
  errors.push("home and project detail hero composition changed unexpectedly");
}
if (!responsive.includes("@media (max-width: 1180px)") && !polish.includes("@media (max-width: 1180px)")) {
  errors.push("project detail breakpoint for long code panel is missing");
}

if (errors.length) {
  console.error("V36 visual QA validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("V36 visual QA validation passed.");
