# Portfolio & Personal Branding Roadmap — Oktober 2026

Status: audit awal berbasis branch `main` pada commit `ce05015`, 30 Oktober 2026.
Dokumen ini adalah rencana kerja; bukan bukti bahwa konten sudah disahkan atau situs telah lolos audit browser produksi.

## Tujuan dan positioning

Jadikan website sebagai bukti kemampuan engineering, bukan katalog fitur atau kumpulan tugas.
Pengunjung utama: recruiter, engineering manager, calon kolaborator, dan mitra teknis.

Fokus narasi yang perlu diverifikasi bersama pemilik: fullstack engineering; operational systems & IoT; workflow automation; AI-assisted tools; quality assurance. 
Jangan mengklaim dampak, angka hasil, peran utama, sertifikasi, atau deployment produksi tanpa bukti.

## Hasil audit sumber

- Fondasi Next.js 16, TypeScript, halaman bahasa Indonesia/Inggris, case studies, CV, metadata SEO, sitemap, robots, dan security headers tersedia.
- `src/content/projects.json`: 12 proyek, seluruh `contentReview` berstatus `needs-owner-review`. Ketiga proyek unggulan `InternLog AI`, `AquaSense`, `FormAI` belum memiliki screenshot siap tayang; slot bukti harus tetap diperlakukan sebagai *planned*, bukan bukti.
- `src/content/profile.json`: CV tercatat diperbarui pada 27 Juli 2026, potret berstatus `owner-approved-generated-portrait`.
- `src/content/credentials.json`: sertifikasi BNSP berstatus published dengan `issuedAt: pending`, sehingga tampilan publik memerlukan peninjauan.
- `src/content/experiences.json`: belum memuat riwayat magang terkini yang dapat diverifikasi.
- Metadata repository GitHub tidak memuat homepage/domain publik; konfigurasi URL situs harus dikonfirmasi di lingkungan deployment.
- Pada riwayat Actions 5 Agustus–12 Oktober, lint, Knip, maintenance, dan live-check menunjukkan kegagalan; lihat log Actions. Perbaikan minimal lint/Knip/maintenance berada dalam PR ini; keberhasilan CI baru boleh dinyatakan setelah run baru selesai.
- `Live Portfolio Check` berhenti karena `PORTFOLIO_PUBLIC_URL` kosong. Jangan menutupi masalah dengan bypass ketika situs sudah diklaim live.

## P0 — Engineering gate dan release

- [ ] Pull request ini lolos `npm run verify` dan workflow static analysis.
- [ ] Cek hasil pemeriksaan maintainability; perbaiki kegagalan lanjutan berdasarkan log, bukan mematikan seluruh quality gate.
- [ ] Pastikan URL produksi benar-benar live, HTTPS, dan valid; set GitHub Actions repository variable `PORTFOLIO_PUBLIC_URL` setelah domain disetujui.
- [ ] Audit CV publik: PDF harus terbaru; hindari tautan DOCX editable yang tidak diperlukan di halaman publik.
- [ ] Uji desktop, tablet, mobile, keyboard-only, screen reader baseline, light/dark mode, ID/EN, download CV, dan external links.

## P1 — Identitas profesional

- [ ] Periksa nama dan jabatan yang konsisten di hero, LinkedIn, CV, footer, dan metadata.
- [ ] Perbarui riwayat profesional yang memang dapat dibuktikan; tulis nama perusahaan, status magang, periode, peran, kontribusi, dan batas akses data perusahaan secara tepat.
- [ ] Tinjau konteks OrthoBreath/PIMNAS 39 sesuai fase kompetisi dan kontribusi tim; jangan menuliskan penghargaan yang belum diberikan.
- [ ] Bedakan kontribusi individu, kontribusi tim, prototype, pilot, dan production.
- [ ] Sertifikasi dengan data kurang lengkap jangan ditampilkan sebagai sudah terverifikasi.

## P2 — Bukti kerja (prioritas visual dan case study)

Untuk tiga proyek unggulan dan OrthoBreath, kurasi artefak asli yang aman:
1. Screenshot antarmuka nyata tanpa data pengguna, jaringan internal, secret, atau perusahaan.
2. Diagram arsitektur berbasis implementasi, bukan gambar spekulatif.
3. Ringkasan problem, konteks, kontribusi individual, trade-off, hasil uji, keterbatasan, dan next steps.
4. Link repository/demo yang benar-benar dapat dibuka publik, atau penjelasan mengapa kode privat.

Tidak boleh mengganti bukti dengan screenshot sintetis, angka rekaan, atau testimoni fiktif.
Masukkan minimal 2–3 artefak yang benar-benar siap untuk setiap proyek unggulan; proyek lain cukup diringkas.

## P3 — Discoverability dan konversi

- [ ] Buat CTA jelas: lihat proyek terpilih, unduh CV final, hubungi via email/LinkedIn.
- [ ] Sinkronkan urutan tiga karya unggulan dengan target peran, bukan senioritas atau jumlah repo.
- [ ] Gunakan canonical dan `hreflang` produksi yang valid, OG image aktual, Search Console, sitemap, dan nama pemilik dalam copy yang terbaca.
- [ ] Target lapangan: LCP <= 2,5 s, INP <= 200 ms, CLS <= 0,1 pada persentil ke-75; ukur, bukan klaim tanpa data.
- [ ] Periksa WCAG 2.2 AA termasuk kontras, fokus, navigasi keyboard, teks, dan target sentuh.

## Release acceptance

Rilis branding baru hanya boleh dianggap siap jika:
- `npm run verify`, CI dan static analysis lulus.
- Semua klaim yang dipublikasikan disetujui pemilik dan punya sumber.
- Tidak ada placeholder yang disajikan sebagai bukti nyata.
- Halaman /id dan /en serta detail studi kasus dapat diakses pada domain HTTPS sebenarnya.
- Tautan CV, email, LinkedIn, demo, GitHub, dan OG preview bekerja.
- Pengujian aksesibilitas, mobile, serta Core Web Vitals terdokumentasi.
- GitHub profile, LinkedIn dan portfolio konsisten; tidak ada detail kerahasiaan internal perusahaan.

Referensi eksternal:
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/appearance/core-web-vitals
- https://www.w3.org/TR/WCAG22/
