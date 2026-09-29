
import { Cloud, Code2, Database, FolderKanban, Handshake, MonitorCog } from "lucide-react";

export const categories = [
    {
      title: "Lenguajes de programación",
      icon: Code2,
      tools: ["Python", "C#", "JavaScript"]
    },
    {
      title: "Bases de datos",
      icon: Database,
      tools: ["Mysql", "PostgreSQL", "SQLAlchemy", "MongoDB"]
    },
    {
      title: "Procesamiento y Análisis de datos",
      icon: MonitorCog,
      tools: ["Pandas", "PySpark", "Scikit-learn", "Apache Parquet", "SAS" ]
    },
     {
      title: "Gestión y Control de Versiones",
      icon: FolderKanban,
      tools: ["Git", "GitHub","Bitbucket", "Scrum", "Jira", "Confluence"]
    },
     {
      title: "Infraestructura y Nube",
      icon: Cloud,
      tools: ["Docker", "Airflow","AWS"]
    },
     {
      title: "Visión de Negocio y Analítica",
      icon: Handshake,
      tools: ["Métricas de negocio", "Análisis de procesos", "KPIs", "Dashboards"]
    }
  ];
