"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, Activity } from "lucide-react";
import Container from "../ui/Container";

// ── LOCAL PARTICLE COMPONENT: DATA EMBERS ──
const MarketSparks = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="ember animate-ember"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${70 + Math.random() * 30}%`,
            width: '2px',
            height: '2px',
            // @ts-ignore
            "--duration": `${5 + Math.random() * 7}s`,
            "--delay": `${Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
};

export default function MarketsHero() {
  // Diverse Circuit Path Definitions for Variety
  const circuitPaths = [
    { d: "M -100 350 H 1700", dur: 4, delay: 0 },             // Main Horizontal
    { d: "M 300 0 V 200 L 150 350 V 900", dur: 6, delay: 1 },  // L-Shunt Drop
    { d: "M 1300 0 V 150 L 1450 300 V 900", dur: 5, delay: 0.5 }, // L-Shunt Right
    { d: "M 1600 500 H 1200 L 1050 650 H 0", dur: 7, delay: 1.5 }, // Angular Path
  ];

  return (
    <section className="relative pt-40 lg:pt-64 pb-24 lg:pb-48 overflow-hidden bg-[#050505] bg-floor-industrial border-b border-white/5">
      
      {/* ── 1. VARIETY CIRCUIT INFRASTRUCTURE ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 1600 800" fill="none" preserveAspectRatio="none">
          {circuitPaths.map((path, i) => (
            <g key={i}>
              <motion.path
                d={path.d}
                stroke="#D4AF37"
                strokeWidth="0.8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{ duration: 2, delay: i * 0.1 }}
              />
              <motion.path
                d={path.d}
                stroke="url(#marketPulse)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathOffset: 0, pathLength: 0.1 }}
                animate={{ pathOffset: [0, 1.5] }}
                transition={{ duration: path.dur, repeat: Infinity, ease: "linear", delay: path.delay }}
              />
            </g>
          ))}

          <defs>
            <linearGradient id="marketPulse" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#F9E498" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <MarketSparks />

      <Container className="relative z-10 text-center">
        
        {/* ── 2. FLOATING ARTIFACT (Responsive Sizing) ── */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotateY: [0, 15, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-[5%] lg:right-[15%] z-0 opacity-10 lg:opacity-20 mask-gold-nugget pointer-events-none"
        >
          <Image src="/gold-nugget.png" alt="Market Asset" width={180} height={180} className="blur-[1px] lg:w-[260px]" />
        </motion.div>

        {/* ── 3. TERMINAL STATUS BADGE ── */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          className="inline-flex items-center gap-3 lg:gap-4 px-4 lg:px-6 py-2 rounded-sm bg-gold/5 border border-gold/20 mb-10 lg:mb-12 backdrop-blur-xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-gold font-audiowide text-[8px] lg:text-[10px] uppercase tracking-[0.4em]">
            Sharjah Terminal: Operational
          </span>
        </motion.div>

        {/* ── 4. RESPONSIVE LENS FOCUS HEADING ── */}
        <motion.h1
          initial={{ opacity: 0, filter: "blur(20px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-audiowide text-5xl md:text-7xl lg:text-[120px] tracking-tighter leading-[1.1] lg:leading-[0.85] text-white uppercase px-4 lg:px-0"
        >
          Global <br />
          <span className="gold-specular  italic font-black">Markets</span>
        </motion.h1>

        {/* ── 5. DESCRIPTION ── */}
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-gray-500 mt-8 lg:mt-12 max-w-3xl mx-auto text-base lg:text-2xl font-body leading-relaxed border-l-0 lg:border-l border-white/5 lg:pl-8 text-center"
        >
          Access global bullion liquidity and SAIF Zone regional expertise 
          through Zanora FZC’s high-speed trading infrastructure and 
          institutional data networks.
        </motion.p>

        {/* ── 6. ROBOTIC SCROLL INDICATOR ── */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 lg:mt-28 flex flex-col items-center gap-6"
        >
           <div className="w-[1px] h-16 lg:h-20 bg-white/5 overflow-hidden rounded-full relative">
              <motion.div 
                animate={{ y: [-80, 80] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-full h-1/2 bg-gradient-to-b from-transparent via-gold to-transparent"
              />
           </div>
           
           <div className="flex flex-wrap justify-center gap-4 lg:gap-8 text-gray-700 font-nasal text-[8px] lg:text-[9px] uppercase tracking-[0.3em] lg:tracking-[0.4em] px-4">
             <div className="flex items-center gap-2">
                <Activity size={10} className="text-gold/40" />
                <span>SAIF.NODE_ALPHA</span>
             </div>
             <span className="hidden sm:block">•</span>
             <span className="text-white/20 hover:text-gold transition-colors duration-500 cursor-crosshair">LIVE MARKET FEED</span>
             <span className="hidden sm:block">•</span>
             <span>XAU/USD EXECUTION</span>
           </div>
        </motion.div>

      </Container>
    </section>
  );
}