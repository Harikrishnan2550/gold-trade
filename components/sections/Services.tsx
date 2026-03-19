"use client";

import Container from "../ui/Container";
import { motion } from "framer-motion";
import { BarChart3, Coins, Briefcase, LineChart, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Gold Trading",
    desc: "Institutional-grade gold trading solutions with secure, high-speed transactions.",
    icon: Coins,
  },
  {
    title: "Investment Advisory",
    desc: "Personalized expert consultation for strategic precious metal wealth growth.",
    icon: Briefcase,
  },
  {
    title: "Market Analysis",
    desc: "Real-time, detailed insights into global and Dubai gold market trends.",
    icon: LineChart,
  },
  {
    title: "Portfolio Management",
    desc: "Comprehensive precious metals guidance to diversify and protect your assets.",
    icon: BarChart3,
  },
];

export default function Services() {
  return (
    <section className="py-32 bg-[#FBFBFB] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute -right-20 top-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        {/* Heading Section */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-nasal tracking-[0.4em] text-[10px] uppercase mb-4 block"
          >
            What We Offer
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-nasal text-5xl lg:text-6xl text-[#1A1A1A] tracking-tighter"
          >
            Our Trading <br />
            <span className="text-gold-gradient italic">Services</span>
          </motion.h2>

          <p className="text-[#1A1A1A]/50 mt-8 max-w-2xl mx-auto text-lg font-inter leading-relaxed">
            Unrivaled gold trading services designed for secure investments 
            and long-term market success in the heart of Dubai.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: true }}
                className="premium-card p-10 bg-white group hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-3 transition-all duration-700 ease-out"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-3xl bg-gold/5 flex items-center justify-center mb-8 border border-gold/10 group-hover:bg-gold group-hover:text-white transition-all duration-500">
                  <Icon className="text-gold group-hover:text-white group-hover:scale-110 transition-all duration-500" size={32} />
                </div>

                <h3 className="font-nasal text-2xl mb-4 text-[#1A1A1A] tracking-tight group-hover:text-gold transition-colors">
                  {item.title}
                </h3>

                <p className="text-[#1A1A1A]/60 text-sm leading-relaxed mb-8 h-12">
                  {item.desc}
                </p>

                {/* Subtle Action Text */}
                <div className="flex items-center gap-2 text-gold font-nasal text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                  Learn More <ArrowRight size={12} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Action Button */}
        <div className="text-center mt-20">
          <Link href="/services">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1A1A1A] text-white px-12 py-4 rounded-full font-nasal text-sm tracking-widest hover:bg-gold transition-all shadow-xl shadow-black/10"
            >
              EXPLORE ALL SOLUTIONS
            </motion.button>
          </Link>
        </div>
      </Container>
    </section>
  );
}