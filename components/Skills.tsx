import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiDrizzle,
  SiTailwindcss,
  SiGo,
  SiWails,
  SiLinux,
  SiDocker,
  SiGithubactions,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const groups = [
  {
    label: "Frontend",
    tagline: "Fast, accessible interfaces.",
    skills: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    label: "Backend & native",
    tagline: "Services, APIs, and desktop apps that hold up.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Go", icon: SiGo },
      { name: "Wails", icon: SiWails },
    ],
  },
  {
    label: "Data",
    tagline: "Modeling and querying data that matters.",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Prisma", icon: SiPrisma },
      { name: "Drizzle", icon: SiDrizzle },
    ],
  },
  {
    label: "Cloud & systems",
    tagline: "Infrastructure, delivery, and the machine underneath.",
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: SiDocker },
      { name: "Linux", icon: SiLinux },
      { name: "GitHub Actions", icon: SiGithubactions },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-[80vh] flex items-center max-w-6xl mx-auto px-6 md:px-10 py-24"
    >
      <div className="grid md:grid-cols-[240px_1fr] gap-10 md:gap-16 w-full">
        <SectionHeading
          index="02"
          title="Skills"
          heading="From the browser down to /proc."
          description="The tools I reach for across the whole stack."
        />

        <div className="grid sm:grid-cols-2 gap-6 min-w-0">
          {groups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.08}>
              <div className="group rounded-[var(--radius-md)] border border-border bg-surface p-6 h-full transition-colors hover:border-accent/40">
                <div className="flex items-baseline justify-between mb-1.5">
                  <h3 className="text-xs font-mono uppercase tracking-wide text-muted">
                    {group.label}
                  </h3>
                  <span className="font-mono text-[11px] text-muted/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-sm text-muted mb-5">{group.tagline}</p>
                <div className="grid grid-cols-2 gap-3">
                  {group.skills.map(({ name, icon: Icon }) => (
                    <div
                      key={name}
                      className="flex items-center gap-2.5 rounded-[var(--radius-sm)] border border-border px-3 py-2.5 text-sm min-w-0 transition-colors hover:border-accent/40"
                    >
                      <Icon className="w-4 h-4 shrink-0 text-accent" />
                      <span className="truncate">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
