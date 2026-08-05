import Image from "next/image";
import Link from "next/link";
import type { Language } from "@/types/content";
import { localePath, localize, ui } from "@/i18n/config";
import { profile } from "@/lib/content";
import { Container } from "@/components/portfolio/Container";
import { buttonClassName } from "@/components/ui/button";

function heroCopy(language: Language) {
  return language === "id"
    ? {
        eyebrow: "Fullstack Developer · Web, AI, IoT, dan QA",
        resume: "Lihat CV",
        systemMap: "Peta sistem",
        current: "Sedang dikerjakan",
        location: "Indonesia",
        focusLabel: "Fokus kemampuan",
      }
    : {
        eyebrow: "Fullstack Developer · Web, AI, IoT, and QA",
        resume: "View resume",
        systemMap: "System map",
        current: "Currently building",
        location: "Indonesia",
        focusLabel: "Capability focus",
      };
}

export function HomeHero({ language }: { language: Language }) {
  const labels = ui[language];
  const copy = heroCopy(language);

  return (
    <section className="portfolio-hero">
      <Container className="portfolio-hero__grid">
        <div className="portfolio-hero__copy">
          <p className="section-eyebrow">{copy.eyebrow}</p>
          <h1>{localize(profile.heroTitle, language)}</h1>
          <p className="portfolio-hero__lead">{localize(profile.heroSummary, language)}</p>

          <div className="portfolio-hero__actions">
            <Link className={buttonClassName({ size: "lg" })} href="#featured">
              {labels.hero.primaryCta}
            </Link>
            <Link
              className={buttonClassName({ variant: "outline", size: "lg" })}
              href={localePath(language, "/resume")}
            >
              {copy.resume}
            </Link>
          </div>

          <div className="portfolio-hero__focus" aria-label={copy.focusLabel}>
            {profile.focus.slice(0, 3).map((item) => (
              <p key={localize(item, language)}>{localize(item, language)}</p>
            ))}
          </div>

          <Link className="text-link" href={localePath(language, "/system-map")}>
            {copy.systemMap} <span aria-hidden="true">→</span>
          </Link>
        </div>

        <figure className="portfolio-portrait">
          <div className="portfolio-portrait__media">
            {profile.photo ? (
              <Image
                src={profile.photo}
                alt={labels.hero.profileAlt}
                fill
                priority
                sizes="(max-width: 760px) 92vw, 420px"
              />
            ) : (
              <span>{profile.initials}</span>
            )}
          </div>
          <figcaption>
            <div>
              <strong>{profile.shortName}</strong>
              <span>{copy.location}</span>
            </div>
            <p>
              <span>{copy.current}</span>
              {localize(profile.currentFocus, language)}
            </p>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
