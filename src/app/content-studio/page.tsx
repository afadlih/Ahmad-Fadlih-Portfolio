import { notFound } from "next/navigation";
import { Container } from "@/components/portfolio/Container";
import { ContentStudio } from "@/components/studio/ContentStudio";

export default function ContentStudioPage() {
  const enabled =
    process.env.NODE_ENV !== "production" &&
    process.env.ENABLE_CONTENT_STUDIO === "true";

  if (!enabled) {
    notFound();
  }

  return (
    <main id="main-content" className="studio-page">
      <Container>
        <p className="section-eyebrow">Local content tool</p>
        <h1>Portfolio Content Studio</h1>
        <p className="studio-intro">
          Form lokal untuk membentuk draft organisasi, sertifikat, pengalaman,
          dan bukti project. Tool ini tidak mengunggah file dan tidak menulis
          repository secara otomatis.
        </p>
        <ContentStudio />
      </Container>
    </main>
  );
}
