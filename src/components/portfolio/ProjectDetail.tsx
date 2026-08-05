import type { Language, Project } from "@/types/content";
import { Container } from "@/components/portfolio/Container";
import { ProjectEvidenceSection } from "@/components/portfolio/ProjectEvidenceSection";
import { AiJourneySection } from "@/components/portfolio/project-detail/AiJourneySection";
import { ProjectArchitectureSection } from "@/components/portfolio/project-detail/ProjectArchitectureSection";
import { ProjectContributionSection } from "@/components/portfolio/project-detail/ProjectContributionSection";
import { ProjectDeepDiveSection } from "@/components/portfolio/project-detail/ProjectDeepDiveSection";
import { ProjectHero } from "@/components/portfolio/project-detail/ProjectHero";
import { ProjectLimitsSection } from "@/components/portfolio/project-detail/ProjectLimitsSection";
import { ProjectLocalNav } from "@/components/portfolio/project-detail/ProjectLocalNav";
import { ProjectOverviewSection } from "@/components/portfolio/project-detail/ProjectOverviewSection";

export function ProjectDetail({ project, language }: { project: Project; language: Language }) {
  return (
    <main id="main-content">
      <ProjectHero project={project} language={language} />
      <Container className="project-layout">
        <ProjectLocalNav project={project} language={language} />
        <div className="project-content">
          <ProjectOverviewSection project={project} language={language} />
          <ProjectContributionSection project={project} language={language} />
          <ProjectArchitectureSection project={project} language={language} />
          <AiJourneySection project={project} language={language} />
          <ProjectDeepDiveSection project={project} language={language} />
          <ProjectEvidenceSection project={project} language={language} />
          <ProjectLimitsSection project={project} language={language} />
        </div>
      </Container>
    </main>
  );
}
