import type {
  Language,
  ProjectVisibility,
  SourceCodePoint,
} from "@/types/content";

export function SourceCodeExcerpt({
  language,
  source,
  visibility,
}: {
  language: Language;
  source: SourceCodePoint;
  visibility: ProjectVisibility;
}) {
  if (!source.code) return null;

  const lines = source.code.replace(/^\n|\n$/g, "").split("\n");
  const lineStart = source.lineStart ?? 1;
  const openLabel =
    language === "id" ? "Buka file di GitHub" : "Open file on GitHub";
  const excerptLabel = language === "id" ? "Potongan kode" : "Code excerpt";
  const privateLabel =
    language === "id" ? "GitHub privat" : "Private GitHub";

  return (
    <div className="source-code-excerpt">
      <div className="source-code-excerpt__toolbar">
        <div>
          <span>{excerptLabel}</span>
          {visibility === "public" && source.linkAccess === "public" && source.href ? (
            <a
              href={source.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${openLabel}: ${source.path}`}
            >
              <code>{source.path}</code>
              <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <code>{source.path}</code>
          )}
        </div>
        <div className="source-code-excerpt__meta">
          {source.language ? <span>{source.language}</span> : null}
          {source.lineStart && source.lineEnd ? (
            <span>
              L{source.lineStart}-L{source.lineEnd}
            </span>
          ) : null}
          {visibility === "private" ? <span>{privateLabel}</span> : null}
        </div>
      </div>

      <div className="source-code-excerpt__viewport" tabIndex={0}>
        <ol>
          {lines.map((line, index) => (
            <li key={`${source.path}-${lineStart + index}`}>
              <span aria-hidden="true">{lineStart + index}</span>
              <code>{line || " "}</code>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
