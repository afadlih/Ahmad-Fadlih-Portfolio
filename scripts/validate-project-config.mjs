import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const errors = [];
const warnings = [];
const read = (path) => readFileSync(join(root, path), "utf8");
const readJson = (path) => JSON.parse(read(path));

const packageJson = readJson("package.json");
const packageLock = readJson("package-lock.json");

if (packageJson.version !== packageLock.version) {
  errors.push("package.json and package-lock.json versions do not match");
}
if (packageLock.packages?.[""]?.version !== packageJson.version) {
  errors.push("package-lock root package version does not match package.json");
}
if (!packageJson.engines?.node?.includes("22")) {
  errors.push("package.json must define the Node.js 22 runtime baseline");
}
if (!packageJson.packageManager?.startsWith("npm@")) {
  errors.push("package.json must pin packageManager");
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
for (const token of ["node:22-alpine", "npm ci", "USER nextjs", "HEALTHCHECK", "/api/health"]) {
  if (!dockerfile.includes(token)) errors.push(`Dockerfile missing ${token}`);
}

for (const workflow of [".github/workflows/ci.yml", ".github/workflows/final-qa.yml"]) {
  if (!existsSync(join(root, workflow))) errors.push(`missing workflow ${workflow}`);
}

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
if (!configuredUrl || configuredUrl.includes("localhost") || configuredUrl.includes("example.com")) {
  warnings.push("NEXT_PUBLIC_SITE_URL is not configured with the final production domain");
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
console.log("Project configuration validation passed.");
