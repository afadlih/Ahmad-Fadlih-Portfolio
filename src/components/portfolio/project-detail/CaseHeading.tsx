export function CaseHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="case-heading">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <span>{description}</span> : null}
    </header>
  );
}
