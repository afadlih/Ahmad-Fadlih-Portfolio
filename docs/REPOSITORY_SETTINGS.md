# Repository Settings

Konfigurasi ini diterapkan melalui GitHub UI setelah source V36.1 masuk ke repository.

## Repository metadata

```text
Description:
Bilingual Full-Stack, AI workflow, and on-premise IoT engineering portfolio with evidence-first case studies.

Website:
https://<final-production-domain>

Topics:
portfolio, nextjs, typescript, fullstack, ai, iot, case-study, bilingual
```

Jangan mengisi Website dengan placeholder.

## Branch model

Pertahankan:

```text
main
develop
```

Sebelum menghapus branch lama, pastikan branch tersebut sudah menjadi ancestor `main`:

```bash
git fetch origin --prune
git merge-base --is-ancestor origin/<branch> origin/main
```

Branch kandidat pembersihan setelah verifikasi:

```text
chore/docker-setup
feature/portfolio-foundation
repair/portfolio-production-ready
```

Dependabot branch akan hilang setelah PR terkait ditutup atau di-merge. Aktifkan **Automatically delete head branches**.

## Main branch protection

Rekomendasi:

```text
Require a pull request before merging
Require status checks to pass
Require branches to be up to date
Block force pushes
Block branch deletion
Require conversation resolution
```

Required checks diambil dari workflow `Portfolio Quality` setelah satu run sukses pada `main`.

## Actions variable

Buat repository variable:

```text
PORTFOLIO_PUBLIC_URL=https://<final-production-domain>
```

Bukan secret, karena domain production memang publik.

## Merge policy

- Gunakan merge commit untuk mempertahankan model `develop → main` yang mudah disinkronkan.
- Hindari direct push ke `main`.
- Jangan merge major dependency update tanpa `npm run verify` dan visual regression review.

## Dependabot policy

- Runtime minor/patch boleh dikelompokkan.
- GitHub Actions boleh dikelompokkan.
- ESLint, TypeScript, dan Node types major update diabaikan dari update terjadwal dan dikerjakan melalui migration PR terpisah.
