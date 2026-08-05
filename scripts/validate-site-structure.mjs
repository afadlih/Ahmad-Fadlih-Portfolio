import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const errors = [];
const requireFile = (path) => {
  if (!existsSync(join(root, path))) errors.push(`missing required file: ${path}`);
};

for (const path of [
  "src/app/layout.tsx",
  "src/app/[lang]/layout.tsx",
  "src/app/[lang]/page.tsx",
  "src/app/[lang]/loading.tsx",
  "src/app/[lang]/error.tsx",
  "src/app/[lang]/not-found.tsx",
  "src/app/[lang]/projects/page.tsx",
  "src/app/[lang]/projects/[slug]/page.tsx",
  "src/app/[lang]/resume/page.tsx",
  "src/app/[lang]/system-map/page.tsx",
  "src/app/content-studio/layout.tsx",
  "src/app/global-error.tsx",
  "src/app/global-not-found.tsx",
  "src/app/api/health/route.ts",
  "src/app/.well-known/security.txt/route.ts",
  "src/components/portfolio/DocumentLanguageSync.tsx",
  "src/components/portfolio/ResumePage.tsx",
  "public/theme-init.js",
  "public/documents/Ahmad-Fadlih-CV-ID.pdf",
  "public/documents/Ahmad-Fadlih-CV-EN.pdf",
  "public/documents/Ahmad-Fadlih-CV-Editable.docx",
  "src/app/sitemap.ts",
  "src/app/robots.ts",
  "src/app/manifest.ts",
  "src/app/opengraph-image.tsx",
  "src/app/icon.png",
  "src/app/apple-icon.png",
  "src/i18n/config.ts",
  "src/lib/seo.ts",
]) requireFile(path);

const rootLayout = readFileSync(join(root, "src/app/layout.tsx"), "utf8");
for (const token of ['<html lang="id"', "<body", 'src="/theme-init.js"', 'strategy="beforeInteractive"']) {
  if (!rootLayout.includes(token)) errors.push(`root layout missing ${token}`);
}
if (!rootLayout.includes('import "@/app/globals.css"')) {
  errors.push("root layout must own the global stylesheet import");
}

const localeLayout = readFileSync(join(root, "src/app/[lang]/layout.tsx"), "utf8");
for (const forbidden of ["<html", "<body", "next/script", "<Script"]) {
  if (localeLayout.includes(forbidden)) errors.push(`locale layout must not contain ${forbidden}`);
}
for (const token of ["generateStaticParams", "DocumentLanguageSync", "<Navbar", "<Footer"]) {
  if (!localeLayout.includes(token)) errors.push(`locale layout missing ${token}`);
}

const studioLayout = readFileSync(join(root, "src/app/content-studio/layout.tsx"), "utf8");
if (studioLayout.includes("<html") || studioLayout.includes("<body")) {
  errors.push("content studio must use the top-level root layout");
}

const themeInit = readFileSync(join(root, "public/theme-init.js"), "utf8");
for (const token of ["afadlih-theme", "prefers-color-scheme", "document.documentElement.lang"]) {
  if (!themeInit.includes(token)) errors.push(`theme initializer missing ${token}`);
}

const seoSource = readFileSync(join(root, "src/lib/seo.ts"), "utf8");
for (const token of ["canonical", "languages", "openGraph", "twitter", "googleBot", "id-ID", "en-US"]) {
  if (!seoSource.includes(token)) errors.push(`src/lib/seo.ts missing SEO token: ${token}`);
}

const homeSource = readFileSync(join(root, "src/app/[lang]/page.tsx"), "utf8");
if (!homeSource.includes("application/ld+json")) errors.push("home page does not include Person JSON-LD");
const projectSource = readFileSync(join(root, "src/app/[lang]/projects/[slug]/page.tsx"), "utf8");
if (!projectSource.includes("application/ld+json")) {
  errors.push("project page does not include SoftwareSourceCode JSON-LD");
}

const styleFiles = [
  "src/app/globals.css",
  "src/styles/v36/tokens.css",
  "src/styles/v36/layout.css",
  "src/styles/v36/home.css",
  "src/styles/v36/pages.css",
  "src/styles/v36/polish.css",
  "src/styles/v36/responsive.css",
];
for (const file of styleFiles) requireFile(file);
const css = styleFiles
  .filter((file) => existsSync(join(root, file)))
  .map((file) => readFileSync(join(root, file), "utf8"))
  .join("\n");
for (const token of [
  "@media (max-width: 760px)",
  "@media (prefers-reduced-motion: reduce)",
  "@media print",
  ".portfolio-hero__grid",
  ".project-detail-hero-grid",
  ".deep-dive-shell",
  ".error-page",
  ".page-loading",
  "overflow-wrap",
]) {
  if (!css.includes(token)) errors.push(`styles missing required token: ${token}`);
}

if (errors.length) {
  console.error("Site structure validation failed:");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}
console.log("Site structure validation passed.");
