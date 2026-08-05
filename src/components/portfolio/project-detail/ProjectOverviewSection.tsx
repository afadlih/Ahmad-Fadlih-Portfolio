import type { Language, Project } from "@/types/content";
import { localize, ui } from "@/i18n/config";
import { depthLabel } from "@/lib/presentation";
import { CaseHeading } from "@/components/portfolio/project-detail/CaseHeading";

export function ProjectOverviewSection({ project, language }: { project: Project; language: Language }) {
  const labels = ui[language].detail;
  return (
    <section id="overview" className="case-section">
      <CaseHeading eyebrow={language === "id" ? "RINGKASAN" : "OVERVIEW"} title={labels.quickFacts} />
      <div className="overview-grid">
        <article><small>{labels.problem}</small><p>{localize(project.problem, language)}</p></article>
        <article><small>{labels.outcome}</small><p>{localize(project.outcome, language)}</p></article>
        <article><small>{labels.role}</small><p>{localize(project.contribution.role, language)}</p></article>
        <article>
          <small>{language === "id" ? "Kedalaman studi kasus" : "Case-study depth"}</small>
          <p>{depthLabel(language, project)}</p>
        </article>
      </div>
      <div className="highlight-list">
        {project.highlights.map((item, index) => (
          <div key={item.id}><span>{String(index + 1).padStart(2, "0")}</span><p>{localize(item, language)}</p></div>
        ))}
      </div>
    </section>
  );
}
