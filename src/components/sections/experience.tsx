"use client"

import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn, StaggerGrid, StaggerItem } from "@/components/ui/Motion";
import { Briefcase, Building2, Calendar } from "lucide-react";

export function Experience() {
  const jobs = [
    {
      role: "Spec Analytics Analyst",
      company: "Banamex",
      period: "Noviembre 2025 - Mayo 2026",
      description: [
        "Implementé procesos ETL desde múltiples fuentes segmentando diversas consultas SQL desde SAS.",
        "Aseguré la precisión en la carga de datos finales trabajando con macros y uniones dentro de la segmentación del código SQL. ",
        "Realicé análisis de datos y generación de informes para apoyar la toma de decisiones en el área de análisis de datos. Ejecuté optimizaciones, generación de escenarios en los segmentos, con las bases enviadas en campañas bimestrales para la asignación de tasas. ",
        "Realicé el seguimiento y la actualización semanal en las métricas posteriores a campañas de asignación de tasas, garantizando que la información sea supervisada y confiable para la toma de decisiones."
      ]
    },
    {
      role: "Programador Junior",
      company: "Fixat",
      period: "Marzo 2025 - Junio 2025",
      description: [
      "Trabajé en nuevos requerimientos con Python como lenguaje de programación pricipal y siguiendo una arquitectura de microservicios.",
      "Desarrollé soluciones backend mediante la aplicación de lambdas en AWS.",
      "Gestionaba y visualizaba la información correspondientes a los nuevos requerimientos mediante documentos en una base de datos No SQL con Mongo DB."
      ]
    },
    {
      role: "Frontend QA Tester",
      company: "Grupo Carso",
      period: "Marzo 2024 - Septiembre 2024",
      description: [
      "Realizaba la ejecución de pruebas manuales, pruebas de humo y matrices de pruebas.",
      "Coordinaba comunicación con equipos de desarrollo dentro del proyecto Claro Drive para el seguimiento y reporte de incidencias antes, durante y después de despliegues a producción.",
      "Desarrollé un generador de reportes implementando la herramienta “testcafe” sobre el proyecto de pruebas automatizadas existente."
      ]

    }
  ];

  return (
    <section id="experiencia" className="py-16 max-w-6xl mx-auto px-4">
        
          <FadeIn>
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Experiencia Profesional
              </h2>
            </div>
          </FadeIn>

        {/* Columna Derecha: Tarjetas de Experiencia */}
        <div className="lg:col-span-8">
          <StaggerGrid className="space-y-6">
            {jobs.map((exp, index) => (
              <StaggerItem key={index}>
                <GlassCard>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 ">
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-3">
                        <Briefcase className="w-4 h-4 text-blue-400 shrink-0" />
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-slate-400 text-xs sm:text-sm">
                        <Building2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span className="font-medium text-slate-300">{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 text-xs font-normal text-blue-300 w-fit">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-slate-300 font-medium">
                    {exp.description}
                  </p>

                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>

    </section>
  );
}