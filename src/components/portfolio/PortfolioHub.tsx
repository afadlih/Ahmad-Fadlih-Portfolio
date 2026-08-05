import Link from "next/link";
import type { Language, Project } from "@/types/content";
import { localePath, localize } from "@/i18n/config";
import { projects } from "@/lib/content";
import { Container } from "@/components/portfolio/Container";
import { SectionHeader } from "@/components/portfolio/SectionHeader";

const productSlugs = ["orthobreath", "smart-clothesline", "content-strategy", "technorules"];
const learningSlugs = [
  "jti-intern-testing",
  "e2e-magangin",
  "machine-learning-lab-2025",
  "mobile-programming-lab",
];

function projectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

function ProjectList({ projects: items, language }: { projects: Project[]; language: Language }) {
  const open = language === "id" ? "Detail" : "Details";

  return (
    <ul className="supporting-project-list">
      {items.map((project) => (
        <li key={project.slug}>
          <div>
            <h4>{project.name}</h4>
            <p>{localize(project.summary, language)}</p>
          </div>
          <div className="supporting-project-list__meta">
            <span>{project.stack.slice(0, 3).join(" · ")}</span>
            <Link href={localePath(language, `/projects/${project.slug}`)}>
              {open} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}

function ProjectGroup({
  title,
  description,
  slugs,
  language,
}: {
  title: string;
  description: string;
  slugs: string[];
  language: Language;
}) {
  const items = slugs.map(projectBySlug).filter(Boolean) as Project[];

  return (
    <section className="supporting-project-group">
      <header>
        <h3>{title}</h3>
        <p>{description}</p>
      </header>
      <ProjectList projects={items} language={language} />
    </section>
  );
}

export function PortfolioHub({ language }: { language: Language }) {
  const copy =
    language === "id"
      ? {
          eyebrow: "Project lainnya",
          title: "Project lain yang memperluas pengalaman saya.",
          description:
            "Daftar ini dibuat ringkas agar halaman utama tetap fokus. Setiap project tetap memiliki halaman detail untuk konteks dan teknologi yang digunakan.",
          products: "Produk dan sistem",
          productsDescription: "Aplikasi kesehatan, IoT, strategi konten, dan sistem internal kampus.",
          learning: "Testing dan pembelajaran",
          learningDescription: "Pengujian multi-role, machine learning, dan pengembangan aplikasi mobile.",
        }
      : {
          eyebrow: "More projects",
          title: "Other projects that broaden my experience.",
          description:
            "This list stays compact so the home page remains focused. Each project still has a detail page for its context and technology.",
          products: "Products and systems",
          productsDescription: "Health, IoT, content strategy, and internal campus systems.",
          learning: "Testing and learning",
          learningDescription: "Multi-role testing, machine learning, and mobile application development.",
        };

  return (
    <section id="evidence" className="section supporting-section">
      <Container>
        <SectionHeader eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
        <div className="supporting-project-columns">
          <ProjectGroup
            title={copy.products}
            description={copy.productsDescription}
            slugs={productSlugs}
            language={language}
          />
          <ProjectGroup
            title={copy.learning}
            description={copy.learningDescription}
            slugs={learningSlugs}
            language={language}
          />
        </div>
      </Container>
    </section>
  );
}
