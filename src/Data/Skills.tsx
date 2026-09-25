
import { ChartLine, Cloud, Code2, Container, Database, FolderKanban, GitBranch, Handshake, MonitorCog } from "lucide-react";

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
      title: "Procesamiento de datos",
      icon: MonitorCog,
      tools: ["Pandas", "PySpark", "Scikit-learn", "Apache Parquet" ]
    },
     {
      title: "Análisis de datos",
      icon: ChartLine,
      tools: ["SAS"]
    },
     {
      title: "Gestión de proyectos",
      icon: FolderKanban,
      tools: ["Agile", "Scrum", "Jira", "Confluence"]
    },
     {
      title: "Control de versiones ",
      icon: GitBranch,
      tools: ["Git", "GitHub","Bitbucket", ]
    },
     {
      title: "Cómputo en la nube",
      icon: Cloud,
      tools: ["AWS", "Lambda", "SQS", "SNS", "S3"]
    },
     {
      title: "Contenedores y orquestación",
      icon: Container,
      tools: ["Docker", "Airflow"]
    },
     {
      title: "Aplicación al negocio",
      icon: Handshake,
      tools: ["Métricas de negocio", "Análisis de procesos", "KPIs", "Dashboards"]
    }
  ];
