import { clsx, type ClassValue } from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

export function twClassNames(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleSmoothScroll = (
  e: React.MouseEvent<HTMLElement>,
  href: string
) => {
  e.preventDefault();

  // Llevar al inicio o raiz de la pagina
  if (href === "#inicio" || href === "#") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    return;
  }

  // Para cualquier otra seccion por id
  const targetId = href.replace("#", "");
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};