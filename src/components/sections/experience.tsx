"use client"

import { useLanguage } from "@/components/providers/LanguageContext";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn, StaggerGrid, StaggerItem } from "@/components/ui/Motion";
import { experienceData } from "@/Data/index";
import { getLocalized } from "@/lib/utils";
import { Briefcase, Building2, Calendar } from "lucide-react";

export function Experience() {

const {t, language} = useLanguage();


  return (
    <section id="experiencia" className="relative w-full py-16 max-w-6xl mx-auto px-4 sm:py-20 scroll-mt-20">
        
          <FadeIn>
            <div className="flex flex-col gap-2 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                {t("experience_title")}
              </h2>
            </div>
          </FadeIn>

        {/* Columna Derecha: Tarjetas de Experiencia */}
        <div className="lg:col-span-8">
          <StaggerGrid className="space-y-6">
            {experienceData.map((exp, index) =>{
              const role = getLocalized(exp.role, language);
              const company = getLocalized(exp.company, language);
              const period = getLocalized(exp.period, language);
              const description = getLocalized(exp.description, language);

             return(
              <StaggerItem key={index}>
                <GlassCard>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-slate-800/60">
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-3">
                        <Briefcase className="w-4 h-4 text-blue-400 shrink-0" />
                        {role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-slate-400 text-xs sm:text-sm">
                        <Building2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span className="font-medium text-slate-300">{company}</span>
                      </div>
                      
                    </div>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 text-xs font-normal text-blue-300 w-fit shrink-0 whitespace-nowrap sm:self-start">
                      <Calendar className="w-3 h-3" />
                      <span>{period}</span>
                    </div>
                    
                    
                  </div>
                  <div className="mt-4">
                  {Array.isArray (description) ?
                  (<u className="mt-4 text-xs sm:text-sm text-slate-300 font-medium space-y-4 no-underline">
                     {description.map((desc, index) => (
                      <li key={index} className="flex items-start gap-2.5">{desc}</li>
                      ))}
                  </u>
                  ): (<p className="leading-relaxed">{description}</p>)}
                  </div>
                </GlassCard>
              </StaggerItem>);
            })}
          </StaggerGrid>
        </div>
    </section>
  );
}