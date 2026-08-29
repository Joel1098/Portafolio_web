"use client";

import { useState } from "react";
import { twClassNames } from "../../utils";

export function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      id: "programacion",
      title: "Lenguajes de programación",
      description: "Lenguajes de programación con los que he trabajado en proyectos de desarrollo y análisis de datos.",
      tools: ["Python", "C#", "JavaScript"]
    },
    {
      id: "bd",
      title: "Bases de datos",
      description: "Bases de datos con las que he trabajado, así como también gestores de bases de datos en proyectos de desarrollo y análisis de datos.",
      tools: ["Mysql", "PostgreSQL", "SQLAlchemy", "MongoDB"]
    },
    {
      id: "datapro",
      title: "Procesamiento de datos",
      description: "Técnicas y herramientas con las que he procesado y analizado grandes volúmenes de datos.",
      tools: ["Pandas", "Scikit-learn", "PyTorch", "PySpark"]
    },
     {
      id: "analytics",
      title: "Análisis de datos",
      description: "Software especializado con el que he desarrollado análisis de datos y visualización de información a nivel Big Data.",
      tools: ["SAS"]
    },
     {
      id: "gestion",
      title: "Gestión de proyectos",
      description: "Metodologías y herramientas con las que he trabajado para la gestión eficiente de proyectos de desarrollo.",
      tools: ["Agile", "Scrum", "Jira", "Desarrollo evolutivo"]
    },
     {
      id: "datalake",
      title: "Lago de datos",
      description: "Almacenamiento y procesamiento de grandes volúmenes de datos en entornos Big Data.",
      tools: ["Hadoop", "Hive", "Hue"]
    },
     {
      id: "controlversion",
      title: "Control de versiones ",
      description: "Herramientas con las que tengo experiencia para el control de versiones y colaboración en proyectos de desarrollo.",
      tools: ["Bitbucket", "Git", "GitHub"]
    },
     {
      id: "cloud",
      title: "Cómputo en la nube",
      description: "Experiencia y conocimiento en servicios de cómputo en la nube para el despliegue, gestión de aplicaciones y datos.",
      tools: ["AWS (EC2, VPC, Lambda)", "SQS", "SNS", "S3"]
    },
     {
      id: "contenedores",
      title: "Contenedores y orquestación",
      description: "Conocimiento y experiencia en la creación, gestión y orquestación de contenedores para el despliegue de aplicaciones.",
      tools: ["Docker", "Docker Compose"]
    },
     {
      id: "negocio",
      title: "Aplicación al negocio",
      description: "Experiencia y enfoque en áreas de negocio, entendimiento de productos y servicios, y cómo la tecnología puede impulsar la innovación y la eficiencia.",
      tools: ["Métricas de negocio", "Análisis de procesos", "Toma de decisiones basada en datos", "KPI", "Gráficas"]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col md:flex-row">
      
      {/* Menú de Pestañas (Izquierda en Desktop) */}
      <div className="w-full md:w-1/3 bg-slate-50 p-6 flex flex-col gap-2 border-b md:border-b-0 md:border-r border-slate-100">
        {categories.map((category, index) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(index)}
            className={twClassNames(
              "text-left px-6 py-4 rounded-xl font-medium transition-all duration-200",
              activeTab === index 
                ? "bg-white text-blue-600 shadow-sm border border-slate-200" 
                : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"
            )}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Contenido Activo (Derecha en Desktop) */}
      <div className="w-full md:w-2/3 p-8 md:p-12 min-h-[300px]">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          {categories[activeTab].title}
        </h3>
        <p className="text-slate-500 mb-8">
          {categories[activeTab].description}
        </p>
        
        <div className="flex flex-wrap gap-3">
          {categories[activeTab].tools.map((tool, i) => (
            <span 
              key={i} 
              className="px-4 py-2 bg-slate-50 text-slate-700 text-sm font-semibold rounded-lg border border-slate-200 hover:border-blue-300 transition-colors cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
      
    </div>
  );
}