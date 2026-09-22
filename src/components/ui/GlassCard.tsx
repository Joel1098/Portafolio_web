"use client";

import { twClassNames } from "@/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function GlassCard({ children, className = "", onClick }: GlassCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      onClick={onClick}
      className={twClassNames(
        "relative group overflow-hidden rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 p-6 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/40 transition-all duration-300",
        className
      )}
    >
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}