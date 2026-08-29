import { Button } from "../ui/button";

export function Hero() {
  // Al estar en la carpeta public, Next.js expone el archivo desde la raíz "/"
  const cvPath = "/cv/CV_Joel_Dorantes.pdf";

  return (
    <div className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
      {/* Botón para Visualizar (Abre en otra pestaña) */}
      <a
        href={cvPath}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
      >
      </a>

      {/* Botón para Descargar */}
      <div className="w-4 h-4">
        <a href={cvPath} target="_blank" rel="noopener noreferrer">
          <Button className="bg-blue-600 text-black py-20 px-6 text-center">
            Ver Currículum
          </Button>
        </a>
        <a href={cvPath} download="CV_Joel_Dorantes.pdf">
          <Button className="text-3xl font-bold mb-8">
            Descargar PDF
          </Button>
        </a>
      </div>
    </div>
  );
}