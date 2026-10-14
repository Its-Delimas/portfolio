import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project, Shot } from "@/lib/projects";
import { buttonClass, Chip, cn, ProjectLinks, WRAP } from "./ui";

/** A laptop-sized screenshot in a plain browser frame. */
export function Browser({ shot, className, priority }: { shot: Shot; className?: string; priority?: boolean }) {
  return (
    <figure className={cn("overflow-hidden rounded-2xl border border-border bg-surface shadow-pop", className)}>
      <div aria-hidden className="flex h-7 items-center gap-1.5 border-b border-border bg-surface-2 px-3">
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
      </div>
      <Image
        src={shot.src}
        alt={shot.alt}
        width={shot.w}
        height={shot.h}
        sizes="(min-width: 1024px) 60vw, 100vw"
        quality={85}
        priority={priority}
        className="h-auto w-full"
      />
    </figure>
  );
}

/** A phone screenshot in a phone-shaped frame. */
export function Phone({ shot, className, priority }: { shot: Shot; className?: string; priority?: boolean }) {
  return (
    <figure className={cn("overflow-hidden rounded-[2rem] border-[6px] border-ink bg-ink shadow-pop", className)}>
      <Image
        src={shot.src}
        alt={shot.alt}
        width={shot.w}
        height={shot.h}
        sizes="(min-width: 1024px) 16rem, 70vw"
        quality={85}
        priority={priority}
        className="h-auto w-full rounded-[1.6rem]"
      />
    </figure>
  );
}

/**
 * One product on the home page: name, one line, three numbers, and the way in
 * to the full case study. Real screens beside it: the laptop view with the
 * phone over its corner, or on a phone, just the phone view, so it's readable.
 */
export function Showcase({ project, index, flip }: { project: Project; index: number; flip?: boolean }) {
  const [hero, ...rest] = project.shots;
  const phone = rest.find((s) => s.phone);

  return (
    <section id={project.slug} className="border-t border-border py-16 lg:py-24">
      <div
        className={cn(
          WRAP,
          "grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16",
          flip && "lg:[&>*:first-child]:order-2",
        )}
      >
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-brand text-sm font-bold text-subtle">0{index}</span>
            <Chip tone="brand">{project.role}</Chip>
          </div>
          <h2 className="mt-3 font-brand text-6xl font-extrabold leading-[0.9] sm:text-7xl xl:text-8xl">{project.name}</h2>
          <p className="mt-4 max-w-xl text-xl leading-snug sm:text-2xl">{project.pitch}</p>
          <p className="mt-3 flex items-center gap-2 text-sm font-medium text-muted">
            <span className="h-2 w-2 rounded-full bg-brand" />
            {project.status}
          </p>

          <dl className="mt-7 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-5">
            {project.facts.map((f) => (
              <div key={f.label}>
                <dd className="font-brand text-3xl font-extrabold leading-none tabular-nums">{f.value}</dd>
                <dt className="mt-1.5 text-xs leading-snug text-muted">{f.label}</dt>
              </div>
            ))}
          </dl>

          <div className="mt-7 flex flex-wrap gap-2">
            <Link href={`/projects/${project.slug}`} className={buttonClass("ink")}>
              Read the case study <ArrowRight className="h-4 w-4" />
            </Link>
            <ProjectLinks links={project.links.filter((l) => l.kind === "live")} />
          </div>
        </div>

        <div className="min-w-0">
          {/* phone: the phone screen alone, big enough to read */}
          {phone ? (
            <Phone shot={phone} priority={index === 1} className="mx-auto w-[68%] max-w-[18rem] lg:hidden" />
          ) : (
            <Browser shot={hero} className="lg:hidden" />
          )}
          {/* laptop: the laptop screen, with the phone over its corner */}
          <div className="relative hidden pb-10 lg:block">
            <Browser shot={hero} priority={index === 1} />
            {phone ? (
              <Phone
                shot={phone}
                className={cn("absolute -bottom-6 w-[28%] max-w-[15rem]", flip ? "-right-6" : "-left-8")}
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

/** A personal project, as a card: picture, name, one line, links. */
export function PersonalCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-card">
      <Link href={`/projects/${project.slug}`} className="block border-b border-border bg-surface-2 p-4 sm:p-6">
        <Image
          src={project.shots[0].src}
          alt={project.shots[0].alt}
          width={project.shots[0].w}
          height={project.shots[0].h}
          sizes="(min-width: 1024px) 45vw, 100vw"
          quality={85}
          className="h-auto w-full rounded-xl shadow-pop"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-2">
          <Chip>{project.role}</Chip>
          <span className="text-sm text-muted">{project.status}</span>
        </div>
        <h3 className="mt-3 font-brand text-4xl font-extrabold leading-none">{project.name}</h3>
        <p className="mt-2.5 text-lg leading-snug text-muted">{project.pitch}</p>
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
          <Link href={`/projects/${project.slug}`} className={buttonClass("ink")}>
            Read more <ArrowRight className="h-4 w-4" />
          </Link>
          <ProjectLinks links={project.links} />
        </div>
      </div>
    </article>
  );
}
