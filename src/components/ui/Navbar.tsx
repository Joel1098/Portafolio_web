"use client";

import { handleSmoothScroll } from "@/utils";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [

        {name: "Inicio", href: "#inicio"},
        {name: "Resumen", href: "#sobre-mi"},
        {name: "Educación", href: "#educacion"},
        {name: "Habilidades", href: "#habilidades"},
        {name: "Experiencia", href: "#experiencia"},
        {name: "Proyectos", href: "#proyectos"},
        {name: "Contacto", href: "#contacto"},

];
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cvPath = "/cv/CV_Joel_Dorantes.pdf";

  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-3 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto w-full flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/90 backdrop-blur-xl border border-slate-800/80 shadow-2xl shadow-black/50"
            : "bg-slate-900/60 backdrop-blur-md border border-slate-800/50"
        }`}
      >
        <Link href="#inicio" 
        onClick={(e) => handleSmoothScroll(e, "#inicio")}
        className="flex items-center gap-2.5 shrink-0 group">
          
          
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white tracking-wide leading-none">
              Joel<span className="text-blue-400">Dorantes</span>
            </span>
          </div>
        </Link>

        {/* Enlaces de Navegación (Visibles a partir de breakpoint 'sm') */}
        <nav className="hidden sm:flex items-center gap-1 bg-slate-950/40 p-1.5 rounded-xl border border-slate-800/60">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition-all"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Botón CTA (Escritorio) */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <Link
            href={cvPath}
            download="CV_Joel_Dorantes.pdf"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-md shadow-blue-600/20 active:scale-95 border border-blue-400/30"
          >
            <span>Descargar CV</span>
            <Download className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Botón Menú Móvil (Solo pantallas muy pequeñas) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden p-2 text-slate-300 hover:text-white rounded-xl bg-slate-900/80 border border-slate-800"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Menú Desplegable Móvil */}
      {mobileMenuOpen && (
        <div className="sm:hidden max-w-6xl mx-auto mt-2 p-4 rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-slate-800 shadow-2xl space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-900 hover:text-blue-400 transition-all"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full mt-3 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500"
          >
            <span>Contacto</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}