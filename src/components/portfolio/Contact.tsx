import type { Language } from "@/types/content";
import { ui } from "@/i18n/config";
import { profile } from "@/lib/content";
import { Container } from "@/components/portfolio/Container";
import { buttonClassName } from "@/components/ui/button";

export function Contact({ language }: { language: Language }) {
  const labels = ui[language].contact;
  const linkedin = language === "id" ? "Lihat LinkedIn" : "View LinkedIn";

  return (
    <section id="contact" className="section contact-section">
      <Container className="contact-card">
        <div>
          <p className="section-eyebrow">{labels.eyebrow}</p>
          <h2>{labels.title}</h2>
          <p>{labels.description}</p>
        </div>
        <div className="contact-actions">
          <a className={buttonClassName({ size: "lg" })} href={`mailto:${profile.email}`}>
            {labels.email}
          </a>
          <a
            className={buttonClassName({ variant: "outline", size: "lg" })}
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            {linkedin}
          </a>
        </div>
      </Container>
    </section>
  );
}
