import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiNodedotjs,
    SiExpress,
    SiPostgresql,
    SiMongodb,
    SiPrisma,
    SiTailwindcss,
    SiGo,
    SiLinux,
} from "react-icons/si"
import { FaAws } from "react-icons/fa";

const skills = [
    {name:"Typescript", icon:SiTypescript},
    {name:"Next.js", icon:SiNextdotjs},
    {name:"Tailwind CSS", icon:SiTailwindcss},    
    {name:"Node.js", icon:SiNodedotjs},
    {name:"Express", icon:SiExpress},
    {name:"PostgreSQL",icon:SiPostgresql},
    {name:"MongoDB", icon:SiMongodb},
    {name:"AWS", icon:FaAws},    
    {name:"Go", icon:SiGo},
    {name:"Linux", icon:SiLinux},   
    // {name:"Docker", icon:SiDocker} 
];

export default function Skills (){
    return (
        <section id="skills" className="px-6 py-24 bg-green-900/50 m-16 rounded-md backdrop-blur border border-green-900">
            <h2 className="text-2xl flex justify-center items-center pb-6 font-bold mb-8">Skills</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8">
                {skills.map(({name,icon:Icon})=> (
                    <div key={name} className="flex flex-col items-center gap-2">
                        <Icon className="w-10 h-10" />
                        <span className="text-sm text-gray-600">{name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}