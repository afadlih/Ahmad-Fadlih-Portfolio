import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLanguage } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";
import { ResumePage } from "@/components/portfolio/ResumePage";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) return {};
  return pageMetadata(
    lang,
    "/resume",
    lang === "id" ? "CV Ahmad Fadlih" : "Ahmad Fadlih Resume",
    lang === "id" ? "CV terbaru Ahmad Fadlih dengan project, organisasi, dan sertifikasi." : "Ahmad Fadlih's latest resume with projects, leadership, and credentials.",
  );
}

export default async function ResumeRoute({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return <ResumePage language={lang} />;
}
