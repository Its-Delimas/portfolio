import { FaDownload } from "react-icons/fa";

export default function About (){
    return (
        <section id="about" className="px-6 py-24 w-full h-[600] flex flex-col justify-between items-center">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p className="text-gray-600 max-w-3xl leading-relaxed">
                Currently puursuing a Bachelor of Science in Information Technology at Dedan Kimathi University of Technology, 
                strong focus on real systems engineering and cloud infrastructure.
                 I enjoy the process of taking a system from idea to production — thinking through architecture,
                  trade-offs, and the details that make software actually reliable and scalable.
            </p>
            <a href="#projects" className="flex justify-between items-center gap-2 px-6 py-3 bg-accent text-white rounded-md font-medium mt-4">
                       <FaDownload/> Download CV
            </a>
        </section>
    )
}