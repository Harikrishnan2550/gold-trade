"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Eye, Zap } from "lucide-react";
import Container from "../ui/Container";

const MissionSparks = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="ember animate-ember"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: '2px',
            height: '2px',
            // @ts-ignore
            "--duration": `${5 + Math.random() * 5}s`,
            "--delay": `${Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
};

export default function Mission() {
  // Diverse Circuit Paths for Variety
  const circuitPaths = [
    { d: "M -100 380 L 600 380 L 800 450 L 1700 450", dur: 4, delay: 0 }, // Main Horizontal-Angular
    { d: "M 200 0 V 200 L 50 350 V 900", dur: 6, delay: 1 },             // L-Shunt Drop
    { d: "M 1400 0 V 150 L 1550 300 V 900", dur: 5, delay: 0.5 },       // L-Shunt Right
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-[#050505] bg-floor-industrial border-b border-white/5">
      
      {/* ── 1. VARIETY CIRCUIT INFRASTRUCTURE ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 1600 800" fill="none" preserveAspectRatio="none">
          {circuitPaths.map((path, i) => (
            <g key={i}>
              <motion.path
                d={path.d}
                stroke="#D4AF37"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.4 }}
                transition={{ duration: 1.5, delay: path.delay }}
              />
              <motion.path
                d={path.d}
                stroke="url(#missionPulse)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathOffset: 0, pathLength: 0.1 }}
                animate={{ pathOffset: [0, 1.5] }}
                transition={{ duration: path.dur, repeat: Infinity, ease: "linear", delay: path.delay }}
              />
            </g>
          ))}
          
          <defs>
            <linearGradient id="missionPulse" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#F9E498" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <MissionSparks />

      <Container className="relative z-10">
        
        {/* ── 2. THE FLOATING ARTIFACT (Responsive sizing) ── */}
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, 10, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-10 lg:opacity-15 mask-gold-nugget pointer-events-none blur-[1px]"
        >
          <Image src="/gold-nugget.png" alt="Artifact" width={200} height={200} className="lg:w-[280px]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 relative">
          
          {/* ── 3. MISSION CARD (Responsive Padding) ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="group relative bg-[#080808]/80 backdrop-blur-3xl border border-white/5 p-8 lg:p-16 rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden hover:border-gold/30 transition-all duration-700"
          >
            <div className="absolute top-6 right-8 lg:top-8 lg:right-12 flex items-center gap-2">
              <span className="font-nasal text-[7px] lg:text-[8px] text-gray-600 tracking-widest uppercase">ID: PROTOCOL_01</span>
              <div className="w-1.5 h-1.5 rounded-full bg-gold/20 group-hover:bg-gold animate-pulse" />
            </div>

            <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 lg:mb-10 border border-white/10 group-hover:bg-gold transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
              <Target size={28} className="text-gold group-hover:text-black transition-colors" />
            </div>

            <h3 className="font-audiowide text-2xl lg:text-3xl mb-4 lg:mb-6 text-white uppercase tracking-tighter">
              Institutional <span className="gold-specular italic animate-shimmer">Mission</span>
            </h3>

            <p className="text-gray-500 text-sm lg:text-lg leading-relaxed font-body group-hover:text-gray-300 transition-colors">
              To provide institutional-grade bullion execution anchored in the 
              regulatory framework of the <span className="text-white font-medium">SAIF Zone Authority</span>. 
              We are committed to transparent pricing and absolute asset security.
            </p>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.03] to-transparent h-1/2 -translate-y-full group-hover:animate-[scan_3s_linear_infinite] pointer-events-none" />
          </motion.div>

          {/* ── 4. VISION CARD (Responsive Delay) ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="group relative bg-[#080808]/80 backdrop-blur-3xl border border-white/5 p-8 lg:p-16 rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden hover:border-gold/30 transition-all duration-700"
          >
            <div className="absolute top-6 right-8 lg:top-8 lg:right-12 flex items-center gap-2">
              <span className="font-nasal text-[7px] lg:text-[8px] text-gray-600 tracking-widest uppercase">ID: PROTOCOL_02</span>
              <div className="w-1.5 h-1.5 rounded-full bg-gold/20 group-hover:bg-gold animate-pulse" />
            </div>

            <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 lg:mb-10 border border-white/10 group-hover:bg-gold transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
              <Eye size={28} className="text-gold group-hover:text-black transition-colors" />
            </div>

            <h3 className="font-audiowide text-2xl lg:text-3xl mb-4 lg:mb-6 text-white uppercase tracking-tighter">
              Strategic <span className="gold-specular italic animate-shimmer">Vision</span>
            </h3>

            <p className="text-gray-500 text-sm lg:text-lg leading-relaxed font-body group-hover:text-gray-300 transition-colors">
              To redefine the Sharjah bullion circuit as a global benchmark. By integrating <span className="text-white font-medium">strategic air-logistics</span> with modern financial agility, we aim to be the primary gateway.
            </p>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.03] to-transparent h-1/2 -translate-y-full group-hover:animate-[scan_3s_linear_infinite] pointer-events-none" />
          </motion.div>

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