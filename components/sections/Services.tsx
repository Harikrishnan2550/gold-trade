"use client";

import { motion } from "framer-motion";
import { BarChart3, Coins, Briefcase, LineChart, ArrowRight, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";

const services = [
  {
    title: "Gold Trading",
    desc: "Institutional-grade gold trading solutions with secure, high-speed transactions.",
    icon: Coins,
    label: "SERVICE.01"
  },
  {
    title: "Investment Advisory",
    desc: "Personalized expert consultation for strategic precious metal wealth growth.",
    icon: Briefcase,
    label: "SERVICE.02"
  },
  {
    title: "Market Analysis",
    desc: "Real-time, detailed insights into global and Dubai gold market trends.",
    icon: LineChart,
    label: "SERVICE.03"
  },
  {
    title: "Portfolio Management",
    desc: "Comprehensive precious metals guidance to diversify and protect your assets.",
    icon: BarChart3,
    label: "SERVICE.04"
  },
];

const ServiceSparks = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="ember animate-ember"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${80 + Math.random() * 20}%`,
            width: `${1 + Math.random() * 3}px`,
            height: `${1 + Math.random() * 3}px`,
            // @ts-ignore
            "--duration": `${5 + Math.random() * 7}s`,
            "--delay": `${Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
};

export default function Services() {
  // Diverse Circuit Path Definitions
  const circuitPaths = [
    { d: "M-100 500 H400 L550 400 H1050 L1200 500 H1700", dur: 4, delay: 0 },
    { d: "M 200 0 V 300 L 50 450 V 900", dur: 6, delay: 1 },
    { d: "M 1400 0 V 200 L 1550 350 V 900", dur: 5, delay: 0.5 },
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-[#050505] bg-floor-industrial">
      
      {/* ── 1. VARIETY CIRCUIT INFRASTRUCTURE ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <svg width="100%" height="100%" viewBox="0 0 1600 900" preserveAspectRatio="none" fill="none">
          {circuitPaths.map((path, i) => (
            <g key={i}>
              <path 
                d={path.d} 
                stroke="#D4AF37" 
                strokeWidth="1.5" 
                opacity="0.15" 
                className="drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]"
              />
              <motion.path 
                d={path.d} 
                stroke="url(#servicePulse)" 
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0.1, pathOffset: 0 }}
                animate={{ pathOffset: [0, 2] }}
                transition={{ duration: path.dur, repeat: Infinity, ease: "linear", delay: path.delay }}
              />
            </g>
          ))}
          <defs>
            <linearGradient id="servicePulse" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#F9E498" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <ServiceSparks />
      
      {/* ── 2. FLOATING ARTIFACT (Responsive sizing) ── */}
      <motion.div
        animate={{ y: [0, 40, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 z-0 opacity-20 mask-gold-nugget pointer-events-none blur-[2px]"
      >
        <Image src="/gold-nugget.png" alt="Artifact" width={250} height={250} className="w-[180px] lg:w-[300px]" />
      </motion.div>

      <Container className="relative z-10">
        {/* Heading Section - Responsive Sizing */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-px bg-gold/50" />
            <span className="text-gold font-audiowide tracking-[0.4em] text-[8px] lg:text-[10px] uppercase">
              Operational Nodes
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-audiowide text-4xl md:text-6xl lg:text-8xl text-white uppercase tracking-tighter leading-[1.1]"
          >
            Trading <br />
            <span className="text-gold-gradient animate-shimmer italic">Infrastructures</span>
          </motion.h2>
        </div>

        {/* ── 3. SERVICES GRID (Responsive Layout) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group relative p-8 lg:p-10 bg-[#080808]/80 backdrop-blur-3xl border border-white/5 rounded-2xl transition-all duration-500 hover:border-gold/40 hover:-translate-y-2 overflow-hidden"
              >
                {/* HUD Identity Label */}
                <span className="font-nasal text-[8px] lg:text-[9px] text-gray-600 tracking-widest uppercase block mb-8 lg:mb-12 group-hover:text-gold/50 transition-colors">
                  {item.label}
                </span>

                {/* Active Icon Center */}
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-white/5 flex items-center justify-center mb-8 lg:mb-10 border border-white/10 group-hover:bg-gold transition-all duration-500">
                  <Icon className="text-gold group-hover:text-black group-hover:scale-110 transition-all duration-500" size={26} />
                </div>

                <h3 className="font-audiowide text-lg lg:text-xl mb-4 text-white uppercase group-hover:text-gold transition-colors tracking-wider">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-[11px] lg:text-xs leading-relaxed mb-8 lg:mb-10 lg:h-12 group-hover:text-gray-300 transition-colors">
                  {item.desc}
                </p>

                {/* Scanning Laser Animation */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.04] to-transparent h-1/2 -translate-y-full group-hover:animate-[scan_3s_linear_infinite] pointer-events-none" />

                {/* Active Execution Link */}
                <div className="flex items-center gap-3 text-gold font-nasal text-[9px] lg:text-[10px] uppercase tracking-[0.2em] opacity-30 group-hover:opacity-100 transition-all duration-500">
                  <Zap size={10} className="animate-pulse" />
                  Execute <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Action Button - Responsive */}
        <div className="text-center mt-16 lg:mt-20">
          <Link href="/services">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="relative px-10 lg:px-14 py-4 bg-white text-black font-audiowide text-[10px] lg:text-[11px] tracking-[0.25em] rounded-sm group overflow-hidden"
            >
              <span className="relative z-10 uppercase whitespace-nowrap">View Core Solutions</span>
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:animate-[btnShine_1.5s_infinite]" />
            </motion.button>
          </Link>
        </div>
      </Container>

      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        @keyframes btnShine {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
      `}</style>
    </section>
  );
}