import { ProfessionalProjectsItem } from "@/types/portfolio";

export const Professionalprojects: ProfessionalProjectsItem[] = [
    {
      title: 
      {
        es: "Sistema de aprendizaje adaptativo",
        en: "Adaptive Learning System"
      },
      description: {
        es: [
        "Trabajé en la propuesta de implementación de un algoritmo genético para asignar una ruta de aprendizaje.",
"Desarrollé una serie de pruebas unitarias y basadas en escenarios para la parte lógica y a nivel cliente del sistema.",
"Diseñe e implemente los flujos de pantallas para la construcción y conexión del Frontend al servidor del sistema.",
"Trabajé de principio a fin durante todas las etapas del proyecto para la construcción de la documentación."
      ],
      en: [
        "I worked on developing and implementing a genetic algorithm to assign a learning path.",
        "I developed a series of unit and scenario-based tests for the system's logic and client-side components.",
        "Design and implement the workflows for building and connecting the frontend to the system server.",
        "I worked on the project from start to finish across all stages, including drafting the documentation."
      ]
    },
      tools: {
        es: ["Python", "React", ".NET", "Documentación", "MySql", "C#", "Algoritmos Genéticos", "Pruebas Unitarias", "Pruebas de Escenarios"],
        en: ["Python", "React", ".NET", "Documentation", "MySql", "C#", "Genetic Algorithms", "Unit Tests", "Scenario Tests"]
      }
    },
    {
      title: {
        es: "Dahboard Histórico",
        en: "Historical Dashboard"
      },
      description: {
        es: [
          "Realicé la investigación del producto y la planificación para el proyecto de un dashboard con el objetivo de impulsar la toma de decisiones basada en datos significativos.",
          "Diseñé e implementé los procesos ETL end-to-end para extraer, normalizar y consolidar múltiples fuentes de información en un repositorio único.",
          "Implementé la parte de performance y PnL para obtener los cruces finales que consolidaron la información de forma resumida y precisa.",
          "Cargué la información de campañas (2023-2025) en hojas de Excel por medio de un CSV generado en Apache Spark para generar una vista histórica y comparativa mediante tablas dinámicas."
        ],
        en: [
          "I conducted product research and planning for a dashboard project aimed at driving decision-making based on meaningful data.",
            "I designed and implemented end-to-end ETL processes to extract, normalize, and consolidate multiple data sources into a single repository.",
            "I implemented the performance and P&L component to generate the final data cross-references that consolidated the information in a concise and accurate manner.",
            "I loaded the campaign data (2023–2025) into Excel spreadsheets using a CSV file generated in Apache Spark to create a historical and comparative view via pivot tables."
        ]
      },
      tools: {
        es: ["Python", "SAS", "PySpark", "Excel", "ETL", "SQL", "Apache Spark", "Tablas Dinámicas", "Parquet", "Data Lake"],
        en: ["Python", "SAS", "PySpark", "Excel", "ETL", "SQL", "Apache Spark", "Pivot Tables", "Parquet", "Data Lake"]
      }
    }
  ];