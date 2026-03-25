"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, Activity, Cpu } from "lucide-react";
import Container from "../ui/Container";

export default function ServicesHero() {
  // Diverse Circuit Path Definitions for Variety
  const circuitPaths = [
    { d: "M -100 300 L 500 300 L 700 200 L 1700 200", dur: 4, delay: 0 },
    { d: "M 200 0 V 200 L 50 350 V 900", dur: 6, delay: 1 },
    { d: "M 1400 0 V 150 L 1550 300 V 900", dur: 5, delay: 0.5 },
    { d: "M 1600 500 H 1200 L 1000 650 H 0", dur: 7, delay: 1.5 },
  ];

  // Animation Variants for the "Lens Resolve"
  const revealVariants = {
  hidden: {
    opacity: 0,
    filter: "blur(20px)",
  },

  visible: (i: number) => ({
    opacity: 1,
    filter: "blur(0px)",

    transition: {
      duration: 1.2,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

  return (
    <section className="relative pt-40 lg:pt-64 pb-20 lg:pb-32 overflow-hidden bg-[#050505] bg-floor-industrial border-b border-white/5">
      {/* ── 1. HIGH-BRIGHTNESS MULTI-VECTOR CIRCUIT INFRASTRUCTURE ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        {" "}
        {/* Increased section opacity */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1600 800"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Bright Glow Filter for emission effect */}
            <filter
              id="heroNeonGlow"
              x="-25%"
              y="-25%"
              width="150%"
              height="150%"
            >
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <linearGradient
              id="servicesPulseBright"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#FFFFFF" />{" "}
              {/* High-intensity white core */}
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>

          {circuitPaths.map((path, i) => (
            <g key={`group-${i}`}>
              <motion.path
                key={`wire-${i}`}
                d={path.d}
                stroke="#D4AF37"
                strokeWidth="1.5"
                opacity="0.35" // Increased static line opacity
                className="drop-shadow-[0_0_5px_rgba(212,175,55,0.3)]"
              />
              <motion.path
                d={path.d}
                stroke="url(#servicesPulseBright)"
                strokeWidth="6" // Made very bold for brightness
                strokeLinecap="round"
                filter="url(#heroNeonGlow)" // Applying the high-glow filter
                initial={{ pathOffset: 0, pathLength: 0.1 }}
                animate={{ pathOffset: [0, 1.5] }}
                transition={{
                  duration: path.dur,
                  repeat: Infinity,
                  ease: "linear",
                  delay: path.delay,
                }}
              />
            </g>
          ))}
        </svg>
      </div>

      <Container className="relative z-10 text-center">
        {/* ── 2. FLOATING ASSET ARTIFACT ── */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotateY: [0, 15, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-[5%] lg:right-[15%] z-0 opacity-15 mask-gold-nugget pointer-events-none"
        >
          <Image
            src="/gold-nugget.png"
            alt="Bullion Asset"
            width={180}
            height={180}
            className="blur-[1px] lg:w-[240px]"
          />
        </motion.div>

        {/* ── 3. TERMINAL HEADER BADGE ── */}
        <motion.div
          custom={0}
          variants={revealVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-3 px-4 lg:px-6 py-2 rounded-sm bg-gold/5 border border-gold/20 mb-8 lg:mb-10 backdrop-blur-xl shadow-[0_0_30px_rgba(212,175,55,0.1)]"
        >
          <Cpu size={14} className="text-gold animate-pulse" />
          <span className="text-gold font-audiowide tracking-[0.4em] lg:tracking-[0.5em] text-[8px] lg:text-[10px] uppercase">
            Execution.Node_Alpha
          </span>
        </motion.div>

        {/* ── 4. RESPONSIVE LENS FOCUS HEADING ── */}
        <motion.h1
          custom={1}
          variants={revealVariants}
          initial="hidden"
          animate="visible"
          className="font-audiowide text-5xl md:text-7xl lg:text-[120px] tracking-tighter leading-[1.1] lg:leading-[0.85] text-white uppercase px-4 lg:px-0"
        >
          Bullion <br />
          <span className="gold-specular  italic font-black">Solutions</span>
        </motion.h1>

        {/* ── 5. DESCRIPTION ── */}
        <motion.p
          custom={2}
          variants={revealVariants}
          initial="hidden"
          animate="visible"
          className="text-gray-500 mt-8 lg:mt-10 max-w-2xl mx-auto text-base lg:text-2xl font-body leading-relaxed border-l-0 lg:border-l border-white/5 lg:pl-8 text-center"
        >
          Leveraging the strategic infrastructure of the SAIF Zone, Zanora FZC
          engineers high-velocity physical trading channels for global
          institutional liquidity.
        </motion.p>

        {/* ── 6. ROBOTIC DIVIDER & METADATA ── */}
        <motion.div
          custom={3}
          variants={revealVariants}
          initial="hidden"
          animate="visible"
          className="relative mt-16 lg:mt-24 flex flex-col items-center gap-6 px-4"
        >
          <div className="w-[1px] h-16 lg:h-20 bg-white/5 overflow-hidden rounded-full border border-white/10">
            <motion.div
              animate={{ y: [-80, 80] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-full h-1/2 bg-gradient-to-b from-transparent via-gold to-transparent shadow-[0_0_10px_#D4AF37]"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 lg:gap-8 text-gray-700 font-nasal text-[8px] lg:text-[9px] uppercase tracking-[0.3em] lg:tracking-[0.4em]">
            <div className="flex items-center gap-2">
              <Activity size={10} className="text-gold/40" />
              <span>SAIF.NODE_01</span>
            </div>
            <span className="hidden sm:block">•</span>
            <span className="text-white/20 hover:text-gold transition-colors duration-500 cursor-crosshair">
              999.9 PURITY Standard
            </span>
            <span className="hidden sm:block">•</span>
            <span>Global AIR-SIDE Access</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
