import { Hero } from "@/components/sections/hero";

export function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-md transition-shadow">
        <a
          href="mailto:joelbatman18@gmail.com" 
          className="text-blue-600 font-medium mt-1">
            joelbatman18@gmail.com
          </a>
          <a
          href="https://www.linkedin.com/in/joel-ernesto-dorantes-guerrero-72b7841a2/"
          target="_blank"
            rel="noopener noreferrer"
          className="text-white-600 font-medium mt-1 hover:text-blue-600 transition-colors">
            Linkedin
          </a>
          <h2 className="text-3xl font-bold mb-8">Visualiza o descarga mi CV</h2>
            <Hero /> 
        </div>
         
      </div>
    
  );
}