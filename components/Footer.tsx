import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-6 md:px-10 py-8 text-sm">
        <p className="text-muted">
          © {new Date().getFullYear()} Spencer Delimas. All rights reserved.
        </p>
        <div className="flex gap-5 text-muted">
          <a
            href="https://github.com/Its-Delimas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-accent transition-colors"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/spencer-delimas/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-accent transition-colors"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:spencerdelimas@gmail.com"
            aria-label="Email"
            className="hover:text-accent transition-colors"
          >
            <Mail className="w-4 h-4" strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </footer>
  );
}
