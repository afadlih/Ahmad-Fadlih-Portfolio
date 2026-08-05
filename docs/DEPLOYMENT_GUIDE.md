# Deployment Guide

## Runtime baseline

```text
Node.js 22
npm 10+
```

## Environment

```env
NEXT_PUBLIC_SITE_URL=https://portfolio-domain.com
ENABLE_CONTENT_STUDIO=false
PORTFOLIO_PUBLIC_URL=https://portfolio-domain.com
```

The canonical URL must use HTTPS and should not end with `/`.

## Local validation

```bash
npm ci
npm run verify
```

## Vercel

1. Import the repository.
2. Set `NEXT_PUBLIC_SITE_URL` to the production URL.
3. Set `ENABLE_CONTENT_STUDIO=false`.
4. Use Node.js 22.
5. Deploy.
6. Set repository variable `PORTFOLIO_PUBLIC_URL` for the scheduled workflow.
7. Run the `Live Portfolio Check` workflow manually once.

## Docker

```bash
docker build   --build-arg NEXT_PUBLIC_SITE_URL=https://portfolio-domain.com   -t ahmad-fadlih-portfolio:7.0.0 .

docker run --rm   -p 3000:3000   ahmad-fadlih-portfolio:7.0.0
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
/id/projects/internlog-ai
/id/projects/aquasense
/id/projects/formai
/sitemap.xml
/robots.txt
/manifest.webmanifest
/.well-known/security.txt
/api/health
```

Also verify:

- canonical URL uses the production domain;
- language switch stays on the same route;
- CV files open;
- private source links are not exposed;
- Content Studio returns 404;
- mobile layout has no horizontal overflow.
