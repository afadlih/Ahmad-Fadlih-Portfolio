import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { isLanguage, ui } from "@/i18n/config";
import { siteUrl } from "@/lib/seo";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { DocumentLanguageSync } from "@/components/portfolio/DocumentLanguageSync";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1522" },
  ],
  colorScheme: "light dark",
};

export function generateStaticParams() {
  return [{ lang: "id" }, { lang: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) return {};

  return {
    metadataBase: new URL(siteUrl),
    applicationName: "Ahmad Fadlih Portfolio",
    title: {
      default:
        lang === "id"
          ? "Ahmad Fadlih | Fullstack Developer"
          : "Ahmad Fadlih | Fullstack Developer",
      template: "%s",
    },
    authors: [{ name: "Ahmad Fadlih Wahyu Sardana" }],
    creator: "Ahmad Fadlih Wahyu Sardana",
    publisher: "Ahmad Fadlih Wahyu Sardana",
    category: "technology",
    keywords: [
      "Ahmad Fadlih",
      "Fullstack Developer",
      "Next.js Developer",
      "TypeScript Developer",
      "Workflow Automation",
      "Operational Dashboard",
      "IoT Dashboard",
      "Software Testing",
      "AI-assisted products",
    ],
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLanguage(lang)) {
    notFound();
  }


  return (
    <>
      <DocumentLanguageSync language={lang} />
      <a className="skip-link" href="#main-content">
        {ui[lang].skip}
      </a>
      <Navbar language={lang} />
      {children}
      <Footer language={lang} />
    </>
  );
}
