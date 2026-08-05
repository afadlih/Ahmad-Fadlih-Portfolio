import Link from "next/link";
import type { CSSProperties } from "react";
import type { Language, Project } from "@/types/content";
import { localePath, localize, ui } from "@/i18n/config";
import { Badge } from "@/components/ui/badge";
import { buttonClassName } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const accentByProject: Record<string, string> = {
  "internlog-ai": "#3568a8",
  aquasense: "#4778a8",
  formai: "#5a78a7",
};

export function FeaturedProjectCard({
  project,
  index,
  language,
}: {
  project: Project;
  index: number;
  language: Language;
}) {
  const labels = ui[language].featured;
  const style = {
    "--project-accent": accentByProject[project.slug] ?? "#3568a8",
  } as CSSProperties;

  return (
    <article className="featured-project" style={style}>
      <Card className="featured-project__card">
        <CardHeader className="featured-project__header">
          <div className="featured-project__meta">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <Badge variant="outline">{localize(project.category, language)}</Badge>
          </div>
          <CardTitle>{project.name}</CardTitle>
          <p>{localize(project.summary, language)}</p>
        </CardHeader>

        <CardContent className="featured-project__body">
          <ul>
            {project.highlights.slice(0, 3).map((highlight) => (
              <li key={highlight.id}>{localize(highlight, language)}</li>
            ))}
          </ul>
        </CardContent>

        <CardFooter className="featured-project__footer">
          <div className="featured-project__stack" aria-label="Technology stack">
            {project.stack.slice(0, 4).map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <Link
            className={buttonClassName({ variant: "outline", size: "sm" })}
            href={localePath(language, `/projects/${project.slug}`)}
          >
            {labels.view} <span aria-hidden="true">→</span>
          </Link>
        </CardFooter>
      </Card>
    </article>
  );
}
