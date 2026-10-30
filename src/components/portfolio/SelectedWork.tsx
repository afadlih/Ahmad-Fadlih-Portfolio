import Link from "next/link";
import type { Project, Language } from "@/types/content";
import { localePath, ui } from "@/i18n/config";
import { featuredProjects, projects } from "@/lib/content";
import { Container } from "@/components/portfolio/Container";
import { SectionHeader } from "@/components/portfolio/SectionHeader";
import { FeaturedProjectCard } from "@/components/portfolio/FeaturedProjectCard";
import { buttonClassName } from "@/components/ui/button";

function MajorCaseStudy({ project, language }: { project: Project; language: Language }) {
  const copy =
    language === "id"
      ? {
          eyebrow: "Studi kasus tambahan",
          title: "Polinema Adaptive TOEIC",
          description:
            "Platform pembelajaran adaptif yang menghubungkan materi singkat, asesmen, rekomendasi, RBAC, dan kebutuhan pilot akademik.",
          open: "Buka studi kasus",
        }
      : {
          eyebrow: "Additional case study",
          title: "Polinema Adaptive TOEIC",
          description:
            "An adaptive learning platform connecting short lessons, assessments, recommendations, RBAC, and academic pilot operations.",
          open: "Open case study",
        };

  return (
    <article className="major-project">
      <div>
        <p className="section-eyebrow">{copy.eyebrow}</p>
        <h3>{copy.title}</h3>
        <p>{copy.description}</p>
      </div>
      <div className="major-project__aside">
        <div className="major-project__stack">
          {project.stack.slice(0, 6).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <Link
          className={buttonClassName({ variant: "outline" })}
          href={localePath(language, `/projects/${project.slug}`)}
        >
          {copy.open} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export function SelectedWork({ language }: { language: Language }) {
  const labels = ui[language].featured;
  const majorProject = projects.find((project) => project.slug === "polinema-adaptive-toeic");
  const viewAll = language === "id" ? "Semua project" : "All projects";

  return (
    <section id="featured" className="section featured-section">
      <Container>
        <SectionHeader
          eyebrow={labels.eyebrow}
          title={labels.title}
          description={labels.description}
          action={
            <Link className="text-link" href={localePath(language, "/projects")}>
              {viewAll} <span aria-hidden="true">→</span>
            </Link>
          }
        />

        <div className="featured-project-grid">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.slug} project={project} index={index} language={language} />
          ))}
        </div>

        {majorProject ? <MajorCaseStudy project={majorProject} language={language} /> : null}
      </Container>
    </section>
  );
}
