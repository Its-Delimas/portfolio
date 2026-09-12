export default function SectionHeading({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="md:sticky md:top-28">
      <h2 className="text-sm font-mono text-accent mb-3">
        {index}. {title}
      </h2>
      {description && (
        <p className="text-muted leading-relaxed max-w-xs">{description}</p>
      )}
    </div>
  );
}
