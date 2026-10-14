/**
 * Public GitHub activity, read from the GitHub REST API on the server and
 * cached for an hour. Without a token GitHub allows 60 calls an hour, plenty
 * for three calls an hour; set GITHUB_TOKEN to lift that. If GitHub can't be
 * reached the section simply doesn't show.
 */

export const GITHUB_USER = "Its-Delimas";

type Repo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  fork: boolean;
  pushed_at: string;
};

export type GithubStats = {
  publicRepos: number;
  since: number;
  pushes30d: number;
  /** True when GitHub's event feed ran out before 30 days, so pushes30d is a floor. */
  pushesCapped: boolean;
  languages: { name: string; repos: number; share: number }[];
  recent: { name: string; url: string; description: string | null; language: string | null; pushedAt: Date }[];
};

async function gh<T>(path: string): Promise<T> {
  const res = await fetch(`https://api.github.com${path}`, {
    headers: {
      Accept: "application/vnd.github+json",
      ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
    },
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`GitHub ${path}: ${res.status}`);
  return res.json() as Promise<T>;
}

export async function getGithubStats(): Promise<GithubStats | null> {
  try {
    const [user, repos, events] = await Promise.all([
      gh<{ public_repos: number; created_at: string }>(`/users/${GITHUB_USER}`),
      gh<Repo[]>(`/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`),
      gh<{ type: string; created_at: string }[]>(`/users/${GITHUB_USER}/events/public?per_page=100`),
    ]);

    const own = repos.filter((r) => !r.fork);
    const counts = new Map<string, number>();
    for (const r of own) if (r.language) counts.set(r.language, (counts.get(r.language) ?? 0) + 1);
    const withLang = [...counts.values()].reduce((a, b) => a + b, 0) || 1;
    const languages = [...counts.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([name, n]) => ({ name, repos: n, share: n / withLang }));

    const monthAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
    const pushes = events.filter((e) => e.type === "PushEvent" && new Date(e.created_at).getTime() >= monthAgo);
    const oldest = events.at(-1);
    const pushesCapped = events.length >= 100 && !!oldest && new Date(oldest.created_at).getTime() >= monthAgo;

    return {
      publicRepos: user.public_repos,
      since: new Date(user.created_at).getFullYear(),
      pushes30d: pushes.length,
      pushesCapped,
      languages,
      recent: own
        .filter((r) => r.name.toLowerCase() !== GITHUB_USER.toLowerCase())
        .slice(0, 4)
        .map((r) => ({ name: r.name, url: r.html_url, description: r.description, language: r.language, pushedAt: new Date(r.pushed_at) })),
    };
  } catch (err) {
    console.error("[github] stats unavailable", err);
    return null;
  }
}
