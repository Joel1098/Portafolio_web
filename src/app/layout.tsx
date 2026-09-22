
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Joel Dorantes | Software Engineer | Data Analyst",
  description: "Portafolio profesional de Ingeniería de Datos y Desarrollo Backend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${jakarta.variable} scroll-smooth`}>
      <body className="font-sans bg-slate-950 text-slate-100 antialiased selection:bg-blue-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
