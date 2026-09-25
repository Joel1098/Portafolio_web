"use client";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn, StaggerGrid, StaggerItem } from "@/components/ui/Motion";
import { Calendar, GraduationCap } from "lucide-react";


export function Education() {
  const educacion = [
    {
      title: "Instituto Politécnico Nacional (IPN)",
      icon: GraduationCap,
      description: "Escuela Superior de Cómputo (ESCOM) | Título en Ingeniería en Sistemas Computacionales",
      period: "2020 - 2025"
    },
  ];
  return (
    <section id="educacion" className="py-16 max-w-6xl mx-auto px-4">
         <FadeIn>
            < div className="flex flex-col gap-2 mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                     Educación
                  </h2>
          
            </div>
          </FadeIn>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5">
            {educacion.map((category, index) => {
              const Icon = category.icon;
              return (
                <StaggerItem key={index}>
                  <GlassCard className="h-full flex flex-col justify-between ">
                    <div >
                      <div className="flex items-center gap-4 mb-3">
                        <h3 className="text-lg font-bold text-white tracking-tight">
                          {category.title}
                        </h3>
                        
                        <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                          <Icon className="w-6" />
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-4xl bg-slate-800/80 text-md text-blue-300 w-fit">
                        <Calendar className="w-5 h-5" />
                        <span>{category.period}</span>
                        </div>
                        </div>
                      <p className=" text-slate-400 leading-relaxed font-medium mb-4">
                        {category.description}
                      </p>
                      </div>
                  
                  </GlassCard>
                </StaggerItem>
              );
            })}
          </StaggerGrid>
          </section>
  );
}