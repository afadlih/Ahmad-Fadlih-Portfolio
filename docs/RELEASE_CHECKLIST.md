# Release Checklist

## Content

- [ ] Confirm every `needs-owner-review` statement.
- [ ] Confirm organization periods.
- [ ] Confirm Digital Marketing Professional certificate date and number.
- [ ] Replace placeholder screenshots with safe real evidence.
- [ ] Remove private emails, tokens, cookies, IDs, and internal URLs from media.
- [ ] Synchronize CV, website, GitHub profile, and LinkedIn.

## Code

- [ ] `npm ci` completes.
- [ ] `npm run qa:light` passes.
- [ ] `npm run lint` passes with zero warnings.
- [ ] `npm run typecheck` passes.
- [ ] `npm run build` passes.
- [ ] `npm run verify` passes.

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
- [ ] Keep `ENABLE_CONTENT_STUDIO=false`.
- [ ] Configure `PORTFOLIO_PUBLIC_URL` in GitHub repository variables.
- [ ] Check `/api/health`.
- [ ] Check `/sitemap.xml` and `/robots.txt`.
- [ ] Confirm downloadable CV files use the current version.
- [ ] Run the scheduled live check manually.
