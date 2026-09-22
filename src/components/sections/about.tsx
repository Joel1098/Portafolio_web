import Image from "next/image";

export function About() {
  return (
    <div className="max-w-6xl mx-auto">
      
      {/* Columna de la Fotografía */}
      <div className="flex-shrink-0">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
          <Image 
            src="/images/joel_dorantes.jpeg" 
            alt="Joel Dorantes" 
            width={320} 
            height={320} 
            className="object-cover w-64 h-64 md:w-80 md:h-80"
            priority
          />
        </div>
      </div>

      {/* Columna del Texto (Resumen) */}
      <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
        <p className="text-slate-600 font-medium leading-relaxed text-lg text-justify">
          Ingeniero en sistemas con sólida experiencia en el desarrollo backend y análisis de datos. He ejecutado procesos ETL en entornos Big Data, combinando una sólida base técnica con visión de negocio para optimizar procesos y respaldar la toma de decisiones. 
          <br /><br />
          Mi objetivo es consolidarme en el área de ingeniería y análisis de datos, aportando mis habilidades técnicas, facilidad de comunicación, resolución de problemas y rápida adaptabilidad para impulsar la innovación en proyectos.
        </p>
      </div>

    </div>
  );
}