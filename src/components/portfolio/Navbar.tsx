import Link from "next/link";
import type { Language } from "@/types/content";
import { localePath, ui } from "@/i18n/config";
import { profile } from "@/lib/content";
import { Container } from "@/components/portfolio/Container";
import { LanguageToggle } from "@/components/portfolio/LanguageToggle";
import { ThemeToggle } from "@/components/portfolio/ThemeToggle";

export function Navbar({ language }: { language: Language }) {
  const labels = ui[language];
  const navigationLabel = language === "id" ? "Navigasi utama" : "Primary navigation";
  const mobileMenuLabel = language === "id" ? "Buka menu" : "Open menu";
  const links = [
    [language === "id" ? "Pendidikan" : "Education", `${localePath(language)}#education`],
    [labels.nav.projects, `${localePath(language)}#featured`],
    [language === "id" ? "Sedang dibangun" : "Currently building", `${localePath(language)}#building`],
    [labels.nav.resume, localePath(language, "/resume")],
  ] as const;

  return (
    <header className="site-header">
      <Container className="nav-row">
        <Link
          href={localePath(language)}
          className="brand"
          aria-label={`${profile.shortName}, ${labels.nav.home}`}
        >
          <span className="brand-mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span>
            <strong>{profile.shortName}</strong>
            <small>{language === "id" ? "Full-Stack & AI" : "Full-Stack & AI"}</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label={navigationLabel}>
          {links.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <ThemeToggle language={language} />
          <LanguageToggle language={language} />
          <a className="nav-contact" href={`mailto:${profile.email}`}>
            {labels.nav.contact}
          </a>
          <details className="mobile-menu">
            <summary aria-label={mobileMenuLabel}>Menu</summary>
            <nav aria-label={navigationLabel}>
              {links.map(([label, href]) => (
                <Link key={href} href={href}>
                  {label}
                </Link>
              ))}
              <a href={`mailto:${profile.email}`}>{labels.nav.contact}</a>
            </nav>
          </details>
        </div>
      </Container>
    </header>
  );
}
