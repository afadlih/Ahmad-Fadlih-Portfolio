import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <header className="section-header">
      <div>
        <p className="section-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      {action ? <div className="section-header-action">{action}</div> : null}
    </header>
  );
}
