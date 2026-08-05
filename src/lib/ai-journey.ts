import type { Language, LocalizedText } from "@/types/content";

export type AiJourney = {
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  stages: Array<{
    label: LocalizedText;
    note: LocalizedText;
    kind: "input" | "rules" | "ai" | "review" | "output";
  }>;
};

const journeys: Record<string, AiJourney> = {
  "internlog-ai": {
    eyebrow: { id: "AI JOURNEY • TERBATAS DAN TERKONTROL", en: "AI JOURNEY • BOUNDED AND CONTROLLED" },
    title: {
      id: "AI membantu merapikan catatan, tetapi periode, fakta, dan dokumen tetap dikendalikan aturan aplikasi.",
      en: "AI helps improve entries, while dates, facts, and documents remain controlled by application rules.",
    },
    description: {
      id: "Alur ini menunjukkan posisi AI sebagai assistant, bukan sumber kebenaran utama.",
      en: "This flow shows AI as an assistant, not the primary source of truth.",
    },
    stages: [
      { label: { id: "Catatan harian", en: "Daily entry" }, note: { id: "Aktivitas dan bukti dari pengguna.", en: "User-provided activity and evidence." }, kind: "input" },
      { label: { id: "Validasi periode", en: "Period validation" }, note: { id: "Tanggal, minggu, dan duplikasi diperiksa lebih dulu.", en: "Dates, weeks, and duplicates are checked first." }, kind: "rules" },
      { label: { id: "AI checker", en: "AI checker" }, note: { id: "Mengevaluasi kejelasan tanpa mengubah fakta utama.", en: "Evaluates clarity without changing core facts." }, kind: "ai" },
      { label: { id: "Review pengguna", en: "User review" }, note: { id: "Saran tetap dapat diperiksa sebelum disimpan.", en: "Suggestions remain reviewable before saving." }, kind: "review" },
      { label: { id: "DOCX & rekap", en: "DOCX & recap" }, note: { id: "Output memakai data yang sudah tervalidasi.", en: "Outputs use validated data." }, kind: "output" },
    ],
  },
  formai: {
    eyebrow: { id: "AI JOURNEY • FALLBACK SAAT AMBIGU", en: "AI JOURNEY • FALLBACK FOR AMBIGUITY" },
    title: {
      id: "Mapping deterministik dijalankan lebih dulu, AI hanya masuk ketika field belum dapat dipastikan.",
      en: "Deterministic mapping runs first, and AI only enters when a field remains unresolved.",
    },
    description: {
      id: "Preview, readiness gate, dan diagnostics membuat proses tetap dapat diperiksa sebelum dan sesudah eksekusi.",
      en: "Preview, readiness gates, and diagnostics keep the process inspectable before and after execution.",
    },
    stages: [
      { label: { id: "Form + CSV", en: "Form + CSV" }, note: { id: "Struktur form dan data responden menjadi input.", en: "Form structure and respondent data become the inputs." }, kind: "input" },
      { label: { id: "Rule mapping", en: "Rule mapping" }, note: { id: "Entry ID, exact match, dan alias dicoba lebih dulu.", en: "Entry IDs, exact matches, and aliases run first." }, kind: "rules" },
      { label: { id: "AI fallback", en: "AI fallback" }, note: { id: "Dipakai hanya untuk field yang tetap ambigu.", en: "Used only for fields that remain ambiguous." }, kind: "ai" },
      { label: { id: "Dry run", en: "Dry run" }, note: { id: "Blocker dan sumber nilai diperiksa sebelum submit.", en: "Blockers and value sources are checked before submission." }, kind: "review" },
      { label: { id: "Execution & diagnostics", en: "Execution & diagnostics" }, note: { id: "Hasil setiap baris dapat ditelusuri.", en: "Each row result remains traceable." }, kind: "output" },
    ],
  },
  orthobreath: {
    eyebrow: { id: "AI JOURNEY • PROTOTYPE HEALTH-TECH", en: "AI JOURNEY • HEALTH-TECH PROTOTYPE" },
    title: {
      id: "Input pemeriksaan diarahkan ke service prediksi, lalu digabungkan menjadi laporan yang dapat dibaca kembali.",
      en: "Assessment inputs move through prediction services and are combined into a report that can be reviewed later.",
    },
    description: {
      id: "Service saat ini masih mock-first dan API-ready, sehingga visual ini menjelaskan kontrak alur, bukan mengklaim model klinis production.",
      en: "The services are currently mock-first and API-ready, so this visual explains the workflow contract rather than claiming a production clinical model.",
    },
    stages: [
      { label: { id: "Profil & capture", en: "Profile & capture" }, note: { id: "Data pasien, dental capture, dan sesi pernapasan.", en: "Patient data, dental capture, and breathing sessions." }, kind: "input" },
      { label: { id: "Validasi input", en: "Input validation" }, note: { id: "Format dan kelengkapan diperiksa sebelum service dipanggil.", en: "Format and completeness are checked before services run." }, kind: "rules" },
      { label: { id: "Prediction service", en: "Prediction service" }, note: { id: "Mock-first service yang dapat diganti backend model.", en: "A mock-first service replaceable by a model backend." }, kind: "ai" },
      { label: { id: "Combined report", en: "Combined report" }, note: { id: "Hasil dental dan breathing disatukan.", en: "Dental and breathing results are combined." }, kind: "review" },
      { label: { id: "History & analytics", en: "History & analytics" }, note: { id: "Hasil dapat dibaca ulang dari riwayat.", en: "Results can be revisited through history." }, kind: "output" },
    ],
  },
};

export function getAiJourney(slug: string) {
  return journeys[slug] ?? null;
}

export function localizeJourney(value: LocalizedText, language: Language) {
  return value[language];
}
