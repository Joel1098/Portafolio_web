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
      period: "Marzo 2024 - Junio 2025",
      description: [
      "Trabajé en nuevos requerimientos con Python como lenguaje de programación pricipal y siguiendo una arquitectura de microservicios.",
      "Desarrollé soluciones backend mediante la aplicación de lambdas en AWS.",
      "Gestionaba y visualizaba la información correspondientes a los nuevos requerimientos mediante documentos en una base de datos No SQL con Mongo DB."
      ]
    },
    {
      role: "Frontend QA Tester",
      company: "Grupo Carso",
      period: "Marzo 2023 - Septiembre 2024",
      description: [
      "Realizaba la ejecución de pruebas manuales, pruebas de humo y matrices de pruebas.",
      "Coordinaba comunicación con equipos de desarrollo dentro del proyecto Claro Drive para el seguimiento y reporte de incidencias antes, durante y después de despliegues a producción.",
      "Desarrollé un generador de reportes implementando la herramienta “testcafe” sobre el proyecto de pruebas automatizadas existente."
      ]

    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-8">
        {jobs.map((job, index) => (
          <div 
            key={index} 
            className="group relative flex flex-col md:flex-row gap-6 md:gap-12 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
          >
            {/* Columna de Fechas (Izquierda en Desktop) */}
            <div className="md:w-1/4 flex-shrink-0 pt-1">
              
            </div>

            {/* Columna de Contenido (Derecha) */}
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {job.role} ({job.period})</h3>
              <h4 className="text-lg font-medium text-blue-600 mb-4">
                {job.company}
              </h4>
              <ul className="text-slate-600 mb-6 leading-relaxed">
                {job.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}