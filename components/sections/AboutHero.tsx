"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, ShieldCheck, Activity } from "lucide-react";
import Container from "../ui/Container";

const AboutSparks = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="ember animate-ember"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${70 + Math.random() * 30}%`,
            width: '2px',
            height: '2px',
            // @ts-ignore
            "--duration": `${4 + Math.random() * 6}s`,
            "--delay": `${Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
};

export default function AboutHero() {
  // Diverse Circuit Path Definitions for Variety
  const circuitPaths = [
    { d: "M 0 400 H 1600", dur: 4, delay: 0 },             // Main Horizontal
    { d: "M 300 0 V 200 L 100 400 V 900", dur: 6, delay: 1 }, // L-Shunt Drop
    { d: "M 1300 0 V 150 L 1500 350 V 900", dur: 5, delay: 0.5 }, // L-Shunt Right
    { d: "M 1600 200 H 1200 L 1100 300 H 0", dur: 7, delay: 2 }, // Angular Reverse
  ];

  return (
    <section className="relative pt-40 lg:pt-64 pb-32 lg:pb-48 overflow-hidden bg-[#050505] bg-floor-industrial">
      
      {/* ── 1. VARIETY CIRCUIT INFRASTRUCTURE ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <svg width="100%" height="100%" viewBox="0 0 1600 800" fill="none" preserveAspectRatio="none">
          {circuitPaths.map((path, i) => (
            <g key={i}>
              <path d={path.d} stroke="#D4AF37" strokeWidth="1.5" opacity="0.1" />
              <motion.path
                d={path.d}
                stroke="url(#heroPulse)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.1, pathOffset: 0 }}
                animate={{ pathOffset: [0, 1.5] }}
                transition={{ duration: path.dur, repeat: Infinity, ease: "linear", delay: path.delay }}
              />
            </g>
          ))}
          <defs>
            <linearGradient id="heroPulse" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#F9E498" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <AboutSparks />
      
      {/* ── 2. FLOATING ASSET (Responsive sizing) ── */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 15, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-[5%] lg:right-[10%] z-0 opacity-20 lg:opacity-30 mask-gold-nugget blur-[1px]"
      >
        <Image src="/gold-nugget.png" alt="Artifact" width={280} height={280} className="w-[150px] lg:w-[280px]" />
      </motion.div>

      <Container className="relative z-10">
        {/* Active Protocol Header */}
        <div className="flex flex-col items-center mb-10 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-4 px-4 lg:px-6 py-2 bg-gold/5 border border-gold/20 rounded-sm backdrop-blur-xl"
          >
            <ShieldCheck size={14} className="text-gold animate-pulse" />
            <span className="font-audiowide text-[8px] lg:text-[9px] text-gold uppercase tracking-[0.4em] whitespace-nowrap">
              Clearance.Level_01
            </span>
          </motion.div>
        </div>

        {/* Cinematic Title - Fully Responsive */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(15px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-audiowide text-5xl md:text-7xl lg:text-[120px] leading-[1.1] lg:leading-[0.85] text-white uppercase tracking-tighter text-center"
        >
          Institutional <br />
          <span className="gold-specular italic font-black">Authority</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-gray-500 mt-8 lg:mt-12 max-w-2xl mx-auto text-base lg:text-2xl font-body leading-relaxed text-center px-4"
        >
          Zanora FZC operates as a primary clearing node within the SAIF Zone, 
          engineering high-velocity bullion pathways for global capital.
        </motion.p>

        {/* ── 3. CIRCULAR RADAR SCAN INDICATOR ── */}
        <div className="mt-20 lg:mt-32 flex justify-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center group cursor-pointer"
          >
            <div className="absolute inset-0 border border-gold/20 rounded-full group-hover:border-gold/50 transition-colors" />
            <div className="absolute inset-0 border-t-2 border-gold rounded-full animate-spin-slow" />
            <div className="w-2 h-2 bg-gold rounded-full animate-ping" />
            
            <span className="absolute -bottom-10 whitespace-nowrap font-nasal text-[8px] lg:text-[9px] text-gray-500 uppercase tracking-[0.4em] group-hover:text-gold transition-colors">
              Initialize.Scan
            </span>
          </motion.div>
        </div>
      </Container>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  );
}