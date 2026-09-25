"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn, StaggerGrid, StaggerItem } from "@/components/ui/Motion";
import { TechIcon } from "@/components/ui/TechIcon";
import { categories } from "@/Data/Skills";

export function Skills() {
  return (
    <section id="habilidades" className="max-w-6xl mx-auto px-4 py-16">
      <FadeIn>
        <div className="flex flex-col gap-2 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Habilidades técnicas y área de especialización
          </h2>
        </div>
      </FadeIn>

      <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <StaggerItem key={index}>
              <GlassCard className="h-full flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-800/80">
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {category.tools.map((skill) => (
                      <div
                        key={skill}
                        className="group flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-800/60 transition-all duration-300"
                      >
                        <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800/80 group-hover:scale-110 transition-transform flex-shrink-0">
                          <TechIcon name={skill} />
                        </div>
                        <span className="text-xs font-small text-slate-300 group-hover:text-white transition-colors truncate">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </StaggerItem>
          );
        })}
      </StaggerGrid>
    </section>
  );
}