"use client";

import Container from "../ui/Container";
import { motion } from "framer-motion";
import { Shield, Award, Users, CheckCircle, ArrowUpRight } from "lucide-react";

const points = [
  {
    title: "Trusted Company",
    desc: "Reliable gold trading services with a proven track record of excellence in Dubai.",
    icon: Shield,
  },
  {
    title: "Professional Expertise",
    desc: "Our trading professionals bring decades of collective market knowledge to your portfolio.",
    icon: Award,
  },
  {
    title: "Strong Client Network",
    desc: "Serving a diverse range of private investors and global financial institutions.",
    icon: Users,
  },
  {
    title: "Transparent Process",
    desc: "Clear, secure, and fully audited trading operations for absolute peace of mind.",
    icon: CheckCircle,
  },
];

export default function WhyChoose() {
  return (
    <section className="py-32 bg-white relative">
      {/* Decorative vertical line accent */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-black/5 hidden lg:block" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          
          {/* LEFT SIDE: Heading & Context */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-nasal tracking-[0.4em] text-[10px] uppercase mb-6 block">
              The Gold Advantage
            </span>
            
            <h2 className="font-nasal text-5xl lg:text-6xl leading-[1.1] text-[#1A1A1A] tracking-tighter">
              Why Choose Our <br />
              <span className="text-gold-gradient italic">Trading Services</span>
            </h2>

            <p className="text-[#1A1A1A]/60 mt-8 text-lg font-inter leading-relaxed max-w-lg">
              We combine deep market expertise with secure, institutional-grade 
              processes to deliver trusted gold trading solutions tailored to the 
              modern wealth builder.
            </p>
            
            {/* Added a premium stat/badge */}
            <div className="mt-12 p-6 bg-[#F9F9F9] border border-black/5 rounded-3xl inline-flex items-center gap-4">
              <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center">
                <ArrowUpRight className="text-gold" size={24} />
              </div>
              <div>
                <p className="text-[#1A1A1A] font-nasal text-xl leading-none">99.9%</p>
                <p className="text-[#1A1A1A]/40 text-[10px] uppercase tracking-widest mt-1">Purity Guaranteed</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Interactive List Items */}
          <div className="space-y-12">
            {points.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  className="flex gap-8 group"
                >
                  {/* Icon with Hover Animation */}
                  <div className="relative">
                    <div className="w-14 h-14 bg-white border border-black/10 rounded-2xl flex items-center justify-center shadow-sm group-hover:border-gold group-hover:bg-gold transition-all duration-500">
                      <Icon className="text-gold group-hover:text-white transition-colors duration-500" size={24} />
                    </div>
                    {/* Floating number indicator for luxury vibe */}
                    <span className="absolute -top-2 -right-2 text-[10px] font-nasal text-gold/30 group-hover:text-gold transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="flex-1 border-b border-black/5 pb-8 group-last:border-0 transition-colors group-hover:border-gold/20">
                    <h3 className="font-nasal text-xl mb-3 text-[#1A1A1A] group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#1A1A1A]/50 text-sm leading-relaxed max-w-sm">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}