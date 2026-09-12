"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-4 gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-sm font-medium text-foreground shrink-0"
        >
          <span className="flex items-center justify-center w-7 h-7 rounded-[8px] border border-border bg-surface text-xs">
            SD
          </span>
          Spencer Delimas
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative group py-1 hover:text-foreground transition-colors"
            >
              {link.label}
              <span className="absolute left-0 -bottom-0.5 h-px w-full bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <ThemeToggle />
          <Link
            href="/#contact"
            className="text-sm font-medium px-4 py-2 rounded-[var(--radius-sm)] border border-border hover:border-accent hover:text-accent active:scale-[0.96] transition-[color,border-color,transform]"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
