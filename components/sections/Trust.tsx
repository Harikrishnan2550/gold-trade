"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Landmark, Globe, Scale, ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";

const trustItems = [
  {
    title: "Licensed Entity",
    desc: "Zanora FZC is a legally registered trading entity authorized by the Sharjah Airport International Free Zone Authority.",
    icon: Landmark,
    label: "REGISTRATION.ID"
  },
  {
    title: "SAIF Zone HQ",
    desc: "Our operations are centralized in the Sharjah Airport International Free Zone (SAIF ZONE), ensuring global logistics efficiency.",
    icon: Globe,
    label: "JURISDICTION.AE"
  },
  {
    title: "Security Protocols",
    desc: "All physical bullion movements are protected by Tier-1 insurance and verified chain-of-custody documentation.",
    icon: ShieldCheck,
    label: "ASSET.PROTECTION"
  },
  {
    title: "Legal Compliance",
    desc: "Strict adherence to UAE AML/CFT regulations and international gold sourcing standards to ensure clean trade.",
    icon: Scale,
    label: "OVERSIGHT.PROTOCOL"
  },
];

export default function Trust() {
  // Diverse Circuit Paths for Variety
  const circuitPaths = [
    { d: "M-100 300 H400 L550 450 H1050 L1200 600 H1700", dur: 4 }, // Original
    { d: "M 300 0 V 200 L 100 400 V 900", dur: 6 },                // Vertical Drop
    { d: "M 1300 0 V 150 L 1500 350 V 900", dur: 5 },              // Vertical Rise
    { d: "M 1600 200 H 1200 L 1100 300 H 0", dur: 7 },             // Reversed Horizontal
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-[#050505] bg-floor-industrial">
      
      {/* ── 1. VARIETY CIRCUIT BACKGROUND ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <svg width="100%" height="100%" viewBox="0 0 1600 900" fill="none" preserveAspectRatio="none">
          {circuitPaths.map((path, i) => (
            <g key={i}>
              {/* Static Glowing Wires */}
              <path 
                d={path.d} 
                stroke="#D4AF37" 
                strokeWidth="1.5" 
                opacity="0.2" 
                className="drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]"
              />
              {/* High-Voltage Animated Pulses */}
              <motion.path 
                d={path.d} 
                stroke="url(#trustPulse)" 
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0.1, pathOffset: 0 }}
                animate={{ pathOffset: [0, 2] }}
                transition={{ duration: path.dur, repeat: Infinity, ease: "linear" }}
              />
            </g>
          ))}
          
          <defs>
            <linearGradient id="trustPulse" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#F9E498" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ── FLOATING GOLDEN STONES (Responsive sizing) ── */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-[5%] lg:right-[10%] z-1 opacity-40 lg:opacity-60 mask-gold-nugget pointer-events-none"
      >
        <Image 
          src="/gold-nugget.png" 
          alt="Golden Stone" 
          width={150} 
          height={150} 
          className="lg:w-[220px] lg:h-[220px] object-contain"
        />
      </motion.div>

      <Container className="relative z-10">
        {/* Header */}
        <div className="mb-12 lg:mb-20 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center justify-center lg:justify-start gap-4 mb-6"
          >
            <div className="w-10 h-px bg-gold" />
            <span className="font-audiowide text-[10px] tracking-[0.3em] text-gold uppercase">Secure Trust Node</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-audiowide text-4xl md:text-6xl lg:text-8xl text-white uppercase leading-[1.1] lg:leading-none"
          >
            Regulatory <br />
            <span className="text-gold-gradient animate-shimmer italic">Authority</span>
          </motion.h2>
        </div>

        {/* Trust Grid (Responsive columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group relative p-6 lg:p-8 rounded-2xl bg-[#0A0A0A]/90 border border-white/5 backdrop-blur-xl hover:border-gold/50 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-500 pointer-events-none" />

                <div className="flex justify-between items-start mb-10 lg:mb-12">
                  <span className="font-nasal text-[8px] lg:text-[9px] text-gray-500 tracking-widest uppercase">
                    {item.label}
                  </span>
                  <ArrowUpRight className="text-gold/30 group-hover:text-gold transition-colors" size={16} />
                </div>

                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-6 lg:mb-8 group-hover:bg-gold group-hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                  <Icon className="text-gold group-hover:text-black transition-colors" size={24} />
                </div>

                <h3 className="font-audiowide text-lg lg:text-xl mb-4 text-white uppercase group-hover:text-gold transition-colors">
                  {item.title}
                </h3>

                <p className="font-body text-[11px] lg:text-xs leading-relaxed text-gray-400 group-hover:text-gray-200 transition-colors">
                  {item.desc}
                </p>

                <div className="mt-8 w-full h-px bg-white/5 relative overflow-hidden">
                   <motion.div 
                     initial={{ x: "-100%" }}
                     whileHover={{ x: "100%" }}
                     transition={{ duration: 0.8 }}
                     className="absolute inset-0 bg-gold shadow-[0_0_10px_#D4AF37]"
                   />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Verification (Responsive flex) */}
        <div className="mt-16 lg:mt-24 pt-10 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="max-w-xl text-center lg:text-left">
            <p className="font-nasal text-[10px] text-gold/50 tracking-[0.2em] uppercase mb-3">Registered Entity</p>
            <p className="font-body text-[11px] lg:text-xs text-gray-500 italic leading-relaxed">
              Zanora FZC, Sharjah Airport International Free Zone Authority (SAIF ZONE), Sharjah, UAE. <br className="hidden md:block" />
              Authorized for Precious Metals Trading and Logistics.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white/5 px-6 py-4 rounded-xl border border-white/10 backdrop-blur-md self-center lg:self-auto">
             <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative rounded-full h-3 w-3 bg-green-500"></span>
             </div>
             <div className="text-right">
                <p className="font-audiowide text-[8px] text-gray-500 uppercase tracking-widest">Global Status</p>
                <p className="font-audiowide text-xs text-white uppercase">Network Active</p>
             </div>
          </div>
        </div>
      </Container>
    </section>
  );
}