import type { FeatureDeepDive, Language, ProjectVisibility } from "@/types/content";
import { localize, ui } from "@/i18n/config";
import { SourceCodeExcerpt } from "@/components/portfolio/SourceCodeExcerpt";

export function DeepDiveNavigator({
  items,
  language,
  visibility,
}: {
  items: FeatureDeepDive[];
  language: Language;
  visibility: ProjectVisibility;
}) {
  const labels = ui[language].detail;
  const sourceLabel =
    language === "id" ? "Titik implementasi" : "Implementation references";
  const verifiedLabel = language === "id" ? "Diverifikasi" : "Verified";
  const privateLabel =
    language === "id"
      ? "Repository privat, tautan file tidak dipublikasikan"
      : "Private repository, file link is not published";

  return (
    <div className="deep-dive-shell">
      {items.map((item, index) => (
        <details key={item.id} className="deep-dive-item" open={index === 0}>
          <summary>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <strong>{localize(item.title, language)}</strong>
              <small>{localize(item.summary, language)}</small>
            </div>
            <b aria-hidden="true">+</b>
          </summary>

          <div className="deep-dive-content">
            <div className="deep-dive-lead-grid">
              <section>
                <small>{language === "id" ? "Kebutuhan pengguna" : "User need"}</small>
                <p>{localize(item.userNeed, language)}</p>
              </section>
              <section>
                <small>{language === "id" ? "Mengapa penting" : "Why it matters"}</small>
                <p>{localize(item.why, language)}</p>
              </section>
            </div>

            <section className="deep-dive-block">
              <h4>{labels.approach}</h4>
              <ol className="step-list">
                {item.approach.map((step, stepIndex) => (
                  <li key={step.id}>
                    <span>{String(stepIndex + 1).padStart(2, "0")}</span>
                    <p>{localize(step, language)}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="deep-dive-block">
              <h4>{labels.journey}</h4>
              <div className="iteration-grid">
                <article>
                  <small>{labels.first}</small>
                  <p>{localize(item.journey.firstAttempt, language)}</p>
                </article>
                <article>
                  <small>{labels.limitation}</small>
                  <p>{localize(item.journey.limitation, language)}</p>
                </article>
                <article>
                  <small>{labels.iteration}</small>
                  <p>{localize(item.journey.iteration, language)}</p>
                </article>
              </div>
            </section>

            <section className="deep-dive-block">
              <h4>{labels.decisions}</h4>
              <div className="decision-grid">
                {item.technicalDecisions.map((decision, decisionIndex) => (
                  <article key={`${item.id}-${decisionIndex}`}>
                    <header>
                      <span>{String(decisionIndex + 1).padStart(2, "0")}</span>
                      <strong>{localize(decision.decision, language)}</strong>
                    </header>
                    <dl>
                      <div>
                        <dt>{labels.reason}</dt>
                        <dd>{localize(decision.reason, language)}</dd>
                      </div>
                      <div>
                        <dt>{labels.tradeoff}</dt>
                        <dd>{localize(decision.tradeoff, language)}</dd>
                      </div>
                    </dl>
                  </article>
                ))}
              </div>
            </section>

            {item.sourcePoints?.length ? (
              <section className="deep-dive-block">
                <h4>{sourceLabel}</h4>
                <div className="source-point-grid">
                  {item.sourcePoints.map((source) => (
                    <article key={`${item.id}-${source.path}`} className="source-point-card">
                      <small>{sourceLabel}</small>
                      <strong>{localize(source.label, language)}</strong>
                      <p>{localize(source.note, language)}</p>
                      <div className="source-point-footer">
                        <span>
                          {verifiedLabel}: <time dateTime={source.verifiedAt}>{source.verifiedAt}</time>
                        </span>
                        {!source.href ? <span>{privateLabel}</span> : null}
                      </div>
                      <SourceCodeExcerpt
                        language={language}
                        source={source}
                        visibility={visibility}
                      />
                    </article>
                  ))}
                </div>
              </section>
            ) : null}

            <div className="validation-grid">
              <section>
                <h4>{labels.validation}</h4>
                <ul className="check-list">
                  {item.validation.map((entry) => (
                    <li key={entry.id}>{localize(entry, language)}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h4>{labels.result}</h4>
                <ul className="check-list check-list-positive">
                  {item.outcomes.map((entry) => (
                    <li key={entry.id}>{localize(entry, language)}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
