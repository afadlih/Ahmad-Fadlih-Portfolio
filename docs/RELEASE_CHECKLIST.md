# Release Checklist

## Content

- [ ] Confirm every `needs-owner-review` statement.
- [ ] Confirm experience and organization periods.
- [ ] Confirm Digital Marketing Professional certificate date and number.
- [ ] Replace placeholder screenshots with privacy-reviewed real evidence.
- [ ] Remove private emails, tokens, cookies, device IDs, internal URLs, and repository identifiers from media.
- [ ] Synchronize education, projects, CV, GitHub profile, LinkedIn, and portfolio website.

## Code

- [ ] `npm ci` completes from a clean directory.
- [ ] `npm run qa:light` passes.
- [ ] `npm run lint` passes with zero warnings.
- [ ] `npm run typecheck` passes.
- [ ] `npm run build` passes.
- [ ] `npm run verify` passes.
- [ ] `npm run quality:full` passes when structural code changes.

## Privacy

- [ ] Private project `repository` values remain `null`.
- [ ] Private source excerpts have no `href`.
- [ ] No private branch, SHA, commit message, credential, or operational data is published.
- [ ] PT Pindad wording remains NDA-safe.
- [ ] OrthoBreath has no clinical-readiness, diagnostic-accuracy, or PIMNAS claim without evidence.

## Browser

- [ ] Test 360px, 390px, 768px, 1024px, and 1440px widths.
- [ ] Test keyboard-only navigation.
- [ ] Test 200 percent browser zoom.
- [ ] Test reduced motion.
- [ ] Check all focus indicators.
- [ ] Check Bahasa Indonesia and English routes.
- [ ] Check print preview for the resume page.

## Deployment

- [ ] Set the final `NEXT_PUBLIC_SITE_URL`.
- [ ] Set the matching `PORTFOLIO_PUBLIC_URL`.
- [ ] Keep `ENABLE_CONTENT_STUDIO=false`.
- [ ] Configure `PORTFOLIO_PUBLIC_URL` in GitHub repository variables.
- [ ] Run `npm run validate:release-env`.
- [ ] Check `/api/health`, `/sitemap.xml`, and `/robots.txt`.
- [ ] Confirm downloadable CV files use the current version.
- [ ] Run `Production Route Check` manually.
- [ ] Run `npm run release:candidate` against the live domain.
- [ ] Add the final URL to repository metadata.
