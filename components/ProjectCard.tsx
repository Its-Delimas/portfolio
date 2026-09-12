import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const cover = project.screenshots[0];

  return (
    <div className="group relative flex flex-col h-full rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden transition-all duration-300 hover:border-accent/50 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.35)]">
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`View ${project.title} case study`}
      />

      {cover && (
        <div className="relative aspect-[4/3] border-b border-border pointer-events-none overflow-hidden">
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      )}

      <div className="flex items-center justify-between px-5 py-4 border-b border-border pointer-events-none">
        <span className="font-mono text-xs text-muted">{project.slug}</span>
        <span className="flex items-center justify-center w-7 h-7 rounded-[var(--radius-sm)] border border-border text-accent">
          <project.icon className="w-3.5 h-3.5" strokeWidth={1.75} />
        </span>
      </div>

      <div className="flex flex-col gap-3 p-6 flex-1">
        <h3 className="text-lg font-medium text-foreground pointer-events-none">
          {project.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed pointer-events-none">
          {project.description}
        </p>

        <ul className="flex flex-col gap-1.5 mt-1 pointer-events-none">
          {project.highlights.map((h) => (
            <li key={h} className="text-xs text-muted flex items-start gap-2">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-1 pointer-events-none">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2 py-1 rounded-[var(--radius-sm)] border border-border text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5 mt-auto pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-20 inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-accent transition-colors"
          >
            <FaGithub className="w-4 h-4" /> Code
          </a>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent pointer-events-none ml-auto">
            Details <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.75} />
          </span>
        </div>
      </div>
    </div>
  );
}
