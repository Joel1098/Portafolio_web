import Image from "next/image";

export function About() {
  return (
    <section id="sobre-mi" className="pt-28 sm:pt-36 pb-16 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
        
        <div className="flex-shrink-0 group">
          <div className="relative p-1 rounded-3xl bg-gradient-to-tr to-transparent shadow-2xl transition-all duration-500">
            
            <div className="absolute -inset-1 bg-accent/20 rounded-3xl blur-lg group-hover:opacity-100 group-hover:bg-blue-500/40 transition duration-500 opacity-60"></div>

            {/* Marco interior de la fotografía */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-[22px] overflow-hidden bg-[#1c1c22]">
              <Image 
                src="/images/joel_dorantes.jpeg" 
                alt="Joel Dorantes" 
                fill
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>

        <div className="flex-1 bg-[#23232b] p-8 md:p-10 rounded-3xl border border-white/10 shadow-xl hover:border-blue-500/30 transition-all duration-300">
          <h2 className="text-2xl font-bold text-white mb-4">Descripción</h2>
          <p className="text-slate-300 font-normal leading-relaxed text-base sm:text-md text-justify">
            Ingeniero en sistemas computacionales con sólida experiencia en el desarrollo backend y análisis de datos. 
            He ejecutado procesos ETL en entornos Big Data, combinando técnicas con visión de negocio para optimizar procesos y la toma de decisiones. 
            <br /><br />
            Mi objetivo es consolidarme en el área de ingeniería y análisis de datos, aportando habilidades técnicas, 
            facilidad de comunicación, resolución de problemas y rápida adaptabilidad para impulsar la innovación en proyectos.
          </p>
        </div>

      </div>
    </section>
  );
}