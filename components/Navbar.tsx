"use client";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        <a
          href="#"
          className="flex items-center gap-2 font-mono text-sm font-medium text-foreground"
        >
          <span className="flex items-center justify-center w-7 h-7 rounded-[8px] border border-border bg-surface text-xs">
            SD
          </span>
          Spencer Delimas
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="text-sm font-medium px-4 py-2 rounded-[var(--radius-sm)] border border-border hover:border-accent hover:text-accent transition-colors"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
