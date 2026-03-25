"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";

export default function CTA() {
  // Diverse Circuit Path Definitions for Variety
  const circuitPaths = [
    { d: "M 0 400 H 1600", dur: 2.5, delay: 0, bold: true }, // Main Horizontal
    { d: "M 300 0 V 200 L 150 350 V 800", dur: 5, delay: 1, bold: false }, // L-Shunt
    { d: "M 1300 0 V 150 L 1450 300 V 800", dur: 4, delay: 0.5, bold: false }, // L-Shunt Right
    { d: "M 1600 500 H 1200 L 1050 650 H 0", dur: 6, delay: 1.5, bold: false }, // Angular
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#050505] overflow-hidden relative">
      
      {/* ── 1. MULTI-VECTOR NEON CIRCUITRY ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <svg width="100%" height="100%" viewBox="0 0 1600 800" fill="none" preserveAspectRatio="none">
          <defs>
            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            <linearGradient id="ctaPulseBright" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#F9E498" /> 
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>

          {circuitPaths.map((path, i) => (
            <g key={i}>
              <path 
                d={path.d} 
                stroke="#D4AF37" 
                strokeWidth={path.bold ? "2" : "1"} 
                opacity="0.2" 
              />
              <motion.path 
                d={path.d} 
                stroke="url(#ctaPulseBright)" 
                strokeWidth={path.bold ? "6" : "3"}
                strokeLinecap="round"
                filter="url(#neonGlow)"
                initial={{ pathLength: 0.1, pathOffset: 0 }}
                animate={{ pathOffset: [0, 2] }}
                transition={{ duration: path.dur, repeat: Infinity, ease: "linear", delay: path.delay }}
              />
            </g>
          ))}
        </svg>
      </div>

      {/* ── 2. FALLING COINS BACKGROUND ── */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 0.6 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute -top-10 -left-10 z-0 pointer-events-none w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] blur-[1px]"
      >
        <Image src="/gold-coins-falling.png" alt="Falling Wealth" fill className="object-contain -rotate-12" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -right-32 z-20 pointer-events-none w-[300px] h-[400px] lg:w-[500px] lg:h-[600px] opacity-90"
      >
        <Image src="/gold-coins-falling1.png" alt="Wealth Influx" fill className="object-contain scale-x-[-1]" />
      </motion.div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, filter: "blur(15px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          // FIXED: Cast ease to 'any' to satisfy Vercel/TypeScript transition requirements
          transition={{ duration: 1, ease: "easeOut" as any }}
          viewport={{ once: true }}
          className="relative bg-[#080808]/90 backdrop-blur-xl border border-white/5 rounded-[2.5rem] lg:rounded-[4rem] p-8 lg:p-24 text-center overflow-hidden group shadow-2xl"
        >
          {/* Internal Glow Accents */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <Zap size={14} className="text-gold animate-pulse" />
              <span className="text-gold font-audiowide text-[8px] lg:text-[10px] uppercase tracking-[0.5em]">
                Secure Terminal Connection
              </span>
            </motion.div>

            {/* FIXED HEADING TO PREVENT SLANTED CLIPPING */}
            <h2 className="font-audiowide text-4xl md:text-6xl lg:text-8xl leading-[1.1] lg:leading-[0.85] text-white tracking-tighter mb-8 lg:mb-10 uppercase overflow-visible">
              Execute Bullion <br />
              <span className="relative inline-flex items-center overflow-visible">
                <span className="text-gold-gradient italic pr-4 py-2 -mr-4 block overflow-visible">
                  With Zanora
                </span>
              </span>
            </h2>

            <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-base lg:text-xl font-body leading-relaxed px-4 lg:px-0">
              Connect with our SAIF Zone institutional desk today. Protect your 
              wealth with investment-grade assets and transparent global execution.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6 mt-12 lg:mt-16 px-4 lg:px-0">
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white text-black px-10 lg:px-14 py-4 lg:py-5 rounded-md font-audiowide text-[10px] lg:text-xs tracking-[0.2em] flex items-center justify-center gap-3 shadow-2xl transition-all relative overflow-hidden group/btn"
                >
                  <MessageSquare size={16} className="relative z-10" />
                  <span className="relative z-10 uppercase">GET IN TOUCH</span>
                  <div className="absolute inset-0 bg-gold translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 lg:px-14 py-4 lg:py-5 rounded-md font-audiowide text-[10px] lg:text-xs tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all"
              >
                <Phone size={16} />
                <span className="uppercase">Call Specialist</span>
              </motion.button>
            </div>
          </div>

          {/* Shimmer effect on entire box */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/[0.03] to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
        </motion.div>
      </Container>

      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}