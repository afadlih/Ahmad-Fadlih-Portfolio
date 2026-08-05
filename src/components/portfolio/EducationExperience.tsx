import type { Language } from "@/types/content";
import { localize } from "@/i18n/config";
import { experiences, profile } from "@/lib/content";
import { Container } from "@/components/portfolio/Container";
import { SectionHeader } from "@/components/portfolio/SectionHeader";

const highlightedExperienceIds = new Set([
  "pt-pindad-internship-2026",
  "pkm-kc-orthobreath-2026",
]);

export function EducationExperience({ language }: { language: Language }) {
  const copy =
    language === "id"
      ? {
          eyebrow: "Pendidikan dan konteks profesional",
          title: "Belajar di Polinema, membangun melalui project nyata.",
          description:
            "Pendidikan memberi fondasi, sedangkan magang, pendanaan PKM, dan project mandiri menguji bagaimana fondasi itu dipakai dalam sistem nyata.",
          education: "Pendidikan",
          experience: "Pengalaman dan pengakuan",
        }
      : {
          eyebrow: "Education and professional context",
          title: "Studying at Polinema, learning through real projects.",
          description:
            "Education provides the foundation, while an internship, PKM funding, and independent projects test how that foundation works in real systems.",
          education: "Education",
          experience: "Experience and recognition",
        };

  const highlightedExperiences = experiences.filter((item) =>
    highlightedExperienceIds.has(item.id),
  );
  const education = profile.educationDetails;
  const evidenceLabel =
    language === "id"
      ? { documented: "Terdokumentasi", ready: "Siap ditinjau", verified: "Terverifikasi" }
      : { documented: "Documented", ready: "Ready for review", verified: "Verified" };
  const periodLabel = (period: string) =>
    language === "id"
      ? period.replace(/present|current/gi, "sekarang")
      : period.replace(/sekarang/gi, "present");

  return (
    <section id="education" className="section context-section">
      <Container>
        <SectionHeader
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />

        <div className="context-grid">
          <article className="education-card">
            <p className="section-eyebrow">{copy.education}</p>
            <h3>{education.institution}</h3>
            <strong>{localize(education.program, language)}</strong>
            <p>{localize(education.department, language)}</p>
            <ul>
              <li>{localize(education.status, language)}</li>
              <li>{education.location}</li>
            </ul>
            <p>{localize(profile.education, language)}</p>
          </article>

          <div className="experience-signal-list" aria-label={copy.experience}>
            <p className="section-eyebrow">{copy.experience}</p>
            {highlightedExperiences.map((item) => (
              <article key={item.id}>
                <div>
                  <span>{periodLabel(item.period)}</span>
                  <span>{evidenceLabel[item.evidenceStatus]}</span>
                </div>
                <h3>{localize(item.title, language)}</h3>
                <strong>
                  {item.organization}
                  {item.role ? ` · ${localize(item.role, language)}` : ""}
                </strong>
                <p>{localize(item.description, language)}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
