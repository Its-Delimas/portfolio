import { QrCode, Workflow, AppWindow } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "xTicket",
    description:
      "A ticketing platform with QR code generation, role-based access control, and real-time event check-in.",
    highlights: ["QR check-in flow", "Role-based access control", "Real-time updates via Pusher"],
    tech: ["Next.js", "TypeScript", "JWT", "Pusher"],
    github: "https://github.com/Its-Delimas/xticket",
    slug: "xticket",
    icon: QrCode,
  },
  {
    title: "ClientFlow",
    description:
      "A backend-focused client management system built with raw PostgreSQL, featuring ownership-chain authorization and structured error handling.",
    highlights: ["Raw PostgreSQL queries", "Ownership-chain authorization", "Structured error handling"],
    tech: ["Express", "TypeScript", "PostgreSQL", "Zod"],
    github: "https://github.com/Its-Delimas/clientflow",
    slug: "clientflow",
    icon: Workflow,
  },
  {
    title: "This Portfolio",
    description:
      "A performance-focused personal site built with the Next.js App Router, demonstrating component architecture and modern styling practices.",
    highlights: ["App Router + server components", "Live GitHub stats via API", "Resend-powered contact form"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Its-Delimas/portfolio",
    slug: "portfolio",
    icon: AppWindow,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-[80vh] flex items-center max-w-6xl mx-auto px-6 md:px-10 py-24"
    >
      <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16 w-full">
        <SectionHeading
          index="04"
          title="Projects"
          description="A few things I've built recently."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
