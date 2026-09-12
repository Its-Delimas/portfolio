import CodeWindow from "./CodeWindow";
import NetworkGraph from "./illustrations/NetworkGraph";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center max-w-6xl mx-auto px-6 md:px-10 py-20 overflow-hidden">
      <NetworkGraph className="absolute inset-0 w-full h-full opacity-40 -z-10" />

      <div className="grid md:grid-cols-2 gap-14 items-center w-full">
        <Reveal>
          <p className="text-xs font-mono tracking-widest uppercase text-muted mb-5">
            Full Stack &amp; Cloud Engineer
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
            Building reliable systems, from{" "}
            <span className="text-accent">full-stack</span> apps to{" "}
            <span className="text-accent">cloud</span> infrastructure.
          </h1>

          <p className="mt-6 text-base md:text-lg text-muted max-w-lg leading-relaxed">
            Currently deep in cloud architecture and distributed systems.
            Always chasing the &ldquo;why&rdquo; behind the &ldquo;how&rdquo;.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-[var(--radius-sm)] bg-accent text-accent-foreground text-sm font-medium hover:bg-accent-strong active:scale-[0.97] transition-[background-color,transform]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-[var(--radius-sm)] border border-border text-foreground text-sm font-medium hover:border-accent hover:text-accent active:scale-[0.97] transition-[color,border-color,transform]"
            >
              Get in Touch
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <CodeWindow />
        </Reveal>
      </div>
    </section>
  );
}
