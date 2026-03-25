"use client";

import { motion } from "framer-motion";
import { PhoneCall, Users, BarChart3, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import Container from "../ui/Container";

const steps = [
  {
    title: "Institutional Inquiry",
    desc: "Connect with our SAIF Zone trading desk via secure, encrypted channels.",
    icon: PhoneCall,
    label: "NODE.AE.01",
  },
  {
    title: "Onboarding & KYC",
    desc: "Verified consultation to align with global AML and volume requirements.",
    icon: Users,
    label: "KYC.ALPHA",
  },
  {
    title: "Market Execution",
    desc: "Real-time bullion trading at live Sharjah spot rates with zero slippage.",
    icon: BarChart3,
    label: "EXECUTE.BETA",
  },
  {
    title: "Secure Clearing",
    desc: "Fully insured physical settlement and global air-side asset transit.",
    icon: ShieldCheck,
    label: "CLEAR.GAMMA",
  },
];

const ProcessEmbers = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="ember animate-ember"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${75 + Math.random() * 25}%`,
            width: `${1 + Math.random() * 3}px`,
            height: `${1 + Math.random() * 3}px`,
            // @ts-ignore
            "--duration": `${5 + Math.random() * 8}s`,
            "--delay": `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default function Process() {
  // Diverse Circuit Paths for Variety
  const circuitPaths = [
    { d: "M 0 150 H 1600", dur: 4, delay: 0 },             // Main Horizontal
    { d: "M 250 0 V 150 L 400 300 V 800", dur: 6, delay: 1 }, // L-Shunt Drop
    { d: "M 1350 0 V 120 L 1500 250 V 800", dur: 5, delay: 0.5 }, // L-Shunt Drop Right
    { d: "M 1600 450 H 1200 L 1000 600 H 0", dur: 7, delay: 1.5 }, // Mid Angular
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-[#050505] bg-floor-industrial">
      
      {/* ── BACKGROUND EFFECTS ── */}
      <ProcessEmbers />
      
      {/* ── 1. VARIETY CIRCUIT INFRASTRUCTURE ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 1600 800" fill="none" preserveAspectRatio="none">
          {circuitPaths.map((path, i) => (
            <g key={i}>
              <path d={path.d} stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="10 10" />
              <motion.path 
                d={path.d} 
                stroke="url(#processPulse)" 
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0.1, pathOffset: 0 }}
                animate={{ pathOffset: [0, 1.5] }}
                transition={{ duration: path.dur, repeat: Infinity, ease: "linear", delay: path.delay }}
              />
            </g>
          ))}
          <defs>
            <linearGradient id="processPulse" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#F9E498" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ── FLOATING ARTIFACT (The Stone) ── */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -left-20 z-0 opacity-25 mask-gold-nugget pointer-events-none blur-[2px]"
      >
        <Image src="/gold-nugget.png" alt="Artifact" width={200} height={200} className="lg:w-[300px]" />
      </motion.div>

      <Container className="relative z-10">
        <div className="text-center mb-16 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <Zap size={14} className="text-gold opacity-60 animate-pulse" />
            <span className="text-gold font-audiowide tracking-[0.4em] text-[8px] lg:text-[10px] uppercase">
              Operational Protocol
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-audiowide text-4xl md:text-6xl lg:text-8xl text-white uppercase tracking-tighter leading-[1.2] lg:leading-[1.1] overflow-visible"
          >
            Execution <br />
            <span className="relative inline-flex items-center overflow-visible"> 
              <span className="text-gold-gradient italic pr-4 py-2 -mr-4 block overflow-visible">
                Workflow
              </span>
            </span>
          </motion.h2>

          <p className="text-gray-500 mt-8 lg:mt-10 max-w-xl mx-auto text-base lg:text-xl font-body leading-relaxed px-4">
            An institutional-grade framework designed for the secure and 
            efficient movement of high-value bullion assets.
          </p>
        </div>

        {/* ── 2. PROCESS GRID (Responsive Layout) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group relative p-8 lg:p-10 bg-[#080808]/80 border border-white/5 rounded-2xl backdrop-blur-xl hover:border-gold/40 transition-all duration-500 overflow-hidden"
              >
                <span className="absolute top-4 left-4 font-nasal text-[8px] text-gray-600 tracking-widest uppercase group-hover:text-gold/50 transition-colors">
                  {step.label}
                </span>

                <div className="relative mb-10 w-24 h-24 lg:w-28 lg:h-28 flex items-center justify-center mx-auto">
                    <div className="absolute inset-0 rounded-full bg-gold/5 animate-pulse border border-gold/10 group-hover:border-gold/50 transition-all duration-500" />
                    <div className="absolute top-0 right-0 w-7 h-7 lg:w-8 lg:h-8 bg-gold text-black font-audiowide text-xs flex items-center justify-center rounded-sm group-hover:bg-white transition-colors">
                      {index + 1}
                    </div>
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center z-10 group-hover:border-gold transition-all duration-500 shadow-[0_0_15px_rgba(212,175,55,0.05)]">
                        <Icon className="text-gold group-hover:scale-110 transition-transform" size={28} />
                    </div>
                </div>

                <h3 className="font-audiowide text-base lg:text-lg mb-4 text-white uppercase tracking-wider group-hover:text-gold transition-colors duration-500">
                  {step.title}
                </h3>

                <p className="text-gray-500 text-[11px] leading-relaxed max-w-[200px] mx-auto font-body group-hover:text-gray-300 transition-colors">
                  {step.desc}
                </p>
                
                {/* Internal Scanline */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.04] to-transparent h-1/2 -translate-y-full group-hover:animate-[scan_3s_linear_infinite] pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </Container>

      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
}