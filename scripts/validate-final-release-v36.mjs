import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const read = (path) => readFileSync(join(root, path), "utf8");
const errors = [];
const requiredFiles = [
  "README.md",
  "CHANGELOG.md",
  "SECURITY.md",
  "docs/FINAL_RELEASE_CANDIDATE_V36.md",
  "docs/VISUAL_QA_CHECKLIST_V36.md",
  "docs/CONTENT_LOCK_V36.md",
  "docs/DEPLOYMENT_CANDIDATE_V36.md",
  "docs/UI_SYSTEM_V36.md",
  "public/og-image.png",
  "public/documents/Ahmad-Fadlih-CV-ID.pdf",
  "public/documents/Ahmad-Fadlih-CV-EN.pdf",
];

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) errors.push(`missing release file: ${file}`);
}

const packageJson = JSON.parse(read("package.json"));
const lockJson = JSON.parse(read("package-lock.json"));
if (packageJson.version !== "36.0.0") errors.push("package.json version must be 36.0.0");
if (lockJson.packages?.[""]?.version !== "36.0.0") errors.push("package-lock root version must be 36.0.0");
if (!packageJson.scripts?.["release:candidate"]) errors.push("release:candidate script is missing");
if (!packageJson.scripts?.["validate:visual-qa"]) errors.push("validate:visual-qa script is missing");
if (!packageJson.scripts?.["validate:final-release"]) errors.push("validate:final-release script is missing");

const globals = read("src/app/globals.css");
for (const module of ["tokens", "layout", "home", "pages", "polish", "responsive"]) {
  if (!globals.includes(`../styles/v36/${module}.css`)) {
    errors.push(`globals.css missing v36 ${module} module`);
  }
}
if (globals.includes("../styles/v29/")) errors.push("globals.css still imports v29 styles");

const readme = read("README.md");
for (const token of ["V36", "release:candidate", "npm run verify", "Visual QA", "Deployment candidate"]) {
  if (!readme.includes(token)) errors.push(`README missing ${token}`);
}

const docsText = requiredFiles
  .filter((file) => file.endsWith(".md"))
  .map((file) => read(file))
  .join("\n");
for (const token of ["V31", "V32", "V33", "V34", "V35", "V36"]) {
  if (!docsText.includes(token)) errors.push(`release docs missing ${token}`);
}

if (errors.length) {
  console.error("V36 final release validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("V36 final release validation passed.");
