//Escolar and Professional Projects

"use client";
import { useLanguage } from "@/components/providers/LanguageContext";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn, StaggerGrid, StaggerItem } from "@/components/ui/Motion";
import { BadgeCheck, BriefcaseBusiness } from "lucide-react";

export function EANDPProjects() {
  const {t} = useLanguage();
  const projects = [
    {
      title: "Sistema de aprendizaje adaptativo",
      description: [
        "Trabajé en el desarrollo de implementación de un algoritmo genético para asignar una ruta de aprendizaje.",
"Desarrollé una serie de pruebas unitarias y basadas en escenarios para la parte lógica y a nivel cliente del sistema.",
"Diseñe e implemente los flujos para la construcción y conexión del Frontend al servidor del sistema.",
"Trabajé de principio a fin durante todas las etapas del proyecto, incluyendo la redacción en la documentación."
      ],
      tools: ["Python", "React", ".NET", "Documentación", "MySql", "C#", "Algoritmos Genéticos", "Pruebas Unitarias", "Pruebas de Escenarios"],
    },
    {
      title: "Dahboard Histórico",
      description: ["Desarrollé el proyecto de un dashboard para un producto clave con el objetivo de impulsar la toma de decisiones basada en datos significativos.",
        "Diseñé e implementé los procesos ETL end-to-end para extraer, normalizar y consolidar múltiples fuentes de información en un repositorio único.",
        "Desarrollé una etapa intermedia con Apache Spark entre el lago de datos y SAS para generar un archivo CSV.",
        "Cargué la información de campañas (2023-2025) en hojas de Excel para generar una vista histórica y comparativa mediante tablas dinámicas."
    ],
      tools: ["Python", "SAS", "PySpark", "Excel", "ETL", "SQL", "Apache Spark", "Tablas Dinámicas", "Parquet", "Data Lake"],
    }
  ];
  return (
    <section id="proyectos-escolares-y-profesionales" className="max-w-6xl mx-auto px-4 py-4">
      <FadeIn>
        <div className="flex flex-col gap-2 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            {t("professional_projects_title")}
          </h2>
        </div>
      </FadeIn>

      <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-5">
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
                      <BriefcaseBusiness className="w-5 h-5" />
                    </div>
                  </div>

                  <u className="text-xs text-slate-400 leading-relaxed no-underline space-y-4">
                    
                    {project.description.map((desc, index) => (
                        
                        <ol key={index} className="flex items-start gap-2">
                          <BadgeCheck key={index} className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          {desc}
                        </ol>
                    ))}
                  </u>  

                  <div className="flex flex-wrap gap-2 mb-4 py-8">
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

              </GlassCard>
            </StaggerItem>
          );
        })}
      </StaggerGrid>
    </section>
  );
}