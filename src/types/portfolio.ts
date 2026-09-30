export type Language = "es" | "en";

// Tipo auxiliar para cualquier campo traducible
export type Localized<T = string> = {
  es: T;
  en: T;
};

// Interface base con los campos comunes (title, description, tools, period)
export interface BasePortfolioItem {
  title?: Localized<string>;
  description?: Localized<string>; // Puede ser un array de strings o un string
  tools?: Localized<string[]>; // O string[] si los nombres de tecnología no cambian
}

// Interface para Experiencia Laboral (agrega role)
export interface ExperienceItem extends Omit<BasePortfolioItem, "description"> {
  role: Localized<string>;
  company: Localized<string>;
  period: Localized<string>;
  description: Localized<string[]>;
}

export interface ProjectsItem extends BasePortfolioItem {
  link?: string; // Enlace al proyecto
}

export interface ProfessionalProjectsItem extends Omit<BasePortfolioItem, "description"> {
  description: Localized<string[]>; // Puede ser un array de strings o un string
}

export interface SkillsItem extends BasePortfolioItem {
  icon?: string;
}

export interface AboutItem {
  description: Localized<string[]>;

}