# UI and Layout Audit V11

## Masalah yang ditemukan pada V10

### 1. Scroll section terlalu panjang

Scroll-world menggunakan tinggi berbasis penjumlahan scene. Pada lima scene, homepage menambahkan beberapa viewport kosong sebelum section berikutnya. Visual dan copy juga dapat kehilangan sinkronisasi pada viewport tertentu.

### 2. Sticky cinematic tidak cocok untuk bukti project saat ini

Belum tersedia clip video dan connector frame-locked. Memaksa pola cinematic menggunakan still menghasilkan ruang kosong dan tidak menambah pemahaman terhadap project.

### 3. Diagram cover tidak memperkuat bukti

Cover SVG terlihat seperti hasil generatif atau diagram konseptual. Pengunjung lebih membutuhkan konteks problem, source code, alur, dan screenshot asli.

### 4. Homepage memuat terlalu banyak section penuh

Journey, project pendukung, organisasi, sertifikat, dan pengalaman semuanya dirender sebagai section panjang. Informasi penting menjadi sulit dipindai.

### 5. Warna terlalu hangat dan tidak konsisten

Latar beige mendominasi area kosong dan bertabrakan dengan dark section. Sistem warna diperbaiki menjadi neutral slate dengan aksen blue dan teal.

## Keputusan V11

### Project Atlas

Scroll-world diganti dengan blok tab tanpa scroll hijacking.

```text
InternLog AI
AquaSense
FormAI
```

Setiap tab menampilkan:

```text
ringkasan
masalah
hasil
peran
architecture nodes
source-code paths
CTA case study
```

### Portfolio Hub

Konten sekunder disatukan dalam tab:

```text
More Projects
Organizations
Experience
Credentials and Resume
```

### Visual project

Generated cover dihapus. Project card dan hero memakai `ProjectCodePreview` dengan file path nyata untuk featured projects dan system layers untuk supporting projects.

### Layout density

```text
section desktop: 72px
section mobile: 56px
hero max title: 66px
card radius: 16px to 24px
no homepage sticky section
no multi-viewport empty track
```

## Pola komponen

V11 memakai komposisi card, badge, button, tabs, dan separator yang mengikuti prinsip open-code component system. Implementasi berada langsung di project agar dapat diaudit dan disesuaikan.

## Responsiveness

- tab list dapat digeser horizontal pada layar kecil;
- Project Atlas berubah dari dua kolom menjadi satu kolom;
- project island tetap memiliki tinggi terbatas;
- semua CTA menjadi full width pada mobile bila ruang tidak cukup;
- Portfolio Hub berubah menjadi satu kolom;
- tidak ada height berbasis jumlah viewport.
