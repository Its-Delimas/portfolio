"use client";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-end px-6 py-4 bg-white/50 text-black-900 backdrop-blur">
      {/* <a href="#" className="font-bold text-lg">
        Spencer Delimas
      </a> */}
      <div className="hidden md:flex gap-6 text-sm">
        <a href="#about" className="hover:text-accent">About</a>
        <a href="#skills" className="hover:text-accent">Skills</a>
        <a href="#projects" className="hover:text-accent">Projects</a>
        <a href="#contact" className="hover:text-accent">Contact</a>
      </div>
    </nav>
  );
}