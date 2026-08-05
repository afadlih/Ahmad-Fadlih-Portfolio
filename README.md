# Ahmad Fadlih Portfolio V36

Portfolio bilingual berbasis Next.js untuk menampilkan project, studi kasus teknis, CV, system map, dan bukti implementasi.

V36 adalah **final deployment candidate**. Fokusnya bukan redesign lagi, tetapi mengunci layout, kualitas isi, SEO dasar, aksesibilitas, security header, visual QA, dan dokumentasi rilis agar website siap diuji sebelum deploy publik.

## Struktur halaman utama

```text
Hero dan fokus kemampuan
Tiga project utama
Polinema Adaptive TOEIC
Cara kerja
Project pendukung
Kontak
```

Homepage tidak memakai sticky project deck, panel dekoratif berat, device mockup, atau section yang hanya mengisi ruang. Detail teknis tetap tersedia melalui halaman studi kasus.

## Design system aktif

Seluruh styling aktif berada di enam modul berikut:

```text
src/styles/v36/tokens.css
src/styles/v36/layout.css
src/styles/v36/home.css
src/styles/v36/pages.css
src/styles/v36/polish.css
src/styles/v36/responsive.css
```

Arah visual:

```text
palet biru tenang
surface solid tanpa gradient dekoratif
semantic color tokens
teks sekunder tetap jelas
radius dan shadow terbatas
satu hierarki CTA
minimum touch target 44px
focus keyboard terlihat
reduced motion didukung
source code punya scroller internal
```

Dokumentasi keputusan desain tersedia di [`docs/UI_SYSTEM_V36.md`](docs/UI_SYSTEM_V36.md).

## Project

```text
Featured
- InternLog AI
- AquaSense
- FormAI

Major case study
- Polinema Adaptive TOEIC

Supporting products and systems
- OrthoBreath
- Smart Clothesline IoT
- AI Content Strategy
- TechnoRules

Testing and learning
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
```

## Menjalankan project

```bash
npm ci
npm run qa:light
npm run verify
npm run dev
```

Buka `http://localhost:3000` atau langsung `http://localhost:3000/id`.

## Quality gates

`npm run qa:light` memeriksa:

```text
content schema dan links
site structure dan homepage order
V36 design tokens
layout dan typography polish
featured project layout
system map layout
responsive behavior
source-code excerpts
visual QA rules
security and release preflight
content lock
final release docs
copy quality
28 automated tests
```

Validator khusus:

```bash
npm run validate:theme
npm run validate:polish
npm run validate:featured-layout
npm run validate:responsive
npm run validate:visual-qa
npm run validate:preflight
npm run validate:content-lock
npm run validate:final-release
```

## Release candidate

Gunakan command berikut sebelum deploy:

```bash
npm run release:candidate
```

Command ini menjalankan `qa:light` dan pemeriksaan public URL. Setelah itu lanjutkan dengan:

```bash
npm run verify
npm run build
```

## Visual QA dan Deployment candidate

V36 menyertakan Visual QA checklist dan Deployment candidate guide agar pemeriksaan akhir tidak hanya bergantung pada tampilan browser saat ini.

## Dokumentasi final

```text
docs/FINAL_RELEASE_CANDIDATE_V36.md
docs/VISUAL_QA_CHECKLIST_V36.md
docs/CONTENT_LOCK_V36.md
docs/DEPLOYMENT_CANDIDATE_V36.md
docs/UI_SYSTEM_V36.md
```

## Environment production

```env
NEXT_PUBLIC_SITE_URL=https://domain-production.com
ENABLE_CONTENT_STUDIO=false
```

## Data yang masih memerlukan konfirmasi pemilik

```text
kontribusi personal pada setiap project
tanggal sertifikasi BNSP
hasil terukur dari penggunaan nyata
screenshot aplikasi final
final production domain
```
