import type { Language, Project } from "@/types/content";
import { localize, ui } from "@/i18n/config";
import { CaseHeading } from "@/components/portfolio/project-detail/CaseHeading";

function LocalizedList({ items, language, positive = false }: { items: Project["contribution"]["responsibilities"]; language: Language; positive?: boolean }) {
  return (
    <ul className={`check-list${positive ? " check-list-positive" : ""}`}>
      {items.map((item) => <li key={item.id}>{localize(item, language)}</li>)}
    </ul>
  );
}

export function ProjectContributionSection({ project, language }: { project: Project; language: Language }) {
  const labels = ui[language].detail;
  return (
    <section id="contribution" className="case-section">
      <CaseHeading eyebrow={language === "id" ? "KONTRIBUSI" : "CONTRIBUTION"} title={labels.contribution} />
      <div className="contribution-grid">
        <article><small>{labels.scope}</small><p>{localize(project.contribution.scope, language)}</p></article>
        <article><small>{labels.team}</small><p>{localize(project.contribution.teamContext, language)}</p></article>
        <article><small>{labels.responsibilities}</small><LocalizedList items={project.contribution.responsibilities} language={language} /></article>
        <article><small>{labels.ownership}</small><LocalizedList items={project.contribution.ownership} language={language} positive /></article>
      </div>
    </section>
  );
}
