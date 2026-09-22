import { Hero } from "@/components/sections/hero";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";



export function Contact() {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <p className="text-slate-400 text-lg mb-10">
        Contáctamente si te encuentras interesado en desarrollar un proyecto, temas de contratación 
        o alguna otra cuestión relacionada en ingeniería, procesamiento y análisis de datos, con gusto atenderé tu mensaje.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        
        {/* Correo Electrónico */}
        <a 
          href="mailto:joeldgjo98@gmail.com" 
          className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-white px-6 py-4 rounded-2xl transition-all w-full md:w-auto"
        >
          <Mail className="w-5 h-5" />
          <span className="font-semibold">Enviar correo</span>
        </a>

        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/joel-ernesto-dorantes-guerrero-72b7841a2/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-2xl transition-all w-full md:w-auto"
        >
          <FaLinkedin className="w-6 h-6" />
          <span className="font-semibold">LinkedIn</span>
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/Joel1098" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-white px-6 py-4 rounded-2xl transition-all w-full md:w-auto"
        >
          <FaGithub className="w-6 h-6" />
          <span className="font-semibold">GitHub</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
        <h2 className="text-3xl font-bold mb-8">Visualiza o descarga mi CV</h2>
        
            <Hero /> 
      </div>
    </div>
  );
}