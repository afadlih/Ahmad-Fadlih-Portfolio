import type { Language, Project } from "@/types/content";
import { getAiJourney, localizeJourney } from "@/lib/ai-journey";
import { CaseHeading } from "@/components/portfolio/project-detail/CaseHeading";

export function AiJourneySection({
  project,
  language,
}: {
  project: Project;
  language: Language;
}) {
  const journey = getAiJourney(project.slug);
  if (!journey) return null;

  return (
    <section id="ai-journey" className="case-section ai-journey-section">
      <CaseHeading
        eyebrow={localizeJourney(journey.eyebrow, language)}
        title={localizeJourney(journey.title, language)}
        description={localizeJourney(journey.description, language)}
      />
      <ol className="ai-journey-flow">
        {journey.stages.map((stage, index) => (
          <li key={`${project.slug}-${stage.kind}-${index}`} className={`ai-stage kind-${stage.kind}`}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{localizeJourney(stage.label, language)}</strong>
            <p>{localizeJourney(stage.note, language)}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
