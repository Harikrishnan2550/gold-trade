"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: <>PIONEERING <br /><span className="text-gold-light italic">THE GOLD STANDARD</span></>,
    content: "Seamless physical gold execution and wealth preservation for global private offices.",
    image: "/gold-banner2.png", //
  },
  {
    id: 2,
    title: <>ADVANCED <br /><span className="text-gold-light italic">DIGITAL TRADING</span></>,
    content: "Institutional-grade liquidity and real-time market analytics at your fingertips.",
    image: "/gold-banner3.png", //
  }
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000); // Slide changes every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      
      <AnimatePresence mode="wait">
        <motion.div 
          key={slides[index].id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          {/* BACKGROUND IMAGE - BRIGHTER VERSION */}
          <Image 
            src={slides[index].image} 
            alt="Institutional Gold" 
            fill 
            className="object-cover object-center brightness-110 contrast-[1.05]" 
            priority
          />
          
          {/* Subtle radial vignette to pull focus to the left content */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_transparent_20%,_rgba(0,0,0,0.4)_100%)]" />
        </motion.div>
      </AnimatePresence>

      <Container className="relative z-10 w-full">
        <div className="max-w-[700px] flex flex-col items-start text-left">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[index].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Futuristic Main Title */}
              <h1 className="font-nasal text-5xl md:text-6xl lg:text-8xl leading-[0.95] text-white mb-8 tracking-tighter uppercase font-bold drop-shadow-2xl mt-36">
                {slides[index].title}
              </h1>

              {/* Small Content Description */}
              <p className="text-white/90 text-base lg:text-xl max-w-lg mb-12 font-inter leading-relaxed drop-shadow-md">
                {slides[index].content}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Action and Market Status aligned Left */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col sm:flex-row items-center gap-10 lg:gap-12"
          >
            <Link 
              href="/contact" 
              className="w-full sm:w-auto bg-orange-300/70 text-black px-12 py-5 rounded-2xl font-nasal text-[12px] tracking-widest uppercase shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white"
            >
              Initialize Trade
            </Link>
            
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(74,222,128,0.8)]" />
              <div className="flex flex-col">
                <span className="font-audiowide text-[9px] text-white/50 uppercase tracking-tighter">Market Status</span>
                <span className="font-nasal text-[13px] text-white uppercase font-medium">Dubai Open</span>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>

     
    </section>
  );
}