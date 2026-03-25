"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Activity, ShieldCheck, Globe, Zap } from "lucide-react";
import Container from "../ui/Container";

export default function CompanyOverview() {
  // Diverse Circuit Path Definitions for Variety
  const circuitPaths = [
    { d: "M 0 400 H 400 L 500 300 H 1100 L 1200 400 H 1600", dur: 5, delay: 0 }, // Horizontal with mid-rise
    { d: "M 200 0 V 200 L 50 350 V 900", dur: 7, delay: 1 },                    // L-Shunt Left
    { d: "M 1400 0 V 150 L 1550 300 V 900", dur: 6, delay: 0.5 },              // L-Shunt Right
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-[#050505] bg-obsidian border-t border-white/5">
      
      {/* ── 1. MULTI-VECTOR CIRCUIT INFRASTRUCTURE ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <svg width="100%" height="100%" viewBox="0 0 1600 800" fill="none" preserveAspectRatio="none">
          {circuitPaths.map((path, i) => (
            <g key={i}>
              <path 
                d={path.d} 
                stroke="#D4AF37" 
                strokeWidth="1.5" 
                opacity="0.15" 
                className="drop-shadow-[0_0_8px_rgba(212,175,55,0.2)]"
              />
              <motion.path 
                d={path.d} 
                stroke="url(#overviewPulse)" 
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0.1, pathOffset: 0 }}
                animate={{ pathOffset: [0, 1.5] }}
                transition={{ duration: path.dur, repeat: Infinity, ease: "linear", delay: path.delay }}
              />
            </g>
          ))}
          
          <defs>
            <linearGradient id="overviewPulse" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#F9E498" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* ── 2. INTEL BLOCK (Responsive alignment) ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <Zap size={14} className="text-gold animate-pulse" />
              <span className="text-gold font-audiowide tracking-[0.4em] text-[8px] lg:text-[10px] uppercase">
                Infrastructure Node
              </span>
            </div>

            <h2 className="font-audiowide text-4xl md:text-6xl lg:text-7xl text-white uppercase tracking-tighter leading-[1.1] mb-10">
              Institutional <br />
              <span className="text-gold-gradient italic ">Liquidity</span>
            </h2>

            <div className="space-y-6 lg:space-y-8 border-l-0 lg:border-l-2 border-white/5 lg:pl-8">
              <p className="text-gray-500 text-base lg:text-lg font-body leading-relaxed italic max-w-xl mx-auto lg:mx-0">
                "Harnessing massive electronic execution channels to facilitate 
                sovereign-grade gold settlements."
              </p>
              <p className="text-gray-400 text-sm lg:text-base font-body leading-relaxed max-w-xl mx-auto lg:mx-0">
                Headquartered in Sharjah, Zanora FZC operates as a high-density 
                clearing node, bridging traditional bullion security with the 
                velocity of modern electronic trading frameworks.
              </p>
            </div>

            {/* Tactical Grid Stats - Responsive columns */}
            <div className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-[#080808]/80 backdrop-blur-md border border-white/5 rounded-xl hover:border-gold/30 transition-all group">
                <ShieldCheck className="text-gold mb-4 group-hover:scale-110 transition-transform mx-auto lg:mx-0" size={24} />
                <p className="text-white font-audiowide text-xl lg:text-2xl tracking-tighter uppercase">Verified</p>
                <p className="text-gray-600 text-[8px] lg:text-[9px] uppercase tracking-widest mt-1">Protocol Secured</p>
              </div>
              <div className="p-6 bg-[#080808]/80 backdrop-blur-md border border-white/5 rounded-xl hover:border-gold/30 transition-all group">
                <Globe className="text-gold mb-4 group-hover:scale-110 transition-transform mx-auto lg:mx-0" size={24} />
                <p className="text-white font-audiowide text-xl lg:text-2xl tracking-tighter uppercase">Global</p>
                <p className="text-gray-600 text-[8px] lg:text-[9px] uppercase tracking-widest mt-1">Cross-Border Hub</p>
              </div>
            </div>
          </motion.div>

          {/* ── 3. VISUAL ENGINE (Responsive Frame) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2 px-4 lg:px-0"
          >
            <div className="relative p-2 lg:p-3 bg-white/[0.02] border border-white/5 rounded-[2.5rem] lg:rounded-3xl overflow-hidden group">
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-l-2 border-gold z-20" />
              <div className="absolute bottom-0 right-0 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-r-2 border-gold z-20" />

              <div className="relative aspect-square w-full overflow-hidden rounded-2xl lg:rounded-2xl grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000">
                <Image
                  src="/gold-trade.png"
                  alt="Zanora HQ"
                  fill
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/15 to-transparent h-1/3 -translate-y-full group-hover:animate-[scan_3s_linear_infinite] pointer-events-none" />
              </div>

              {/* Active Node ID Tag - Responsive hidden on small */}
              <motion.div 
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-6 right-6 lg:top-10 lg:-right-6 bg-black/90 backdrop-blur-3xl border border-white/10 p-3 lg:p-5 rounded-xl lg:rounded-2xl z-30"
              >
                <div className="flex flex-col gap-1 lg:gap-2">
                    <div className="flex items-center gap-2 lg:gap-3">
                        <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                        <span className="text-white font-nasal text-[8px] lg:text-[10px] uppercase tracking-[0.3em]">Node: ACTIVE</span>
                    </div>
                    <p className="text-gray-500 font-nasal text-[7px] lg:text-[8px] uppercase tracking-widest text-right">Latency: 0.04ms</p>
                </div>
              </motion.div>
            </div>

            {/* Orbit Vector */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-8 lg:-bottom-16 -left-8 lg:-left-16 w-32 h-32 lg:w-56 lg:h-56 border border-gold/5 rounded-full border-dashed pointer-events-none"
            />
          </motion.div>
          
        </div>
      </Container>

      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </section>
  );
}