import type { Language, Project } from "@/types/content";
import { localize, ui } from "@/i18n/config";
import { CaseHeading } from "@/components/portfolio/project-detail/CaseHeading";

export function ProjectArchitectureSection({ project, language }: { project: Project; language: Language }) {
  const labels = ui[language].detail;
  return (
    <section id="architecture" className="case-section">
      <CaseHeading eyebrow={language === "id" ? "ARSITEKTUR SISTEM" : "SYSTEM ARCHITECTURE"} title={labels.architecture} description={localize(project.architecture.summary, language)} />
      <div className="architecture-grid">
        {project.architecture.components.map((component) => (
          <article key={component.name}><strong>{component.name}</strong><p>{localize(component.responsibility, language)}</p></article>
        ))}
      </div>
      <div className="architecture-detail-grid">
        <section>
          <h3>{labels.dataFlow}</h3>
          <ol className="step-list">
            {project.architecture.dataFlow.map((item, index) => (
              <li key={item.id}><span>{String(index + 1).padStart(2, "0")}</span><p>{localize(item, language)}</p></li>
            ))}
          </ol>
        </section>
        <section>
          <h3>{labels.deployment}</h3>
          <ul className="check-list">
            {project.architecture.deployment.map((item) => <li key={item.id}>{localize(item, language)}</li>)}
          </ul>
        </section>
      </div>
    </section>
  );
}
