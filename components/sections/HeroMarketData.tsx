"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGoldPrice } from "@/lib/hooks/useGoldPrice";
import { TrendingUp, TrendingDown, Clock, Activity, Zap } from "lucide-react";

const MarketSparks = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="ember animate-ember"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${85 + Math.random() * 15}%`,
            width: `${1 + Math.random() * 3}px`,
            height: `${1 + Math.random() * 3}px`,
            // @ts-ignore
            "--duration": `${3 + Math.random() * 5}s`,
            "--delay": `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

const RollingNumber = ({ value }: { value: number }) => {
  return (
    <motion.span
      key={value}
      initial={{ y: 15, opacity: 0, filter: "blur(8px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      exit={{ y: -15, opacity: 0, filter: "blur(8px)" }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="inline-block"
    >
      {value.toFixed(2)}
    </motion.span>
  );
};

export default function HeroMarketData() {
  const { prices, loading } = useGoldPrice();
  const [index, setIndex] = useState(0);

  // Diverse Circuit Paths
  const circuitPaths = [
    { d: "M 0 100 H 1600", dur: 4, delay: 0 },         // Main Bus
    { d: "M 300 0 V 150 L 100 300 V 800", dur: 6, delay: 1 }, // L-Shunt Left
    { d: "M 1300 0 V 120 L 1500 250 V 800", dur: 5, delay: 0.5 }, // L-Shunt Right
  ];

  useEffect(() => {
    if (loading || !prices.length) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % prices.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [loading, prices.length]);

  if (loading || !prices.length) return null;

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-10 lg:mt-20 px-4 mb-20">
      
      {/* ── 1. VARIETY CIRCUIT INFRASTRUCTURE ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <svg width="100%" height="100%" viewBox="0 0 1600 800" fill="none" preserveAspectRatio="none">
          {circuitPaths.map((path, i) => (
            <g key={i}>
              <path d={path.d} stroke="#D4AF37" strokeWidth="1.5" opacity="0.1" />
              <motion.path
                d={path.d}
                stroke="url(#dataPulse)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0.1, pathOffset: 0 }}
                animate={{ pathOffset: [0, 1.5] }}
                transition={{ duration: path.dur, repeat: Infinity, ease: "linear", delay: path.delay }}
              />
            </g>
          ))}
          <defs>
            <linearGradient id="dataPulse" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#F9E498" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <MarketSparks />

      {/* HEADER SECTION - Responsive */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 px-2 relative z-10 gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 backdrop-blur-md">
            <Activity size={14} className="text-gold animate-pulse" />
            <span className="font-audiowide text-[9px] lg:text-[10px] text-gold uppercase tracking-[0.25em]">
              Sharjah Live Terminal
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[9px] font-audiowide text-white/20 uppercase tracking-widest">
            <Zap size={10} className="animate-pulse" />
            Real-time Sync
          </div>
        </div>
        <div className="hidden sm:block h-[1px] flex-1 mx-4 lg:mx-8 bg-gradient-to-r from-gold/40 via-gold/10 to-transparent" />
      </div>

      {/* GRID SECTION - Fully Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
        {[0, 1, 2].map((offset) => {
          const item = prices[(index + offset) % prices.length];
          if (!item) return null;

          return (
            <motion.div
              key={offset}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: offset * 0.15, duration: 0.8 }}
              whileHover={{ 
                scale: 1.02, 
                rotateY: offset === 0 ? -2 : offset === 2 ? 2 : 0,
              }}
              className="group relative h-40 lg:h-48 perspective-1000"
            >
              <div className="relative h-full w-full bg-[#080808]/70 backdrop-blur-2xl border border-white/10 rounded-[1.5rem] lg:rounded-[2rem] p-6 lg:p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 group-hover:border-gold/50 group-hover:bg-[#0A0A0A]">
                
                <div className="absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-1000 group-hover:scale-110">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Clock size={180} strokeWidth={1} className="text-gold" />
                  </motion.div>
                </div>

                <div className="flex justify-between items-start relative z-10">
                  <div className="space-y-1">
                    <span className="font-audiowide text-[7px] lg:text-[8px] uppercase tracking-[0.4em] text-white/30 group-hover:text-gold/60">
                      Instrument_Code
                    </span>
                    <AnimatePresence mode="wait">
                      <motion.h4
                        key={item.metal}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="font-nasal text-lg lg:text-xl text-white tracking-tight"
                      >
                        {item.metal}
                      </motion.h4>
                    </AnimatePresence>
                  </div>
                  
                  <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl font-audiowide text-[8px] lg:text-[10px] backdrop-blur-md border ${
                      item.up ? 'bg-green-500/5 border-green-500/20 text-green-400' : 'bg-red-500/5 border-red-500/20 text-red-400'
                    }`}
                  >
                    {item.up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                    {item.change}%
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-baseline gap-2 lg:gap-3">
                    <span className="font-nasal text-3xl lg:text-5xl text-white tracking-tighter text-gold-gradient">
                      <RollingNumber value={Number(item.price)} />
                    </span>
                    <div className="flex flex-col">
                        <span className="font-audiowide text-[8px] lg:text-[10px] text-gold tracking-widest uppercase leading-none mb-1">
                            AED
                        </span>
                        <span className="font-audiowide text-[6px] lg:text-[7px] text-white/20 uppercase tracking-tighter leading-none">
                            Spot_Unit
                        </span>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.04] to-transparent h-1/2 -translate-y-full group-hover:animate-[scan_2.5s_linear_infinite] pointer-events-none" />
                
                <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white/5 overflow-hidden">
                    <motion.div 
                        className="h-full w-full bg-gold shadow-[0_0_15px_#D4AF37]"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </div>
  );
}