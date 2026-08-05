import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLanguage } from "@/i18n/config";
import { pageMetadata, personJsonLd } from "@/lib/seo";
import { HomeHero } from "@/components/portfolio/HomeHero";
import { SelectedWork } from "@/components/portfolio/SelectedWork";
import { Approach } from "@/components/portfolio/Approach";
import { PortfolioHub } from "@/components/portfolio/PortfolioHub";
import { Contact } from "@/components/portfolio/Contact";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) return {};
  return pageMetadata(lang);
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLanguage(lang)) {
    notFound();
  }

  const jsonLd = personJsonLd(lang);

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeHero language={lang} />
      <SelectedWork language={lang} />
      <Approach language={lang} />
      <PortfolioHub language={lang} />
      <Contact language={lang} />
    </main>
  );
}
