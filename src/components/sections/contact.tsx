"use client";

import { useLanguage } from "@/components/providers/LanguageContext";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn } from "@/components/ui/Motion";
import { Download, Mail } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export function Contact() {
  const {t, language} = useLanguage();

  const cvPath = language === "es" 
    ? "/cv/CV_Joel_Dorantes.pdf" 
    : "/cv/Resume_Joel_Dorantes.pdf";



  return (
    <footer id="contacto" className="pt-20 pb-12 max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <FadeIn>
        <div className="flex flex-col gap-2">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-6">
                {t("nav_contact")}
              </h2>
            </div>
        <GlassCard className="relative overflow-hidden p-8 md:p-12 border-blue-500/20 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-950/80">
          
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 sm:grid-cols-2 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-col gap-2 items-start min-h-35 sm:min-h-25">
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
                {t("contact_description")}
              </p>
              </div>
              <h2>{t("cv_label")}</h2>
              <div className="grid grid-cols-2 gap-3">
              <Link
            href={cvPath}
            download="CV_Joel_Dorantes.pdf"
            className="flex items-center justify-center gap-2 p-3.5 rounded-xl font-semibold text-white bg-cyan-700 from-blue-600 to-indigo-600 hover:from-sky-500 hover:to-cyan-500 transition-all shadow-md shadow-blue-600/20 active:scale-95 border border-blue-400/30"
          >
            <span>{t("download_cv")}</span>
            <Download className="w-5 h-5" />
          </Link>
</div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <h3 className="text-lg font-bold text-white tracking-tight">
                {t("contact_label")}
              </h3>
              

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
               <a
                href="mailto:joeldgjo98@gmail.com"
                className="flex items-center justify-center p-4 rounded-xl bg-white hover:bg-blue-700 text-slate-900 hover:text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/20 group"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>{t("send_email")}</span>
                </div>
              </a>
            </div>
          </div>
        </GlassCard>
      </FadeIn>

      <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© 2026 Joel Dorantes. {t("rights_reserved")}</p>
        <div className="flex items-center gap-4">
          <a href="#inicio" className="hover:text-slate-300 transition-colors">
            {t("top_button")} ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
