import Link from "next/link";
import type { Language, Project } from "@/types/content";
import { localePath, localize, ui } from "@/i18n/config";
import { depthLabel, stageLabel, visibilityLabel } from "@/lib/presentation";
import { ProjectCodePreview } from "@/components/portfolio/ProjectCodePreview";

export function ProjectCard({
  project,
  language,
  compact = false,
}: {
  project: Project;
  language: Language;
  compact?: boolean;
}) {
  const labels = ui[language].featured;

  return (
    <article className={`project-card accent-${project.accent} ${compact ? "project-card-compact" : ""}`}>
      <div className="project-card-topline" />
      <div className={`project-card-layout ${compact ? "project-card-layout-compact" : ""}`}>
        <ProjectCodePreview project={project} language={language} compact={compact} />

        <div className="project-card-body">
          <div className="project-card-header">
            <div className="project-badges">
              <span>{localize(project.category, language)}</span>
              <span>{stageLabel(language, project.stage)}</span>
              <span>{visibilityLabel(language, project.visibility)}</span>
            </div>
            <h3>{project.name}</h3>
            <p>{localize(project.summary, language)}</p>
          </div>

          {!compact ? (
            <>
              <div className="project-card-context">
                <section>
                  <small>{labels.problem}</small>
                  <p>{localize(project.problem, language)}</p>
                </section>
                <section>
                  <small>{labels.built}</small>
                  <p>{localize(project.outcome, language)}</p>
                </section>
              </div>
              <div className="project-card-role">
                <small>{labels.role}</small>
                <strong>{localize(project.contribution.role, language)}</strong>
              </div>
            </>
          ) : (
            <div className="project-card-stack">
              {project.stack.slice(0, 5).map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          )}

          <div className="project-card-footer">
            <div>
              <span>{depthLabel(language, project)}</span>
              <span>{project.stack.slice(0, 3).join(" • ")}</span>
            </div>
            <Link href={localePath(language, `/projects/${project.slug}`)}>
              {compact ? ui[language].supporting.open : labels.view}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
