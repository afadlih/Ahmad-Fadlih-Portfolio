# Alur Input Konten Portfolio

Konten tidak ditulis langsung pada komponen React. Fakta disimpan sebagai data JSON dan media ditempatkan di `public/media`.

## 1. Mulai dari draft

```text
src/content/drafts/organizations.json
src/content/drafts/credentials.json
src/content/drafts/experiences.json
src/content/drafts/project-evidence.json
```

Draft tidak boleh memiliki `published: true`.

## 2. Content Studio lokal

Content Studio bersifat lokal dan tidak dibangun sebagai fitur produksi.

Tambahkan ke `.env.local`:

```text
ENABLE_CONTENT_STUDIO=true
```

Jalankan:

```bash
npm run dev
```

Buka:

```text
http://localhost:3000/content-studio
```

Content Studio hanya membentuk JSON. Studio tidak mengunggah media, tidak menulis langsung ke repository, dan akan menghasilkan halaman 404 di production.

## 3. Tambahkan media

```text
public/media/projects/
public/media/organizations/
public/media/credentials/
public/media/experience/
```

Gunakan nama file lowercase dan stabil:

```text
internlog-ai/daily-log.png
digital-marketing/certificate.jpg
hmti/kegiatan-01.jpg
```

## 4. Periksa fakta

Informasi berikut harus dikonfirmasi oleh pemilik portfolio:

- jabatan dan periode organisasi;
- kontribusi pribadi;
- pembagian peran tim;
- nama penerbit, tanggal, dan credential ID;
- konteks foto;
- hasil yang benar-benar terjadi;
- kegagalan, iterasi, dan trade-off project.

GitHub dapat membuktikan file, struktur, dan sebagian implementasi. GitHub tidak dapat memastikan seluruh kontribusi personal atau konteks organisasi.

## 5. Tentukan status bukti

```text
draft
documented
ready
verified
```

Gunakan `documented` ketika fakta sudah dicatat tetapi scan, foto, atau tautan publik belum siap.

Gunakan `ready` hanya jika bukti telah tersedia, aman dibuka, dan path lokal valid.

Gunakan `verified` ketika bukti memiliki dokumen atau tautan verifikasi yang dapat diperiksa.

## 6. Publikasikan

```text
Isi draft
Tambahkan file media
Periksa fakta dan privasi
Lengkapi teks ID dan EN
Tetapkan evidenceStatus
Pindahkan item ke file publik
Ubah published menjadi true
Jalankan validasi
```

## Validasi

```bash
npm run qa:light
```

Sebelum deployment:

```bash
npm run verify
```

## Review setelah publikasi

- buka route `/id` dan `/en`;
- periksa alt text dan caption;
- cek link eksternal;
- cek tampilan 360px, 768px, dan desktop;
- pastikan placeholder tidak diklaim sebagai bukti siap;
- pastikan tidak ada data privat di gambar.
