import type { Language } from "@/types/content";
import { featuredProjects } from "@/lib/content";
import { ui } from "@/i18n/config";
import { Container } from "@/components/portfolio/Container";
import { SectionHeader } from "@/components/portfolio/SectionHeader";
import { ProjectCard } from "@/components/portfolio/ProjectCard";

export function FeaturedProjects({ language }: { language: Language }) {
  const labels = ui[language].featured;

  return (
    <section id="featured" className="section">
      <Container>
        <SectionHeader
          eyebrow={labels.eyebrow}
          title={labels.title}
          description={labels.description}
        />
        <div className="featured-projects">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              language={language}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
