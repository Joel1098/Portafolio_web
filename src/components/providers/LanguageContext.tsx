"use client";

import React, { useSyncExternalStore } from "react";

export type Language = "es" | "en";

export const dictionary = {
  es: {
    nav_home: "Inicio",
    nav_about: "Resumen",
    nav_skills: "Habilidades",
    nav_experience: "Experiencia",
    nav_projects: "Proyectos",
    nav_education: "Educación",
    nav_contact: "Contacto",
    view_cv: "Ver CV",
    download_cv: "Descargar CV",
    experience_title: "Experiencia Profesional",
    projects_title: "Proyectos Personales",
    professional_projects_title: "Proyectos Escolares y Laborales",
    contact_label: "Puedes ponerte en contacto conmigo por estos medios:",
    cv_label: "Aquí puedes descargar mi currículum:",
    skills_title: "Habilidades técnicas y área de especialización",
    top_button: "Volver al inicio",
    rights_reserved: "Todos los derechos reservados",
    send_email: "Enviar Correo Electrónico",
    description_title: "Descripción",
    education_title: "Título en Ingeniería en Sistemas Computacionales",
    view_repository: "Ver Repositorio",
    contact_description: "Me encuentro en busca de nuevas oportunidades dentro dentro de la Ingeniería y Análisis de Datos. Ponte en contacto conmigo, estoy abierto a roles en cualquier modalidad, y me comprometo a responder rápidamente a tus mensajes."

    
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_education: "Education",
    nav_contact: "Contact",
    view_cv: "View Resume",
    view_repository: "View Repository",
    download_cv: "Download CV",
    experience_title: "Professional Experience",
    projects_title: "Personal Projects",
    professional_projects_title: "Academic and Professional Projects",
    contact_label: "You can get in touch with me through these channels:",
    cv_label: "Here you can download my resume:",
    skills_title: "Technical skills and area of specialization",
    top_button: "Back to top",
    rights_reserved: "All rights reserved",
    send_email: "Send Email",
    description_title: "Description",
    education_title: "Bachelor's Degree in Computer Systems Engineering",
    contact_description: "I am seeking new opportunities in the field of Engineering and Data Analysis. Feel free to reach out to me, I am open to roles in any modality, and I commit to responding promptly to your messages."
  },
} as const;

export type DictionaryKey = keyof typeof dictionary.es;

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: DictionaryKey) => string;
}

const LanguageContext = React.createContext<LanguageContextProps | null>(null);

// 1. Escucha eventos de cambio en el almacenamiento local o eventos personalizados
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("local-storage-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("local-storage-change", callback);
  };
}

// 2. Lee el estado directamente desde localStorage en el cliente
function getSnapshot(): Language {
  if (typeof window === "undefined") return "es";
  const saved = localStorage.getItem("portfolio_lang");
  return saved === "es" || saved === "en" ? saved : "es";
}

// 3. Define el valor por defecto seguro para el renderizado del servidor (Next.js SSR)
function getServerSnapshot(): Language {
  return "es";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // useSyncExternalStore conecta localStorage con React sin usar useState ni useEffect
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLanguage = (lang: Language) => {
    try {
      localStorage.setItem("portfolio_lang", lang);
      // Notifica a la suscripción para refrescar la UI al instante
      window.dispatchEvent(new Event("local-storage-change"));
    } catch {
      // Manejo de excepciones si localStorage está deshabilitado
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  const t = (key: DictionaryKey) => {
    return dictionary[language][key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
  }
  return context;
}