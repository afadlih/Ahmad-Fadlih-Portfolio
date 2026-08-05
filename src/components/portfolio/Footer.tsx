import Link from "next/link";
import type { Language } from "@/types/content";
import { localePath, ui } from "@/i18n/config";
import { profile } from "@/lib/content";
import { Container } from "@/components/portfolio/Container";

export function Footer({ language }: { language: Language }) {
  const labels = ui[language];
  const resumeLabel = language === "id" ? "CV" : "Resume";

  return (
    <footer className="site-footer">
      <Container className="footer-grid">
        <div>
          <strong>{profile.name}</strong>
          <p>{labels.footer.note}</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href={localePath(language, "/projects")}>{labels.nav.projects}</Link>
          <Link href={localePath(language, "/resume")}>{resumeLabel}</Link>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>{labels.nav.contact}</a>
        </nav>
      </Container>
    </footer>
  );
}
