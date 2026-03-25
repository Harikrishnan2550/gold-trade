"use client";
import { motion } from "framer-motion";

export default function QuantumBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#050505] overflow-hidden">
      {/* ── 1. ROBOTIC CIRCUIT GRID ── */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        
        {/* Vertical Robotic Beams */}
        <line x1="20%" y1="0" x2="20%" y2="100%" stroke="url(#lineGrad)" strokeWidth="0.5" strokeDasharray="10 20" />
        <line x1="80%" y1="0" x2="80%" y2="100%" stroke="url(#lineGrad)" strokeWidth="0.5" strokeDasharray="10 20" />
        
        {/* Animated Data Pulses */}
        <motion.path
          d="M 20% 0 V 1000"
          stroke="#F9E498"
          strokeWidth="2"
          strokeDasharray="50 400"
          animate={{ strokeDashoffset: [450, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* ── 2. FLOATING SPARKLES (EMBERS) ── */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="ember animate-ember"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${100 + Math.random() * 20}%`,
            width: `${1 + Math.random() * 3}px`,
            height: `${1 + Math.random() * 3}px`,
            // @ts-ignore
            "--duration": `${8 + Math.random() * 12}s`,
            "--delay": `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* ── 3. SCANNING HORIZONTAL RADAR ── */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold/20 to-transparent animate-scan-line" />
    </div>
  );
}