import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import { getNextProject, getProject, projects } from "@/lib/projects";

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
    title: `${project.title} — case study | Spencer Delimas`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — ${project.tagline}`,
      description: project.description,
      images: project.screenshots[0] ? [{ url: project.screenshots[0].src }] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = getNextProject(project.slug);
  const index = projects.findIndex((p) => p.slug === project.slug);

  const meta: [string, string][] = [
    ["Type", project.kind],
    ["Platform", project.platform],
    ["Status", project.status],
    ["Year", project.year],
    ["Stack", project.tech.join(" · ")],
  ];

  return (
    <article className="max-w-6xl mx-auto px-6 md:px-10 pt-16 pb-24">
      <Link
        href="/#projects"
        className="group inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-12"
      >
        <ArrowLeft
          className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5"
          strokeWidth={1.75}
        />
        All projects
      </Link>

      <header className="grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-16 items-start">
        <div className="min-w-0">
          <div className="flex items-center gap-3 font-mono text-xs mb-6">
            <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
            <span className="h-px w-6 bg-border" />
            <span className="uppercase tracking-widest text-muted">Case study</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.02] text-foreground">
            {project.title}
            <span className="text-accent">.</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-foreground/85 leading-snug max-w-2xl">
            {project.tagline}
          </p>
          <p className="mt-4 text-muted leading-relaxed max-w-2xl">{project.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  link.kind === "download"
                    ? "inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius-sm)] bg-accent text-accent-foreground text-sm font-medium hover:bg-accent-strong active:scale-[0.97] transition-[background-color,transform]"
                    : "inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius-sm)] border border-border text-sm font-medium hover:border-accent hover:text-accent active:scale-[0.97] transition-[color,border-color,transform]"
                }
              >
                {link.kind === "github" ? (
                  <FaGithub className="w-4 h-4" />
                ) : (
                  <Download className="w-4 h-4" strokeWidth={1.75} />
                )}
                {link.kind === "github" ? "View source" : link.label}
              </a>
            ))}
          </div>
        </div>

        <dl className="grid grid-cols-[auto_1fr] gap-x-6 text-sm border-t border-border lg:mt-12">
          {meta.map(([label, value]) => (
            <div key={label} className="contents">
              <dt className="py-3 border-b border-border font-mono text-[11px] uppercase tracking-widest text-muted">
                {label}
              </dt>
              <dd className="py-3 border-b border-border text-foreground/90">{value}</dd>
            </div>
          ))}
        </dl>
      </header>

      {project.screenshots.length > 0 && (
        <div className="mt-16 -mx-6 md:-mx-10 px-6 md:px-10">
          <ScreenshotGallery screenshots={project.screenshots} />
        </div>
      )}

      <div className="mt-20 grid md:grid-cols-[240px_1fr] md:gap-x-16">
        <p className="font-mono text-xs uppercase tracking-widest text-muted md:pt-1.5">
          Overview
        </p>
        <p className="mt-3 md:mt-0 text-lg text-foreground/90 leading-relaxed max-w-2xl">
          {project.overview}
        </p>

        {project.sections.map((section) => (
          <div key={section.heading} className="contents">
            <h2 className="mt-12 pt-8 border-t border-border font-mono text-xs uppercase tracking-widest text-accent">
              {section.heading}
            </h2>
            <div className="mt-3 md:mt-12 md:pt-8 md:border-t md:border-border max-w-2xl">
              {section.body && <p className="text-muted leading-relaxed">{section.body}</p>}
              {section.items && (
                <ul className="flex flex-col gap-4">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="shrink-0 mt-0.5 font-mono text-xs text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-muted leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      <Link
        href={`/projects/${next.slug}`}
        className="group mt-24 flex items-end justify-between gap-6 border-t border-border pt-10"
      >
        <div className="min-w-0">
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-3">
            Next project
          </p>
          <p className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors">
            {next.title}
          </p>
          <p className="mt-2 text-muted truncate">{next.tagline}</p>
        </div>
        <span className="shrink-0 flex items-center justify-center w-12 h-12 rounded-[var(--radius-sm)] border border-border text-muted group-hover:border-accent group-hover:text-accent transition-colors">
          <ArrowRight
            className="w-5 h-5 transition-transform group-hover:translate-x-0.5"
            strokeWidth={1.75}
          />
        </span>
      </Link>

      <div className="mt-12 flex items-center justify-between flex-wrap gap-4 text-sm">
        <p className="text-muted">Have a project in mind?</p>
        <Link
          href="/#contact"
          className="group inline-flex items-center gap-1.5 font-medium text-accent hover:text-accent-strong transition-colors"
        >
          Get in touch
          <ArrowUpRight
            className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.75}
          />
        </Link>
      </div>
    </article>
  );
}
