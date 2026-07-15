import Image from "next/image";

type Project = {
    title:string;
    description:string;
    tech:string[];
    image:string;
    github?:string;
    demo?:string;
    slug:string;
};

type ProjectCardProps = {
    project:Project;
};

export default function ProjectCard({project}:ProjectCardProps){
    return (
        <div className="border border-gray-200 rounded-lg p-6 flex flex-col gap-4">
            <div className="relative w-full aspect-video overflow-hidden rounded-md">
                { <Image src={"/vercelDp2.png"}/*src={project.image}*/ alt={project.title} fill className="object-cover"/> }
            </div>
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.tech.map((t)=>(
                    <span key={t} className="text-xs px-2 py-2 bg-green-900/30 rounded-full">
                        {t}
                    </span>
                ))}
            </div>
            <div className="flex gap-4 mt-auto">
                {project.github && (
                    <a href={project.github} target="_blank" className="text-sm font-medium hover:text-accent">
                        Github
                    </a>
                )}
                {project.demo && (
                    <a href={project.demo} target="_blank" className="text-sm font-medium hover:text-accent">
                        Live Demo
                    </a>
                )}
            </div>
        </div>
    )
}