"use client";

import Container from "../ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CompanyOverview() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          {/* 1. TEXT CONTENT - Left Side for Page Balance */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-nasal tracking-[0.4em] text-[10px] uppercase mb-6 block">
              Our Vision
            </span>

            <h2 className="font-nasal text-4xl lg:text-5xl leading-tight text-[#1A1A1A] mb-8 tracking-tighter">
              A Global Leader in <br />
              <span className="text-gold-gradient italic text-5xl lg:text-6xl">Gold Markets</span>
            </h2>

            <div className="space-y-8">
              <p className="text-[#1A1A1A]/60 text-lg leading-relaxed font-inter">
                Headquartered in Dubai, we have established ourselves as a premier 
                precious metal trading firm specializing in high-volume execution 
                and private wealth management. 
              </p>

              <p className="text-[#1A1A1A]/60 text-lg leading-relaxed font-inter">
                Our mission is to bridge the gap between traditional asset 
                protection and modern digital trading, providing a secure, 
                transparent, and fully regulated environment for our global clients.
              </p>
            </div>

            {/* Premium Stat Overlay */}
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-black/5 pt-10">
              <div>
                <p className="text-gold font-nasal text-3xl leading-none">100%</p>
                <p className="text-[#1A1A1A]/40 text-[10px] uppercase tracking-widest mt-2">Physical Backing</p>
              </div>
              <div>
                <p className="text-[#1A1A1A] font-nasal text-3xl leading-none italic">Dubai</p>
                <p className="text-[#1A1A1A]/40 text-[10px] uppercase tracking-widest mt-2">Headquarters</p>
              </div>
            </div>
          </motion.div>

          {/* 2. IMAGE CONTENT - With Floating Frame Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 60 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Subtle light trap shadow behind the image */}
            <div className="absolute inset-0 bg-gold/5 blur-[100px] rounded-full scale-75 -z-10" />
            
            <div className="p-3 bg-white border border-black/5 rounded-[3rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.06)]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem]">
                <Image
                  src="/gold-trade.png"
                  alt="Gold Trading Office Dubai"
                  fill
                  className="object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>

            {/* Floating Info Tag */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white border border-black/5 p-6 rounded-2xl shadow-xl z-20"
            >
              <h4 className="font-nasal text-gold text-sm tracking-widest uppercase">Certified</h4>
              <p className="text-[#1A1A1A]/40 text-[10px] font-inter mt-1">Regulated Operations</p>
            </motion.div>
          </motion.div>
          
        </div>
      </Container>
    </section>
  );
}