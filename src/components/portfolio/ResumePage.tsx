import type { Language, Project } from "@/types/content";
import { localize } from "@/i18n/config";
import { credentials, featuredProjects, organizations, profile, projects } from "@/lib/content";
import { Container } from "@/components/portfolio/Container";
import { buttonClassName } from "@/components/ui/button";

function pickProjects(slugs: string[]) {
  return slugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean) as Project[];
}

function ResumeProjectGroup({
  title,
  projects: groupProjects,
  language,
}: {
  title: string;
  projects: Project[];
  language: Language;
}) {
  if (groupProjects.length === 0) return null;

  return (
    <section className="resume-project-group">
      <h3>{title}</h3>
      <div className="resume-project-list resume-project-list--compact">
        {groupProjects.map((project) => (
          <article key={project.slug}>
            <header>
              <h4>{project.name}</h4>
              <span>{project.stack.slice(0, 5).join(" / ")}</span>
            </header>
            <p>{localize(project.summary, language)}</p>
            <strong>{localize(project.outcome, language)}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ResumePage({ language }: { language: Language }) {
  const labels = language === "id" ? {
    eyebrow: "CV dan profil",
    title: "Ringkasan kemampuan dan project yang siap dibaca recruiter.",
    intro: "Versi singkat portfolio untuk melihat fokus teknis, project utama, pengalaman organisasi, dan sertifikasi tanpa membaca seluruh studi kasus.",
    idPdf: "Unduh CV Indonesia",
    enPdf: "Download English CV",
    editable: "Unduh versi editable",
    summary: "Ringkasan",
    skills: "Fokus teknis",
    projects: "Project pilihan",
    core: "Produk utama",
    major: "Produk akademik skala besar",
    support: "Sistem pendukung",
    qa: "QA dan proses belajar",
    leadership: "Organisasi dan kepemimpinan",
    credentials: "Sertifikasi",
    note: "Sebelum CV dikirim, periksa kembali periode organisasi, status sertifikasi BNSP, dan hasil terukur yang dapat dijelaskan saat interview.",
  } : {
    eyebrow: "Resume and profile",
    title: "A recruiter-ready summary of skills and projects.",
    intro: "A shorter portfolio view for reviewing technical focus, major projects, organization experience, and credentials without reading every case study.",
    idPdf: "Download Indonesian CV",
    enPdf: "Download English CV",
    editable: "Download editable version",
    summary: "Summary",
    skills: "Technical focus",
    projects: "Selected projects",
    core: "Core products",
    major: "Large academic product",
    support: "Supporting systems",
    qa: "QA and learning process",
    leadership: "Leadership and organizations",
    credentials: "Credentials",
    note: "Before sending the resume, review organization periods, BNSP credential status, and measurable outcomes you can explain in an interview.",
  };

  const major = pickProjects(["polinema-adaptive-toeic"]);
  const support = pickProjects(["orthobreath", "smart-clothesline", "content-strategy", "technorules"]);
  const qaLearning = pickProjects([
    "jti-intern-testing",
    "e2e-magangin",
    "machine-learning-lab-2025",
    "mobile-programming-lab",
  ]);
  const skillTags = [
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "Go",
    "PostgreSQL",
    "Drizzle ORM",
    "Firebase",
    "Docker",
    "Playwright",
    "Gemini API",
    "System Design",
  ];

  return (
    <main id="main-content">
      <section className="resume-hero">
        <Container className="resume-hero-grid">
          <div>
            <p className="section-eyebrow">{labels.eyebrow}</p>
            <h1>{labels.title}</h1>
            <p>{labels.intro}</p>
          </div>
          <div className="resume-actions">
            <a className={buttonClassName({ size: "lg" })} href={profile.resumeIdUrl} target="_blank" rel="noreferrer">{labels.idPdf}</a>
            <a className={buttonClassName({ variant: "secondary", size: "lg" })} href={profile.resumeEnUrl} target="_blank" rel="noreferrer">{labels.enPdf}</a>
            <a className={buttonClassName({ variant: "outline", size: "lg" })} href={profile.resumeEditableUrl} target="_blank" rel="noreferrer">{labels.editable}</a>
          </div>
        </Container>
      </section>

      <section className="section resume-body-section">
        <Container className="resume-layout">
          <aside className="resume-sidebar">
            <section>
              <small>{labels.summary}</small>
              <p>{localize(profile.intro, language)}</p>
            </section>
            <section>
              <small>{labels.skills}</small>
              <div className="resume-tags">
                {skillTags.map((item) => <span key={item}>{item}</span>)}
              </div>
            </section>
            <section className="resume-note"><p>{labels.note}</p></section>
          </aside>

          <div className="resume-main">
            <section className="resume-section">
              <h2>{labels.projects}</h2>
              <ResumeProjectGroup title={labels.core} projects={featuredProjects} language={language} />
              <ResumeProjectGroup title={labels.major} projects={major} language={language} />
              <ResumeProjectGroup title={labels.support} projects={support} language={language} />
              <ResumeProjectGroup title={labels.qa} projects={qaLearning} language={language} />
            </section>

            <section className="resume-section">
              <h2>{labels.leadership}</h2>
              <div className="resume-timeline">
                {organizations.map((item) => (
                  <article key={item.id}>
                    <div><span>{item.period}</span></div>
                    <div><h3>{localize(item.role, language)}</h3><strong>{item.name}</strong><p>{localize(item.description, language)}</p></div>
                  </article>
                ))}
              </div>
            </section>

            <section className="resume-section">
              <h2>{labels.credentials}</h2>
              {credentials.map((item) => <article className="resume-credential" key={item.id}><h3>{localize(item.title, language)}</h3><p>{item.issuer}</p></article>)}
            </section>
          </div>
        </Container>
      </section>
    </main>
  );
}
