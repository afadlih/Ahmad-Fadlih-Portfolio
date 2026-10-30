import type {
  EvidenceStatus,
  Language,
  Project,
  ProjectStage,
  ProjectVisibility,
} from "@/types/content";
import { ui } from "@/i18n/config";

export function stageLabel(language: Language, stage: ProjectStage) {
  return ui[language].featured[stage];
}

export function visibilityLabel(
  language: Language,
  visibility: ProjectVisibility,
) {
  return visibility === "public"
    ? ui[language].featured.public
    : ui[language].featured.private;
}

export function depthLabel(language: Language, project: Project) {
  return project.caseStudyDepth === "full"
    ? ui[language].detail.full
    : ui[language].detail.overview;
}

export function evidenceStatusLabel(
  language: Language,
  status: EvidenceStatus,
) {
  const labels = {
    id: {
      planned: "Direncanakan",
      documented: "Terdokumentasi",
      ready: "Siap dibuka",
      verified: "Terverifikasi",
    },
    en: {
      planned: "Planned",
      documented: "Documented",
      ready: "Ready",
      verified: "Verified",
    },
  } as const;

  return labels[language][status];
}
