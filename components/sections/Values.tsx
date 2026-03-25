"use client";

import { motion } from "framer-motion";
import { Shield, Scale, Globe, BadgeCheck, Zap } from "lucide-react";
import Container from "../ui/Container";

const values = [
  {
    title: "Sovereign Trust",
    icon: Shield,
    desc: "Maintaining the absolute security and confidentiality required for high-stakes bullion trade.",
    origin: -100 
  },
  {
    title: "Market Integrity",
    icon: Scale,
    desc: "Rigorous adherence to international AML/KYC standards and ethical market execution.",
    origin: 100 
  },
  {
    title: "Global Logistics",
    icon: Globe,
    desc: "Leveraging our SAIF Zone proximity to ensure seamless air-bridge connectivity worldwide.",
    origin: -100 
  },
  {
    title: "Absolute Clarity",
    icon: BadgeCheck,
    desc: "Institutional-grade transparency with real-time Sharjah spot rates and zero hidden slippage.",
    origin: 100 
  },
];

export default function Values() {
  // Diverse Circuit Paths for Variety
  const circuitPaths = [
    { d: "M 0 400 H 1600", dur: 4, delay: 0 },             // Main Horizontal
    { d: "M 200 0 V 200 L 50 350 V 900", dur: 6, delay: 1 }, // L-Shunt Drop Left
    { d: "M 1400 0 V 150 L 1550 300 V 900", dur: 5, delay: 0.5 }, // L-Shunt Drop Right
    { d: "M 1600 500 H 1200 L 1000 650 H 0", dur: 7, delay: 2 }, // Mid Angular
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#050505] overflow-hidden relative border-t border-white/5 bg-floor-industrial">
      
      {/* ── 1. VARIETY CIRCUIT INFRASTRUCTURE ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 1600 800" fill="none" preserveAspectRatio="none">
          {circuitPaths.map((path, i) => (
            <g key={i}>
              <path d={path.d} stroke="#D4AF37" strokeWidth="0.5" opacity="0.3" />
              <motion.path 
                d={path.d} 
                stroke="url(#valuesPulse)" 
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0.1, pathOffset: 0 }}
                animate={{ pathOffset: [0, 2] }}
                transition={{ duration: path.dur, repeat: Infinity, ease: "linear", delay: path.delay }}
              />
            </g>
          ))}

          <defs>
            <linearGradient id="valuesPulse" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#F9E498" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Container className="relative z-10">
        {/* Header - Responsive Sizing */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <Zap size={14} className="text-gold animate-pulse" />
            <span className="text-gold font-audiowide tracking-[0.6em] text-[8px] lg:text-[10px] uppercase">
              The Zanora Standard
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-audiowide text-4xl md:text-5xl lg:text-7xl text-white uppercase tracking-tighter leading-[1.1]"
          >
            Foundations of <span className="gold-specular italic animate-shimmer">Excellence</span>
          </motion.h2>
        </div>

        {/* ── 2. ANIMATED VALUES GRID (Responsive Layout) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {values.map((v, index) => {
            const Icon = v.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: v.origin, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 1, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="group relative bg-[#0A0A0A]/90 backdrop-blur-xl p-8 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] border border-white/5 text-center overflow-hidden hover:border-gold/30 transition-all duration-700 shadow-2xl"
              >
                {/* HUD Indexing */}
                <span className="absolute top-4 right-6 lg:top-6 lg:right-8 font-nasal text-[8px] lg:text-[10px] text-gray-800 tracking-widest group-hover:text-gold/20 transition-colors">
                  NODE_0{index + 1}
                </span>

                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-8 lg:mb-10 border border-white/10 group-hover:bg-gold group-hover:text-black transition-all duration-700 relative shadow-[0_0_15px_rgba(212,175,55,0.05)]">
                   <div className="absolute inset-0 bg-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Icon 
                    className="text-gold group-hover:text-black transition-all duration-500 relative z-10" 
                    size={26} 
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="font-audiowide text-xs lg:text-sm mb-4 text-white tracking-[0.2em] uppercase">
                  {v.title}
                </h3>
                
                <p className="text-gray-500 text-[11px] lg:text-[12px] font-body leading-relaxed px-2 group-hover:text-gray-300 transition-colors">
                  {v.desc}
                </p>

                {/* Internal Scanline Sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/[0.03] to-transparent -translate-x-full group-hover:animate-[sweep_2s_linear_infinite] pointer-events-none" />
                
                {/* Active Status Pulse */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="w-1 h-1 rounded-full bg-gold animate-ping" />
                  <span className="text-[7px] text-gold font-nasal tracking-[0.4em] uppercase whitespace-nowrap">Verified Protocol</span>
                </div>
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