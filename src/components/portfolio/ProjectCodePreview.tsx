import type { Language, Project } from "@/types/content";
import { localize } from "@/i18n/config";
import { stageLabel } from "@/lib/presentation";
import { Badge } from "@/components/ui/badge";

function sourceFiles(project: Project) {
  return project.deepDives
    .flatMap((feature) => feature.sourcePoints ?? [])
    .filter((point, index, values) => values.findIndex((item) => item.path === point.path) === index)
    .slice(0, 4);
}

export function ProjectCodePreview({
  project,
  language,
  compact = false,
}: {
  project: Project;
  language: Language;
  compact?: boolean;
}) {
  const files = sourceFiles(project);
  const title = language === "id" ? "Peta implementasi" : "Implementation map";
  const fallbackLabel = language === "id" ? "Lapisan prototipe" : "Prototype layers";

  return (
    <div className={compact ? "project-code-preview is-compact" : "project-code-preview"}>
      <header>
        <div className="project-code-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <code>{project.slug}/overview</code>
        <Badge variant="success">{stageLabel(language, project.stage)}</Badge>
      </header>

      <div className="project-code-body">
        <div className="project-code-heading">
          <span>{title}</span>
          <strong>{project.name}</strong>
        </div>

        {files.length > 0 ? (
          <ol className="project-code-files">
            {files.map((file, index) => (
              <li key={file.path}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <code>{file.path}</code>
                  {!compact ? <p>{localize(file.label, language)}</p> : null}
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <div className="project-code-layers">
            <span>{fallbackLabel}</span>
            <ul>
              {project.architecture.components.slice(0, 5).map((component) => (
                <li key={component.name}>{component.name}</li>
              ))}
            </ul>
          </div>
        )}

        {!compact ? (
          <ol className="project-code-flow">
            {project.flow.slice(0, 4).map((step, index) => (
              <li key={step.id}>
                <b>{String(index + 1).padStart(2, "0")}</b>
                <span>{localize(step, language)}</span>
              </li>
            ))}
          </ol>
        ) : null}
      </div>
    </div>
  );
}
