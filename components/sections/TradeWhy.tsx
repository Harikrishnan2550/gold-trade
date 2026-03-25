"use client";

import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck, Users, ArrowRight, Zap } from "lucide-react";
import Container from "../ui/Container";

const points = [
  {
    title: "Secure Clearing",
    desc: "Institutional-grade protocols and SAIF Zone compliant clearing systems for every physical bullion transaction.",
    icon: ShieldCheck,
  },
  {
    title: "Licensed Entity",
    desc: "A foundation of reliability built on absolute transparency and regulated Sharjah-based operations.",
    icon: BadgeCheck,
  },
  {
    title: "Expert Trading Desk",
    desc: "Our bullion specialists bring decades of collective UAE and global market expertise to your asset portfolio.",
    icon: Users,
  },
];

const TradeSparks = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    {[...Array(12)].map((_, i) => (
      <div
        key={i}
        className="ember animate-ember"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: '1px',
          height: '1px',
          // @ts-ignore
          "--duration": `${4 + Math.random() * 6}s`,
          "--delay": `${Math.random() * 3}s`,
        }}
      />
    ))}
  </div>
);

export default function TradeWhy() {
  // Diverse Circuit Paths for Variety
  const circuitPaths = [
    { d: "M-100 320 H1700", dur: 5, delay: 0 },             // Main Horizontal
    { d: "M 200 0 V 250 L 50 400 V 900", dur: 7, delay: 1 },  // L-Shunt Drop
    { d: "M 1350 0 V 150 L 1500 300 V 900", dur: 6, delay: 0.5 }, // L-Shunt Right
    { d: "M 1600 550 H 1200 L 1050 700 H 0", dur: 8, delay: 1.5 }, // Mid Angular
  ];

  return (
    <section className="py-20 lg:py-40 bg-[#050505] relative overflow-hidden bg-floor-industrial border-t border-white/5">
      
      {/* ── 1. VARIETY CIRCUIT INFRASTRUCTURE ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
        <svg width="100%" height="100%" viewBox="0 0 1600 800" fill="none" preserveAspectRatio="none">
          {circuitPaths.map((path, i) => (
            <g key={i}>
              <path d={path.d} stroke="#D4AF37" strokeWidth="1.5" opacity="0.1" />
              <motion.path 
                d={path.d} 
                stroke="url(#tradeGridPulse)" 
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0.1, pathOffset: 0 }}
                animate={{ pathOffset: [0, 1.5] }}
                transition={{ duration: path.dur, repeat: Infinity, ease: "linear", delay: path.delay }}
              />
            </g>
          ))}
          <defs>
            <linearGradient id="tradeGridPulse" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#F9E498" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <TradeSparks />

      <Container className="relative z-10">
        {/* ── 2. SECTION HEADER (Responsive) ── */}
        <div className="text-center mb-16 lg:mb-24 px-4">
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-6 lg:w-8 bg-gold/30" />
            <span className="text-gold font-audiowide tracking-[0.4em] lg:tracking-[0.5em] text-[8px] lg:text-[10px] uppercase whitespace-nowrap">
              The Zanora Standard
            </span>
            <div className="h-px w-6 lg:w-8 bg-gold/30" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="font-audiowide text-4xl md:text-5xl lg:text-7xl text-white tracking-tighter uppercase leading-[1.1] overflow-visible"
          >
            Why Partner <br />
            <span className="relative inline-flex items-center overflow-visible">
              <span className="gold-specular italic font-black pr-4 py-2 -mr-4 block overflow-visible">
                With Zanora
              </span>
            </span>
          </motion.h2>
        </div>

        {/* ── 3. CARD GRID (Fully Responsive) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {points.map((point, index) => {
            const Icon = point.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, filter: "blur(15px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 1, 
                  delay: index * 0.15,
                  ease: "easeOut" 
                }}
                className="group relative p-8 lg:p-12 rounded-[2rem] lg:rounded-[2.5rem] border border-white/5 bg-[#080808]/90 backdrop-blur-3xl hover:border-gold/40 transition-all duration-700 shadow-2xl text-center overflow-hidden"
              >
                {/* HUD Scanning Layer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/[0.04] to-transparent -translate-x-full group-hover:animate-[sweep_2.5s_linear_infinite] pointer-events-none" />

                {/* Robotic Icon Node */}
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-8 lg:mb-10 border border-white/10 group-hover:bg-gold transition-all duration-500 relative overflow-hidden shrink-0 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                  <Icon className="text-gold group-hover:text-black group-hover:scale-110 transition-all duration-500 relative z-10 w-7 h-7 lg:w-8 lg:h-8" />
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </div>

                <h3 className="font-audiowide text-base lg:text-lg mb-4 lg:mb-5 text-white tracking-widest uppercase group-hover:text-gold transition-colors">
                  {point.title}
                </h3>

                <p className="text-gray-500 text-[10px] lg:text-[11px] leading-relaxed font-body mb-8 lg:mb-10 group-hover:text-gray-300 transition-colors px-2">
                  {point.desc}
                </p>

                {/* Status Identifier */}
                <div className="inline-flex items-center gap-3 text-gold/40 group-hover:text-gold transition-all duration-500 group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100">
                  <Zap size={12} className="animate-pulse" />
                  <span className="text-[9px] lg:text-[10px] font-nasal uppercase tracking-[0.3em]">Verified Protocol</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Bottom Bold Line */}
                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gold shadow-[0_0_20px_#D4AF37] group-hover:w-full transition-all duration-1000" />
              </motion.div>
            );
          })}
        </div>
      </Container>

      <style jsx global>{`
        @keyframes sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </section>
  );
}