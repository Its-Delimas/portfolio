"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const pathname = usePathname();
  const onHome = pathname === "/";
  const current = onHome ? active : pathname.startsWith("/projects") ? "projects" : null;

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  useEffect(() => {
    if (!onHome) return;
    const sections = [...links.map((l) => l.id), "contact"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [onHome]);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <motion.div
        aria-hidden="true"
        className="absolute left-0 right-0 bottom-[-1px] h-px bg-accent origin-left"
        style={{ scaleX: progress }}
      />

      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-4 gap-4">
        <Link
          href="/"
          className="group flex items-center gap-2 font-mono text-sm font-medium text-foreground shrink-0"
        >
          <span className="flex items-center justify-center w-7 h-7 rounded-[8px] border border-border bg-surface text-xs transition-colors group-hover:border-accent group-hover:text-accent">
            SD
          </span>
          <span className="hidden sm:inline">Spencer Delimas</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm">
          {links.map((link) => {
            const isActive = current === link.id;
            return (
              <Link
                key={link.id}
                href={`/#${link.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`relative group py-1 transition-colors ${
                  isActive ? "text-foreground" : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-px w-full bg-accent origin-left transition-transform duration-200 ease-out ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <ThemeToggle />
          <Link
            href="/#contact"
            className={`hidden md:inline-flex text-sm font-medium px-4 py-2 rounded-[var(--radius-sm)] border active:scale-[0.96] transition-[color,border-color,transform] ${
              current === "contact"
                ? "border-accent text-accent"
                : "border-border hover:border-accent hover:text-accent"
            }`}
          >
            Contact
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-[var(--radius-sm)] border border-border text-muted hover:text-accent active:scale-90 transition-[color,border-color,transform]"
          >
            {open ? (
              <X className="w-4 h-4" strokeWidth={1.75} />
            ) : (
              <Menu className="w-4 h-4" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden border-t border-border bg-background overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {links.map((link, i) => (
                <Link
                  key={link.id}
                  href={`/#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-baseline gap-3 py-2.5 text-sm transition-colors ${
                    current === link.id ? "text-foreground" : "text-muted hover:text-foreground"
                  }`}
                >
                  <span className="font-mono text-[11px] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-2 text-center py-2.5 rounded-[var(--radius-sm)] border border-border text-sm font-medium hover:border-accent hover:text-accent transition-colors"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
