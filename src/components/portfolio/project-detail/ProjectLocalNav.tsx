import type { Language, Project } from "@/types/content";
import { ui } from "@/i18n/config";
import { getAiJourney } from "@/lib/ai-journey";

export function ProjectLocalNav({
  project,
  language,
}: {
  project: Project;
  language: Language;
}) {
  const labels = ui[language].detail;
  const aiLabel = language === "id" ? "AI journey" : "AI journey";
  const links = [
    ["overview", labels.quickFacts],
    ["contribution", labels.contribution],
    ["architecture", labels.architecture],
    ...(getAiJourney(project.slug) ? [["ai-journey", aiLabel]] : []),
    ...(project.deepDives.length ? [["deep-dives", labels.deepDive]] : []),
    ["evidence", labels.evidence],
    ["limits", labels.limits],
  ];

  return (
    <aside className="project-local-nav">
      <span>{project.name}</span>
      <nav>
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`}>
            {label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
