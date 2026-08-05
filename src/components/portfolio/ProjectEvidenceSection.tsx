import Image from "next/image";
import type { Language, Project } from "@/types/content";
import { localize, ui } from "@/i18n/config";
import { evidenceStatusLabel } from "@/lib/presentation";

export function ProjectEvidenceSection({
  project,
  language,
}: {
  project: Project;
  language: Language;
}) {
  const labels = ui[language].detail;
  const slotLabel = language === "id" ? "Slot bukti" : "Evidence slot";
  const slotDescription =
    language === "id"
      ? "Tempat ini akan diisi screenshot, report, diagram sistem nyata, atau video demo setelah proses capture selesai."
      : "This space will hold a screenshot, report, real system diagram, or demo video after the capture process is complete.";

  return (
    <section id="evidence" className="case-section">
      <header className="case-heading">
        <p>{language === "id" ? "BUKTI" : "EVIDENCE"}</p>
        <h2>{labels.evidence}</h2>
        <span>
          {language === "id"
            ? "Tidak ada gambar simulasi yang diperlakukan sebagai bukti. Item yang belum selesai ditampilkan sebagai slot netral dengan checklist capture."
            : "No simulated image is treated as evidence. Incomplete items are shown as neutral slots with a capture checklist."}
        </span>
      </header>

      <div className="evidence-grid">
        {project.evidence.map((item) => {
          const canOpen =
            item.safeToPublish &&
            (item.status === "ready" || item.status === "verified") &&
            Boolean(item.src || item.href);

          return (
            <article key={item.id} className={`evidence-item status-${item.status}`}>
              {canOpen && item.src ? (
                <div className="evidence-media">
                  <Image
                    src={item.src}
                    alt={item.alt ? localize(item.alt, language) : ""}
                    fill
                    sizes="(min-width: 900px) 32vw, 100vw"
                  />
                </div>
              ) : (
                <div className="evidence-slot" aria-label={`${slotLabel}: ${localize(item.title, language)}`}>
                  <div className="evidence-slot-toolbar" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="evidence-slot-body">
                    <span>{slotLabel}</span>
                    <strong>{localize(item.title, language)}</strong>
                    <p>{slotDescription}</p>
                  </div>
                </div>
              )}

              <div className="evidence-copy">
                <div className="evidence-meta">
                  <span>{item.type}</span>
                  <span>{evidenceStatusLabel(language, item.status)}</span>
                </div>
                <h3>{localize(item.title, language)}</h3>
                <p>{localize(item.description, language)}</p>

                {canOpen ? (
                  <a href={item.href ?? item.src} target="_blank" rel="noreferrer">
                    {labels.evidenceReady} ↗
                  </a>
                ) : (
                  <small>{labels.evidencePlanned}</small>
                )}

                {!canOpen && item.captureGuide?.length ? (
                  <details className="capture-guide">
                    <summary>{language === "id" ? "Lihat checklist capture" : "View capture checklist"}</summary>
                    <ul>
                      {item.captureGuide.map((step) => (
                        <li key={step.id}>{localize(step, language)}</li>
                      ))}
                    </ul>
                  </details>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
