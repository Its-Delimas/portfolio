"use client"

export default function Navbar(){
    return (
        <nav className="top-0 z-50 sticky flex flex-row items-center justify-between px-6 py-4 bg-background/80 backdrop-blur border-b border-gray-200">
            <a href="#" className="font-bold text-lg">
                Spencer Delimas
            </a>
            <div className="hidden md:flex gap-6 text-sm">
                <a href="#about" className="hover:text-accent">About</a>
                <a href="#skills" className="hover:text-accent">Skills</a>
                <a href="#project" className="hover:text-accent">Projects</a>
                <a href="#contact" className="hover:text-accent">Contacts</a>
            </div>
        </nav>
    )
}