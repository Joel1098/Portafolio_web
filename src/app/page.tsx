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
      
      <main className="relative min-h-screen bg-slate-950 text-slate-100 bg-ambient-grid overflow-hidden">
      {/* Efecto de luz ambiental en la esquina superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-600/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none -z-10" />
          <About />
            <Education />
          <Skills />
            <Experience />
          <Projects />
      </main>

      {/* Footer / Contacto */}
      <footer id="contacto" className="w-full bg-slate-900 text-slate-300 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Contáctame</h2>
          <Contact />
        </div>
      </footer>
    </div>
  );
}