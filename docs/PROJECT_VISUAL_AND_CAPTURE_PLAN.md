# Project Visual and Capture Plan

## Aturan V11

Generated project cover tidak digunakan lagi.

Visual publik dibagi menjadi dua kategori:

```text
code preview
real evidence
```

## Code preview

Card dan hero menggunakan `ProjectCodePreview` untuk menunjukkan:

- source file paths pada featured projects;
- system layers pada supporting projects;
- workflow singkat;
- stack utama.

Code preview adalah representasi struktur, bukan screenshot aplikasi.

## Real evidence

Bukti final tetap berupa:

```text
screenshot UI
test output
report
document preview
architecture diagram yang dibuat dari sistem nyata
video demo
```

Setiap evidence item memiliki capture checklist di `src/content/projects.json`.

## Capture priority

### InternLog AI

1. daily log workspace;
2. period and week validation;
3. AI activity checker;
4. DOCX preview;
5. final recap.

### AquaSense

1. operational dashboard;
2. telemetry and stale state;
3. manual control;
4. audit log;
5. edge health.

### FormAI

1. analyzer result;
2. CSV mapping trace;
3. dry-run preview;
4. diagnostics;
5. regression test output.

## Publication rule

Placeholder tidak boleh diubah menjadi `ready` atau `verified` sebelum file asli tersedia dan telah diperiksa dari data sensitif.
