import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiGo,
  SiWails,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiLinux,
  SiGithubactions,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const items = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "Go", icon: SiGo },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Wails", icon: SiWails },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Prisma", icon: SiPrisma },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Docker", icon: SiDocker },
  { name: "AWS", icon: FaAws },
  { name: "Linux", icon: SiLinux },
  { name: "GitHub Actions", icon: SiGithubactions },
  { name: "Tailwind CSS", icon: SiTailwindcss },
];

export default function TechMarquee() {
  return (
    <div className="marquee border-y border-border overflow-hidden" aria-label="Technologies I work with">
      <div className="marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
            {items.map(({ name, icon: Icon }) => (
              <li
                key={name}
                className="flex items-center gap-2.5 px-7 py-5 text-sm text-muted border-r border-border"
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">{name}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
