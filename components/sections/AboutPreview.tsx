"use client";

import Container from "../ui/Container";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* 1. IMAGE SIDE - Matching the reference border-radius */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* The Outer Frame with specific curvature from the image */}
            <div className="relative p-2 bg-[#F9F9F9] border border-black/[0.03] rounded-[3.5rem] overflow-hidden">
              <div className="relative aspect-square lg:aspect-[4/4.5] w-full overflow-hidden rounded-[3rem]">
                <Image
                  src="/hero-about.png" // Replace with your pouring gold image
                  alt="Gold Casting Process"
                  fill
                  priority
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* 2. TEXT SIDE - Matching the reference typography */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-nasal tracking-[0.45em] text-[9px] uppercase mb-8 block font-medium">
              Established Excellence
            </span>

            <h2 className="font-nasal text-5xl lg:text-7xl leading-[1.05] text-[#1A1A1A] tracking-tighter mb-10">
              About Our <br />
              <span className="text-gold-gradient italic font-normal">Trading Company</span>
            </h2>

            <div className="space-y-8">
              <p className="text-[#1A1A1A]/60 text-lg lg:text-xl font-inter leading-relaxed max-w-xl">
                We are a Dubai-based gold trading institution offering secure precious 
                metal execution, strategic investment consulting, and 
                unrivaled market expertise. 
              </p>

              <div className="relative pl-8">
                {/* Gold Vertical Accent Line */}
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gold/30" />
                <p className="text-[#1A1A1A]/60 text-lg font-inter leading-relaxed italic">
                  Our focus is delivering the gold standard in transparency, 
                  leveraging deep regional connections to facilitate high-value transactions.
                </p>
              </div>
            </div>

            {/* Link Button */}
            <div className="mt-14">
              <Link href="/about">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-5 group cursor-pointer"
                >
                  <div className="w-14 h-14 bg-[#1A1A1A] text-white rounded-full flex items-center justify-center group-hover:bg-gold transition-all duration-500 shadow-xl shadow-black/10">
                    <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                  <span className="font-nasal text-xs tracking-[0.3em] uppercase text-[#1A1A1A] font-bold">
                    Discover Our Story
                  </span>
                </motion.div>
              </Link>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}