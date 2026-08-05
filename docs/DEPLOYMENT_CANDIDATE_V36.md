# V36.1 Deployment Readiness

Source ini merupakan release candidate yang siap menjalani final build dan deployment verification. Dokumen ini tidak menyatakan situs sudah live.

## Required environment

```env
NEXT_PUBLIC_SITE_URL=https://your-real-domain.com
PORTFOLIO_PUBLIC_URL=https://your-real-domain.com
ENABLE_CONTENT_STUDIO=false
```

`NEXT_PUBLIC_SITE_URL` dan `PORTFOLIO_PUBLIC_URL` harus memakai origin HTTPS yang sama.

## Local release verification

```bash
npm ci
npm run verify
npm run validate:release-env
```

## Deploy

Deploy ke provider yang mendukung Next.js App Router. Setelah deployment tersedia, set repository variable `PORTFOLIO_PUBLIC_URL`, lalu jalankan:

```bash
npm run release:candidate
```

## Public routes checked

```text
/id
/en
/id/projects
/en/projects
/id/resume
/en/resume
/sitemap.xml
/robots.txt
/api/health
```

## Production acceptance

Production status hanya diberikan ketika:

- quality workflow hijau;
- production URL bukan placeholder;
- public route check hijau;
- browser visual QA desktop dan mobile selesai;
- downloadable CV dapat dibuka;
- private repository metadata tidak terpapar;
- repository homepage menunjuk ke domain live.

Tag release dibuat setelah seluruh acceptance condition selesai, bukan sebelum deployment.
