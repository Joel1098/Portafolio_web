"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn } from "@/components/ui/Motion";
import { Download, Mail } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const cvPath = "/CV_Joel_Dorantes.pdf";

export function Contact() {
  return (
    <footer id="contacto" className="pt-20 pb-12 max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
      <FadeIn>
        <div className="flex flex-col gap-2">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-6">
                Contacto
              </h2>
            </div>
        <GlassCard className="relative overflow-hidden p-8 md:p-12 border-blue-500/20 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-950/80">
          
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
                Me encuentro en busca de nuevas oportunidades dentro dentro de la Ingeniería y Análisis de Datos. 
                Ponte en contacto conmigo, estoy abierto a roles en cualquier modalidad, y me comprometo a responder rápidamente a tus mensajes.
              </p>
              <h2>Aquí puedes descargar mi currículum:</h2>
              <div className="grid grid-cols-2 gap-3">
              <Link
            href={cvPath}
            download="CV_Joel_Dorantes.pdf"
            className="flex items-center justify-center gap-2 p-3.5 rounded-xl font-semibold text-white bg-cyan-700 from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-cyan-500 transition-all shadow-md shadow-blue-600/20 active:scale-95 border border-blue-400/30"
          >
            <span>Descargar CV</span>
            <Download className="w-5 h-5" />
          </Link>
</div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Puedes ponerte en contacto conmigo por estos medios:
              </h3>
              <a
                href="mailto:joeldgjo98@gmail.com"
                className="flex items-center justify-between p-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/20 group"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>Enviar Correo Electrónico</span>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-3">
               
                <a
                  href="https://www.linkedin.com/in/joel-ernesto-dorantes-guerrero-72b7841a2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 text-slate-200 text-xs font-medium transition-all hover:text-white"
                >
                  <FaLinkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/Joel1098"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 text-slate-200 text-xs font-medium transition-all hover:text-white"
                >
                  <FaGithub className="w-4 h-4 text-slate-300" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </GlassCard>
      </FadeIn>

      <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© 2026 Joel Dorantes. Todos los derechos reservados.</p>
        <div className="flex items-center gap-4">
          <a href="#inicio" className="hover:text-slate-300 transition-colors">
            Volver al inicio ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
