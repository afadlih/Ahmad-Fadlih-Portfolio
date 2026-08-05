import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLanguage, ui } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";
import { projects } from "@/lib/content";
import { Container } from "@/components/portfolio/Container";
import { ProjectExplorer } from "@/components/portfolio/ProjectExplorer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) return {};
  const labels = ui[lang].projectsPage;
  return pageMetadata(lang, "/projects", labels.title, labels.description);
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLanguage(lang)) {
    notFound();
  }

  const labels = ui[lang].projectsPage;

  return (
    <main id="main-content">
      <section className="page-hero">
        <Container>
          <p className="section-eyebrow">{labels.eyebrow}</p>
          <h1>{labels.title}</h1>
          <p>{labels.description}</p>
        </Container>
      </section>

      <section className="section">
        <Container>
          <ProjectExplorer language={lang} projects={projects} />
        </Container>
      </section>
    </main>
  );
}
