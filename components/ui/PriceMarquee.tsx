"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";
import { useGoldPrice } from "@/lib/hooks/useGoldPrice";

export default function PriceMarquee() {
  // Extract both prices and loading from the hook
  const { prices, loading } = useGoldPrice();

  // IMPORTANT: Show a placeholder while fetching to prevent "Not Iterable" error
  if (loading || !prices || prices.length === 0) {
    return (
      <div className="fixed top-0 left-0 w-full bg-[#050505] h-11 border-b border-white/5 z-[100] flex items-center px-6">
        <div className="w-2 h-2 bg-gold rounded-full animate-ping mr-3" />
        <span className="font-audiowide text-[10px] text-white/20 uppercase tracking-[0.3em]">
          Syncing Sharjah Live Desk...
        </span>
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 w-full bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 z-[100] h-11 flex items-center overflow-hidden">
      
      {/* 1. STATUS INDICATOR */}
      <div className="relative bg-gold px-5 h-full flex items-center z-30 shadow-[15px_0_30px_rgba(0,0,0,0.8)] border-r border-black/10">
        <Activity size={14} className="text-black mr-2 animate-pulse" />
        <span className="font-audiowide text-[10px] text-black uppercase tracking-[0.2em] font-bold">
          Live Desk
        </span>
      </div>

      {/* 2. THE ANIMATED TRACK */}
      <div className="flex flex-1 overflow-hidden relative">
        <motion.div 
          className="flex whitespace-nowrap"
          // We move -50% because the content is duplicated below
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {/* Duplicating the array for a seamless infinite loop */}
          {[...prices, ...prices].map((item, idx) => (
            <div key={idx} className="flex items-center px-12 border-r border-white/5 group cursor-default">
              <span className="font-audiowide text-[9px] text-white/30 uppercase tracking-[0.15em] mr-4 group-hover:text-gold transition-colors">
                {item.metal}
              </span>
              
              <div className="flex items-baseline gap-1 mr-4">
                <span className="font-audiowide text-[9px] text-gold/50 mr-1">AED</span>
                <span className="font-nasal text-sm text-white tracking-wider">
                  {Number(item.price).toFixed(2)}
                </span>
              </div>

              <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-audiowide ${
                item.up ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
              }`}>
                {item.up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                <span>{item.change}%</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient Fades for a premium look */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
      </div>
    </div>
  );
}