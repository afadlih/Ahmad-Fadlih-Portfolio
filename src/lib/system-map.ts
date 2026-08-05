import type { Language, LocalizedText } from "@/types/content";

export type SystemMapStop = {
  id: "automation" | "operations" | "validation";
  navLabel: LocalizedText;
  eyebrow: LocalizedText;
  title: LocalizedText;
  body: LocalizedText;
  color: "cobalt" | "teal" | "slate";
  projects: string[];
  nodes: Array<{
    label: LocalizedText;
    kind: "input" | "service" | "ai" | "data" | "output" | "quality";
  }>;
  sourcePaths: string[];
};

export const systemMapStops: SystemMapStop[] = [
  {
    id: "automation",
    navLabel: { id: "Input + Otomasi", en: "Input + Automation" },
    eyebrow: { id: "STOP 01 / INPUT + OTOMASI", en: "STOP 01 / INPUT + AUTOMATION" },
    title: {
      id: "Input dipetakan. Aturan berjalan. AI membantu bila perlu.",
      en: "Input is mapped. Rules run. AI helps only when needed.",
    },
    body: {
      id: "FormAI dan InternLog AI menunjukkan alur yang terkontrol. Data dinormalisasi, dipetakan, diperiksa, lalu baru diproses menjadi output yang dapat ditelusuri.",
      en: "FormAI and InternLog AI demonstrate a controlled flow. Data is normalized, mapped, reviewed, then processed into traceable output.",
    },
    color: "cobalt",
    projects: ["formai", "internlog-ai"],
    nodes: [
      { label: { id: "Input data", en: "Data input" }, kind: "input" },
      { label: { id: "Normalisasi", en: "Normalization" }, kind: "service" },
      { label: { id: "Rule engine", en: "Rule engine" }, kind: "service" },
      { label: { id: "AI fallback", en: "AI fallback" }, kind: "ai" },
      { label: { id: "Preview + validasi", en: "Preview + validation" }, kind: "quality" },
      { label: { id: "Output terstruktur", en: "Structured output" }, kind: "output" },
    ],
    sourcePaths: [
      "backend/services/form_analyzer.py",
      "backend/services/orchestrator.py",
      "src/ai/prompts/activity.ts",
    ],
  },
  {
    id: "operations",
    navLabel: { id: "Operasi + IoT", en: "Operations + IoT" },
    eyebrow: { id: "STOP 02 / OPERASI + IOT", en: "STOP 02 / OPERATIONS + IOT" },
    title: {
      id: "Sinyal perangkat menjadi informasi dan tindakan operasional.",
      en: "Device signals become operational information and actions.",
    },
    body: {
      id: "AquaSense dan Smart Clothesline menghubungkan perangkat, telemetry, aturan otomatis, dashboard, kontrol, dan audit dalam satu alur yang mudah dipantau.",
      en: "AquaSense and Smart Clothesline connect devices, telemetry, automation rules, dashboards, controls, and audit into one observable flow.",
    },
    color: "teal",
    projects: ["aquasense", "smart-clothesline"],
    nodes: [
      { label: { id: "Sensor", en: "Sensors" }, kind: "input" },
      { label: { id: "Edge device", en: "Edge device" }, kind: "service" },
      { label: { id: "MQTT / API", en: "MQTT / API" }, kind: "service" },
      { label: { id: "Telemetry store", en: "Telemetry store" }, kind: "data" },
      { label: { id: "Dashboard", en: "Dashboard" }, kind: "output" },
      { label: { id: "Control + audit", en: "Control + audit" }, kind: "quality" },
    ],
    sourcePaths: [
      "backend/internal/service/telemetry_service.go",
      "src/app/(app)/telemetry/page.tsx",
      "backend/internal/service/audit_service.go",
    ],
  },
  {
    id: "validation",
    navLabel: { id: "Validasi + Hasil", en: "Validation + Outcomes" },
    eyebrow: { id: "STOP 03 / VALIDASI + HASIL", en: "STOP 03 / VALIDATION + OUTCOMES" },
    title: {
      id: "Hasil diuji, diringkas, lalu dijelaskan.",
      en: "Results are tested, summarized, and explained.",
    },
    body: {
      id: "OrthoBreath, E2E JTI Intern, dan AI Content Strategy menunjukkan bahwa output tidak cukup hanya muncul. Output perlu diuji, dirangkum, dan diberi konteks.",
      en: "OrthoBreath, E2E JTI Intern, and AI Content Strategy show that output is not enough. It must be tested, summarized, and given context.",
    },
    color: "slate",
    projects: ["orthobreath", "jti-intern-testing", "content-strategy"],
    nodes: [
      { label: { id: "Alur aplikasi", en: "Application flow" }, kind: "input" },
      { label: { id: "Gerbang validasi", en: "Validation gate" }, kind: "quality" },
      { label: { id: "Pipeline pengujian", en: "Test pipeline" }, kind: "service" },
      { label: { id: "Prediksi / scoring", en: "Prediction / scoring" }, kind: "ai" },
      { label: { id: "Analitik", en: "Analytics" }, kind: "data" },
      { label: { id: "Laporan / rekomendasi", en: "Report / recommendation" }, kind: "output" },
    ],
    sourcePaths: [
      "frontend/src/components/ResultDashboard.tsx",
      "backend/services/validator.py",
      "docs/testing/",
    ],
  },
];

export function localizedStopText(value: LocalizedText, language: Language) {
  return value[language];
}
