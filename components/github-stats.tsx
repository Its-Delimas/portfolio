import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { getGithubStats, GITHUB_USER } from "@/lib/github";
import { cn, Eyebrow, WRAP } from "./ui";

/** GitHub's own colours for languages, so they're recognised at a glance. */
const LANGUAGE_COLOURS: Record<string, string> = {
  TypeScript: "#3178c6",
  Go: "#00add8",
  JavaScript: "#f1e05a",
  Python: "#3572a5",
  HTML: "#e34c26",
  CSS: "#663399",
  Shell: "#89e051",
};
const colour = (lang: string | null) => (lang && LANGUAGE_COLOURS[lang]) || "#a8a29e";

const ago = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
function since(d: Date): string {
  const days = Math.round((Date.now() - d.getTime()) / (24 * 60 * 60 * 1000));
  if (days < 1) return "today";
  if (days < 30) return ago.format(-days, "day");
  return ago.format(-Math.round(days / 30), "month");
}

/**
 * A strip of public GitHub activity, live from the GitHub API: how much is
 * public, how active lately, what it's written in, and what changed last.
 */
export async function GithubStats() {
  const s = await getGithubStats();
  if (!s) return null;
  const top = s.languages.slice(0, 5);

  return (
    <section id="github" className="border-t border-border py-16 lg:py-20">
      <div className={WRAP}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>On GitHub</Eyebrow>
            <h2 className="mt-3 font-brand text-4xl font-extrabold leading-none sm:text-5xl">Shipping, in the open.</h2>
          </div>
          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
          >
            <FaGithub className="h-4 w-4" /> github.com/{GITHUB_USER} <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-[minmax(0,1fr)] gap-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {[
              [String(s.publicRepos), "public repositories"],
              [`${s.pushes30d}${s.pushesCapped ? "+" : ""}`, "pushes in the last 30 days"],
              [String(s.since), "on GitHub since: joined in high school, between Biology lessons, before I knew what it was for"],
              [top[0]?.name ?? "–", "main language"],
            ].map(([v, l]) => (
              <div key={l} className="min-w-0 rounded-3xl border border-border bg-surface p-4 sm:p-5">
                <p className="truncate font-brand text-3xl font-extrabold leading-none tabular-nums sm:text-4xl">{v}</p>
                <p className="mt-2 text-sm leading-snug text-muted">{l}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-border bg-surface p-5 sm:p-6">
            <p className="text-sm font-semibold">Languages, by repository</p>
            <div className="mt-3 flex h-3 overflow-hidden rounded-full bg-fill" role="img" aria-label={top.map((l) => `${l.name} ${Math.round(l.share * 100)}%`).join(", ")}>
              {top.map((l) => (
                <span key={l.name} style={{ width: `${l.share * 100}%`, background: colour(l.name) }} className="h-full border-r-2 border-surface last:border-r-0" />
              ))}
            </div>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-sm">
              {top.map((l) => (
                <li key={l.name} className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: colour(l.name) }} />
                  {l.name} <span className="tabular-nums text-muted">{Math.round(l.share * 100)}%</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm font-semibold">Recently pushed</p>
            <ul className="mt-2 divide-y divide-border">
              {s.recent.map((r) => (
                <li key={r.name}>
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 py-2.5">
                    <span className="h-2.5 w-2.5 flex-none rounded-full" style={{ background: colour(r.language) }} />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-medium group-hover:underline">{r.name}</span>
                      {r.description ? <span className="block truncate text-xs text-muted">{r.description}</span> : null}
                    </span>
                    <span className={cn("flex-none text-xs text-muted")}>{since(r.pushedAt)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-4 text-xs text-subtle">
          Live from the GitHub API, refreshed every hour. Public repositories only; Grabbit’s code is private.
        </p>
      </div>
    </section>
  );
}
