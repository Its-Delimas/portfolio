import { projects } from "@/lib/projects";
import ProjectFeature from "./ProjectFeature";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32">
      <div className="grid md:grid-cols-[240px_1fr] gap-6 md:gap-16 items-end mb-16 md:mb-24">
        <SectionHeading
          index="03"
          title="Projects"
          heading="Things I've shipped."
          sticky={false}
        />
        <p className="text-muted leading-relaxed max-w-xl md:justify-self-end">
          A native desktop app, an observability platform, and a commerce
          product — each built end to end, from the data model to the release.
          Open any of them for the full case study.
        </p>
      </div>

      <div className="flex flex-col gap-24 md:gap-32">
        {projects.map((project, i) => (
          <Reveal key={project.slug} className="min-w-0">
            <ProjectFeature project={project} index={i} total={projects.length} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
