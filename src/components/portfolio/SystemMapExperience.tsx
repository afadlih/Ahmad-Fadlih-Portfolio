"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import type { Language } from "@/types/content";
import { localePath } from "@/i18n/config";
import { getProject } from "@/lib/content";
import { localizedStopText, systemMapStops } from "@/lib/system-map";
import { Badge } from "@/components/ui/badge";
import { buttonClassName } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const stopColors = {
  cobalt: "#315f9f",
  teal: "#557eaa",
  slate: "#7899bf",
} as const;

const kindLabels = {
  id: {
    input: "INPUT",
    service: "SERVICE",
    ai: "AI",
    data: "DATA",
    output: "OUTPUT",
    quality: "QUALITY",
  },
  en: {
    input: "INPUT",
    service: "SERVICE",
    ai: "AI",
    data: "DATA",
    output: "OUTPUT",
    quality: "QUALITY",
  },
} as const;

export function SystemMapExperience({ language }: { language: Language }) {
  const backLabel = language === "id" ? "Kembali" : "Back";
  const resumeLabel = language === "id" ? "Buka CV" : "Open resume";
  const caseLabel = language === "id" ? "Baca studi kasus" : "Read case study";
  const sourceLabel = language === "id" ? "Jejak implementasi" : "Implementation trail";
  const mapLabel = language === "id" ? "Peta alur sistem" : "System flow map";

  return (
    <Tabs defaultValue={systemMapStops[0].id} className="system-map-tabs">
      <div className="system-map-toolbar">
        <TabsList className="system-map-tab-list" aria-label={mapLabel}>
          {systemMapStops.map((stop, index) => (
            <TabsTrigger key={stop.id} value={stop.id} className="system-map-tab-trigger">
              <span>{String(index + 1).padStart(2, "0")}</span>
              {localizedStopText(stop.navLabel, language)}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="system-map-quick-actions">
          <Link className={buttonClassName({ variant: "ghost", size: "sm" })} href={localePath(language)}>
            ← {backLabel}
          </Link>
          <Link className={buttonClassName({ variant: "outline", size: "sm" })} href={localePath(language, "/resume")}>
            {resumeLabel}
          </Link>
        </div>
      </div>

      {systemMapStops.map((stop) => {
        const projects = stop.projects.map((slug) => getProject(slug)).filter(Boolean);
        const accent = stopColors[stop.color];
        const leadProject = projects[0];

        return (
          <TabsContent key={stop.id} value={stop.id} className="system-map-panel">
            <section
              className={`system-map-scene tone-${stop.color}`}
              style={{ "--system-accent": accent } as CSSProperties}
            >
              <div className="system-map-copy">
                <p>{localizedStopText(stop.eyebrow, language)}</p>
                <h1>{localizedStopText(stop.title, language)}</h1>
                <span>{localizedStopText(stop.body, language)}</span>

                <div className="system-map-project-badges" aria-label={language === "id" ? "Project terkait" : "Related projects"}>
                  {projects.map((project) =>
                    project ? (
                      <Badge key={project.slug} variant="outline">
                        {project.name}
                      </Badge>
                    ) : null,
                  )}
                </div>

                <div className="system-map-project-links">
                  {leadProject ? (
                    <Link
                      className={buttonClassName({ variant: "signal", size: "default" })}
                      href={localePath(language, `/projects/${leadProject.slug}`)}
                    >
                      {caseLabel}
                      <span aria-hidden="true">↗</span>
                    </Link>
                  ) : null}
                  <Link
                    className={buttonClassName({ variant: "outline", size: "default" })}
                    href={localePath(language, "/projects")}
                  >
                    {language === "id" ? "Semua project" : "All projects"}
                  </Link>
                </div>
              </div>

              <div className="system-map-board" aria-label={localizedStopText(stop.title, language)}>
                <header className="system-map-board-header">
                  <div>
                    <span>{mapLabel}</span>
                    <strong>{localizedStopText(stop.navLabel, language)}</strong>
                  </div>
                  <code>{stop.id.toUpperCase()} / 06 NODES</code>
                </header>

                <ol className="system-map-flow-list">
                  {stop.nodes.map((node, index) => (
                    <li key={`${stop.id}-${node.kind}-${index}`} className={`system-map-flow-card kind-${node.kind}`}>
                      <div className="system-map-flow-meta">
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <small>{kindLabels[language][node.kind]}</small>
                      </div>
                      <strong>{localizedStopText(node.label, language)}</strong>
                      <span className="system-map-flow-arrow" aria-hidden="true">
                        {index === stop.nodes.length - 1 ? "✓" : index === 2 ? "↓" : "→"}
                      </span>
                    </li>
                  ))}
                </ol>

                <aside className="system-map-source-panel">
                  <div>
                    <span>{sourceLabel}</span>
                    <strong>{language === "id" ? "File yang menjadi titik masuk pembahasan" : "Files used as discussion entry points"}</strong>
                  </div>
                  <ul>
                    {stop.sourcePaths.map((path) => (
                      <li key={path}>
                        <code>{path}</code>
                      </li>
                    ))}
                  </ul>
                </aside>
              </div>
            </section>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
