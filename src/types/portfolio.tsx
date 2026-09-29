export type Language = "es" | "en";

// Tipo auxiliar para cualquier campo traducible
export type Localized<T = string> = {
  es: T;
  en: T;
};

// Interface base con los campos comunes (title, description, tools, period)
export interface BasePortfolioItem {
  id: string;
  title: Localized<string>;
  description: Localized<string>;
  period: Localized<string>;
  tools: Localized<string[]>; // O string[] si los nombres de tecnología no cambian
}

// Interface para Experiencia Laboral (agrega role y company)
export interface ExperienceItem extends BasePortfolioItem {
  role: Localized<string>;
}

// Interface para Proyectos Destacados
export interface ProjectItem extends BasePortfolioItem {
  role?: Localized<string>; // Opcional por si en un proyecto desempeñaste un rol específico
  link?: string;
  githubUrl?: string;
  featured?: boolean;
}