"use client";

import { useMemo, useState } from "react";
import type { Language, Project } from "@/types/content";
import { localize, ui } from "@/i18n/config";
import { ProjectCard } from "@/components/portfolio/ProjectCard";

type Filter = "all" | "featured" | "full" | "public" | "private" | "final";

export function ProjectExplorer({
  language,
  projects,
}: {
  language: Language;
  projects: Project[];
}) {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const labels = ui[language].projectsPage;

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects
      .filter((project) => {
        const filterMatches =
          filter === "all" ||
          (filter === "featured" && project.featured) ||
          (filter === "full" && project.caseStudyDepth === "full") ||
          project.visibility === filter ||
          project.stage === filter;

        const searchText = [
          project.name,
          localize(project.category, language),
          localize(project.summary, language),
          localize(project.problem, language),
          ...project.stack,
        ]
          .join(" ")
          .toLowerCase();

        return filterMatches && searchText.includes(normalizedQuery);
      })
      .sort(
        (a, b) =>
          Number(b.featured) - Number(a.featured) ||
          (a.featuredRank ?? 99) - (b.featuredRank ?? 99) ||
          a.name.localeCompare(b.name),
      );
  }, [filter, language, projects, query]);

  const filters: [Filter, string][] = [
    ["all", labels.all],
    ["featured", labels.featured],
    ["full", labels.full],
    ["public", labels.public],
    ["private", labels.private],
    ["final", labels.final],
  ];

  return (
    <>
      <div className="project-controls">
        <div className="filter-row" aria-label={language === "id" ? "Filter project" : "Project filters"}>
          {filters.map(([value, label]) => (
            <button
              type="button"
              key={value}
              onClick={() => setFilter(value)}
              aria-pressed={filter === value}
            >
              {label}
            </button>
          ))}
        </div>
        <label className="project-search">
          <span className="sr-only">{labels.search}</span>
          <input
            type="search"
            value={query}
            placeholder={labels.search}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </div>

      <p className="project-result-count">
        {filtered.length} {labels.results}
      </p>

      {filtered.length > 0 ? (
        <div className="project-explorer-grid">
          {filtered.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              language={language}
              compact
            />
          ))}
        </div>
      ) : (
        <p className="empty-state">{labels.empty}</p>
      )}
    </>
  );
}
