import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import type { Project } from "@/lib/projects";

export default function ProjectFeature({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const cover = project.screenshots[0];
  const flipped = index % 2 === 1;
  const href = `/projects/${project.slug}`;

  return (
    <article className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      <Link
        href={href}
        aria-label={`${project.title} case study`}
        className={`group block lg:col-span-7 min-w-0 ${flipped ? "lg:order-2" : ""}`}
      >
        <div className="rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden transition-[border-color,box-shadow,transform] duration-300 group-hover:border-accent/50 group-hover:-translate-y-1 group-hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45)]">
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-surface-hover">
            <span className="w-2 h-2 rounded-full bg-border" />
            <span className="w-2 h-2 rounded-full bg-border" />
            <span className="w-2 h-2 rounded-full bg-border" />
            <span className="ml-2 font-mono text-[11px] text-muted truncate">
              {project.slug} — {project.kind.toLowerCase()}
            </span>
            <ArrowUpRight
              className="ml-auto w-3.5 h-3.5 text-muted transition-[color,transform] duration-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.75}
            />
          </div>
          {cover && (
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={cover.src}
                alt={cover.alt}
                fill
                sizes="(min-width: 1024px) 640px, 100vw"
                className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
            </div>
          )}
        </div>
      </Link>

      <div className={`lg:col-span-5 min-w-0 ${flipped ? "lg:order-1" : ""}`}>
        <div className="flex items-center gap-3 font-mono text-xs mb-5">
          <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
          <span className="text-muted/60">/ {String(total).padStart(2, "0")}</span>
          <span className="h-px flex-1 bg-border" />
          <span className="text-muted uppercase tracking-widest">{project.kind}</span>
        </div>

        <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
          <Link href={href} className="hover:text-accent transition-colors">
            {project.title}
          </Link>
        </h3>
        <p className="mt-3 text-foreground/85 leading-snug">{project.tagline}</p>
        <p className="mt-4 text-sm text-muted leading-relaxed">{project.description}</p>

        <ul className="mt-5 flex flex-col gap-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-sm text-muted">
              <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        <dl className="mt-7 grid grid-cols-[auto_1fr] gap-x-6 text-sm border-t border-border">
          {[
            ["Platform", project.platform],
            ["Status", project.status],
            ["Stack", project.tech.join(" · ")],
          ].map(([label, value]) => (
            <div key={label} className="contents">
              <dt className="py-2.5 border-b border-border font-mono text-[11px] uppercase tracking-widest text-muted">
                {label}
              </dt>
              <dd className="py-2.5 border-b border-border text-foreground/90">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href={href}
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent"
          >
            Read case study
            <ArrowUpRight
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.75}
            />
          </Link>
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-accent transition-colors"
            >
              {link.kind === "github" ? (
                <FaGithub className="w-4 h-4" />
              ) : (
                <Download className="w-3.5 h-3.5" strokeWidth={1.75} />
              )}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
