import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import LocalTime from "./LocalTime";

const socials = [
  { label: "GitHub", href: "https://github.com/Its-Delimas", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/spencer-delimas/", icon: FaLinkedin },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 grid gap-10 md:grid-cols-[1.4fr_1fr_auto] items-start">
        <div>
          <div className="flex items-center gap-2 font-mono text-sm font-medium text-foreground">
            <span className="flex items-center justify-center w-7 h-7 rounded-[8px] border border-border bg-surface text-xs">
              SD
            </span>
            Spencer Delimas
          </div>
          <p className="mt-4 text-sm text-muted leading-relaxed max-w-xs">
            Full-stack &amp; cloud engineer in Kenya, building reliable systems
            end to end.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-2">
              Local time
            </p>
            <LocalTime className="text-foreground" />
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-2">
              Elsewhere
            </p>
            <div className="flex flex-col gap-1.5">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </a>
              ))}
              <a
                href="mailto:spencerdelimas@gmail.com"
                className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors"
              >
                <Mail className="w-3.5 h-3.5" strokeWidth={1.75} />
                Email
              </a>
            </div>
          </div>
        </div>

        <a
          href="#"
          aria-label="Back to top"
          className="justify-self-start md:justify-self-end flex items-center justify-center w-10 h-10 rounded-[var(--radius-sm)] border border-border text-muted hover:text-accent hover:border-accent active:scale-90 transition-[color,border-color,transform]"
        >
          <ArrowUp className="w-4 h-4" strokeWidth={1.75} />
        </a>
      </div>

      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row justify-between gap-2 font-mono text-[11px] text-muted">
          <p>© {new Date().getFullYear()} Spencer Delimas</p>
          <p>Built with Next.js · Deployed on Vercel</p>
        </div>
      </div>
    </footer>
  );
}
