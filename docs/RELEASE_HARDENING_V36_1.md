# Release Hardening V36.1

Dokumen ini mencatat perbaikan yang mengubah V36 dari kandidat yang tampak final tetapi belum konsisten menjadi release candidate yang dapat diuji secara jujur.

## CI recovery

Kegagalan `main` diperbaiki pada dua sumber:

```text
scripts/validate-final-release-v36.mjs
- mengganti identifier `module` yang bentrok dengan rule Next.js
- mengunci validator ke package version 36.1.0
- memvalidasi release readiness, bukan mengklaim deploy sudah selesai

src/components/portfolio/SelectedWork.tsx
- menghapus import `localize` yang tidak digunakan
```

Zero-warning policy tetap dipertahankan. Warning tidak disembunyikan melalui disable rule.

## Workflow consolidation

Empat workflow yang tumpang tindih diganti menjadi dua:

```text
quality.yml
production-check.yml
```

`quality.yml` bertanggung jawab atas source quality dan build. `production-check.yml` hanya bertanggung jawab atas kondisi situs yang sudah dideploy.

Seluruh third-party action dipin ke full commit SHA untuk mengurangi supply-chain ambiguity.

## Dependency baseline

Runtime baseline:

```text
Next.js 16.2.12
React 19.2.8
React DOM 19.2.8
eslint-config-next 16.2.12
Node.js 22
npm 10
```

Runtime patch update diadopsi sebagai satu baseline. Major update ESLint, TypeScript, dan Node types tidak digabung otomatis karena membutuhkan migrasi terpisah.

## Privacy boundary

Private project dapat dijelaskan melalui sanitized case study, tetapi repository identifier dan link source private tidak boleh muncul pada public content.

Aturan:

```text
private project repository = null
private source excerpt href = absent
private source access = owner-only
public source href = GitHub owner repository pada branch main
```

Code excerpt yang aman tetap dapat ditampilkan sebagai bukti struktur dan keputusan, tanpa menyediakan link ke repository private.

## Content alignment

Homepage sekarang menyampaikan narasi berikut:

```text
student and engineering identity
education and professional context
selected engineering proof
three current priorities
engineering approach
project library
contact
```

Pendidikan Politeknik Negeri Malang, konteks magang PT Pindad, dan pendanaan PKM-KC OrthoBreath ditampilkan dengan wording yang dibatasi evidence.

## Deployment gate

Release tidak boleh dinyatakan production-ready sebelum semua kondisi berikut terpenuhi:

```text
NEXT_PUBLIC_SITE_URL memakai HTTPS dan hostname nyata
PORTFOLIO_PUBLIC_URL memakai origin yang sama
npm run verify lulus
npm run validate:release-env lulus
npm run release:candidate lulus terhadap deployment publik
/id, /en, projects, resume, sitemap, robots, dan health route dapat diakses
```

Placeholder, localhost, example domain, dan `.invalid` sengaja ditolak validator.

## Branch model

Model yang disarankan:

```text
main     = production/release branch
develop  = integration branch
```

Feature branch bersifat sementara dan dihapus setelah merge. Dependabot tidak boleh membuka major tooling update secara otomatis dalam satu group.

## Remaining owner actions

- Menentukan final production domain.
- Mengatur `PORTFOLIO_PUBLIC_URL` sebagai GitHub Actions variable.
- Mengaktifkan branch protection setelah workflow V36.1 berada di `main`.
- Meninjau screenshot dan demo sebelum publikasi.
- Mengonfirmasi wording kontribusi team project.
