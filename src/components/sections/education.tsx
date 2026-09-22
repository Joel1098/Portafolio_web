"use client";

import { FadeIn } from "@/components/ui/Motion";

export function Education() {
  return (
    <section id="educacion" className="max-w-6xl mx-auto px-4">
         <FadeIn>
            <div className="flex flex-col gap-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                     Educación
                  </h2>
                <h4 className="text-slate-400 max-w-2xl text-sm md:text-base">
             ESCOM, IPN (2020 - 2025) | Título Universitario en Ingeniería en Sistemas Computacionales
          </h4>
            </div>
          </FadeIn>
          
    </section>
  );
}