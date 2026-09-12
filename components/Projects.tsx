import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-[80vh] flex items-center max-w-6xl mx-auto px-6 md:px-10 py-24"
    >
      <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16 w-full">
        <SectionHeading
          index="03"
          title="Projects"
          description="A couple of things I've built recently. Click one for the full story."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 min-w-0">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
