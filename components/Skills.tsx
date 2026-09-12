import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiTailwindcss,
  SiGo,
  SiLinux,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const groups = [
  {
    label: "Frontend",
    tagline: "Building fast, accessible interfaces.",
    skills: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    label: "Backend",
    tagline: "APIs and services that hold up under load.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Go", icon: SiGo },
      { name: "Prisma", icon: SiPrisma },
    ],
  },
  {
    label: "Data",
    tagline: "Modeling and querying data that matters.",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    label: "Cloud & Systems",
    tagline: "Infrastructure, deployment, and the machines underneath.",
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "Linux", icon: SiLinux },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-[80vh] flex items-center max-w-6xl mx-auto px-6 md:px-10 py-24"
    >
      <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16 w-full">
        <SectionHeading
          index="02"
          title="Skills"
          description="Tools and technologies I reach for, from the browser down to the infrastructure."
        />

        <div className="grid sm:grid-cols-2 gap-6 min-w-0">
          {groups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.08}>
              <div className="rounded-[var(--radius-md)] border border-border bg-surface p-6 h-full transition-colors hover:border-accent/40">
                <h3 className="text-xs font-mono uppercase tracking-wide text-muted mb-1.5">
                  {group.label}
                </h3>
                <p className="text-sm text-muted mb-5">{group.tagline}</p>
                <div className="grid grid-cols-2 gap-3">
                  {group.skills.map(({ name, icon: Icon }) => (
                    <div
                      key={name}
                      className="flex items-center gap-2.5 rounded-[var(--radius-sm)] border border-border px-3 py-2.5 text-sm"
                    >
                      <Icon className="w-4 h-4 shrink-0 text-accent" />
                      <span>{name}</span>
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
