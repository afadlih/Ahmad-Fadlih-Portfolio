const rawBase =
  process.env.PORTFOLIO_PUBLIC_URL ?? process.env.NEXT_PUBLIC_SITE_URL;
const required = process.env.REQUIRE_PUBLIC_URL === "true";

if (!rawBase) {
  if (required) {
    console.error("A public portfolio URL is required for this check.");
    process.exit(1);
  }
  console.log("No public URL configured. Skipping live route checks.");
  process.exit(0);
}

let base;
try {
  base = new URL(rawBase);
} catch {
  console.error("The configured public portfolio URL is invalid.");
  process.exit(1);
}

if (base.protocol !== "https:") {
  console.error("The public portfolio URL must use HTTPS.");
  process.exit(1);
}

const paths = [
  "/api/health",
  "/id",
  "/en",
  "/id/projects",
  "/en/projects",
  "/id/resume",
  "/id/projects/internlog-ai",
  "/id/projects/aquasense",
  "/id/projects/formai",
];

for (const pathname of paths) {
  const url = new URL(pathname, base).toString();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15_000);
  try {
    const response = await fetch(url, {
      redirect: "follow",
      signal: controller.signal,
      headers: { "User-Agent": "portfolio-live-check/7.0" },
    });
    if (!response.ok) {
      console.error(`${url} returned ${response.status}`);
      process.exit(1);
    }
    console.log(`OK ${url}`);
  } catch (error) {
    console.error(`${url} failed: ${error instanceof Error ? error.message : error}`);
    process.exit(1);
  } finally {
    clearTimeout(timeout);
  }
}
