"use client";

import { motion } from "framer-motion";
import { Zap, Activity, MapPin } from "lucide-react";
import Container from "../ui/Container";

export default function Map() {
  // Diverse Circuit Pathing: Vertical-to-Horizontal and Angular Shunts
  const circuitPaths = [
    { d: "M 100 0 V 200 H 1600", dur: 5, delay: 0 },         // Top Left Drop
    { d: "M 1500 800 V 600 H 0", dur: 6, delay: 1.2 },       // Bottom Right Rise
    { d: "M 0 400 H 300 L 450 250 V 0", dur: 4, delay: 0.5 }, // Mid-Left Angular
    { d: "M 1600 500 H 1200 L 1050 650 V 800", dur: 7, delay: 2 }, // Angular Drop
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#050505] relative overflow-hidden bg-floor-industrial border-t border-white/5">
      
      {/* ── 1. VARIETY CIRCUIT INFRASTRUCTURE ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <svg width="100%" height="100%" viewBox="0 0 1600 800" fill="none" preserveAspectRatio="none">
          {circuitPaths.map((path, i) => (
            <g key={i}>
              <path d={path.d} stroke="#D4AF37" strokeWidth="2.5" opacity="0.1" />
              <motion.path
                d={path.d}
                stroke="url(#mapPulse)"
                strokeWidth="6"
                strokeLinecap="round"
                initial={{ pathLength: 0.1, pathOffset: 0 }}
                animate={{ pathOffset: [0, 1.5] }}
                transition={{ duration: path.dur, repeat: Infinity, ease: "linear", delay: path.delay }}
              />
            </g>
          ))}
          <defs>
            <linearGradient id="mapPulse" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#F9E498" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Container className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative group px-4 lg:px-0"
        >
          {/* External Industrial Glow Frame */}
          <div className="absolute -inset-2 bg-gold/10 rounded-[2.5rem] lg:rounded-[4rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative bg-[#080808]/90 backdrop-blur-3xl p-2 lg:p-3 rounded-[2.5rem] lg:rounded-[4rem] border border-white/10 shadow-2xl">
            
            {/* Terminal Header Detail */}
            <div className="flex items-center justify-between px-6 lg:px-10 py-4 lg:py-6">
              <div className="flex gap-2 lg:gap-4">
                <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-gold animate-pulse" />
                <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-white/5" />
                <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-white/5" />
              </div>
              <div className="flex items-center gap-3">
                <Activity size={12} className="text-gold/40 hidden sm:block" />
                <span className="font-audiowide text-[7px] lg:text-[10px] uppercase tracking-[0.3em] lg:tracking-[0.4em] text-gold/60 whitespace-nowrap">
                  SHJ_TERMINAL // SAIF_ZONE_HQ
                </span>
              </div>
            </div>

            {/* The Map Container (Terminal View) */}
            <div className="relative w-full h-[350px] md:h-[450px] lg:h-[550px] overflow-hidden rounded-[1.8rem] lg:rounded-[3.2rem] border border-white/5 group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115456.88398418938!2d55.43444655610817!3d25.269661448657683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f144426f0cf%3A0x6001d2931a193630!2sSharjah%20Airport%20International%20Free%20Zone!5e0!3m2!1sen!2sae!4v1710000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zanora FZC SAIF Zone Location"
                className="grayscale invert brightness-[0.7] contrast-[1.2] opacity-60 group-hover:opacity-100 group-hover:grayscale-0 group-hover:invert-0 group-hover:brightness-100 transition-all duration-[1.5s] ease-in-out"
              />
              
              {/* HUD Scanline Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.05] to-transparent h-1/3 -translate-y-full group-hover:animate-[scan_4s_linear_infinite] pointer-events-none" />
              
              {/* Static Crosshair Detail */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 lg:w-20 lg:h-20 border border-gold rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-gold rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Institutional Location Badge - Responsive re-alignment */}
          <div className="absolute -bottom-6 lg:-bottom-8 left-1/2 -translate-x-1/2 bg-[#0A0A0A] border border-gold/30 px-6 lg:px-10 py-3 lg:py-5 rounded-xl lg:rounded-2xl shadow-[0_0_30px_rgba(212,175,55,0.2)] flex items-center gap-3 lg:gap-5 backdrop-blur-3xl group-hover:border-gold transition-colors w-[90%] sm:w-auto">
              <div className="relative flex h-2.5 w-2.5 lg:h-3 lg:w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 lg:h-3 lg:w-3 bg-green-500" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="font-nasal text-[7px] lg:text-[9px] tracking-[0.3em] lg:tracking-[0.4em] text-gold uppercase mb-0.5">HQ Access Node</span>
                <span className="font-heading text-[9px] lg:text-xs text-white uppercase tracking-widest truncate">
                  SHJ Terminal 01 • Institutional Desk
                </span>
              </div>
              <MapPin size={18} className="text-gold shrink-0 hidden xs:block" />
          </div>
        </motion.div>
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