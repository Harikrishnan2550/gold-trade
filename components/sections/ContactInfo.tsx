"use client";

import Container from "../ui/Container";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const contactDetails = [
  {
    title: "Regional Headquarters",
    value: "#1, Al Huwaidi Building, Deira, Dubai, U.A.E.",
    sub: "Strategic Sharjah-Dubai Corridor",
    icon: MapPin,
    link: "https://maps.google.com",
  },
  {
    title: "Trading Desk",
    value: "+971 422 77664",
    sub: "Mon - Fri, 9:00 AM - 6:00 PM",
    icon: Phone,
    link: "tel:+97142277664",
  },
  {
    title: "Digital Support",
    value: "support@goldtrade.com",
    sub: "24/7 Secure Inquiry Response",
    icon: Mail,
    link: "mailto:support@goldtrade.com",
  },
];

export default function ContactInfo() {
  return (
    <section className="py-24 bg-white relative">
      <Container>
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {contactDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="group relative bg-white p-12 rounded-[3rem] border border-black/5 text-center hover:border-gold/30 transition-all duration-700 shadow-sm hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)]"
              >
                {/* Floating External Link Icon */}
                <div className="absolute top-8 right-8 text-black/10 group-hover:text-gold transition-colors">
                  <ArrowUpRight size={18} />
                </div>

                {/* Icon Container with Dual-Tone Shadow */}
                <div className="w-20 h-20 bg-[#F9F9F9] rounded-[2rem] flex items-center justify-center mx-auto mb-10 border border-black/5 group-hover:bg-gold group-hover:text-white transition-all duration-500 shadow-sm">
                  <Icon className="text-gold group-hover:text-white group-hover:scale-110 transition-all duration-500" size={32} />
                </div>

                <h3 className="font-nasal text-xs tracking-[0.4em] uppercase text-gold mb-4">
                  {item.title}
                </h3>

                <p className="text-[#1A1A1A] font-nasal text-xl mb-4 leading-tight tracking-tighter">
                  {item.value}
                </p>

                <p className="text-[#1A1A1A]/40 text-[10px] uppercase tracking-widest font-inter">
                  {item.sub}
                </p>

                {/* Bottom decorative accent */}
                <div className="mt-10 w-12 h-[1px] bg-black/5 mx-auto group-hover:w-24 group-hover:bg-gold transition-all duration-700" />
              </motion.a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}