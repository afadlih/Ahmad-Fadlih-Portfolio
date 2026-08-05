import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const component = readFileSync(resolve(root, "src/components/portfolio/FeaturedProjectCard.tsx"), "utf8");
const selected = readFileSync(resolve(root, "src/components/portfolio/SelectedWork.tsx"), "utf8");
const css = readFileSync(resolve(root, "src/styles/v36/home.css"), "utf8");
const errors = [];

for (const token of ["featured-project__card", "featured-project__body", "featured-project__footer"]) {
  if (!component.includes(token)) errors.push(`featured card missing ${token}`);
}
for (const token of ["featured-project-grid", "MajorCaseStudy"]) {
  if (!selected.includes(token)) errors.push(`selected work missing ${token}`);
}
for (const token of [
  "grid-template-columns: repeat(3, minmax(0, 1fr))",
  "height: 100%",
  "border-top: 3px solid var(--project-accent)",
]) {
  if (!css.includes(token)) errors.push(`featured layout CSS missing ${token}`);
}

for (const forbidden of [
  "implementationSources",
  "sticky-project-card__pipeline",
  "sticky-project-card__implementation",
  "position: sticky",
]) {
  if (component.includes(forbidden) || selected.includes(forbidden) || css.includes(forbidden)) {
    errors.push(`featured layout still contains over-layout pattern: ${forbidden}`);
  }
}

if (errors.length) {
  console.error("Featured layout validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Featured layout validation passed.");
