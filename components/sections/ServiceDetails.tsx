"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Zap, Activity } from "lucide-react";
import Container from "../ui/Container";

const features = [
  "Spot Gold & Silver Execution",
  "Institutional Physical Settlement",
  "SAIF Zone Air-Side Logistics",
  "Secure Custodial Vaulting",
];

export default function ServiceDetails() {
  // Diverse Circuit Path Definitions for Variety
  const circuitPaths = [
    { d: "M -100 450 L 600 450 L 800 350 L 1700 350", dur: 4, delay: 0 }, 
    { d: "M 200 0 V 300 L 50 450 V 900", dur: 6, delay: 1 },             
    { d: "M 1400 0 V 150 L 1550 300 V 900", dur: 5, delay: 0.5 },       
  ];

  return (
    <section className="relative py-20 lg:py-40 overflow-hidden bg-[#050505] bg-floor-industrial border-t border-white/5">
      
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
                stroke="url(#detailPulse)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathOffset: 0, pathLength: 0.1 }}
                animate={{ pathOffset: [0, 1.5] }}
                transition={{ duration: path.dur, repeat: Infinity, ease: "linear", delay: path.delay }}
              />
            </g>
          ))}

          <defs>
            <linearGradient id="detailPulse" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#F9E498" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 items-center">
          
          {/* ── 2. TEXT CONTENT (Responsive Alignment) ── */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(15px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 lg:mb-8">
              <Zap size={14} className="text-gold animate-pulse" />
              <span className="text-gold font-audiowide tracking-[0.4em] lg:tracking-[0.5em] text-[8px] lg:text-[10px] uppercase">
                Core Execution Node
              </span>
            </div>

            <h2 className="font-audiowide text-4xl md:text-5xl lg:text-7xl text-white uppercase tracking-tighter leading-[1.1] mb-8 lg:mb-10">
              Institutional <br />
              <span className="gold-specular  italic font-black">Trading Desk</span>
            </h2>

            <p className="text-gray-500 text-base lg:text-xl font-body leading-relaxed mb-10 lg:mb-12 border-l-0 lg:border-l border-white/10 lg:pl-8 px-4 lg:px-0">
              Zanora FZC provides high-liquidity bullion services powered by the 
              Sharjah Airport International Free Zone's logistical infrastructure. 
              Our desk facilitates capital preservation 
              to large-scale global settlements.
            </p>

            {/* Feature List Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 lg:gap-y-6 gap-x-10 border-t border-white/5 pt-10 lg:pt-12 text-left">
              {features.map((feature, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 items-center group cursor-crosshair px-4 lg:px-0"
                >
                  <div className="w-6 h-6 rounded-full bg-gold/5 flex items-center justify-center border border-gold/20 group-hover:bg-gold group-hover:text-black transition-all shrink-0">
                    <CheckCircle2 size={12} className="text-gold group-hover:text-black transition-colors" />
                  </div>
                  <span className="text-gray-400 font-nasal text-[9px] lg:text-[10px] uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── 3. IMAGE HUD TERMINAL (Responsive Frame) ── */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)", scale: 0.95 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative order-1 lg:order-2 px-4 lg:px-0"
          >
            <div className="relative p-2 lg:p-3 bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden group shadow-2xl">
              
              <div className="absolute top-0 left-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-l-2 border-gold opacity-40 z-20" />
              <div className="absolute bottom-0 right-0 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-r-2 border-gold opacity-40 z-20" />

              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] lg:rounded-[3.2rem] grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000">
                <Image
                  src="/gold-service.png"
                  alt="Trading Terminal"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[3s]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.05] to-transparent h-1/3 -translate-y-full group-hover:animate-[scan_4s_linear_infinite] pointer-events-none" />
              </div>
              
              {/* ── 4. RESPONSIVE REACTOR OVERLAY ── */}
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8 bg-black/80 backdrop-blur-3xl p-4 lg:p-6 rounded-2xl lg:rounded-3xl border border-white/10 shadow-2xl group-hover:border-gold/20 transition-all">
                 <div className="flex justify-between items-center">
                    <div className="space-y-1 lg:space-y-2">
                       <div className="flex items-center gap-2">
                          <Activity size={12} className="text-gold animate-pulse" />
                          <p className="text-[7px] lg:text-[9px] text-gray-500 font-audiowide uppercase tracking-widest leading-none">Global.Sync</p>
                       </div>
                       <p className="text-white font-audiowide text-lg lg:text-xl tracking-wider uppercase">Node: ACTIVE</p>
                    </div>
                    <div className="w-10 h-10 lg:w-14 lg:h-14 bg-white/5 rounded-xl lg:rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-gold transition-all shrink-0">
                       <ShieldCheck className="text-gold group-hover:text-black transition-colors w-5 h-5 lg:w-6 lg:h-6" />
                    </div>
                 </div>
              </div>
            </div>
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