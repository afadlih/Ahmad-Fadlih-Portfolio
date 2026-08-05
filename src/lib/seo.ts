import type { Metadata } from "next";
import type { Language, Project } from "@/types/content";
import { localePath, localize } from "@/i18n/config";
import { profile } from "@/lib/content";

const fallbackSiteUrl = "http://localhost:3000";

function normalizeSiteUrl(value: string) {
  try {
    const url = new URL(value);
    return url.toString().replace(/\/$/, "");
  } catch {
    return fallbackSiteUrl;
  }
}

export const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl,
);

const homeSeo = {
  id: {
    title: "Ahmad Fadlih | Full-Stack & AI Engineer",
    description:
      "Portfolio Ahmad Fadlih yang menjelaskan tantangan, alur pengguna, solusi, pengujian, dan bukti teknis dari project fullstack, otomasi, AI, dan IoT.",
  },
  en: {
    title: "Ahmad Fadlih | Full-Stack & AI Engineer",
    description:
      "Ahmad Fadlih's portfolio explaining challenges, user flows, solutions, testing, and technical proof across fullstack, automation, AI, and IoT projects.",
  },
} as const;

function absoluteUrl(pathname: string) {
  return new URL(pathname, `${siteUrl}/`).toString();
}

export function pageMetadata(
  language: Language,
  pathname = "",
  title?: string,
  description?: string,
): Metadata {
  const fallback = homeSeo[language];
  const finalTitle = title ?? fallback.title;
  const finalDescription = description ?? fallback.description;
  const canonicalPath = localePath(language, pathname);
  const canonical = absoluteUrl(canonicalPath);
  const ogImage = absoluteUrl("/og-image.png");

  return {
    title: { absolute: finalTitle },
    description: finalDescription,
    alternates: {
      canonical,
      languages: {
        "id-ID": absoluteUrl(localePath("id", pathname)),
        "en-US": absoluteUrl(localePath("en", pathname)),
        "x-default": absoluteUrl(localePath("id", pathname)),
      },
    },
    openGraph: {
      type: "website",
      locale: language === "id" ? "id_ID" : "en_US",
      alternateLocale: language === "id" ? ["en_US"] : ["id_ID"],
      url: canonical,
      siteName: "Ahmad Fadlih Portfolio",
      title: finalTitle,
      description: finalDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Ahmad Fadlih portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDescription,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function projectMetadata(language: Language, project: Project): Metadata {
  const suffix = language === "id" ? "Studi Kasus" : "Case Study";
  return pageMetadata(
    language,
    `/projects/${project.slug}`,
    `${project.name} | ${suffix} | Ahmad Fadlih`,
    localize(project.summary, language),
  );
}

export function personJsonLd(language: Language) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.shortName,
    url: absoluteUrl(localePath(language)),
    email: `mailto:${profile.email}`,
    sameAs: [profile.github, profile.linkedin, profile.instagram].filter(Boolean),
    jobTitle: "Informatics Engineering Student and Full-Stack & AI Engineer",
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Politeknik Negeri Malang",
    },
    knowsAbout: [
      "Full-stack development",
      "Workflow automation",
      "Operational dashboards",
      "Internet of Things",
      "Software testing",
      "AI-assisted products",
    ],
  };

  if (profile.photo) {
    data.image = absoluteUrl(profile.photo);
  }

  return data;
}

export function projectJsonLd(language: Language, project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.name,
    description: localize(project.summary, language),
    codeRepository:
      project.visibility === "public" && project.repository
        ? project.repository
        : undefined,
    programmingLanguage: project.stack,
    inLanguage: language === "id" ? "id-ID" : "en-US",
    author: {
      "@type": "Person",
      name: profile.name,
      url: absoluteUrl(localePath(language)),
    },
    url: absoluteUrl(localePath(language, `/projects/${project.slug}`)),
  };
}
