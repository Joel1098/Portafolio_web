import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Navbar } from "@/components/ui/Navbar";

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 scroll-smooth">
      {/* Narbar con opciones de navegación */}
      <Navbar />
      
      <main className="pt-16">
        
        <section id="inicio">
          
        </section>
        
        <section id="resumen" className="py-20 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Resumen Profesional</h2>
          <About />
        </section>

        <section id="educacion" className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Educación</h2>
            <Education />
          </div>
        </section>

        <section id="habilidades" className="py-20 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Habilidades Técnicas</h2>
          <Skills />
        </section>

        <section id="experiencia" className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Experiencia</h2>
            <Experience />
          </div>
        </section>

        <section id="proyectos" className="py-20 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Proyectos</h2>
          <Projects />
        </section>

      </main>

      {/* Footer / Contacto */}
      <footer id="contacto" className="bg-slate-900 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-slate-900">Contactame</h2>
        <Contact />
        
      </footer>
    </div>
  );
}