"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGoldPrice } from "@/lib/hooks/useGoldPrice";
import { TrendingUp, TrendingDown, Clock, Activity, Zap } from "lucide-react";

const RollingNumber = ({ value }: { value: number }) => {
  return (
    <motion.span
      key={value}
      initial={{ y: 15, opacity: 0, filter: "blur(8px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      exit={{ y: -15, opacity: 0, filter: "blur(8px)" }}
      transition={{ 
        type: "spring",
        stiffness: 400,
        damping: 30,
        restDelta: 0.001
      }}
      className="inline-block"
    >
      {value.toFixed(2)}
    </motion.span>
  );
};

export default function HeroMarketData() {
  const { prices, loading } = useGoldPrice();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (loading || !prices.length) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % prices.length);
    }, 2500); // Increased slightly for better readability
    return () => clearInterval(timer);
  }, [loading, prices.length]);

  if (loading || !prices.length) return null;

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-16 px-4 mb-20">
      {/* HEADER SECTION */}
      <div className="flex items-center justify-between mb-8 px-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 backdrop-blur-md">
            <Activity size={14} className="text-gold animate-[pulse_1.5s_infinite]" />
            <span className="font-audiowide text-[10px] text-gold uppercase tracking-[0.25em]">
              Sharjah Live Terminal
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[9px] font-audiowide text-white/20 uppercase tracking-widest">
            <Zap size={10} />
            Real-time Execution
          </div>
        </div>
        <div className="h-[1px] flex-1 mx-8 bg-gradient-to-r from-gold/30 via-gold/10 to-transparent" />
      </div>

      {/* GRID SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[0, 1, 2].map((offset) => {
          const item = prices[(index + offset) % prices.length];
          
          return (
            <motion.div
              key={offset}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: offset * 0.15, duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.02, rotateY: offset === 0 ? -2 : offset === 2 ? 2 : 0 }}
              className="group relative h-48 perspective-1000"
            >
              <div className="relative h-full w-full glass-card bg-[#080808]/60 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 group-hover:border-gold/40 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.1)]">
                
                {/* 1. ANIMATED BACKGROUND ELEMENTS */}
                <div className="absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-1000 group-hover:scale-110">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  >
                    <Clock size={180} strokeWidth={1} />
                  </motion.div>
                </div>

                {/* 2. TOP ROW: ASSET INFO */}
                <div className="flex justify-between items-start relative z-10">
                  <div className="space-y-1.5">
                    <span className="font-audiowide text-[9px] uppercase tracking-[0.4em] text-white/30 group-hover:text-gold/50 transition-colors">
                      Instrument
                    </span>
                    <AnimatePresence mode="wait">
                      <motion.h4
                        key={item.metal}
                        initial={{ opacity: 0, filter: "blur(4px)", x: -5 }}
                        animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
                        exit={{ opacity: 0, filter: "blur(4px)", x: 5 }}
                        className="font-nasal text-xl text-white tracking-tight"
                      >
                        {item.metal}
                      </motion.h4>
                    </AnimatePresence>
                  </div>
                  
                  <motion.div 
                     key={item.change}
                     initial={{ opacity: 0, scale: 0.5 }}
                     animate={{ opacity: 1, scale: 1 }}
                     className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-audiowide text-[10px] backdrop-blur-md border ${
                      item.up 
                      ? 'bg-green-500/5 border-green-500/20 text-green-400' 
                      : 'bg-red-500/5 border-red-500/20 text-red-400'
                    }`}
                  >
                    {item.up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                    {item.change}%
                  </motion.div>
                </div>

                {/* 3. CENTER ROW: PRICE */}
                <div className="relative z-10 mt-4">
                  <div className="flex items-baseline gap-3">
                    <span className="font-nasal text-5xl text-white tracking-tighter drop-shadow-2xl">
                      <RollingNumber value={Number(item.price)} />
                    </span>
                    <div className="flex flex-col">
                        <span className="font-audiowide text-[10px] text-gold tracking-widest uppercase leading-none mb-1">
                            AED
                        </span>
                        <span className="font-audiowide text-[8px] text-white/20 uppercase tracking-tighter leading-none">
                            Per Gram
                        </span>
                    </div>
                  </div>
                </div>

                {/* 4. DECORATIVE OVERLAYS */}
                {/* Scanline Sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/[0.03] to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
                
                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* 5. ACTIVE SYNC LINE */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5">
                    <motion.div 
                        className="h-full bg-gradient-to-r from-transparent via-gold to-transparent shadow-[0_0_15px_rgba(212,175,55,0.8)]"
                        initial={{ width: "0%", left: "0%" }}
                        animate={{ width: "50%", left: "100%" }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}