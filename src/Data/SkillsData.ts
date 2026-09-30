import { SkillsItem } from "@/types/portfolio";


export const SkillsData: SkillsItem[] = [
    {
      title: {
        es: "Lenguajes de programación",
        en: "Programming Languages"
      },
      icon: "Code2",
      tools: {
        es: ["Python", "JavaScript"],
        en: ["Python", "JavaScript"]
      }
    },
    {
      title: {
        es: "Bases de datos",
        en: "Databases"
      },
      icon: "Database",
      tools: {
        es: ["Mysql", "PostgreSQL", "SQLAlchemy", "MongoDB"],
        en: ["Mysql", "PostgreSQL", "SQLAlchemy", "MongoDB"]
      }
    },
    {
      title: {
        es: "Procesamiento y Análisis de datos",
        en: "Data Processing and Analysis"
      },
      icon: "MonitorCog",
      tools: {
        es: ["Pandas", "PySpark", "Apache Parquet", "SAS" ],
        en: ["Pandas", "PySpark", "Apache Parquet", "SAS" ]
      }
    },
     {
      title: {
        es: "Gestión y Control de Versiones",
        en: "Version Control and Management"
      },
      icon: "FolderKanban",
      tools: {
        es: ["Git", "GitHub","Bitbucket", "Scrum", "Jira", "Confluence"],
        en: ["Git", "GitHub","Bitbucket", "Scrum", "Jira", "Confluence"]
      }
    },
     {
      title: {
        es: "Infraestructura y Nube",
        en: "Infrastructure and Cloud"
      },
      icon: "Cloud",
      tools: {
        es: ["Docker", "Airflow","AWS"],
        en: ["Docker", "Airflow","AWS"]
      }
    },
     {
      title: {
        es: "Visión de Negocio y Analítica",
        en: "Business Vision and Analytics"
      },
      icon: "Handshake",
      tools: {
        es: ["Métricas de negocio", "Análisis de procesos", "KPIs", "Dashboards"],
        en: ["Business Metrics", "Process Analysis", "KPIs", "Dashboards"]
      }
    }
  ];