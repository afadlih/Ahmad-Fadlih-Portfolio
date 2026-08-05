# Deployment Guide

## Runtime baseline

```text
Node.js 22
npm 10+
Next.js 16.2.12
React 19.2.8
```

## Environment

```env
NEXT_PUBLIC_SITE_URL=https://your-real-domain.com
PORTFOLIO_PUBLIC_URL=https://your-real-domain.com
ENABLE_CONTENT_STUDIO=false
```

The two public URLs must use the same HTTPS origin and must not end with a custom path.

## Local validation

```bash
npm ci
npm run verify
```

Release environment validation is intentionally separate:

```bash
NEXT_PUBLIC_SITE_URL=https://your-real-domain.com \
PORTFOLIO_PUBLIC_URL=https://your-real-domain.com \
npm run validate:release-env
```

## Vercel

1. Import the repository.
2. Set Node.js to version 22.
3. Set `NEXT_PUBLIC_SITE_URL` to the production origin.
4. Set `ENABLE_CONTENT_STUDIO=false`.
5. Deploy from `main` only after the quality workflow passes.
6. Set repository variable `PORTFOLIO_PUBLIC_URL` to the same origin.
7. Run the `Production Route Check` workflow manually.
8. Add the live domain to the repository Website field only after the route check passes.

## Docker

The production image refuses to build without a real deployment origin:

```bash
docker build \
  --build-arg NEXT_PUBLIC_SITE_URL=https://your-real-domain.com \
  --build-arg PORTFOLIO_PUBLIC_URL=https://your-real-domain.com \
  -t ahmad-fadlih-portfolio:36.1.0 .

docker run --rm \
  -p 3000:3000 \
  ahmad-fadlih-portfolio:36.1.0
```

Health check:

```text
GET /api/health
```

## Post-deploy checks

```text
/id
/en
/id/projects
/en/projects
/id/resume
/en/resume
/id/projects/internlog-ai
/en/projects/internlog-ai
/id/projects/aquasense
/en/projects/aquasense
/id/projects/formai
/en/projects/formai
/sitemap.xml
/robots.txt
/manifest.webmanifest
/.well-known/security.txt
/api/health
```

Also verify:

- canonical and Open Graph URLs use the production domain;
- language switch remains on the same route;
- CV files open correctly;
- private repository URLs and source links are absent;
- Content Studio returns 404 in production;
- mobile layout has no horizontal overflow;
- `npm run release:candidate` succeeds against the live deployment.
