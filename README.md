# Ahmad Fadlih Portfolio V36.1

Portfolio bilingual berbasis Next.js untuk memperlihatkan kemampuan **Full-Stack Engineering, applied AI, workflow automation, dan on-premise IoT** melalui project, studi kasus teknis, CV, system map, serta bukti implementasi yang dapat diperiksa.

> **Status:** Release candidate. Source, quality gate, dan dokumentasi rilis sudah diperkeras, tetapi status production baru sah setelah domain publik dikonfigurasi, deployment berhasil, dan pemeriksaan route production lulus.

## Arah portfolio

Website ini dirancang untuk menjawab pertanyaan pengunjung secara berurutan:

```text
Siapa Ahmad dan sedang berada di tahap apa?
→ Mahasiswa D4 Teknik Informatika Politeknik Negeri Malang

Apa fokus engineering-nya?
→ Full-stack systems, AI workflows, automation, dan on-premise IoT

Apa bukti terbaiknya?
→ InternLog AI, AquaSense, FormAI, dan deep-dive case studies

Apa yang sedang dikerjakan sekarang?
→ AquaSense, OrthoBreath, dan SkripsiOps AI

Apa konteks profesionalnya?
→ Magang PT Pindad, pendanaan PKM-KC 2026, dan pengalaman terverifikasi lainnya
```

## Struktur halaman utama

```text
Hero dan positioning
Education and professional context
Selected engineering work
Currently building
Engineering approach
Project and case-study library
Contact
```

Homepage berfungsi sebagai landing page yang mudah dipindai. Keputusan arsitektur, trade-off, failure mode, validasi, dan batasan tetap tersedia pada halaman studi kasus masing-masing project.

## Education and professional context

- **Politeknik Negeri Malang**: D4 Teknik Informatika / D-IV Informatics Engineering, Jurusan Teknologi Informasi.
- **PT Pindad (Persero)**: software and system-integration internship dengan deskripsi publik yang dibatasi kebutuhan kerahasiaan.
- **PKM-KC 2026**: OrthoBreath sebagai health-tech prototype yang memperoleh pendanaan; tidak diklaim sebagai perangkat klinis atau sistem diagnosis tervalidasi.

## Selected engineering work

| Project | Peran dalam portfolio | Status source |
|---|---|---|
| InternLog AI | AI-assisted internship workflow dan document readiness | Private, sanitized case study |
| AquaSense | On-premise IoT operations, edge integration, telemetry, dan command lifecycle | Private, sanitized case study |
| FormAI | Form inspection, CSV mapping, AI fallback, dan dry-run diagnostics | Private, sanitized case study |
| Polinema Adaptive TOEIC | Major adaptive-learning case study | Private, sanitized case study |

## Currently building

| Project | Version | Development status | Fokus publik yang aman |
|---|---:|---|---|
| AquaSense | `2.3.0-rc15` | Release candidate | On-premise deployment, Raspberry Pi edge, provisioning, dan release hardening |
| OrthoBreath | `1.8.0` | Active prototype | Device sessions, PWA reliability, Firebase flow, dan prototype safeguards |
| SkripsiOps AI | `4.0.0` | Active development | Evidence traceability, research operations, defense readiness, dan grounded RAG |

Repository private tidak diekspos. Website hanya menampilkan ringkasan yang telah disanitasi, versi yang ditinjau, batasan saat ini, dan evidence yang aman dipublikasikan.

## Project library

```text
Featured deep dives
- InternLog AI
- AquaSense
- FormAI

Major case study
- Polinema Adaptive TOEIC

Active and supporting systems
- OrthoBreath
- SkripsiOps AI
- AquaSense Hardware Simulator
- Smart Clothesline IoT
- AI Content Strategy
- TechnoRules

Testing and learning evidence
- E2E JTI Intern PMPL
- E2E MagangIn
- Machine Learning Lab 2025
- Pemrograman Mobile Lab
```

## Route utama

```text
/id
/en
/id/projects
/en/projects
/id/projects/[slug]
/en/projects/[slug]
/id/system-map
/en/system-map
/id/resume
/en/resume
/api/health
```

## Menjalankan secara lokal

Persyaratan:

```text
Node.js 22+
npm 10+
```

Command:

```bash
npm ci
npm run qa:light
npm run verify
npm run dev
```

Buka `http://localhost:3000/id` atau `http://localhost:3000/en`.

## Quality gates

`npm run verify` menjalankan:

```text
ESLint dengan zero-warning policy
TypeScript typecheck
content and privacy validation
homepage and route structure validation
responsive and visual QA validation
security and release preflight
content-lock validation
Node test suite
production build
```

Static-analysis tambahan tersedia melalui:

```bash
npm run quality:full
```

Pipeline GitHub Actions difokuskan menjadi dua workflow:

```text
quality.yml
→ lint, typecheck, validators, tests, build, ast-grep, Knip, jscpd, Fallow

production-check.yml
→ validasi production URL dan pemeriksaan route publik terjadwal
```

Semua third-party actions dipin ke full commit SHA.

## Release candidate dan deployment

Siapkan environment production:

```env
NEXT_PUBLIC_SITE_URL=https://domain-produksi-anda.com
PORTFOLIO_PUBLIC_URL=https://domain-produksi-anda.com
ENABLE_CONTENT_STUDIO=false
```

Di GitHub, buat Actions variable:

```text
PORTFOLIO_PUBLIC_URL=https://domain-produksi-anda.com
```

Lalu jalankan:

```bash
npm run verify
npm run validate:release-env
npm run release:candidate
```

`npm run release:candidate` sengaja gagal bila domain masih kosong, localhost, `.invalid`, atau example domain. Status production hanya diberikan setelah public route check benar-benar lulus.

Build Docker production juga mewajibkan origin nyata:

```bash
docker build \
  --build-arg NEXT_PUBLIC_SITE_URL=https://domain-produksi-anda.com \
  --build-arg PORTFOLIO_PUBLIC_URL=https://domain-produksi-anda.com \
  -t ahmad-fadlih-portfolio:36.1.0 .
```

## Design system aktif

```text
src/styles/v36/tokens.css
src/styles/v36/layout.css
src/styles/v36/home.css
src/styles/v36/pages.css
src/styles/v36/polish.css
src/styles/v36/responsive.css
```

Prinsipnya:

```text
palet biru tenang
surface solid tanpa gradient dekoratif
semantic color tokens
hierarki CTA yang jelas
minimum touch target 44px
keyboard focus terlihat
reduced motion didukung
source excerpt memiliki scroller internal
```

## Dokumentasi utama

- [`docs/RELEASE_HARDENING_V36_1.md`](docs/RELEASE_HARDENING_V36_1.md)
- [`docs/IMPLEMENTATION_REPORT_V36_1.md`](docs/IMPLEMENTATION_REPORT_V36_1.md)
- [`docs/VALIDATION_REPORT_V36_1.md`](docs/VALIDATION_REPORT_V36_1.md)
- [`docs/GIT_HANDOFF.md`](docs/GIT_HANDOFF.md)
- [`docs/REPOSITORY_SETTINGS.md`](docs/REPOSITORY_SETTINGS.md)
- [`docs/UI_SYSTEM_V36.md`](docs/UI_SYSTEM_V36.md)
- [`docs/VISUAL_QA_CHECKLIST_V36.md`](docs/VISUAL_QA_CHECKLIST_V36.md)
- [`docs/CONTENT_LOCK_V36.md`](docs/CONTENT_LOCK_V36.md)
- [`docs/DEPLOYMENT_CANDIDATE_V36.md`](docs/DEPLOYMENT_CANDIDATE_V36.md)

## Data yang masih membutuhkan konfirmasi pemilik

```text
kontribusi personal final pada setiap team project
tanggal sertifikasi BNSP
hasil terukur dari penggunaan nyata
screenshot atau demo yang sudah lolos privacy review
final production domain
```

Informasi yang belum memiliki evidence tidak diubah menjadi klaim publik.
