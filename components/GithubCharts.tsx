import { MoveHorizontal } from "lucide-react";

const GITHUB_USERNAME = "Its-Delimas";

const streakParams = (colors: {
  stroke: string;
  accent: string;
  label: string;
  num: string;
}) =>
  new URLSearchParams({
    user: GITHUB_USERNAME,
    hide_border: "true",
    background: "00000000",
    stroke: colors.stroke,
    ring: colors.accent,
    fire: colors.accent,
    currStreakLabel: colors.accent,
    sideLabels: colors.label,
    dates: colors.label,
    currStreakNum: colors.num,
    sideNums: colors.num,
  }).toString();

const dark = { stroke: "23262b", accent: "3b82f6", label: "8b929b", num: "f2f3f5" };
const light = { stroke: "e5e5e3", accent: "2563eb", label: "62666d", num: "14161a" };

export default function GithubCharts() {
  return (
    <div className="rounded-[var(--radius-md)] border border-border bg-surface p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xs font-mono uppercase tracking-wide text-muted">
          GitHub Activity
        </h3>
        <span className="sm:hidden inline-flex items-center gap-1 text-[11px] text-muted">
          <MoveHorizontal className="w-3 h-3" strokeWidth={1.75} />
          Scroll
        </span>
      </div>

      <div className="overflow-x-auto">
        <img
          src={`https://ghchart.rshah.org/${dark.accent}/${GITHUB_USERNAME}`}
          alt={`${GITHUB_USERNAME}'s GitHub contribution graph`}
          className="hidden dark:block min-w-[640px] w-full"
        />
        <img
          src={`https://ghchart.rshah.org/${light.accent}/${GITHUB_USERNAME}`}
          alt={`${GITHUB_USERNAME}'s GitHub contribution graph`}
          className="block dark:hidden min-w-[640px] w-full"
        />
      </div>

      <img
        src={`https://streak-stats.demolab.com/?${streakParams(dark)}`}
        alt="GitHub streak stats"
        className="hidden dark:block w-full mt-4"
      />
      <img
        src={`https://streak-stats.demolab.com/?${streakParams(light)}`}
        alt="GitHub streak stats"
        className="block dark:hidden w-full mt-4"
      />
    </div>
  );
}
