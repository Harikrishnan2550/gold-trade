"use client";

import { motion } from "framer-motion";
import { 
  Coins, Briefcase, LineChart, ShieldCheck, 
  PlaneTakeoff, Globe, ArrowUpRight, Zap 
} from "lucide-react";
import Container from "../ui/Container";

const services = [
  { title: "Bullion Execution", desc: "Institutional-grade physical gold and silver trading with deep market liquidity.", icon: Coins },
  { title: "Asset Preservation", desc: "Bespoke consulting for precious metal allocation and long-term capital stability.", icon: Briefcase },
  { title: "Market Intelligence", desc: "Strategic technical insights across the UAE and global bullion trading circuits.", icon: LineChart },
  { title: "Physical Logistics", desc: "Direct air-side access via the SAIF Zone for secure, high-speed transit.", icon: PlaneTakeoff },
  { title: "Vaulting & Security", desc: "Licensed custodial services featuring multi-layered security protocols.", icon: ShieldCheck },
  { title: "Trade Corridors", desc: "Unrivaled connectivity bridging Sharjah's hub with global bullion networks.", icon: Globe },
];

export default function ServicesGrid() {
  // Diverse Circuit Path Definitions for Variety
  const circuitPaths = [
    { d: "M -100 200 H 1700", dur: 5, delay: 0 },             // Horizontal Bus
    { d: "M 250 0 V 200 L 50 350 V 900", dur: 7, delay: 1 },  // L-Shunt Drop
    { d: "M 1350 0 V 150 L 1500 300 V 900", dur: 6, delay: 0.5 }, // L-Shunt Right
    { d: "M 1600 500 H 1200 L 1000 650 H 0", dur: 8, delay: 1.5 }, // Mid Angular
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#050505] relative overflow-hidden bg-floor-industrial border-t border-white/5">
      
      {/* ── 1. VARIETY CIRCUIT INFRASTRUCTURE ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 1600 800" fill="none" preserveAspectRatio="none">
          {circuitPaths.map((path, i) => (
            <g key={i}>
              <path 
                d={path.d} 
                stroke="#D4AF37" 
                strokeWidth="0.5" 
                opacity="0.2" 
              />
              <motion.path 
                d={path.d} 
                stroke="url(#gridPulse)" 
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0.1, pathOffset: 0 }}
                animate={{ pathOffset: [0, 1.5] }}
                transition={{ duration: path.dur, repeat: Infinity, ease: "linear", delay: path.delay }}
              />
            </g>
          ))}

          <defs>
            <linearGradient id="gridPulse" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#F9E498" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Container className="relative z-10">
        {/* ── 2. SERVICES GRID (Fully Responsive) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, filter: "blur(15px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="group relative bg-[#080808]/90 backdrop-blur-2xl p-8 lg:p-12 rounded-[2rem] lg:rounded-[2.5rem] border border-white/5 hover:border-gold/30 transition-all duration-700 shadow-2xl overflow-hidden"
              >
                {/* HUD Corner Marker */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-tr-3xl" />

                {/* Robotic Icon Pod */}
                <div className="relative w-14 h-14 lg:w-16 lg:h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 lg:mb-10 border border-white/10 group-hover:bg-gold transition-all duration-700 shadow-xl overflow-hidden shrink-0">
                  <Icon 
                    className="text-gold group-hover:text-black group-hover:scale-110 transition-all duration-500 relative z-10 w-6 h-6 lg:w-7 lg:h-7" 
                    strokeWidth={1.5} 
                  />
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </div>

                <div className="relative z-10">
                  <h3 className="font-audiowide text-lg lg:text-xl mb-4 text-white tracking-widest uppercase group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 text-[12px] lg:text-[13px] leading-relaxed font-body mb-8 lg:mb-10 group-hover:text-gray-400 transition-colors">
                    {service.desc}
                  </p>

                  {/* Interactive Status Footer */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-6 group-hover:border-gold/20 transition-colors">
                    <div className="flex items-center gap-2">
                       <Zap size={10} className="text-gold/40 group-hover:text-gold animate-pulse" />
                       <span className="text-[8px] lg:text-[9px] font-nasal text-gold tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                         PROTOCOL ACTIVE
                       </span>
                    </div>
                    <ArrowUpRight size={14} className="text-gray-800 group-hover:text-gold transition-all" />
                  </div>
                </div>

                {/* Internal Scanline Sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/[0.04] to-transparent -translate-x-full group-hover:animate-[sweep_2.5s_linear_infinite] pointer-events-none" />
                
                {/* Glow Bottom Anchor */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold shadow-[0_0_15px_#D4AF37] group-hover:w-full transition-all duration-1000" />
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