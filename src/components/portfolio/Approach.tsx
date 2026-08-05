import type { Language } from "@/types/content";
import { ui } from "@/i18n/config";
import { Container } from "@/components/portfolio/Container";
import { SectionHeader } from "@/components/portfolio/SectionHeader";

export function Approach({ language }: { language: Language }) {
  const labels = ui[language].approach;

  return (
    <section id="approach" className="section approach-section">
      <Container>
        <SectionHeader eyebrow={labels.eyebrow} title={labels.title} description={labels.description} />
        <ol className="approach-grid">
          {labels.steps.slice(0, 4).map(([number, title, body]) => (
            <li key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
