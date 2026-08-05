import type { Language, Project } from "@/types/content";
import { localize, ui } from "@/i18n/config";
import { CaseHeading } from "@/components/portfolio/project-detail/CaseHeading";
import { buttonClassName } from "@/components/ui/button";

export function ProjectLimitsSection({ project, language }: { project: Project; language: Language }) {
  const labels = ui[language].detail;
  return (
    <section id="limits" className="case-section">
      <CaseHeading eyebrow={language === "id" ? "BATAS DAN LANJUTAN" : "LIMITS AND NEXT"} title={labels.limits} />
      <div className="limits-grid">
        <article><small>{labels.currentLimits}</small><ul>{project.limitations.map((item) => <li key={item.id}>{localize(item, language)}</li>)}</ul></article>
        <article><small>{labels.nextSteps}</small><ol>{project.nextImprovements.map((item, index) => <li key={item.id}><span>{String(index + 1).padStart(2, "0")}</span>{localize(item, language)}</li>)}</ol></article>
      </div>
      <div className="repository-note">
        {project.visibility === "public" && project.repository ? (
          <a className={buttonClassName()} href={project.repository} target="_blank" rel="noreferrer">{labels.repository} ↗</a>
        ) : <p>{labels.privateRepo}</p>}
      </div>
    </section>
  );
}
