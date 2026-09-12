import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const items = [
  {
    period: "2026 — Present",
    title: "Building production-style projects",
    place: "Heimdall, Grabit & this portfolio",
    description:
      "Started shipping full end-to-end projects independently, applying architecture and cloud concepts beyond coursework.",
    details: [
      "Live observability & request tracing",
      "Domain-driven layered architecture",
      "Real-time features and deployment",
    ],
    current: true,
  },
  {
    period: "Jul 2024 — Present",
    title: "BSc Information Technology",
    place: "Dedan Kimathi University of Technology",
    description:
      "Currently in third year, expected to graduate late 2027 / early 2028.",
    details: [
      "Systems & networks",
      "Software engineering fundamentals",
      "Databases",
    ],
    current: false,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-[80vh] flex items-center max-w-6xl mx-auto px-6 md:px-10 py-24"
    >
      <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16 w-full">
        <SectionHeading
          index="04"
          title="Experience"
          description="Where I've been spending my time."
        />

        <div className="relative pl-8 min-w-0">
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-border" />
          <div className="flex flex-col gap-14">
            {items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="relative">
                  {item.current && (
                    <span className="absolute -left-8 top-1.5 w-[11px] h-[11px] rounded-full bg-accent opacity-60 animate-ping" />
                  )}
                  <span
                    className={`absolute -left-8 top-1.5 w-[11px] h-[11px] rounded-full border-2 ${
                      item.current
                        ? "bg-accent border-accent"
                        : "bg-background border-border"
                    }`}
                  />
                  <p className="text-xs font-mono text-muted mb-1.5">{item.period}</p>
                  <h3 className="text-base font-medium text-foreground">{item.title}</h3>
                  <p className="text-sm text-accent mb-2">{item.place}</p>
                  <p className="text-sm text-muted leading-relaxed max-w-2xl mb-4">
                    {item.description}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {item.details.map((d) => (
                      <li
                        key={d}
                        className="text-xs font-mono px-3 py-1.5 rounded-[var(--radius-sm)] border border-border text-muted"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
