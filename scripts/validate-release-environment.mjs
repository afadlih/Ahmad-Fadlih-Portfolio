const values = {
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  PORTFOLIO_PUBLIC_URL: process.env.PORTFOLIO_PUBLIC_URL,
};
const errors = [];
const blockedHosts = new Set([
  "localhost",
  "127.0.0.1",
  "portfolio.example.com",
  "portfolio.invalid",
]);

for (const [name, value] of Object.entries(values)) {
  if (!value) {
    errors.push(`${name} is required for a release candidate check`);
    continue;
  }
  try {
    const url = new URL(value);
    if (url.protocol !== "https:") errors.push(`${name} must use HTTPS`);
    const hostname = url.hostname.toLowerCase();
    const isExampleHost =
      hostname === "example.com" ||
      hostname.endsWith(".example.com") ||
      hostname === "example.org" ||
      hostname.endsWith(".example.org") ||
      hostname === "example.net" ||
      hostname.endsWith(".example.net") ||
      hostname.endsWith(".example");
    if (blockedHosts.has(hostname) || hostname.endsWith(".invalid") || isExampleHost) {
      errors.push(`${name} must use the real production hostname`);
    }
    if (url.pathname !== "/" || url.search || url.hash) {
      errors.push(`${name} must be the site origin without path, query, or fragment`);
    }
  } catch {
    errors.push(`${name} is not a valid URL`);
  }
}

if (
  values.NEXT_PUBLIC_SITE_URL &&
  values.PORTFOLIO_PUBLIC_URL &&
  values.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "") !==
    values.PORTFOLIO_PUBLIC_URL.replace(/\/$/, "")
) {
  errors.push("NEXT_PUBLIC_SITE_URL and PORTFOLIO_PUBLIC_URL must use the same origin");
}

if (errors.length) {
  console.error("Release environment validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Release environment validation passed.");
