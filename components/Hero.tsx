import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LocalTime from "./LocalTime";
import NetworkGraph from "./illustrations/NetworkGraph";
import Reveal from "./Reveal";
import Terminal from "./Terminal";

const meta = [
  { label: "Based in", value: "Kenya" },
  { label: "Local time", value: <LocalTime /> },
  { label: "Degree · year 3", value: "Bachelor of Science in Information Technology" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center max-w-6xl mx-auto px-6 md:px-10 py-20 overflow-hidden">
      <NetworkGraph className="absolute inset-0 w-full h-full opacity-20 -z-10" />

      <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-14 items-center w-full">
        <Reveal className="min-w-0">
          <Link
            href="/projects/deck"
            className="group inline-flex items-center gap-2.5 text-xs font-mono text-muted hover:text-foreground transition-colors mb-8"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-60 animate-ping" />
              <span className="relative w-2 h-2 rounded-full bg-emerald-500" />
            </span>
            Latest release — deck v0.1.0
            <ArrowRight
              className="w-3 h-3 transition-transform group-hover:translate-x-0.5"
              strokeWidth={1.75}
            />
          </Link>

          <h1 className="text-[3.25rem] sm:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] leading-[0.95] text-foreground">
            Spencer
            <br />
            Delimas<span className="text-accent">.</span>
          </h1>

          <p className="mt-7 text-lg md:text-xl text-foreground/85 max-w-md leading-snug">
            Full-stack &amp; cloud engineer building{" "}
            <span className="text-accent">reliable systems</span> — from web
            apps to the machines they run on.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius-sm)] bg-accent text-accent-foreground text-sm font-medium hover:bg-accent-strong active:scale-[0.97] transition-[background-color,transform]"
            >
              See my work
              <ArrowRight
                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                strokeWidth={1.75}
              />
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-[var(--radius-sm)] border border-border text-foreground text-sm font-medium hover:border-accent hover:text-accent active:scale-[0.97] transition-[color,border-color,transform]"
            >
              Get in touch
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-[auto_auto_1fr] gap-x-8 gap-y-4 max-w-lg border-t border-border pt-5">
            {meta.map((m) => (
              <div key={m.label} className="min-w-0">
                <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  {m.label}
                </dt>
                <dd className="mt-1.5 text-sm text-foreground">{m.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.15} className="min-w-0">
          <Terminal />
        </Reveal>
      </div>
    </section>
  );
}
