# UI System V36

## Tujuan

V36 merapikan portfolio menjadi sistem yang fokus pada isi, bukti, dan keterbacaan. Sistem ini tidak menyalin komponen dari referensi eksternal. Referensi dipakai sebagai kerangka audit untuk menentukan apa yang perlu dipertahankan dan apa yang harus dihapus.

## Keputusan utama

### 1. Informasi lebih penting daripada dekorasi

Homepage hanya menampilkan informasi yang membantu pengunjung mengambil keputusan:

```text
siapa pemilik portfolio
apa yang dikerjakan
project utama
cara bekerja
project pendukung
cara menghubungi
```

Arsitektur, source code, pengujian, dan batasan tetap berada di halaman studi kasus.

### 2. Tidak memakai sticky project deck

Project utama menggunakan grid tiga kolom pada desktop dan satu kolom pada tablet kecil serta mobile. Tidak ada special case untuk kartu terakhir, sehingga grid tidak meninggalkan sel kosong atau mengubah bentuk kartu secara tidak terduga.

### 3. Satu sistem warna

Mode terang:

```text
Background       #F4F7FB
Foreground       #142238
Surface          #FFFFFF
Muted foreground #465B74
Primary          #2F5F9F
Border           #C9D6E5
```

Mode gelap:

```text
Background       #0C1624
Foreground       #EEF4FB
Surface          #122033
Muted foreground #B4C2D3
Primary          #91B6E5
Border           #30445D
```

Tidak ada kuning, gold, purple, pink, atau gradient dekoratif pada stylesheet aktif.

### 4. Komponen lokal dan semantic tokens

Button, Card, Badge, Tabs, dan Separator tetap berupa komponen lokal. Styling memakai token semantic agar light dan dark mode tidak memiliki aturan terpisah pada setiap komponen.

### 5. Responsive tanpa over-layout

Breakpoint utama:

```text
1180px  penyesuaian grid detail dan system map
1040px  system map menjadi satu kolom
900px   hero dan featured project menjadi satu kolom
760px   section dan halaman detail menjadi mobile layout
560px   CTA menjadi full width
```

Setiap layout menghindari horizontal scroll, fixed width yang kaku, dan panel yang saling menimpa.

### 6. Accessibility

```text
base text 16px
focus ring terlihat
minimum target 44px
skip link tersedia
alt text tersedia
prefers-reduced-motion didukung
warna bukan satu-satunya penanda status
```

### 7. Preflight sebelum release

`npm run validate:preflight` memeriksa:

```text
pola secret yang tidak boleh terpublikasi
file environment privat
external link safety
security headers
penggunaan shadow dan radius yang berlebihan
```

Pemeriksaan ini tidak menggantikan security review, dependency audit, Lighthouse, atau pengujian browser manual.

## Anti-pattern yang dikunci

```text
sticky project cards
nested cards untuk setiap informasi
layout khusus hanya untuk kartu terakhir
gradient dekoratif
warna aksen yang tidak sesuai sistem
section tinggi tanpa isi
teks placeholder yang generik
CSS versi lama yang ditumpuk sebagai override
```

## Uji manual yang tetap diperlukan

```text
375 x 812
768 x 1024
1024 x 768
1440 x 900
light mode
dark mode
keyboard navigation
browser zoom 200 percent
Lighthouse production build
```


## Perbaikan khusus V36

```text
hero memakai type scale yang dibatasi agar tidak memenuhi satu layar
portrait memiliki lebar maksimum dan aspect ratio stabil
preview implementasi tidak lagi memecah nama teknologi per karakter
grid deep dive memakai auto-fit agar kartu tidak terpotong
tab system map memiliki jarak angka dan label yang konsisten
path source code memakai overflow-wrap hanya pada elemen yang memang panjang
OrthoBreath diposisikan akurat sebagai prototype PKM-KC 2026
```
