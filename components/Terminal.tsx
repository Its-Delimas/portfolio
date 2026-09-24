"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { projects } from "@/lib/projects";
import { toggleTheme } from "@/lib/theme";

type Entry = { id: number; command: string; output: ReactNode };

const COMMANDS: { name: string; description: string }[] = [
  { name: "whoami", description: "who you're talking to" },
  { name: "projects", description: "things I've shipped" },
  { name: "open", description: "open a case study — open deck" },
  { name: "stack", description: "tools I reach for" },
  { name: "contact", description: "ways to reach me" },
  { name: "resume", description: "open my resume" },
  { name: "theme", description: "toggle light / dark" },
  { name: "clear", description: "clear the screen" },
];

const QUICK = ["help", "projects", "stack", "contact"];

const STACK: [string, string][] = [
  ["frontend", "TypeScript · React · Next.js · Tailwind"],
  ["backend", "Node.js · Express · Go · Wails"],
  ["data", "PostgreSQL · MongoDB · Prisma · Drizzle"],
  ["systems", "AWS · Docker · Linux · GitHub Actions"],
];

const linkClass = "text-accent underline underline-offset-2 decoration-accent/40 hover:decoration-accent";

function execute(command: string, openProject: (slug: string) => void): ReactNode {
  const [rawName, ...args] = command.split(/\s+/);
  const name = rawName.toLowerCase();

  switch (name) {
    case "":
      return null;
    case "help":
      return (
        <div className="grid grid-cols-[auto_1fr] gap-x-4">
          {COMMANDS.map((c) => (
            <div key={c.name} className="contents">
              <span className="text-accent">{c.name}</span>
              <span className="text-muted">{c.description}</span>
            </div>
          ))}
        </div>
      );
    case "whoami":
      return (
        <div>
          <p className="text-foreground">Spencer Delimas — full-stack &amp; cloud engineer.</p>
          <p className="text-muted">
            Year 3, Bachelor of Science in Information Technology — Dedan Kimathi University of
            Technology, Kenya.
          </p>
          <p className="text-muted">I build reliable systems, from web apps to the machines they run on.</p>
          <p className="text-muted mt-2">
            Type <span className="text-accent">help</span> to look around.
          </p>
        </div>
      );
    case "projects":
    case "ls":
      return (
        <div>
          <div className="grid grid-cols-[auto_1fr] gap-x-4">
            {projects.map((p) => (
              <div key={p.slug} className="contents">
                <Link href={`/projects/${p.slug}`} className={linkClass}>
                  {p.slug}/
                </Link>
                <span className="text-muted">{p.tagline}</span>
              </div>
            ))}
          </div>
          <p className="text-muted mt-2">
            Run <span className="text-accent">open &lt;name&gt;</span> for the full case study.
          </p>
        </div>
      );
    case "open":
    case "cd": {
      const slug = (args[0] ?? "").replace(/\/$/, "").toLowerCase();
      if (!slug) return <p className="text-muted">usage: open &lt;{projects.map((p) => p.slug).join(" | ")}&gt;</p>;
      const project = projects.find((p) => p.slug === slug);
      if (!project) return <p className="text-red-400">no such project: {slug}</p>;
      openProject(project.slug);
      return <p className="text-muted">opening {project.title}…</p>;
    }
    case "stack":
      return (
        <div className="grid grid-cols-[auto_1fr] gap-x-4">
          {STACK.map(([k, v]) => (
            <div key={k} className="contents">
              <span className="text-accent">{k}</span>
              <span className="text-muted">{v}</span>
            </div>
          ))}
        </div>
      );
    case "contact":
      return (
        <div className="grid grid-cols-[auto_1fr] gap-x-4">
          <span className="text-accent">email</span>
          <a href="mailto:spencerdelimas@gmail.com" className={linkClass}>spencerdelimas@gmail.com</a>
          <span className="text-accent">github</span>
          <a href="https://github.com/Its-Delimas" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Its-Delimas
          </a>
          <span className="text-accent">linkedin</span>
          <a href="https://www.linkedin.com/in/spencer-delimas/" target="_blank" rel="noopener noreferrer" className={linkClass}>
            spencer-delimas
          </a>
        </div>
      );
    case "resume":
      window.open("/resume.pdf", "_blank", "noopener");
      return <p className="text-muted">opening resume.pdf in a new tab…</p>;
    case "theme":
      toggleTheme();
      return <p className="text-muted">theme switched.</p>;
    case "date":
      return (
        <p className="text-muted">
          {new Date().toLocaleString("en-GB", { timeZone: "Africa/Nairobi", dateStyle: "full", timeStyle: "short" })} (EAT)
        </p>
      );
    case "sudo":
      return <p className="text-muted">permission denied — but nice try.</p>;
    case "exit":
      return <p className="text-muted">there&apos;s no leaving. try <span className="text-accent">contact</span> instead.</p>;
    default:
      return (
        <p className="text-muted">
          command not found: <span className="text-foreground">{rawName}</span> — try{" "}
          <span className="text-accent">help</span>
        </p>
      );
  }
}

function complete(value: string) {
  const parts = value.split(" ");
  if (parts.length === 1) {
    const matches = [...COMMANDS.map((c) => c.name), "help"].filter((c) => c.startsWith(parts[0]));
    if (matches.length === 1) return matches[0] + (matches[0] === "open" ? " " : "");
    return value;
  }
  if (parts[0] === "open" || parts[0] === "cd") {
    const matches = projects.map((p) => p.slug).filter((s) => s.startsWith(parts[1] ?? ""));
    if (matches.length === 1) return `${parts[0]} ${matches[0]}`;
  }
  return value;
}

function Prompt() {
  return (
    <span className="select-none shrink-0 mr-2">
      <span className="text-accent">spencer</span>
      <span className="text-muted">@portfolio ~ $</span>
    </span>
  );
}

export default function Terminal() {
  const router = useRouter();
  const [entries, setEntries] = useState<Entry[]>([]);
  const [input, setInput] = useState("");
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(0);
  const historyRef = useRef<string[]>([]);
  const historyIndexRef = useRef(-1);
  const introTimersRef = useRef<number[]>([]);

  const openProject = useCallback((slug: string) => router.push(`/projects/${slug}`), [router]);

  const run = useCallback(
    (raw: string) => {
      const command = raw.trim();
      if (command) historyRef.current.push(command);
      historyIndexRef.current = -1;
      setInput("");
      if (command === "clear") {
        setEntries([]);
        return;
      }
      const output = execute(command, openProject);
      const id = idRef.current++;
      setEntries((prev) => [...prev, { id, command, output }]);
    },
    [openProject]
  );

  const cancelIntro = () => {
    introTimersRef.current.forEach(clearTimeout);
    introTimersRef.current = [];
  };

  useEffect(() => {
    const intro = "whoami";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timers: number[] = [];
    if (reduce) {
      timers.push(window.setTimeout(() => run(intro), 0));
    } else {
      intro.split("").forEach((_, i) => {
        timers.push(window.setTimeout(() => setInput(intro.slice(0, i + 1)), 700 + i * 90));
      });
      timers.push(window.setTimeout(() => run(intro), 700 + intro.length * 90 + 300));
    }
    introTimersRef.current = timers;
    return () => timers.forEach(clearTimeout);
  }, [run]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [entries]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const history = historyRef.current;
    if (e.key === "Enter") {
      cancelIntro();
      run(input);
    } else if (e.key === "Tab") {
      e.preventDefault();
      setInput((v) => complete(v));
    } else if (e.key === "ArrowUp") {
      if (!history.length) return;
      e.preventDefault();
      const next = historyIndexRef.current === -1 ? history.length - 1 : Math.max(0, historyIndexRef.current - 1);
      historyIndexRef.current = next;
      setInput(history[next]);
    } else if (e.key === "ArrowDown") {
      if (historyIndexRef.current === -1) return;
      e.preventDefault();
      const next = historyIndexRef.current + 1;
      if (next >= history.length) {
        historyIndexRef.current = -1;
        setInput("");
      } else {
        historyIndexRef.current = next;
        setInput(history[next]);
      }
    } else if (e.key.toLowerCase() === "l" && e.ctrlKey) {
      e.preventDefault();
      setEntries([]);
    }
  };

  const focusInput = () => {
    if (window.getSelection()?.toString()) return;
    inputRef.current?.focus({ preventScroll: true });
  };

  return (
    <div className="w-full rounded-[var(--radius-md)] border border-border bg-surface shadow-[0_24px_60px_-24px_rgba(0,0,0,0.35)] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-hover">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-muted font-mono">~/portfolio — bash</span>
        <span className="ml-auto hidden sm:inline text-[11px] font-mono text-muted">interactive</span>
      </div>

      <div
        ref={scrollRef}
        onClick={focusInput}
        className="h-[300px] sm:h-[340px] overflow-y-auto px-5 py-4 font-mono text-[13px] leading-6 cursor-text"
        aria-label="Interactive terminal"
      >
        <div aria-live="polite">
          {entries.map((entry) => (
            <div key={entry.id} className="mb-2">
              <div className="flex flex-wrap">
                <Prompt />
                <span className="text-foreground break-all">{entry.command}</span>
              </div>
              {entry.output && <div className="mt-0.5">{entry.output}</div>}
            </div>
          ))}
        </div>

        <div className="flex items-center">
          <Prompt />
          <div className="relative flex-1 min-w-0">
            {!focused && (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex items-center overflow-hidden whitespace-pre text-foreground text-[16px] sm:text-[13px]"
              >
                {input}
                <span className="cursor-blink text-accent">▍</span>
              </span>
            )}
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => {
                cancelIntro();
                setInput(e.target.value);
              }}
              onKeyDown={onKeyDown}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              aria-label="Terminal command"
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              className={`w-full bg-transparent outline-none caret-accent text-[16px] sm:text-[13px] ${
                focused ? "text-foreground" : "text-transparent"
              }`}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 px-4 py-3 border-t border-border">
        <span className="text-[11px] font-mono text-muted mr-1">try</span>
        {QUICK.map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => {
              cancelIntro();
              run(cmd);
            }}
            className="font-mono text-xs px-2.5 py-1 rounded-[var(--radius-sm)] border border-border text-muted hover:text-accent hover:border-accent active:scale-95 transition-[color,border-color,transform]"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
