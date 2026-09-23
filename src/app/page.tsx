import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Navbar } from "@/components/ui/Navbar";


export default function Home() {
  return (
    
    <div className="bg-white text-slate-900 min-h-screen ">
      {/* Narbar con opciones de navegación */}
    <Navbar /> 
      
      <main id="inicio" className="relative min-h-screen bg-slate-950 text-slate-100 bg-ambient-grid overflow-hidden">
      {/* Efecto de luz ambiental en la esquina superior */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-600/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none -z-10" />
          <About />
            <Education />
          <Skills />
            <Experience />
          <Projects />
          <Contact />
      </main>
    </div>
  );
}