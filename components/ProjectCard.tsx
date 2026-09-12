import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

type Project = {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  github?: string;
  demo?: string;
  slug: string;
  icon: LucideIcon;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col h-full rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden transition-all duration-300 hover:border-accent/50 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.35)]">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <span className="font-mono text-xs text-muted">{project.slug}</span>
        <span className="flex items-center justify-center w-7 h-7 rounded-[var(--radius-sm)] border border-border text-accent">
          <project.icon className="w-3.5 h-3.5" strokeWidth={1.75} />
        </span>
      </div>

      <div className="flex flex-col gap-3 p-6 flex-1">
        <h3 className="text-lg font-medium text-foreground">{project.title}</h3>
        <p className="text-sm text-muted leading-relaxed">{project.description}</p>

        <ul className="flex flex-col gap-1.5 mt-1">
          {project.highlights.map((h) => (
            <li key={h} className="text-xs text-muted flex items-start gap-2">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-1">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2 py-1 rounded-[var(--radius-sm)] border border-border text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-5 mt-auto pt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-accent transition-colors"
            >
              <FaGithub className="w-4 h-4" /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-accent transition-colors"
            >
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.75} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
