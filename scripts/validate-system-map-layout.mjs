import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const component = readFileSync(resolve(root, "src/components/portfolio/SystemMapExperience.tsx"), "utf8");
const pages = readFileSync(resolve(root, "src/styles/v36/pages.css"), "utf8");
const responsive = readFileSync(resolve(root, "src/styles/v36/responsive.css"), "utf8");
const data = readFileSync(resolve(root, "src/lib/system-map.ts"), "utf8");
const errors = [];

for (const token of [
  "system-map-flow-list",
  "system-map-flow-card",
  "system-map-source-panel",
  "system-map-project-badges",
]) {
  if (!component.includes(token)) errors.push(`Component missing ${token}`);
}

for (const token of ["grid-template-columns: repeat(auto-fit, minmax(170px, 1fr))", "var(--font-mono)"]) {
  if (!pages.includes(token)) errors.push(`System map styles missing ${token}`);
}
for (const token of ["@media (max-width: 760px)", "@media (max-width: 560px)"]) {
  if (!responsive.includes(token)) errors.push(`Responsive styles missing ${token}`);
}

for (const forbidden of [
  ".system-map-node.node-1",
  ".system-map-platform",
  ".system-map-node {\n  position: absolute",
  "min-height: 620px",
  'color: "coral"',
]) {
  if (pages.includes(forbidden) || data.includes(forbidden)) {
    errors.push(`Legacy or inconsistent system-map pattern found: ${forbidden}`);
  }
}

for (const token of ["navLabel", 'color: "cobalt"', 'color: "teal"', 'color: "slate"']) {
  if (!data.includes(token)) errors.push(`System map data missing ${token}`);
}

if (errors.length) {
  console.error("System map layout validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("System map layout validation passed.");
