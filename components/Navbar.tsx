"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
          <span className="hidden sm:inline">Spencer Delimas</span>
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
            className="hidden md:inline-flex text-sm font-medium px-4 py-2 rounded-[var(--radius-sm)] border border-border hover:border-accent hover:text-accent active:scale-[0.96] transition-[color,border-color,transform]"
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
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-sm text-muted hover:text-foreground transition-colors"
                >
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
