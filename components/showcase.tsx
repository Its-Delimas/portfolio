import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Project, Shot } from "@/lib/projects";
import { Chip, cn, Eyebrow, ProjectLinks, WRAP } from "./ui";

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
export function Phone({ shot, className }: { shot: Shot; className?: string }) {
  return (
    <figure
      className={cn("overflow-hidden rounded-[2rem] border-[6px] border-ink bg-ink shadow-pop", className)}
    >
      <Image
        src={shot.src}
        alt={shot.alt}
        width={shot.w}
        height={shot.h}
        sizes="(min-width: 1024px) 16rem, 40vw"
        quality={85}
        className="h-auto w-full rounded-[1.6rem]"
      />
    </figure>
  );
}

/**
 * One product, the full width of the page: what it is and the proof on one
 * side, real screens on the other, then the problem, what was built and the
 * hard parts in three columns.
 */
export function Showcase({ project, index, flip }: { project: Project; index: number; flip?: boolean }) {
  const [hero, ...rest] = project.shots;
  const phone = rest.find((s) => s.phone);
  // the next two laptop-sized screens; other phone shots live on the project page
  const more = rest.filter((s) => !s.phone).slice(0, 2);

  return (
    <section id={project.slug} className="border-t border-border py-20 lg:py-28">
      <div className={WRAP}>
        <div className={cn("grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16", flip && "lg:[&>*:first-child]:order-2")}>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-brand text-sm font-bold text-subtle">0{index}</span>
              <Chip tone="brand">{project.role}</Chip>
              <Chip>{project.year}</Chip>
            </div>
            <h2 className="mt-4 font-brand text-6xl font-extrabold leading-[0.9] sm:text-7xl xl:text-8xl">{project.name}</h2>
            <p className="mt-5 max-w-xl text-xl leading-snug text-fg sm:text-2xl">{project.pitch}</p>
            <p className="mt-4 flex items-center gap-2 text-sm font-medium text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-brand opacity-60 motion-reduce:animate-none" />
                <span className="relative h-2 w-2 rounded-full bg-brand" />
              </span>
              {project.status}
            </p>

            <dl className="mt-8 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-6">
              {project.facts.map((f) => (
                <div key={f.label}>
                  <dt className="sr-only">{f.label}</dt>
                  <dd className="font-brand text-3xl font-extrabold leading-none tabular-nums sm:text-4xl">{f.value}</dd>
                  <p className="mt-1.5 text-xs leading-snug text-muted">{f.label}</p>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <ProjectLinks links={project.links} />
            </div>
          </div>

          {/* real screens: the laptop view, with the phone view over its corner */}
          <div className="relative min-w-0 pb-10 sm:pb-0">
            <Browser shot={hero} priority={index === 1} />
            {phone ? (
              <Phone
                shot={phone}
                className={cn(
                  "absolute -bottom-2 w-[30%] max-w-[15rem] sm:-bottom-10",
                  flip ? "-right-2 sm:-right-6" : "-left-2 sm:-left-8",
                )}
              />
            ) : null}
          </div>
        </div>

        <div className="mt-20 grid gap-10 border-t border-border pt-10 lg:grid-cols-3 lg:gap-14">
          <div>
            <Eyebrow>The problem</Eyebrow>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{project.problem}</p>
          </div>
          <div>
            <Eyebrow>What I built</Eyebrow>
            <ul className="mt-3 space-y-3">
              {project.built.map((b) => (
                <li key={b} className="flex gap-2.5 text-[15px] leading-relaxed text-muted">
                  <Check className="mt-1 h-4 w-4 flex-none text-brand" strokeWidth={3} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>The hard parts</Eyebrow>
            <ul className="mt-3 space-y-3">
              {project.hard.map((h) => (
                <li key={h} className="border-l-2 border-brand pl-3 text-[15px] leading-relaxed text-muted">
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
          <Link href={`/projects/${project.slug}`} className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold hover:underline">
            Every screen of {project.name} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {more.length > 0 ? (
          <div className="mt-8 grid items-start gap-6 sm:grid-cols-2">
            {more.map((s) => (
              <Browser key={s.src} shot={s} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

/** A personal project, as a card. */
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
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <Chip>{project.role}</Chip>
          <span className="text-sm text-muted">{project.status}</span>
        </div>
        <h3 className="mt-3 font-brand text-4xl font-extrabold leading-none">{project.name}</h3>
        <p className="mt-3 text-lg leading-snug">{project.pitch}</p>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{project.problem}</p>
        <ul className="mt-4 space-y-2">
          {project.hard.map((h) => (
            <li key={h} className="border-l-2 border-brand pl-3 text-sm leading-relaxed text-muted">
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
          <ProjectLinks links={project.links} />
          <Link href={`/projects/${project.slug}`} className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold hover:underline">
            More <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
