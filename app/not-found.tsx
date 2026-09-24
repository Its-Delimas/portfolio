import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center max-w-6xl mx-auto px-6 md:px-10 py-24">
      <div className="w-full max-w-xl">
        <div className="rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden font-mono text-[13px] leading-6">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-hover">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-xs text-muted">~/portfolio — bash</span>
          </div>
          <div className="px-5 py-4">
            <p>
              <span className="text-accent">spencer</span>
              <span className="text-muted">@portfolio ~ $ </span>
              <span className="text-foreground">cd ./this-page</span>
            </p>
            <p className="text-muted">bash: cd: ./this-page: No such file or directory</p>
            <p>
              <span className="text-accent">spencer</span>
              <span className="text-muted">@portfolio ~ $ </span>
              <span className="cursor-blink text-accent">▍</span>
            </p>
          </div>
        </div>

        <h1 className="mt-10 text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
          404 — nothing here.
        </h1>
        <p className="mt-3 text-muted leading-relaxed">
          The page you&apos;re after doesn&apos;t exist, or it moved.
        </p>
        <Link
          href="/"
          className="group mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius-sm)] border border-border text-sm font-medium hover:border-accent hover:text-accent active:scale-[0.97] transition-[color,border-color,transform]"
        >
          <ArrowLeft
            className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5"
            strokeWidth={1.75}
          />
          Back home
        </Link>
      </div>
    </section>
  );
}
