"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, BarChart4, Globe2, Briefcase, Zap, Activity } from "lucide-react";
import Container from "../ui/Container";

const strengths = [
  { title: "Institutional Authority", icon: BarChart4 },
  { title: "SAIF Zone Clearing", icon: ShieldCheck },
  { title: "Transparent Spot Rates", icon: Globe2 },
  { title: "Professional Advisory", icon: Briefcase },
];

export default function Expertise() {
  // Diverse Circuit Path Definitions for Variety
  const circuitPaths = [
    { d: "M 420 0 V 300 L 620 450 V 900", dur: 4, delay: 0 },             // Vertical-Angular Drop
    { d: "M 0 400 H 400 L 550 550 H 1600", dur: 6, delay: 1 },           // Horizontal-Angular Shunt
    { d: "M 1300 0 V 150 L 1450 300 V 900", dur: 5, delay: 0.5 },       // L-Shunt Drop Right
  ];

  return (
    <section className="relative py-20 lg:py-40 overflow-hidden bg-[#050505] bg-floor-industrial border-t border-white/5">
      
      {/* ── 1. VARIETY CIRCUIT INFRASTRUCTURE ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <svg width="100%" height="100%" viewBox="0 0 1600 800" fill="none" preserveAspectRatio="none">
          {circuitPaths.map((path, i) => (
            <g key={i}>
              <motion.path
                d={path.d}
                stroke="#D4AF37"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 1.5, delay: path.delay }}
              />
              <motion.path
                d={path.d}
                stroke="url(#expertisePulse)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathOffset: 0, pathLength: 0.1 }}
                animate={{ pathOffset: [0, 1.5] }}
                transition={{ duration: path.dur, repeat: Infinity, ease: "linear", delay: path.delay }}
              />
            </g>
          ))}

          <defs>
            <linearGradient id="expertisePulse" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#F9E498" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          {/* ── 2. LEFT: NARRATIVE (Responsive Alignment) ── */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(15px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 lg:mb-8">
              <Zap size={14} className="text-gold animate-pulse" />
              <span className="text-gold font-audiowide tracking-[0.4em] lg:tracking-[0.5em] text-[8px] lg:text-[10px] uppercase">
                The Zanora Mandate
              </span>
            </div>
            
            <h2 className="font-audiowide text-4xl md:text-5xl lg:text-7xl text-white tracking-tighter leading-[1.1] mb-8 lg:mb-10 uppercase">
              Bullion Trade <br />
              <span className="gold-specular italic animate-shimmer italic font-black">Expertise</span>
            </h2>

            <div className="space-y-6 lg:space-y-8 border-l-0 lg:border-l border-white/10 lg:pl-8 px-4 lg:px-0">
              <p className="text-gray-500 text-base lg:text-lg font-body leading-relaxed">
                Our team provides a deep synthesis of bullion market dynamics, 
                leveraging Sharjah's strategic logistical infrastructure and 
                institutional-grade transaction security.
              </p>

              <p className="text-gray-400 text-base lg:text-lg font-body leading-relaxed italic">
                "Focusing on institutional wealth preservation, we ensure every 
                physical asset movement is compliant with SAIF Zone regulatory standards."
              </p>
            </div>
          </motion.div>

          {/* ── 3. RIGHT: INSTITUTIONAL CORE (Responsive Card) ── */}
          <div className="relative px-4 lg:px-0">
            {/* FLOATING ARTIFACT (Responsive sizing) */}
            <motion.div
              animate={{ 
                y: [0, -25, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-5 lg:-top-20 lg:-right-20 z-0 opacity-15 lg:opacity-20 mask-gold-nugget blur-[1px] pointer-events-none"
            >
              <Image src="/gold-nugget.png" alt="Bullion Asset" width={150} height={150} className="lg:w-[220px]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, filter: "blur(20px)", scale: 0.95 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="bg-[#080808]/90 backdrop-blur-3xl border border-white/5 p-8 lg:p-14 rounded-[2.5rem] lg:rounded-[3rem] shadow-2xl relative overflow-hidden group"
            >
              <div className="flex justify-between items-center mb-10 lg:mb-12 border-b border-white/5 pb-6">
                <h3 className="font-audiowide text-xl lg:text-2xl text-white uppercase tracking-tighter">
                  Core <span className="text-gold">Assets</span>
                </h3>
                <Activity size={16} className="text-gold/20 group-hover:text-gold transition-colors" />
              </div>

              <div className="space-y-8 lg:space-y-10">
                {strengths.map((item, i) => (
                  <div key={i} className="group/item">
                    <div className="flex items-center gap-4 lg:gap-6 mb-4">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover/item:bg-gold transition-all duration-500 shadow-[0_0_15px_rgba(212,175,55,0.05)]">
                        <item.icon size={18} className="text-gold group-hover/item:text-black transition-colors" />
                      </div>
                      <p className="text-white font-nasal text-xs lg:text-sm tracking-widest uppercase opacity-60 group-hover/item:opacity-100 transition-opacity">
                        {item.title}
                      </p>
                    </div>
                    
                    <div className="relative w-full h-[2px] lg:h-[3px] bg-white/5 overflow-hidden rounded-full">
                      <motion.div 
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        transition={{ delay: 0.5 + (i * 0.15), duration: 1.5, ease: "easeOut" }}
                        className="absolute top-0 left-0 h-full bg-gold shadow-[0_0_10px_#D4AF37]"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Watermark - Responsive Scale */}
              <span className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 text-7xl lg:text-9xl font-heading text-white/[0.02] uppercase italic select-none pointer-events-none">
                ZNR
              </span>

              {/* Scan Line */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent h-1/2 -translate-y-full group-hover:animate-[scan_3s_linear_infinite] pointer-events-none" />
            </motion.div>
          </div>

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