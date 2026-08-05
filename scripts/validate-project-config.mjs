import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const errors = [];
const warnings = [];
const read = (path) => readFileSync(join(root, path), "utf8");
const readJson = (path) => JSON.parse(read(path));

const packageJson = readJson("package.json");
const packageLock = readJson("package-lock.json");
const rootLock = packageLock.packages?.[""];

if (packageJson.version !== packageLock.version) {
  errors.push("package.json and package-lock.json versions do not match");
}
if (rootLock?.version !== packageJson.version) {
  errors.push("package-lock root package version does not match package.json");
}
if (!packageJson.engines?.node?.includes("22")) {
  errors.push("package.json must define the Node.js 22 runtime baseline");
}
if (!packageJson.packageManager?.startsWith("npm@")) {
  errors.push("package.json must pin packageManager");
}
for (const dependency of ["next", "react", "react-dom"]) {
  if (packageJson.dependencies?.[dependency] !== rootLock?.dependencies?.[dependency]) {
    errors.push(`${dependency} differs between package.json and package-lock.json`);
  }
}
if (packageJson.devDependencies?.["eslint-config-next"] !== rootLock?.devDependencies?.["eslint-config-next"]) {
  errors.push("eslint-config-next differs between package.json and package-lock.json");
}

const lockText = read("package-lock.json");
if (lockText.includes("applied-caas-gateway") || lockText.includes("internal.api.openai.org")) {
  errors.push("package-lock.json contains environment-specific registry URLs");
}

for (const path of [".editorconfig", ".nvmrc", ".node-version", ".npmrc", ".env.example"]) {
  if (!existsSync(join(root, path))) errors.push(`missing project convention file: ${path}`);
}

const envExample = read(".env.example");
if (envExample.includes("NEXT_PUBLIC_ENABLE_CONTENT_STUDIO")) {
  errors.push("Content Studio must use a server-only environment flag");
}
if (!envExample.includes("ENABLE_CONTENT_STUDIO=false")) {
  errors.push(".env.example must document ENABLE_CONTENT_STUDIO=false");
}
if (!envExample.includes("PORTFOLIO_PUBLIC_URL=")) {
  errors.push(".env.example must document PORTFOLIO_PUBLIC_URL");
}

const nextConfig = read("next.config.ts");
for (const token of [
  "Content-Security-Policy",
  "X-Content-Type-Options",
  "Permissions-Policy",
  "Strict-Transport-Security",
  "globalNotFound",
  "async redirects()",
]) {
  if (!nextConfig.includes(token)) errors.push(`next.config.ts missing ${token}`);
}

const dockerfile = read("Dockerfile");
for (const token of [
  "node:22-alpine",
  "npm ci",
  "ARG NEXT_PUBLIC_SITE_URL",
  "ARG PORTFOLIO_PUBLIC_URL",
  "npm run validate:release-env",
  "USER nextjs",
  "HEALTHCHECK",
  "/api/health",
]) {
  if (!dockerfile.includes(token)) errors.push(`Dockerfile missing ${token}`);
}
if (dockerfile.includes("portfolio.example.com")) {
  errors.push("Dockerfile still contains the old example production hostname");
}

const requiredWorkflows = [
  ".github/workflows/quality.yml",
  ".github/workflows/production-check.yml",
];
for (const workflow of requiredWorkflows) {
  if (!existsSync(join(root, workflow))) errors.push(`missing workflow ${workflow}`);
}
for (const staleWorkflow of [
  ".github/workflows/ci.yml",
  ".github/workflows/final-qa.yml",
  ".github/workflows/maintenance-check.yml",
  ".github/workflows/static-analysis.yml",
]) {
  if (existsSync(join(root, staleWorkflow))) errors.push(`stale workflow still exists: ${staleWorkflow}`);
}

const workflowDirectory = join(root, ".github/workflows");
const workflowNames = existsSync(workflowDirectory)
  ? readdirSync(workflowDirectory).filter((name) => /\.ya?ml$/i.test(name))
  : [];
const actionPattern = /^\s*uses:\s*([^\s@]+)@([^\s#]+)/gm;
const fullSha = /^[0-9a-f]{40}$/;
for (const workflowName of workflowNames) {
  const workflowPath = `.github/workflows/${workflowName}`;
  const workflowText = read(workflowPath);
  for (const [, action, ref] of workflowText.matchAll(actionPattern)) {
    if (!fullSha.test(ref)) errors.push(`${workflowPath}: ${action}@${ref} is not pinned to a full commit SHA`);
  }
  if (!workflowText.includes("permissions:")) errors.push(`${workflowPath}: explicit permissions are required`);
  if (!workflowText.includes("timeout-minutes:")) errors.push(`${workflowPath}: timeout-minutes is required`);
  if (!workflowText.includes("concurrency:")) errors.push(`${workflowPath}: concurrency control is required`);
}

const qualityWorkflow = existsSync(join(root, requiredWorkflows[0])) ? read(requiredWorkflows[0]) : "";
for (const token of ["branches: [main, develop]", "npm run verify", "quality:ast-grep", "quality:knip", "quality:jscpd"]) {
  if (!qualityWorkflow.includes(token)) errors.push(`quality workflow missing ${token}`);
}
const productionWorkflow = existsSync(join(root, requiredWorkflows[1])) ? read(requiredWorkflows[1]) : "";
for (const token of ["vars.PORTFOLIO_PUBLIC_URL", "validate-release-environment.mjs", "check-public-url.mjs --required"]) {
  if (!productionWorkflow.includes(token)) errors.push(`production workflow missing ${token}`);
}

for (const script of [
  "verify",
  "qa:light",
  "qa:final",
  "maintenance:cycle",
  "validate:release-env",
  "check:public-url:required",
  "release:candidate",
]) {
  if (!packageJson.scripts?.[script]) errors.push(`package.json script is missing: ${script}`);
}

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
if (!configuredUrl || /localhost|\.invalid|example\.(?:com|org|net)/i.test(configuredUrl)) {
  warnings.push("NEXT_PUBLIC_SITE_URL is not configured with the final production domain; deployment release checks remain intentionally blocked");
}

if (warnings.length) {
  console.warn("Configuration warnings:");
  warnings.forEach((warning) => console.warn(`- ${warning}`));
}
if (errors.length) {
  console.error("Project configuration validation failed:");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}
console.log(`Project configuration validation passed with ${workflowNames.length} focused workflows.`);
