# Panduan Input Organisasi, Sertifikat, Pengalaman, dan Media

Konten portfolio disimpan sebagai data JSON. Gunakan folder draft untuk data yang belum siap dipublikasikan. File publik hanya boleh berisi fakta yang telah diperiksa dan media yang aman dibuka.

## Status bukti

```text
draft       fakta atau media belum lengkap
documented  fakta telah dicatat, tetapi bukti publik belum lengkap
ready       bukti publik tersedia dan telah diperiksa
verified    bukti memiliki tautan atau dokumen verifikasi yang sah
```

Placeholder tidak boleh memakai status `ready` atau `verified`.

## Organisasi

Draft:

```text
src/content/drafts/organizations.json
```

Publik:

```text
src/content/organizations.json
```

Contoh:

```json
{
  "id": "nama-organisasi-2025",
  "published": true,
  "evidenceStatus": "documented",
  "name": "Nama Organisasi",
  "role": {
    "id": "Jabatan",
    "en": "Role"
  },
  "period": "2025 - 2026",
  "description": {
    "id": "Kontribusi singkat dan spesifik.",
    "en": "A short and specific contribution."
  },
  "achievements": [
    {
      "id": "Hasil yang dapat dijelaskan atau dibuktikan.",
      "en": "An outcome that can be explained or supported."
    }
  ],
  "logo": "/media/organizations/nama-organisasi/logo.png",
  "photos": [
    {
      "src": "/media/organizations/nama-organisasi/kegiatan-01.jpg",
      "alt": {
        "id": "Deskripsi visual kegiatan.",
        "en": "A visual description of the activity."
      },
      "caption": {
        "id": "Konteks kegiatan dan kontribusi.",
        "en": "Activity context and contribution."
      }
    }
  ],
  "proofPoints": [
    {
      "title": {
        "id": "Dokumentasi program kerja",
        "en": "Work-program documentation"
      },
      "note": {
        "id": "Bukti belum dibuka untuk publik.",
        "en": "The evidence is not public yet."
      }
    }
  ]
}
```

## Sertifikat

Draft:

```text
src/content/drafts/credentials.json
```

Publik:

```text
src/content/credentials.json
```

Lengkapi sebelum status `verified`:

- nama penerbit;
- tanggal terbit;
- credential ID jika tersedia;
- URL verifikasi jika tersedia;
- scan yang aman dipublikasikan;
- keterampilan yang benar-benar tercakup.

Simpan media di:

```text
public/media/credentials/
```

Gunakan `issuedAt: "pending"` jika tanggal belum dikonfirmasi. Jangan menebak tanggal.

## Pengalaman dan foto

Draft:

```text
src/content/drafts/experiences.json
```

Publik:

```text
src/content/experiences.json
```

Simpan foto di:

```text
public/media/experience/<slug-kegiatan>/
```

Setiap foto wajib memiliki:

- `src`;
- alt text Bahasa Indonesia dan English;
- caption bilingual jika konteksnya tidak jelas dari gambar.

Jangan unggah foto yang memperlihatkan data pribadi, kartu identitas, nomor telepon, token, alamat internal, atau dokumen perusahaan yang tidak boleh dibuka.

## Project evidence

Draft:

```text
src/content/drafts/project-evidence.json
```

Media:

```text
public/media/projects/<project-slug>/
```

Gunakan data dummy dan sensor informasi berikut:

- API key dan token;
- cookie;
- email atau data responden asli;
- URL privat;
- credential perangkat;
- identifier perusahaan;
- informasi pasien atau pengguna.

## Validasi

```bash
npm run validate:portfolio
npm run validate:links
npm test
```

Validasi penuh:

```bash
npm run verify
```
