import { ArrowUpRight, Download } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { ProjectLink } from "@/lib/projects";

export const EMAIL = "spencerdelimas@gmail.com";
export const GITHUB = "https://github.com/Its-Delimas";
export const LINKEDIN = "https://www.linkedin.com/in/spencer-delimas/";

/** The page's side gutters and width: wide, never a narrow column in the middle. */
export const WRAP = "mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-14";

export function cn(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-[background-color,border-color,transform] duration-150 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2";

export function buttonClass(variant: "primary" | "secondary" | "ghost-ink" | "ink" = "primary", size: "md" | "lg" = "md") {
  const v = {
    primary: "bg-brand text-brand-fg shadow-[var(--shadow-key)] hover:bg-brand-strong",
    secondary: "border border-border-strong bg-surface text-fg hover:border-fg/40",
    "ghost-ink": "border border-white/25 text-white hover:border-white/60",
    ink: "bg-ink text-ink-fg hover:bg-ink/85",
  }[variant];
  const s = size === "lg" ? "h-13 px-7 text-base" : "h-11 px-5 text-sm";
  return cn(base, v, s);
}

/** A project's outbound links, as buttons. */
export function ProjectLinks({ links, onInk }: { links: ProjectLink[]; onInk?: boolean }) {
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((l, i) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass(i === 0 && l.kind === "live" ? "primary" : onInk ? "ghost-ink" : "secondary")}
        >
          {l.kind === "github" ? <FaGithub className="h-4 w-4" /> : l.kind === "download" ? <Download className="h-4 w-4" /> : null}
          {l.label}
          {l.kind === "live" ? <ArrowUpRight className="h-4 w-4" /> : null}
        </a>
      ))}
    </div>
  );
}

/** Small uppercase label above a heading. */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("text-xs font-semibold uppercase tracking-[0.14em] text-subtle", className)}>{children}</p>
  );
}

export function Chip({ children, tone = "plain" }: { children: React.ReactNode; tone?: "plain" | "brand" | "ink" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        tone === "brand" ? "bg-brand-tint text-brand-strong" : tone === "ink" ? "bg-ink text-ink-fg" : "bg-fill text-muted",
      )}
    >
      {children}
    </span>
  );
}

export { Nav } from "./nav";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-muted">
      <div className={cn(WRAP, "flex flex-col gap-3 py-8 text-sm sm:flex-row sm:items-center sm:justify-between")}>
        <p>
          <span className="font-brand text-base font-bold text-white">Spencer Delimas</span> · Nairobi, Kenya
        </p>
        <div className="flex gap-5">
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
          <a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a>
        </div>
      </div>
    </footer>
  );
}
