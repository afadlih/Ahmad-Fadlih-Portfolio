import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const errors = [];
const read = (path) => readFileSync(join(root, path), "utf8");
const files = [
  "src/styles/v36/tokens.css",
  "src/styles/v36/layout.css",
  "src/styles/v36/home.css",
  "src/styles/v36/pages.css",
  "src/styles/v36/polish.css",
  "src/styles/v36/responsive.css",
];

for (const file of files) {
  if (!existsSync(join(root, file))) errors.push(`missing ${file}`);
}

const globals = read("src/app/globals.css");
const tokens = read("src/styles/v36/tokens.css");
const layout = read("src/styles/v36/layout.css");
const home = read("src/styles/v36/home.css");
const polish = read("src/styles/v36/polish.css");
const responsive = read("src/styles/v36/responsive.css");
const allCss = [tokens, layout, home, read("src/styles/v36/pages.css"), polish, responsive].join("\n");

for (const file of files) {
  const importPath = file.replace("src/styles/", "../styles/");
  if (!globals.includes(importPath)) errors.push(`globals.css does not import ${importPath}`);
}

if (globals.match(/@import/g)?.length !== 7) {
  errors.push("globals.css must load Tailwind plus exactly six V36 style modules");
}

for (const token of [
  "--background: #f4f7fb",
  "--foreground: #142238",
  "--primary: #2f5f9f",
  "--muted-foreground: #465b74",
  "--border: #c9d6e5",
  "--background: #0c1624",
  "--foreground: #eef4fb",
]) {
  if (!tokens.includes(token)) errors.push(`missing design token ${token}`);
}

for (const forbidden of [
  "linear-gradient(",
  "radial-gradient(",
  "#d4af37",
  "#f59e0b",
  "#8b5cf6",
  "#ec4899",
  "position: sticky !important",
  "min-height: 620px",
]) {
  if (allCss.toLowerCase().includes(forbidden)) errors.push(`anti-slop rule failed: ${forbidden}`);
}

if (!home.includes("grid-template-columns: repeat(3, minmax(0, 1fr))")) {
  errors.push("featured projects must use a bounded three-column desktop grid");
}
if (!home.includes("supporting-project-list")) {
  errors.push("supporting projects must use compact lists instead of repeated cards");
}
if (!responsive.includes("@media (max-width: 760px)")) {
  errors.push("mobile breakpoint is missing");
}
if (!responsive.includes("@media (prefers-reduced-motion: reduce)")) {
  errors.push("reduced-motion support is missing");
}

if (errors.length) {
  console.error("V36 UI system validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("V36 calm-blue UI system validation passed.");
