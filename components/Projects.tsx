import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "xTicket",
    description: "A ticketing platform with QR code generation, role-based access control, and real-time event check-in.",
    tech: ["Next.js", "TypeScript", "JWT", "Pusher"],
    image: "/projects/placeholder.png",
    github: "https://github.com/yourusername/xticket",
    slug: "xticket",
  },
  {
    title: "ClientFlow",
    description: "A backend-focused client management system built with raw PostgreSQL, featuring ownership-chain authorization and structured error handling.",
    tech: ["Express", "TypeScript", "PostgreSQL", "Zod"],
    image: "/projects/placeholder.png",
    github: "https://github.com/yourusername/clientflow",
    slug: "clientflow",
  },
  {
    title: "This Portfolio",
    description: "A performance-focused personal site built with the Next.js App Router, demonstrating component architecture and modern styling practices.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/placeholder.png",
    slug: "portfolio",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}