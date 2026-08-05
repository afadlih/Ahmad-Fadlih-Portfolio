import Link from "next/link";
import type { Language } from "@/types/content";
import { localePath, localize } from "@/i18n/config";
import { projects } from "@/lib/content";
import { Container } from "@/components/portfolio/Container";
import { SectionHeader } from "@/components/portfolio/SectionHeader";

export function CurrentlyBuilding({ language }: { language: Language }) {
  const copy =
    language === "id"
      ? {
          eyebrow: "Sedang dibangun",
          title: "Tiga prioritas engineering saat ini.",
          description:
            "Versi dan status dipisahkan agar angka release tidak disalahartikan sebagai kesiapan produksi.",
          focus: "Fokus saat ini",
          open: "Buka ringkasan teknis",
          unversioned: "Belum diberi versi",
        }
      : {
          eyebrow: "Currently building",
          title: "Three current engineering priorities.",
          description:
            "Version and development status are separated so a release number is not mistaken for production readiness.",
          focus: "Current focus",
          open: "Open technical overview",
          unversioned: "Unversioned",
        };

  const currentProjects = projects
    .filter((project) => project.currentPriority)
    .sort((a, b) => (a.currentRank ?? 99) - (b.currentRank ?? 99))
    .slice(0, 3);

  return (
    <section id="building" className="section building-section">
      <Container>
        <SectionHeader
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />

        <div className="building-grid">
          {currentProjects.map((project) => (
            <article key={project.slug} className="building-card">
              <div className="building-card__meta">
                <span>{project.version ?? copy.unversioned}</span>
                <span>{localize(project.developmentStatus, language)}</span>
              </div>
              <h3>{project.name}</h3>
              <p>{localize(project.summary, language)}</p>
              <div className="building-card__focus">
                <strong>{copy.focus}</strong>
                <ul>
                  {project.nextImprovements.slice(0, 2).map((item, index) => (
                    <li key={`${project.slug}-focus-${index}`}>
                      {localize(item, language)}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                className="text-link"
                href={localePath(language, `/projects/${project.slug}`)}
              >
                {copy.open} <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
