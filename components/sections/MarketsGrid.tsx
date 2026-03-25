"use client";

import { motion } from "framer-motion";
import { Globe, Landmark, TrendingUp, Building2, ArrowUpRight, Zap } from "lucide-react";
import Container from "../ui/Container";

const markets = [
  { title: "Regional Hub", desc: "Access the Sharjah and Dubai gold trading corridors.", icon: Landmark, stat: "Local Node" },
  { title: "Global Exchanges", desc: "Connectivity to London, New York, and HK networks.", icon: Globe, stat: "International" },
  { title: "Institutional Desk", desc: "High-volume execution for private wealth offices.", icon: Building2, stat: "FZC Access" },
  { title: "Live Intelligence", desc: "Technical insights for professional bullion investors.", icon: TrendingUp, stat: "Sync Data" },
];

export default function MarketsGrid() {
  // Diverse Circuit Path Definitions for High-Voltage Variety
  const circuitPaths = [
    { d: "M -100 300 H 1700", dur: 2.5, delay: 0 },             // Main Horizontal
    { d: "M 300 0 V 150 L 100 350 V 900", dur: 4, delay: 0.8 },  // L-Shunt Left
    { d: "M 1300 0 V 100 L 1500 300 V 900", dur: 3.5, delay: 0.4 }, // L-Shunt Right
    { d: "M 1600 450 H 1200 L 1000 650 H 0", dur: 5, delay: 1.2 },  // Bottom Angular
  ];

  return (
    <section className="py-20 lg:py-40 bg-[#050505] relative overflow-hidden bg-floor-industrial border-t border-white/5">
      
      {/* ── 1. VARIETY HIGH-VOLTAGE INFRASTRUCTURE ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <svg width="100%" height="100%" viewBox="0 0 1600 800" fill="none" preserveAspectRatio="none">
          <defs>
            <filter id="hyperGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            <linearGradient id="hyperPulse" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#F9E498" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>

          {circuitPaths.map((path, i) => (
            <g key={i}>
              <motion.path 
                d={path.d} 
                stroke="#D4AF37" 
                strokeWidth="2.5" 
                strokeDasharray="20 10"
                initial={{ opacity: 0.1, strokeDashoffset: 0 }}
                animate={{ 
                  opacity: [0.1, 0.3, 0.1],
                  strokeDashoffset: [0, -40]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: i * 0.5 
                }}
                className="drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]"
              />
              <motion.path 
                d={path.d} 
                stroke="url(#hyperPulse)" 
                strokeWidth="6"
                strokeLinecap="round"
                filter="url(#hyperGlow)"
                initial={{ pathLength: 0.1, pathOffset: 0 }}
                animate={{ pathOffset: [0, 2] }}
                transition={{ 
                  duration: path.dur, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: path.delay
                }}
              />
            </g>
          ))}
        </svg>
      </div>

      <Container className="relative z-10">
        {/* ── 2. MARKETS GRID (Responsive Layout) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {markets.map((market, index) => {
            const Icon = market.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, filter: "blur(15px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="group relative bg-[#080808]/95 backdrop-blur-3xl p-8 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] border border-white/5 hover:border-gold transition-all duration-700 shadow-2xl overflow-hidden"
              >
                {/* HUD Corner */}
                <div className="absolute top-0 left-0 w-10 h-10 lg:w-12 lg:h-12 border-t-2 border-l-2 border-gold opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-tl-[2rem] lg:rounded-tl-[2.5rem] shadow-[0_0_20px_#D4AF37]" />

                {/* Robotic Node Center */}
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 lg:mb-8 border border-white/10 group-hover:bg-gold transition-all duration-500 relative overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.2)] shrink-0">
                  <Icon className="text-gold group-hover:text-black group-hover:rotate-[360deg] transition-all duration-1000 relative z-10 w-6 h-6 lg:w-7 lg:h-7" />
                </div>

                <div className="relative z-10">
                  <h3 className="font-audiowide text-base lg:text-lg mb-4 text-white uppercase tracking-[0.15em] group-hover:text-gold transition-colors">
                    {market.title}
                  </h3>
                  <p className="text-gray-500 text-[10px] lg:text-[11px] leading-relaxed font-body mb-8 group-hover:text-gray-300 transition-colors">
                    {market.desc}
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-white/5 pt-6 group-hover:border-gold/20 transition-colors">
                    <div className="flex items-center gap-2">
                       <Zap size={12} className="text-gold animate-pulse" />
                       <span className="text-[9px] lg:text-[10px] font-nasal text-gold tracking-[0.2em] uppercase">{market.stat}</span>
                    </div>
                    <ArrowUpRight size={16} className="text-gray-700 group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                </div>

                {/* Scan Sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/[0.1] to-transparent -translate-x-full group-hover:animate-[sweep_1.5s_linear_infinite] pointer-events-none" />
                
                {/* 4px Bold High-Glow Bottom Anchor */}
                <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-gold shadow-[0_0_30px_#D4AF37] group-hover:w-full transition-all duration-1000" />
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