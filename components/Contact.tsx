"use client";

import { Mail, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Status = "idle" | "loading" | "success" | "error";

const links = [
  {
    label: "GitHub",
    value: "Its-Delimas",
    href: "https://github.com/Its-Delimas",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "spencer-delimas",
    href: "https://www.linkedin.com/in/spencer-delimas/",
    icon: FaLinkedin,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  useEffect(() => {
    if (status !== "success") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setStatus("idle");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [status]);

  return (
    <section
      id="contact"
      className="min-h-[80vh] flex items-center max-w-6xl mx-auto px-6 md:px-10 py-24"
    >
      <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16 w-full">
        <SectionHeading
          index="05"
          title="Contact"
          description="Have a project in mind or just want to connect? Send a message."
        />

        <Reveal>
          <div className="grid md:grid-cols-[240px_1fr] gap-8">
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wide text-muted mb-2">
                  Direct
                </h3>
                <a
                  href="mailto:spencerdelimas@gmail.com"
                  className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" strokeWidth={1.75} />
                  spencerdelimas@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-xs font-mono uppercase tracking-wide text-muted mb-3">
                  Elsewhere
                </h3>
                <div className="flex flex-col gap-2">
                  {links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-[var(--radius-sm)] border border-border px-3 py-2.5 text-sm text-muted hover:text-accent hover:border-accent/50 transition-colors"
                    >
                      <link.icon className="w-4 h-4 shrink-0" />
                      <span>
                        {link.label}
                        <span className="block text-xs text-muted/70">{link.value}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name / Organization
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="border border-border bg-background rounded-[var(--radius-sm)] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className="border border-border bg-background rounded-[var(--radius-sm)] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="border border-border bg-background rounded-[var(--radius-sm)] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-1 bg-accent text-accent-foreground rounded-[var(--radius-sm)] px-6 py-2.5 text-sm font-medium hover:bg-accent-strong transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>

                {status === "error" && (
                  <p className="text-sm text-red-400">{errorMsg}</p>
                )}
              </form>
            </div>
          </div>
        </Reveal>
      </div>

      {status === "success" && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4"
          onClick={() => setStatus("idle")}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-sm rounded-[var(--radius-lg)] border border-border bg-surface p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setStatus("idle")}
              aria-label="Close"
              className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-[var(--radius-sm)] text-muted hover:text-accent transition-colors"
            >
              <X className="w-4 h-4" strokeWidth={1.75} />
            </button>

            <div className="mx-auto flex items-center justify-center w-12 h-12 rounded-full border border-accent text-accent mb-5">
              <Mail className="w-5 h-5" strokeWidth={1.75} />
            </div>

            <h3 className="text-lg font-medium text-foreground mb-2">Message sent</h3>
            <p className="text-sm text-muted leading-relaxed">
              Thanks for reaching out — I&apos;ll get back to you soon.
            </p>

            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 w-full bg-accent text-accent-foreground rounded-[var(--radius-sm)] px-6 py-2.5 text-sm font-medium hover:bg-accent-strong transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
