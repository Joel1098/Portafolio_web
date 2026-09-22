"use client";

import { Code2, Menu, X } from "lucide-react";
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
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detecta el desplazamiento para ajustar sombras y padding dinámicamente
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
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5"
          : "bg-white/60 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO / NOMBRE */}
        <a 
          href="#inicio" 
          className="flex items-center gap-2 text-slate-900 font-bold text-lg tracking-tight hover:text-blue-600 transition-colors"
        >
          <div className="p-1.5 bg-slate-900 text-white rounded-lg">
            <Code2 className="w-4 h-4" />
          </div>
          <span>Joel Dorantes</span>
        </a>

        {/* NAVEGACIÓN ESCRITORIO */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-lg transition-all"
            >
              {item.name}
            </a>
          ))}

          {/* Botón Destacado de Contacto */}
          <a
            href="#contacto"
            className="ml-3 px-4 py-2 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-all shadow-sm hover:shadow"
          >
            Contacto
          </a>
        </nav>

        {/* BOTÓN MENÚ MÓVIL */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Abrir menú de navegación"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {isOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex flex-col gap-2 shadow-lg animate-in slide-in-from-top-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-2.5 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg font-medium transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="mt-2 text-center px-4 py-2.5 text-white bg-slate-900 hover:bg-slate-800 rounded-lg font-medium transition-colors shadow-sm"
          >
            Contacto
          </a>
        </nav>
      )}
    </header>
  );
}