export default function SectionHeading({
  index,
  title,
  heading,
  description,
  sticky = true,
}: {
  index: string;
  title: string;
  heading: string;
  description?: string;
  sticky?: boolean;
}) {
  return (
    <div className={sticky ? "md:sticky md:top-28 self-start" : undefined}>
      <div className="flex items-center gap-3 mb-4 font-mono text-xs">
        <span className="text-accent">{index}</span>
        <span className="h-px w-6 bg-border" />
        <span className="uppercase tracking-widest text-muted">{title}</span>
      </div>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight text-foreground">
        {heading}
      </h2>
      {description && (
        <p className="mt-3 text-muted leading-relaxed max-w-sm">{description}</p>
      )}
    </div>
  );
}
