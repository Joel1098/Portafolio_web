"use client";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn, StaggerGrid, StaggerItem } from "@/components/ui/Motion";
import { GraduationCap } from "lucide-react";


export function Education() {
  const educacion = [
    {
      title: "Instituto Politécnico Nacional (IPN)",
      icon: GraduationCap,
      description: "ESCOM (2020 - 2025) | Título Universitario en Ingeniería en Sistemas Computacionales"
    },
  ];
  return (
    <section id="educacion" className="py-16 max-w-6xl mx-auto px-4">
       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4 lg:sticky lg:top-24">
         <FadeIn>
            < div className="flex flex-col gap-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                     Educación
                  </h2>
          
            </div>
          </FadeIn>
        </div>
        <div className="lg:col-span-8">
          <StaggerGrid className="space-y-6">
            {educacion.map((category, index) => {
              const Icon = category.icon;
              return (
                <StaggerItem key={index}>
                  <GlassCard className="h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-3">
                        <h3 className="text-lg font-bold text-white tracking-tight">
                          {category.title}
                        </h3>
                        <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                          <Icon className="w-6" />
                        </div>
                      </div>
    
                      <p className="text-xs text-slate-400 leading-relaxed mb-4">
                        {category.description}
                      </p>
                    </div>
                  </GlassCard>
                </StaggerItem>
              );
            })}
          </StaggerGrid>
        </div>
          </div>
          </section>
  );
}