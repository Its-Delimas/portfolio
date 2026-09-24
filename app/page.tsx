import About from "@/components/About"
import Contact from "@/components/Contact"
import Experience from "@/components/Experience"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import TechMarquee from "@/components/TechMarquee"

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  )
}
