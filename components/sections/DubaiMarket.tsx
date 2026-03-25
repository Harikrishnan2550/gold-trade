"use client";

import { motion } from "framer-motion";
import { MapPin, Globe, PlaneTakeoff, ShieldCheck, Zap } from "lucide-react";
import Container from "../ui/Container";

export default function DubaiMarket() {
  // Diverse Circuit Path Definitions for Variety
  const circuitPaths = [
    { d: "M -100 400 L 600 400 L 800 300 L 1700 300", dur: 4, delay: 0 }, 
    { d: "M 200 0 V 200 L 50 350 V 900", dur: 6, delay: 1 },             
    { d: "M 1400 0 V 150 L 1550 300 V 900", dur: 5, delay: 0.5 },       
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#050505] relative overflow-hidden bg-floor-industrial border-t border-white/5">
      
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

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: STRATEGIC LOGIC */}
          <motion.div
            initial={{ opacity: 0, x: -60, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <Zap size={14} className="text-gold animate-pulse" />
              <span className="text-gold font-audiowide tracking-[0.4em] text-[8px] lg:text-[10px] uppercase font-medium">
                Jurisdictional Advantage
              </span>
            </div>
            
            <h2 className="font-audiowide text-4xl md:text-5xl lg:text-7xl text-white tracking-tighter leading-[1.1] mb-8 lg:mb-10 uppercase">
              Strategically <br />
              <span className="gold-specular italic animate-shimmer">Anchored in SAIF</span>
            </h2>

            <p className="text-gray-500 text-base lg:text-lg font-body leading-relaxed mb-10 lg:mb-12 border-l-0 lg:border-l border-white/10 lg:pl-8 px-4 lg:px-0">
              Operating under the <span className="text-white">Sharjah Airport International Free Zone Authority</span>, 
              Zanora FZC leverages unmatched air-bridge connectivity. This gateway allows 
              for the rapid, secure, and tax-efficient transit of physical assets.
            </p>

            <div className="space-y-4 lg:space-y-6 flex flex-col items-center lg:items-start">
              {[
                { icon: PlaneTakeoff, title: "Direct Air-Side Logistics", sub: "Instant gateway to international transit" },
                { icon: ShieldCheck, title: "Regulated Secure Trade", sub: "Licensed by Sharjah Free Zone Authority" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * i }}
                  className="flex gap-4 lg:gap-5 items-center group cursor-crosshair w-full max-w-sm lg:max-w-none"
                >
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-gold transition-all duration-500 shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.05)]">
                    <item.icon size={22} className="text-gold group-hover:text-black group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-audiowide text-[10px] lg:text-sm tracking-widest uppercase">{item.title}</p>
                    <p className="text-gray-600 text-[8px] lg:text-[10px] font-nasal uppercase tracking-widest mt-1">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: THE VISUAL HUB */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(15px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative px-4 lg:px-0"
          >
            <div className="absolute -inset-6 lg:-inset-10 bg-gold/5 blur-[80px] lg:blur-[100px] rounded-full pointer-events-none" />

            <div className="bg-[#080808]/90 backdrop-blur-3xl border border-white/5 p-8 lg:p-16 rounded-[2.5rem] lg:rounded-[4rem] relative overflow-hidden group shadow-2xl transition-all duration-700">
               
               <div className="absolute top-0 left-0 w-12 h-12 lg:w-16 lg:h-16 border-t border-l border-gold opacity-40 group-hover:opacity-100 transition-opacity" />
               <div className="absolute bottom-0 right-0 w-12 h-12 lg:w-16 lg:h-16 border-b border-r border-gold opacity-40 group-hover:opacity-100 transition-opacity" />

               <div className="flex justify-between items-start mb-10 lg:mb-12">
                 <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gold/10 rounded-[1.5rem] lg:rounded-3xl flex items-center justify-center border border-gold/20 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                    {/* FIXED ICON SIZE FOR TURBOPACK COMPLIANCE */}
                    <MapPin className="text-gold animate-bounce w-8 h-8 lg:w-10 lg:h-10" strokeWidth={1.5} />
                 </div>
                 <Globe size={22} className="text-white/10 group-hover:text-gold/60 group-hover:rotate-90 transition-all duration-1000" />
               </div>

               {/* FIXED HEADING TO PREVENT CLIPPING */}
               <h3 className="font-audiowide text-3xl lg:text-4xl text-white mb-6 uppercase tracking-tighter leading-none overflow-visible">
                 The <span className="relative inline-flex items-center overflow-visible">
                    <span className="gold-specular italic animate-shimmer italic font-black pr-4 py-2 -mr-4 block overflow-visible">
                        SAIF Edge
                    </span>
                 </span>
               </h3>
               
               <p className="text-gray-500 text-sm lg:text-base font-body leading-relaxed mb-8 lg:mb-10 italic">
                 "Our presence within the SAIF Zone isn't just a location; it's a protocol for speed. 
                 By combining Sharjah's logistics with institutional execution, we provide 
                 a friction-free bullion gateway."
               </p>
               
               <div className="mt-8 lg:mt-12 pt-8 lg:pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
                  <div className="flex flex-col gap-1">
                    <span className="text-[8px] lg:text-[10px] font-audiowide text-gold tracking-[0.4em] uppercase">Node Location</span>
                    <span className="text-[7px] lg:text-[9px] font-nasal text-white/30 tracking-widest uppercase">SHJ — TERMINAL_ALPHA</span>
                  </div>
                  <div className="flex flex-col gap-1 sm:text-right">
                    <span className="text-[8px] lg:text-[10px] font-audiowide text-white/50 tracking-[0.4em] uppercase">Jurisdiction</span>
                    <span className="text-[7px] lg:text-[9px] font-nasal text-gold/60 tracking-widest uppercase">AUTHORITY LICENSED</span>
                  </div>
               </div>

               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/[0.04] to-transparent -translate-x-full group-hover:animate-[sweep_3s_linear_infinite] pointer-events-none" />

               <span className="absolute -bottom-6 -right-8 lg:-bottom-8 lg:-right-10 text-[12vw] lg:text-[10vw] font-audiowide text-white/[0.02] uppercase pointer-events-none select-none italic tracking-tighter">
                 SAIF
               </span>
            </div>
          </motion.div>

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