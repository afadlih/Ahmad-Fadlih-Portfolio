import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLanguage } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/portfolio/Container";
import { SystemMapExperience } from "@/components/portfolio/SystemMapExperience";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) return {};

  return pageMetadata(
    lang,
    "/system-map",
    "System Map | Ahmad Fadlih",
    lang === "id"
      ? "Peta sistem interaktif yang menghubungkan otomasi, IoT, validasi, dan implementasi source code pada project Ahmad Fadlih."
      : "An interactive system map connecting automation, IoT, validation, and source-code implementation across Ahmad Fadlih's projects.",
  );
}

export default async function SystemMapPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();

  return (
    <main id="main-content" className="system-map-page">
      <section className="system-map-intro">
        <Container>
          <p>{lang === "id" ? "PETA SISTEM" : "SYSTEM MAP"}</p>
          <h1>
            {lang === "id"
              ? "Lihat bagaimana data bergerak dari input sampai hasil."
              : "See how data moves from input to outcome."}
          </h1>
          <span>
            {lang === "id"
              ? "Tiga peta ringkas menghubungkan otomasi, operasi IoT, validasi, dan jejak implementasi dari project utama."
              : "Three compact maps connect automation, IoT operations, validation, and implementation evidence from the main projects."}
          </span>
        </Container>
      </section>
      <Container className="system-map-container">
        <SystemMapExperience language={lang} />
      </Container>
    </main>
  );
}
