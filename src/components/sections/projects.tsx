"use client";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn, StaggerGrid, StaggerItem } from "@/components/ui/Motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export function Projects() {
  const projects = [
    {
      title: "Pipeline-de-datos-con-Spark",
      description: "Desarrollado de un ETL en Python que extrae datos de productos desde la FakeStore API, los transforma usando Apache Spark y los carga en una base de datos PostgreSQL.",
      tools: ["Python", "PostgreSQL", "ETL", "Arquitectura de Datos, Spark", "PySpark", "SQLAlchemy"],
      link: "https://github.com/Joel1098/Pipeline-de-datos-con-Spark"
    },
    {
      title: "Pruebas-Automatizadas",
      description: "Automatización de pruebas utilizando pystest en un entorno serveless con Azure Functions para generar combinaciones simuladas con las competencias, estilo de aprendizaje y unidades registradas de un alumno.",
      tools: ["Pytest", "Azure Functions", "Bash", "Json"],
      link: "https://github.com/Joel1098/Pruebas-Automatizadas"
    }
  ];

  return (
    <section id="proyectos" className="max-w-6xl mx-auto px-4">
         <FadeIn>
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Proyectos
              </h2>
              <p className="text-slate-400 max-w-2xl text-sm md:text-base">
                Proyectos que he desarrollado enfocados en el procesamiento y análisis de datos y el desarrollo de software escalable.
              </p>
            </div>
          </FadeIn>
    
          <StaggerGrid className="grid grid-cols-4 md:grid-cols-2 gap-3">
            {projects.map((project, index) => {
              return (
                <StaggerItem key={index}>
                  <GlassCard className="h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-lg font-bold text-white tracking-tight">
                          {project.title}
                        </h3>
                        <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                          <FolderGit2 className="w-6 h-6" />
                        </div>
                      </div>
    
                      <p className="text-xs text-slate-400 leading-relaxed mb-4">
                        {project.description}
                      </p>
    
                      <ul className="space-y-2.5">
                        {project.tools.map((skill) => (
                          <li key={skill} className="flex items-center gap-2.5 text-sm text-slate-300">
                            <span> - {skill}</span>
                          </li>
                        ))}
                      </ul>
                       <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors pt-4 border-t border-slate-100"
            >
              <FaGithub className="w-4 h-4" />
              <span>Ver repositorio</span>
              <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-60" />
            </a>
                    </div>
                    
                  </GlassCard>
                </StaggerItem>
              );
            })}
          </StaggerGrid>
          </section>
  );
}