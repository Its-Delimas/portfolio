import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { getNextProject, getProject, projects } from "@/lib/projects";
import { Browser, Phone } from "@/components/showcase";
import { Chip, cn, Eyebrow, Footer, Nav, ProjectLinks, WRAP } from "@/components/ui";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProject((await params).slug);
  if (!p) return { title: "Not found" };
  return {
    title: `${p.name} · Spencer Delimas`,
    description: p.pitch,
    openGraph: { title: `${p.name} · Spencer Delimas`, description: p.pitch, images: [p.shots[0].src] },
  };
}

/** One project in full: the story, then every screen, large. */
export default async function ProjectPage({ params }: Props) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  const next = getNextProject(p.slug);
  const phones = p.shots.filter((s) => s.phone);
  const screens = p.shots.filter((s) => !s.phone);

  return (
    <>
      <Nav />
      <main>
        <section className="bg-ink text-ink-fg">
          <div className={cn(WRAP, "pb-16 pt-28 lg:pb-24 lg:pt-36")}>
            <Link href="/#work" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted hover:text-white">
              <ArrowLeft className="h-4 w-4" /> All work
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <Chip tone="brand">{p.role}</Chip>
              <span className="text-sm text-ink-muted">{p.status}</span>
            </div>
            <h1 className="mt-4 break-words font-brand text-6xl font-extrabold leading-[0.88] sm:text-8xl xl:text-9xl">{p.name}</h1>
            <p className="mt-6 max-w-3xl text-2xl leading-snug text-ink-fg/90">{p.pitch}</p>
            <div className="mt-8">
              <ProjectLinks links={p.links} onInk />
            </div>
          </div>
        </section>

        <section className={cn(WRAP, "py-16 lg:py-20")}>
          {p.notice ? (
            <div className="mb-12 flex flex-col gap-2 rounded-3xl bg-accent-tint p-5 sm:flex-row sm:items-start sm:gap-4 sm:p-6">
              <span className="w-fit flex-none rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-ink">Beta</span>
              <div>
                <p className="font-brand text-xl font-bold leading-tight">{p.notice.title}</p>
                <p className="mt-1 max-w-3xl text-[15px] leading-relaxed text-muted">{p.notice.body}</p>
              </div>
            </div>
          ) : null}
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-14">
            <div>
              <Eyebrow>The problem</Eyebrow>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{p.problem}</p>
              <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                {p.facts.map((f) => (
                  <div key={f.label}>
                    <dd className="font-brand text-3xl font-extrabold leading-none">{f.value}</dd>
                    <dt className="mt-1.5 text-xs text-muted">{f.label}</dt>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <Eyebrow>What I built</Eyebrow>
              <ul className="mt-3 space-y-3">
                {p.built.map((b) => (
                  <li key={b} className="flex gap-2.5 text-[15px] leading-relaxed text-muted">
                    <Check className="mt-1 h-4 w-4 flex-none text-brand" strokeWidth={3} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Eyebrow>What makes it work</Eyebrow>
              <ul className="mt-3 space-y-3">
                {p.hard.map((h) => (
                  <li key={h} className="border-l-2 border-brand pl-3 text-[15px] leading-relaxed text-muted">
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-surface-2 py-16 lg:py-20">
          <div className={cn(WRAP, "space-y-10")}>
            {phones.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-8">
                {phones.map((s) => (
                  <Phone key={s.src} shot={s} className="w-64" />
                ))}
              </div>
            ) : null}
            {screens.map((s, i) => (
              <Browser key={s.src} shot={s} priority={i === 0} />
            ))}
          </div>
        </section>

        <Link href={`/projects/${next.slug}`} className="group block border-t border-border">
          <div className={cn(WRAP, "flex items-center justify-between gap-6 py-12")}>
            <div>
              <Eyebrow>Next</Eyebrow>
              <p className="mt-2 font-brand text-5xl font-extrabold leading-none group-hover:text-brand">{next.name}</p>
              <p className="mt-2 text-muted">{next.pitch}</p>
            </div>
            <ArrowRight className="h-8 w-8 flex-none transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
      </main>
      <Footer />
    </>
  );
}
