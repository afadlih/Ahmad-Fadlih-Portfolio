import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLanguage, languages } from "@/i18n/config";
import { getProject, projects } from "@/lib/content";
import { projectJsonLd, projectMetadata } from "@/lib/seo";
import { ProjectDetail } from "@/components/portfolio/ProjectDetail";

export function generateStaticParams() {
  return languages.flatMap((lang) =>
    projects.map((project) => ({
      lang,
      slug: project.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const project = getProject(slug);

  if (!isLanguage(lang) || !project) {
    return {};
  }

  return projectMetadata(lang, project);
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const project = getProject(slug);

  if (!isLanguage(lang) || !project) {
    notFound();
  }

  const jsonLd = projectJsonLd(lang, project);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectDetail project={project} language={lang} />
    </>
  );
}
