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
  "docs/RELEASE_HARDENING_V36_1.md",
  "docs/REPOSITORY_SETTINGS.md",
  "docs/IMPLEMENTATION_REPORT_V36_1.md",
  "docs/VALIDATION_REPORT_V36_1.md",
  "docs/GIT_HANDOFF.md",
  "APPLY-TO-CURRENT-REPO.ps1",
  "APPLY-TO-CURRENT-REPO.sh",
  ".github/workflows/quality.yml",
  ".github/workflows/production-check.yml",
  "public/og-image.png",
  "public/documents/Ahmad-Fadlih-CV-ID.pdf",
  "public/documents/Ahmad-Fadlih-CV-EN.pdf",
];

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) errors.push(`missing release-readiness file: ${file}`);
}

const packageJson = JSON.parse(read("package.json"));
const lockJson = JSON.parse(read("package-lock.json"));
const expectedVersion = "36.1.0";
if (packageJson.version !== expectedVersion) errors.push(`package.json version must be ${expectedVersion}`);
if (lockJson.version !== expectedVersion) errors.push(`package-lock version must be ${expectedVersion}`);
if (lockJson.packages?.[""]?.version !== expectedVersion) {
  errors.push(`package-lock root version must be ${expectedVersion}`);
}
for (const script of ["release:candidate", "validate:release-env", "check:public-url:required", "validate:visual-qa", "validate:final-release"]) {
  if (!packageJson.scripts?.[script]) errors.push(`${script} script is missing`);
}

const globals = read("src/app/globals.css");
for (const styleModule of ["tokens", "layout", "home", "pages", "polish", "responsive"]) {
  if (!globals.includes(`../styles/v36/${styleModule}.css`)) {
    errors.push(`globals.css missing v36 ${styleModule} module`);
  }
}
if (globals.includes("../styles/v29/")) errors.push("globals.css still imports v29 styles");

const readme = read("README.md");
for (const token of [
  "V36.1",
  "Release candidate",
  "Education and professional context",
  "Currently building",
  "npm run verify",
  "npm run release:candidate",
  "PORTFOLIO_PUBLIC_URL",
]) {
  if (!readme.includes(token)) errors.push(`README missing ${token}`);
}
for (const forbidden of ["final deployment candidate", "v1.0.0-final-public"]) {
  if (readme.toLowerCase().includes(forbidden)) errors.push(`README contains premature release claim: ${forbidden}`);
}

const hardening = read("docs/RELEASE_HARDENING_V36_1.md");
for (const token of [
  "CI recovery",
  "Privacy boundary",
  "Dependency baseline",
  "Deployment gate",
  "Branch model",
]) {
  if (!hardening.includes(token)) errors.push(`release hardening document missing ${token}`);
}

if (errors.length) {
  console.error("V36.1 release-readiness validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("V36.1 release-readiness validation passed.");
