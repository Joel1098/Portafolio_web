"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn, StaggerGrid, StaggerItem } from "@/components/ui/Motion";
import { ChartLine, ChevronsLeftRightEllipsis, Cloud, Code2, Container, Database, FolderKanban, GitBranch, Handshake } from "lucide-react";

export function Skills() {
  const categories = [
    {
      title: "Lenguajes de programación",
      icon: Code2,
      description: "Lenguajes de programación con los que he trabajado en proyectos de desarrollo y análisis de datos.",
      tools: ["Python", "C#", "JavaScript"]
    },
    {
      title: "Bases de datos",
      icon: Database,
      description: "Bases de datos con las que he trabajado, así como también gestores de bases de datos en proyectos de desarrollo y análisis de datos.",
      tools: ["Mysql", "PostgreSQL", "SQLAlchemy", "MongoDB"]
    },
    {
      title: "Procesamiento de datos",
      icon: ChevronsLeftRightEllipsis,
      description: "Técnicas y herramientas con las que he procesado y analizado grandes volúmenes de datos.",
      tools: ["Pandas", "Scikit-learn", "PyTorch", "PySpark"]
    },
     {
      title: "Análisis de datos",
      icon: ChartLine,
      description: "Software especializado con el que he desarrollado análisis de datos y visualización de información a nivel Big Data.",
      tools: ["SAS"]
    },
     {
      title: "Gestión de proyectos",
      icon: FolderKanban,
      description: "Metodologías y herramientas con las que he trabajado para la gestión eficiente de proyectos de desarrollo.",
      tools: ["Agile", "Scrum", "Jira", "Desarrollo evolutivo"]
    },
     {
      title: "Control de versiones ",
      icon: GitBranch,
      description: "Herramientas con las que tengo experiencia para el control de versiones y colaboración en proyectos de desarrollo.",
      tools: ["Bitbucket", "Git", "GitHub"]
    },
     {
      title: "Cómputo en la nube",
      icon: Cloud,
      description: "Experiencia y conocimiento en servicios de cómputo en la nube para el despliegue, gestión de aplicaciones y datos.",
      tools: ["AWS (Lambda, SQS, SNS, S3)"]
    },
     {
      title: "Contenedores y orquestación",
      icon: Container,
      description: "Conocimiento y experiencia en la creación, gestión y orquestación de contenedores para el despliegue de aplicaciones.",
      tools: ["Docker", "Docker Compose", "Airflow"]
    },
     {
      title: "Aplicación al negocio",
      icon: Handshake,
      description: "Experiencia y enfoque en áreas de negocio, entendimiento de productos y servicios, y cómo la tecnología puede impulsar la innovación y la eficiencia.",
      tools: ["Métricas de negocio", "Análisis de procesos", "Toma de decisiones basada en datos", "KPI", "Gráficas"]
    }
  ];

  return (
    <section id="habilidades" className="max-w-6xl mx-auto px-4">
     <FadeIn>
        <div className="flex flex-col gap-2">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                 Habilidades técnicas y herramientas
              </h2>
          <p className="text-slate-400 max-w-2xl text-sm md:text-base">
            Conjunto de tecnologías en las que me desempeño enfocadas en el procesamiento y anáisis de datos y el desarrollo de software escalable.
          </p>
        </div>
      </FadeIn>

      <StaggerGrid className="grid grid-cols-4 md:grid-cols-3 gap-3">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <StaggerItem key={index}>
              <GlassCard className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                      <Icon className="w-6" />
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {category.description}
                  </p>

                  <ul className="space-y-2.5">
                    {category.tools.map((skill) => (
                      <li key={skill} className="flex items-center gap-2.5 text-sm text-slate-300">
                        <span> - {skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </StaggerItem>
          );
        })}
      </StaggerGrid>
      </section>
  );
}