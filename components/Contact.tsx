"use client";

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Status = "idle" | "loading" | "success" | "error";

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

        <Reveal className="max-w-xl">
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

              {status === "success" && (
                <p className="text-sm text-emerald-400">
                  Thanks — your message is on its way. I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400">{errorMsg}</p>
              )}

              <div className="flex gap-4 justify-center pt-2">
                <a
                  href="https://github.com/Its-Delimas"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex items-center justify-center w-10 h-10 rounded-[var(--radius-sm)] border border-border text-muted hover:text-accent hover:border-accent transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center w-10 h-10 rounded-[var(--radius-sm)] border border-border text-muted hover:text-accent hover:border-accent transition-colors"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:spencerdelimas@gmail.com"
                  aria-label="Email"
                  className="flex items-center justify-center w-10 h-10 rounded-[var(--radius-sm)] border border-border text-muted hover:text-accent hover:border-accent transition-colors"
                >
                  <Mail className="w-4 h-4" strokeWidth={1.75} />
                </a>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
