"use client";

import { useLanguage } from "@/components/providers/LanguageContext";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center min-w-[80px] justify-center gap-2 px-3.5 py-0.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-l font-semibold text-slate-300 hover:text-white transition-all cursor-pointer active:scale-95"
      aria-label="Cambiar idioma"
      title={language === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      <Languages className="w-4 h-4 text-blue-400" />
      <span className="uppercase tracking-wider font-mono">
        {language === "es" ? "EN" : "ES"}
      </span>
    </button>
  );
}

export function LanguageToggleMobile() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center w-full gap-2 px-3 py-2.5 mt-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition-all cursor-pointer active:scale-95"
      aria-label="Cambiar idioma"
      title={language === "es" ? "Switch to Spanish" : "Cambiar a Inglés"}
    >
      <Languages className="w-4 h-4 text-blue-400" />
      <span className="uppercase tracking-wider font-mono"> 
        {language === "es" ? "EN" : "ES"}
      </span>
    </button>
  );
}