
import { Language, Localized } from "@/types/portfolio";

export function getLocalized<T>(
  field: Localized<T> | undefined | null, 
  lang: Language,
  fallback? : T
): 
  T {
  if (!field) return fallback as T;
  return field[lang] ?? field.es ?? (fallback as T);
}

export { cn } from "cn";

