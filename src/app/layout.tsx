

import { LanguageProvider } from "@/components/providers/LanguageContext";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";


const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Joel Dorantes | Software Engineer | Data Analyst",
  description: "Portafolio profesional de Joel Ernesto Dorantes Guerrero",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={jetbrainsMono.variable}>
        <LanguageProvider>
        {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
