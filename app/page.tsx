import Image from "next/image";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personal, products } from "@/lib/projects";
import { PersonalCard, Showcase } from "@/components/showcase";
import { buttonClass, Chip, cn, EMAIL, Eyebrow, Footer, GITHUB, LINKEDIN, Nav, WRAP } from "@/components/ui";

/** The hero's wall: real screens from the real products. */
const WALL = [
  ["/projects/grabbit/landing.jpg", 2880, 1800],
  ["/projects/nurulabs/dashboard.jpg", 2880, 1800],
  ["/projects/deck/dashboard.jpg", 1600, 868],
  ["/projects/grabbit/item-phone.jpg", 780, 1688],
  ["/projects/nurulabs/landing.jpg", 2880, 1800],
  ["/projects/grabbit/bills-crop.jpg", 1620, 1650],
  ["/projects/heimdall/flow.jpg", 1568, 706],
  ["/projects/grabbit/album-phone.jpg", 780, 1688],
  ["/projects/nurulabs/tracks.jpg", 2880, 1800],
] as const;

const HOW = [
  {
    title: "AI tools, used with judgement",
    body: "I build with AI coding assistants like Claude Code every day. They draft; I set the direction, read every change, and own what ships. It's how one person took Grabbit from an idea to live M‑Pesa payments, seller dashboards and an admin control room in about a month.",
  },
  {
    title: "Team habits, even working alone",
    body: "Branches, pull requests with written descriptions, automated checks before anything merges, and changes shown for review before they ship. The way a company's engineering team works, so I can slot into one.",
  },
  {
    title: "Careful where money moves",
    body: "Payments are confirmed twice before an order counts as paid, every callback is handled exactly once, and the rules that touch money are covered by automated tests that run on every change.",
  },
  {
    title: "Built for the people using it",
    body: "Every screen is checked on a phone and a laptop before it ships, and the words people read get the same care as the code. Most of Grabbit's sellers will only ever see it on a phone.",
  },
];

const EXPERIENCE = [
  {
    when: "Sep 2026 – now",
    what: "Founder & engineer",
    where: "Grabbit · Nairobi",
    body: "Started Grabbit and took it from an idea to a live product taking real M‑Pesa payments: the product, the design, all of the engineering, the payment partner integration with PayHero, pricing, and the terms sellers sign up to.",
  },
  {
    when: "Feb 2026 – now",
    what: "Creator & engineer",
    where: "NuruLabs",
    body: "Designed and built a free AI programme for African students: four tracks, 139 labs, and Python that runs in the browser so any laptop will do.",
  },
  {
    when: "2026",
    what: "Personal projects",
    where: "deck · Heimdall",
    body: "A native developer tool released for three operating systems, and a live request-tracing platform for microservices with an MCP server for AI agents.",
  },
  {
    when: "Jul 2024 – now",
    what: "BSc Information Technology",
    where: "Dedan Kimathi University of Technology",
    body: "Third year. Systems and networks, software engineering, databases. Expected to graduate late 2027 / early 2028.",
  },
];

const SKILLS: [string, string[]][] = [
  ["Product & frontend", ["TypeScript", "React", "Next.js", "Tailwind CSS", "Accessibility", "Installable web apps"]],
  ["Backend & data", ["Node.js", "Go", "PostgreSQL", "Prisma", "Drizzle", "Supabase", "REST & webhooks"]],
  ["Payments", ["M‑Pesa (STK push)", "PayHero API", "Idempotent callbacks", "Reconciliation & billing"]],
  ["Cloud & tooling", ["Vercel", "Neon", "Docker", "Linux", "GitHub Actions", "AWS"]],
  ["AI", ["Claude Code", "MCP servers", "Pyodide", "Python"]],
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero: who, in one line, over a wall of the real work */}
        <section className="relative overflow-hidden bg-ink text-ink-fg">
          <div aria-hidden className="absolute -right-24 -top-24 hidden w-[62rem] rotate-[7deg] grid-cols-3 gap-4 opacity-90 lg:grid xl:-right-10">
            {[0, 1, 2].map((col) => (
              <div key={col} className={cn("flex flex-col gap-4", col === 1 && "pt-24", col === 2 && "pt-10")}>
                {WALL.filter((_, i) => i % 3 === col).map(([src, w, h]) => (
                  <Image key={src} src={src} alt="" width={w} height={h} sizes="20rem" className="h-auto w-full rounded-2xl" />
                ))}
              </div>
            ))}
          </div>
          <div aria-hidden className="absolute inset-0 hidden bg-gradient-to-r from-ink from-35% via-ink/85 via-55% to-ink/20 lg:block" />

          <div className={cn(WRAP, "relative py-20 sm:py-28 lg:py-36")}>
            <div className="max-w-3xl">
              <a
                href="https://grabbit.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-bold text-accent-ink"
              >
                Founder of Grabbit <ArrowUpRight className="h-4 w-4" />
              </a>
              <h1 className="mt-6 font-brand text-[3.5rem] font-extrabold leading-[0.88] sm:text-8xl xl:text-[8.5rem]">
                Spencer
                <br />
                Delimas<span className="text-brand-bright">.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-snug text-ink-fg/90 sm:text-2xl">
                Software engineer in Nairobi. I build whole products, from the payment rails to the screens people
                use. Right now that’s <span className="font-semibold text-white">Grabbit</span>, which puts an
                M‑Pesa checkout behind anything a seller posts.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#work" className={buttonClass("primary", "lg")}>
                  See the work <ArrowDown className="h-4 w-4" />
                </a>
                <a href={`mailto:${EMAIL}`} className={buttonClass("ghost-ink", "lg")}>
                  <Mail className="h-4 w-4" /> Email me
                </a>
              </div>
            </div>

            <dl className="mt-16 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-6 border-t border-ink-line pt-8 sm:grid-cols-4">
              {[
                ["Live", "Grabbit, taking real M‑Pesa payments"],
                ["139", "hands-on labs on NuruLabs"],
                ["3", "operating systems deck ships for"],
                ["140+", "automated tests guarding Grabbit’s payments"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dd className="font-brand text-4xl font-extrabold leading-none text-white sm:text-5xl">{v}</dd>
                  <dt className="mt-2 text-sm leading-snug text-ink-muted">{l}</dt>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Work */}
        <div id="work" className="scroll-mt-16">
          <div className={cn(WRAP, "pb-4 pt-20 lg:pt-28")}>
            <Eyebrow>Work</Eyebrow>
            <h2 className="mt-3 max-w-4xl text-balance font-brand text-5xl font-extrabold leading-[0.95] sm:text-6xl">
              Two products people use, built end to end.
            </h2>
          </div>
          {products.map((p, i) => (
            <Showcase key={p.slug} project={p} index={i + 1} flip={i % 2 === 1} />
          ))}
        </div>

        {/* Personal projects */}
        <section id="personal" className="border-t border-border bg-surface-2 py-20 lg:py-28">
          <div className={WRAP}>
            <Eyebrow>Personal projects</Eyebrow>
            <h2 className="mt-3 max-w-4xl text-balance font-brand text-5xl font-extrabold leading-[0.95] sm:text-6xl">
              Built because I wanted the tool.
            </h2>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {personal.map((p) => (
                <PersonalCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>

        {/* How I work */}
        <section id="how" className="border-t border-border py-20 lg:py-28">
          <div className={cn(WRAP, "grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16")}>
            <div>
              <Eyebrow>How I work</Eyebrow>
              <h2 className="mt-3 text-balance font-brand text-5xl font-extrabold leading-[0.95] sm:text-6xl">
                Fast, and careful where it counts.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {HOW.map((h, i) => (
                <div key={h.title} className="rounded-3xl border border-border p-6 sm:p-7">
                  <span className="font-brand text-sm font-bold text-brand">0{i + 1}</span>
                  <h3 className="mt-2 font-brand text-2xl font-bold leading-tight">{h.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{h.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience and skills */}
        <section id="experience" className="border-t border-border bg-ink py-20 text-ink-fg lg:py-28">
          <div className={cn(WRAP, "grid gap-14 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-20")}>
            <div>
              <Eyebrow className="text-ink-muted">Experience</Eyebrow>
              <ol className="mt-8 space-y-10">
                {EXPERIENCE.map((e, i) => (
                  <li key={e.what} className="grid gap-2 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8">
                    <p className="text-sm font-medium text-ink-muted">{e.when}</p>
                    <div>
                      <h3 className="font-brand text-3xl font-bold leading-tight text-white">
                        {e.what}
                        {i === 0 ? (
                          <span className="ml-3 inline-block -translate-y-1 rounded-full bg-brand px-2.5 py-0.5 align-middle font-sans text-xs font-semibold text-brand-fg">
                            Current
                          </span>
                        ) : null}
                      </h3>
                      <p className="mt-0.5 font-semibold text-brand-bright">{e.where}</p>
                      <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink-muted">{e.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <Eyebrow className="text-ink-muted">Skills</Eyebrow>
              <div className="mt-8 space-y-7">
                {SKILLS.map(([group, items]) => (
                  <div key={group}>
                    <h3 className="text-sm font-semibold text-white">{group}</h3>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {items.map((s) => (
                        <span key={s} className="rounded-full border border-ink-line px-3 py-1 text-sm text-ink-fg/85">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact: the one amber block */}
        <section id="contact" className="bg-accent text-accent-ink">
          <div className={cn(WRAP, "grid items-end gap-10 py-20 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:py-28")}>
            <div>
              <Eyebrow className="text-accent-ink/70">Contact</Eyebrow>
              <h2 className="mt-3 text-balance font-brand text-5xl font-extrabold leading-[0.92] sm:text-7xl">
                Hiring, or building something? Let’s talk.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-snug text-accent-ink/80">
                Open to software engineering roles, in Nairobi or remote.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href={`mailto:${EMAIL}`} className={cn(buttonClass("ink", "lg"), "w-full justify-between px-6")}>
                <span className="flex items-center gap-2">
                  <Mail className="h-5 w-5" /> {EMAIL}
                </span>
                <ArrowUpRight className="h-5 w-5" />
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a href={GITHUB} target="_blank" rel="noopener noreferrer" className={cn(buttonClass("secondary", "lg"), "border-accent-ink/20 bg-white/40 hover:bg-white/60")}>
                  <FaGithub className="h-5 w-5" /> GitHub
                </a>
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={cn(buttonClass("secondary", "lg"), "border-accent-ink/20 bg-white/40 hover:bg-white/60")}>
                  <FaLinkedin className="h-5 w-5" /> LinkedIn
                </a>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                <Chip tone="ink">Nairobi, Kenya</Chip>
                <Chip tone="ink">Open to work</Chip>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
