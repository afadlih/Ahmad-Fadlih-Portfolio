# V4 Information Architecture

## Tujuan utama

Pengunjung baru harus memahami portfolio tanpa membaca semua detail.

Tiga pertanyaan pertama yang harus terjawab:

1. Ahmad mengerjakan apa?
2. Project mana yang paling mewakili kemampuannya?
3. Bagaimana ia mengambil keputusan saat membangun sistem?

## Alur halaman utama

### 1. Identitas

Isi:

- nama;
- peran;
- satu kalimat nilai utama;
- ringkasan fokus;
- foto asli;
- CTA project;
- CTA kontak;
- statistik singkat.

Bagian ini tidak menampilkan daftar teknologi panjang.

### 2. Jenis pekerjaan

Tiga kategori:

- sistem operasional;
- otomasi terkontrol;
- AI sebagai alat bantu.

Tujuannya memberi konteks sebelum pengunjung melihat project.

### 3. Project utama

Urutan:

1. InternLog AI
2. AquaSense
3. FormAI

Setiap card menjelaskan:

- kategori;
- status;
- visibility;
- ringkasan;
- masalah;
- hasil;
- peran;
- alur utama;
- link studi kasus.

Tidak ada gambar placeholder besar.

### 4. Cara kerja

Lima langkah:

1. pahami proses;
2. susun kontrak data;
3. bangun jalur utama;
4. tambahkan fallback;
5. uji dan jelaskan hasil.

### 5. Arah pengembangan

Menjelaskan pendidikan, fokus saat ini, dan kemampuan berikutnya yang ingin diperkuat.

### 6. Project pendukung

Project non-featured memakai card ringkas. Tujuannya memperlihatkan keluasan tanpa mengganggu fokus.

### 7. Bukti di luar project

Section hanya muncul jika data publik tersedia:

- organisasi;
- sertifikat;
- pengalaman;
- foto kegiatan.

### 8. Kontak

CTA sederhana dengan email, GitHub, dan LinkedIn.

## Alur halaman project

```text
Hero dan core flow
Ringkasan cepat
Peran dan kontribusi
Arsitektur dan alur data
Feature deep dive
Bukti
Keterbatasan dan langkah berikutnya
```

Deep dive menggunakan elemen `details` agar seluruh konten tetap tersedia dalam HTML, tetapi tidak memaksa pengunjung membaca halaman yang terlalu panjang.
