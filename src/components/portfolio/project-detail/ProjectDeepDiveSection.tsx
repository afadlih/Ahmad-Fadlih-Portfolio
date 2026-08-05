import type { Language, Project } from "@/types/content";
import { ui } from "@/i18n/config";
import { DeepDiveNavigator } from "@/components/portfolio/DeepDiveNavigator";
import { CaseHeading } from "@/components/portfolio/project-detail/CaseHeading";

export function ProjectDeepDiveSection({ project, language }: { project: Project; language: Language }) {
  if (!project.deepDives.length) return null;
  const labels = ui[language].detail;
  const description = language === "id"
    ? "Buka setiap fitur untuk melihat kebutuhan pengguna, iterasi, keputusan teknis, trade-off, pengujian, dan hasil."
    : "Open each feature to review the user need, iterations, technical decisions, trade-offs, testing, and outcomes.";

  return (
    <section id="deep-dives" className="case-section">
      <CaseHeading eyebrow={language === "id" ? "PEMBAHASAN FITUR" : "FEATURE DEEP DIVE"} title={labels.deepDive} description={description} />
      <DeepDiveNavigator
        items={project.deepDives}
        language={language}
        visibility={project.visibility}
      />
    </section>
  );
}
