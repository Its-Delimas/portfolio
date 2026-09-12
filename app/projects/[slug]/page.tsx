import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { getProject, projects } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Spencer Delimas`,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 md:px-10 py-24">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-10"
      >
        <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.75} />
        All projects
      </Link>

      <div className="flex items-center gap-3 mb-5">
        <span className="flex items-center justify-center w-10 h-10 rounded-[var(--radius-sm)] border border-border text-accent">
          <project.icon className="w-4.5 h-4.5" strokeWidth={1.75} />
        </span>
        <span className="font-mono text-xs text-muted">{project.slug}</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
        {project.title}
      </h1>
      <p className="mt-3 text-lg text-muted leading-relaxed max-w-xl">
        {project.tagline}
      </p>

      <div className="flex flex-wrap gap-2 mt-6">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-mono px-3 py-1.5 rounded-[var(--radius-sm)] border border-border text-muted"
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-7 px-5 py-2.5 rounded-[var(--radius-sm)] border border-border text-sm font-medium hover:border-accent hover:text-accent transition-colors"
      >
        <FaGithub className="w-4 h-4" />
        View on GitHub
      </a>

      {project.screenshots.length > 0 && (
        <div className="mt-12 -mx-6 md:-mx-10 px-6 md:px-10">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:thin]">
            {project.screenshots.map((shot) => (
              <div
                key={shot.src}
                className="relative shrink-0 w-[78vw] sm:w-[420px] aspect-video rounded-[var(--radius-md)] border border-border overflow-hidden snap-start"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(min-width: 640px) 420px, 78vw"
                  className="object-cover object-top"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-14 pt-10 border-t border-border">
        <p className="text-base text-foreground leading-relaxed">{project.overview}</p>
      </div>

      <div className="mt-12 flex flex-col gap-12">
        {project.sections.map((section) => (
          <div key={section.heading}>
            <h2 className="text-sm font-mono text-accent mb-4">{section.heading}</h2>
            {section.body && (
              <p className="text-sm text-muted leading-relaxed max-w-2xl">{section.body}</p>
            )}
            {section.items && (
              <ul className="flex flex-col gap-4 mt-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="shrink-0 mt-0.5 font-mono text-xs text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-muted leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 pt-10 border-t border-border flex items-center justify-between flex-wrap gap-4">
        <p className="text-sm text-muted">Have a project in mind?</p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-strong transition-colors"
        >
          Get in touch <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.75} />
        </Link>
      </div>
    </article>
  );
}
