import Link from "next/link";
import type { Language, Project } from "@/types/content";
import { localePath, localize, ui } from "@/i18n/config";
import { stageLabel, visibilityLabel } from "@/lib/presentation";
import { Container } from "@/components/portfolio/Container";
import { ProjectCodePreview } from "@/components/portfolio/ProjectCodePreview";

export function ProjectHero({
  project,
  language,
}: {
  project: Project;
  language: Language;
}) {
  const labels = ui[language].detail;
  const previewLabel =
    language === "id"
      ? `Ringkasan implementasi ${project.name}`
      : `${project.name} implementation overview`;

  return (
    <section className={`project-detail-hero accent-${project.accent}`}>
      <Container>
        <Link className="back-link" href={localePath(language, "/projects")}>
          ← {labels.back}
        </Link>
        <div className="project-detail-hero-grid">
          <div className="project-detail-hero__copy">
            <div className="project-badges project-badges-dark">
              <span>{localize(project.category, language)}</span>
              <span>{stageLabel(language, project.stage)}</span>
              <span>{visibilityLabel(language, project.visibility)}</span>
            </div>
            <h1>{project.name}</h1>
            <p>{localize(project.summary, language)}</p>
            <div className="hero-stack-list" aria-label={language === "id" ? "Teknologi" : "Technologies"}>
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <aside className="project-detail-code-panel" aria-label={previewLabel}>
            <ProjectCodePreview project={project} language={language} />
          </aside>
        </div>
      </Container>
    </section>
  );
}
