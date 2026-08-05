# Best Practices Audit V7

## Architecture

Implemented:

- App Router with route-based Indonesian and English pages.
- Dynamic locale segment acts as the root layout and writes the correct HTML `lang` value directly.
- Legacy routes use Next.js redirects instead of duplicate page components.
- Local Content Studio has a separate root layout and a server-only enable flag.
- Error, loading, localized not-found, global error, and global not-found states are present.

## Content integrity

Implemented:

- Three featured projects have exactly three full deep dives.
- Every featured deep dive has at least two concrete implementation references.
- Private repositories expose safe paths only, not direct file URLs or commit SHAs.
- CV-derived organization and experience records use `documented`, not `verified`.
- Placeholder media cannot pass as ready or verified evidence.
- Contributions remain marked `needs-owner-review` until confirmed.

## SEO

Implemented:

- localized canonical URLs;
- `id-ID`, `en-US`, and `x-default` alternates;
- OpenGraph and Twitter metadata;
- Person and SoftwareSourceCode JSON-LD;
- bilingual sitemap;
- robots rules;
- web manifest and application icons;
- no indexing for downloadable career files.

## Accessibility

Implemented:

- correct server-rendered HTML language;
- skip link;
- semantic navigation labels;
- language choices use links and `aria-current`;
- error and loading states expose accessible text;
- reduced-motion rules;
- responsive focus states;
- print stylesheet for resume output.

Manual review still required:

- keyboard test on all interactive controls;
- browser zoom at 200 percent;
- screen-reader review;
- color contrast review after final asset replacement.

## Security

Implemented:

- Content Security Policy;
- HSTS in production;
- clickjacking protection;
- MIME sniffing protection;
- strict referrer policy;
- Permissions Policy;
- cross-origin opener and resource policies;
- non-root Docker runtime;
- `/api/health` endpoint;
- `/.well-known/security.txt` endpoint.

## Delivery and maintenance

Implemented:

- Node.js and npm runtime constraints;
- portable package lock without environment-specific registry URLs;
- `.editorconfig`, `.nvmrc`, `.node-version`, and `.npmrc`;
- Docker multi-stage build with `npm ci`;
- CI concurrency and timeouts;
- scheduled public route monitoring;
- Dependabot for npm and GitHub Actions;
- 19 automated source and content tests.

## Items deliberately not claimed

- Production build has not been confirmed in the artifact environment because dependency installation timed out.
- Organization, certificate, and experience proof is not yet verified.
- Project screenshots are not yet real evidence.
- Private source code is not made public.
