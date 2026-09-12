import { Download } from "lucide-react";
import GithubCharts from "./GithubCharts";
import LayerStack from "./illustrations/LayerStack";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const focusAreas = [
  "Cloud Architecture",
  "Distributed Systems",
  "Backend Engineering",
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-[80vh] flex items-center max-w-6xl mx-auto px-6 md:px-10 py-24"
    >
      <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16 w-full">
        <SectionHeading index="01" title="About" />

        <Reveal>
          <div className="grid md:grid-cols-[1fr_180px] gap-10 items-center">
            <div>
              <p className="text-muted leading-relaxed text-base md:text-lg">
                I&apos;m Spencer Delimas, a third-year Information Technology
                student at Dedan Kimathi University of Technology with a
                strong focus on real systems engineering and cloud
                infrastructure. I enjoy taking a system from idea to
                production — thinking through architecture, trade-offs, and
                the details that make software actually reliable and
                scalable.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="text-xs font-mono px-3 py-1.5 rounded-[var(--radius-sm)] border border-border text-muted"
                  >
                    {area}
                  </span>
                ))}
              </div>

              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 mt-7 px-5 py-2.5 rounded-[var(--radius-sm)] border border-border text-sm font-medium hover:border-accent hover:text-accent transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Download Resume
              </a>
            </div>

            <LayerStack className="hidden md:block w-full h-auto opacity-90" />
          </div>

          <div className="mt-14">
            <GithubCharts />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
