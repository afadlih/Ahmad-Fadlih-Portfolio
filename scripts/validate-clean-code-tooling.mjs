import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const errors = [];
const required = [
  "sgconfig.yml",
  "knip.jsonc",
  ".jscpd.json",
  ".fallowrc.jsonc",
  "tools/ast-grep/rules/no-console-log-ts.yml",
  "tools/ast-grep/rules/no-console-log-tsx.yml",
  "tools/ast-grep/rules/no-explicit-any-ts.yml",
  "tools/ast-grep/rules/no-explicit-any-tsx.yml",
  "tools/ast-grep/rules/no-raw-img.yml",
  "docs/CLEAN_CODE_TOOLCHAIN.md",
];

for (const file of required) {
  if (!existsSync(join(root, file))) errors.push(`missing ${file}`);
}

const packageJson = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
for (const script of [
  "quality:ast-grep",
  "quality:ast-grep:test",
  "quality:knip",
  "quality:jscpd",
  "quality:fallow",
  "quality:full",
  "validate:preflight",
]) {
  if (!packageJson.scripts?.[script]) errors.push(`package.json missing ${script}`);
}

const projectDetail = readFileSync(join(root, "src/components/portfolio/ProjectDetail.tsx"), "utf8");
if (projectDetail.split("\n").length > 80) {
  errors.push("ProjectDetail.tsx should stay below 80 lines as an orchestration component");
}

for (const file of [
  "src/components/portfolio/HomeHero.tsx",
  "src/components/portfolio/SelectedWork.tsx",
  "src/components/portfolio/SystemMapExperience.tsx",
  "src/components/portfolio/project-detail/AiJourneySection.tsx",
  "src/components/portfolio/PortfolioHub.tsx",
  "src/components/portfolio/ProjectCodePreview.tsx",
]) {
  if (!existsSync(join(root, file))) errors.push(`missing ${file}`);
}

const globalsCss = readFileSync(join(root, "src/app/globals.css"), "utf8");
if (globalsCss.split("\n").length > 20) {
  errors.push("globals.css should only orchestrate modular style imports");
}

const styleFiles = [
  "src/styles/v36/tokens.css",
  "src/styles/v36/layout.css",
  "src/styles/v36/home.css",
  "src/styles/v36/pages.css",
  "src/styles/v36/polish.css",
  "src/styles/v36/responsive.css",
];
for (const styleFile of styleFiles) {
  if (!existsSync(join(root, styleFile))) errors.push(`missing ${styleFile}`);
  else if (readFileSync(join(root, styleFile), "utf8").split("\n").length > 1350) {
    errors.push(`${styleFile} is too large and should be split by responsibility`);
  }
}

if (errors.length) {
  console.error("Clean-code tooling validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Clean-code tooling validation passed.");
