"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60 shadow-lg shadow-black/20 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo / Nombre */}
        <a
          href="#inicio"
          className="flex items-center gap-2 text-white font-bold tracking-tight text-lg group"
        >
          <span>
            Joel<span className="text-blue-400">Dorantes</span>
          </span>
        </a>

        {/* Links Escritorio */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/50 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-full transition-all"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Botón CTA derecho (Escritorio) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contacto"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-md shadow-blue-600/20 active:scale-95"
          >
            <span>Hablemos</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Botón Menú Móvil */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900/60 border border-slate-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Menú Desplegable Móvil */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 mt-2 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-800/60 hover:text-blue-400 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 transition-colors"
            >
              <span>Hablemos</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}