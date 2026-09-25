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
    <section id="proyectos" className="max-w-6xl mx-auto px-4 py-16">
      <FadeIn>
        <div className="flex flex-col gap-2 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Proyectos
          </h2>
        </div>
      </FadeIn>

      <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, index) => {
          return (
            <StaggerItem key={index}>
              <GlassCard className="h-full flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                      <FolderGit2 className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tools.map((skill: string) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-cyan-800/80 text-slate-300 border border-slate-800 hover:border-blue-500/30 hover:text-white transition-all duration-200"
                      >
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-blue-400 transition-colors pt-4 border-t border-slate-800/80 mt-auto"
                >
                  <FaGithub className="w-4 h-4 text-slate-300 group-hover:text-blue-400 transition-colors" />
                  <span>Ver repositorio</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </a>
              </GlassCard>
            </StaggerItem>
          );
        })}
      </StaggerGrid>
    </section>
  );
}