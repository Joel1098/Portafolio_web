import { ProjectsItem } from "@/types/portfolio";

export const PersonalprojectsData: ProjectsItem[] = [
    {
      title: {
        es: "Pipeline-de-datos-con-Spark",
        en: "Data-Pipeline-with-Spark"
      },
      description: {
        es: "Desarrollado de un ETL en Python que extrae datos de productos desde una API, se realiza un proceso ETL con Apache Spark y los carga en una base de datos PostgreSQL.",
        en: "Developed a data pipeline in Python that extracts product data from the FakeStore API, transforms it using Apache Spark, and loads it into a PostgreSQL database."
      },
      tools: {
        es: ["Python", "PostgreSQL", "ETL", "Arquitectura de Datos, Spark", "PySpark", "SQLAlchemy"],
        en: ["Python", "PostgreSQL", "ETL", "Data Architecture, Spark", "PySpark", "SQLAlchemy"]
        },
      link: "https://github.com/Joel1098/Pipeline-de-datos-con-Spark"
    },
    { 
      title: {
        es: "Pruebas-Automatizadas",
        en: "Automated-Tests"
      },
      description: {
        es: "Automatización de pruebas utilizando pystest en un entorno serveless con Azure Functions para generar combinaciones simuladas con las competencias, estilo de aprendizaje y unidades registradas de un alumno.",
        en: "Automation of tests using pytest in a serverless environment with Azure Functions to generate simulated combinations with the competencies, learning style, and registered units of a student."
      },
      tools: {
        es: ["Pytest", "Azure Functions", "Bash", "Json"],
        en: ["Pytest", "Azure Functions", "Bash", "Json"]
      },
      link: "https://github.com/Joel1098/Pruebas-Automatizadas"
    }
  ];