import type { MetadataRoute } from "next";
import { languages, localePath } from "@/i18n/config";
import { projects } from "@/lib/content";
import { siteUrl } from "@/lib/seo";

function entry(
  language: "id" | "en",
  pathname: string,
  priority: number,
): MetadataRoute.Sitemap[number] {
  return {
    url: `${siteUrl}${localePath(language, pathname)}`,
    changeFrequency: "monthly",
    priority,
    alternates: {
      languages: {
        "id-ID": `${siteUrl}${localePath("id", pathname)}`,
        "en-US": `${siteUrl}${localePath("en", pathname)}`,
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return languages.flatMap((language) => [
    entry(language, "", 1),
    entry(language, "/projects", 0.9),
    entry(language, "/system-map", 0.82),
    entry(language, "/resume", 0.8),
    ...projects.map((project) =>
      entry(language, `/projects/${project.slug}`, project.featured ? 0.85 : 0.7),
    ),
  ]);
}
