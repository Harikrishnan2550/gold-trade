"use client";

import { motion } from "framer-motion";
import { Zap, Activity } from "lucide-react";
import Container from "../ui/Container";

export default function ContactHero() {
  // Diverse Circuit Path Definitions for Variety
  const circuitPaths = [
    { d: "M -100 320 H 1700", dur: 4, delay: 0 },             // Main Horizontal
    { d: "M 400 0 V 200 L 550 350 H 1700", dur: 6, delay: 1 }, // L-Shunt Angular
    { d: "M 1200 0 V 150 L 1050 300 H -100", dur: 5, delay: 0.5 }, // Inverse Angular
    { d: "M 0 500 H 400 L 500 650 V 900", dur: 7, delay: 2 },  // Drop Shunt
  ];

  return (
    <section className="relative pt-40 lg:pt-64 pb-20 lg:pb-32 overflow-hidden bg-[#050505] bg-floor-industrial border-b border-white/5">
      
      {/* ── 1. MULTI-VECTOR CIRCUIT INFRASTRUCTURE ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <svg width="100%" height="100%" viewBox="0 0 1600 800" fill="none" preserveAspectRatio="none">
          {circuitPaths.map((path, i) => (
            <g key={i}>
              <path d={path.d} stroke="#D4AF37" strokeWidth="1.5" opacity="0.1" />
              <motion.path
                d={path.d}
                stroke={i % 2 === 0 ? "url(#hPulse)" : "url(#dPulse)"}
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0.1, pathOffset: 0 }}
                animate={{ pathOffset: [0, 1.5] }}
                transition={{ duration: path.dur, repeat: Infinity, ease: "linear", delay: path.delay }}
              />
            </g>
          ))}

          <defs>
            <linearGradient id="hPulse" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#F9E498" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="dPulse" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Container className="relative z-10 text-center">
        
        {/* ── 2. STATUS BADGE (Responsive) ── */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          className="inline-flex items-center gap-3 lg:gap-4 px-4 lg:px-6 py-2 rounded-sm bg-gold/5 border border-gold/20 mb-10 lg:mb-12 backdrop-blur-xl shadow-[0_0_20px_rgba(212,175,55,0.05)]"
        >
          <div className="relative flex h-2.5 w-2.5 lg:h-3 lg:w-3">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
             <span className="relative inline-flex rounded-full h-2.5 w-2.5 lg:h-3 lg:w-3 bg-green-500" />
          </div>
          <span className="text-gold font-audiowide text-[8px] lg:text-[10px] uppercase tracking-[0.3em] lg:tracking-[0.4em] whitespace-nowrap">
            Zanora Terminal: Direct Link Active
          </span>
        </motion.div>

        {/* ── 3. HEADING (Responsive + Italic Fix) ── */}
        <motion.h1
          initial={{ opacity: 0, filter: "blur(25px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-audiowide text-5xl md:text-7xl lg:text-[120px] tracking-tighter leading-[1.1] lg:leading-[0.85] text-white uppercase px-4 lg:px-0 overflow-visible"
        >
          Get in <br />
          <span className="relative inline-flex items-center overflow-visible">
            <span className="gold-specular italic  italic font-black pr-4 py-2 -mr-4 block overflow-visible">
              Touch
            </span>
          </span>
        </motion.h1>

        {/* ── 4. SUBTEXT ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-gray-500 mt-8 lg:mt-12 max-w-3xl mx-auto text-base lg:text-2xl font-body leading-relaxed border-l-0 lg:border-l border-white/5 lg:pl-8 text-center px-4"
        >
          Initiate contact with our SAIF Zone trading desk. 
          Expert consultation for institutional bullion movements 
          and professional wealth preservation.
        </motion.p>

        {/* ── 5. DATA INDICATOR ── */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 lg:mt-28 flex flex-col items-center gap-6"
        >
           <div className="w-[1px] h-16 lg:h-20 bg-white/5 overflow-hidden rounded-full">
              <motion.div 
                animate={{ y: [-80, 80] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-full h-1/2 bg-gradient-to-b from-transparent via-gold to-transparent"
              />
           </div>
           
           <div className="flex flex-wrap justify-center gap-4 lg:gap-8 text-gray-700 font-nasal text-[8px] lg:text-[9px] uppercase tracking-[0.3em] lg:tracking-[0.4em] px-4">
             <div className="flex items-center gap-2">
                <Activity size={10} className="text-gold/40 animate-pulse" />
                <span>SECURE.CHANNEL</span>
             </div>
             <span className="hidden sm:block">•</span>
             <span>SAIF AUTHORITY COMPLIANT</span>
             <span className="hidden sm:block">•</span>
             <span>GLOBAL DESK ACTIVE</span>
           </div>
        </motion.div>

      </Container>
    </section>
  );
}