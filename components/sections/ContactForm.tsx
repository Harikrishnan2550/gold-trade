"use client";

import Container from "../ui/Container";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Premium Inquiry Received:", form);
    // Add your submission logic here
  }

  const inputStyles = `
    w-full bg-[#FBFBFB] border border-black/5 p-5 rounded-2xl 
    outline-none transition-all duration-300 font-inter text-sm
    placeholder:text-[#1A1A1A]/30 text-[#1A1A1A]
    focus:border-gold/50 focus:bg-white focus:shadow-[0_0_20px_rgba(212,175,55,0.1)]
  `;

  return (
    <section className="py-32 bg-white">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white border border-black/5 rounded-[3.5rem] p-8 lg:p-20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)]"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-gold font-nasal tracking-[0.5em] text-[10px] uppercase mb-4 block">
              Inquiry Desk
            </span>
            <h2 className="font-nasal text-4xl lg:text-5xl text-[#1A1A1A] tracking-tighter">
              Send a <span className="text-gold-gradient italic">Message</span>
            </h2>
            <div className="w-12 h-[1px] bg-gold/30 mx-auto mt-6" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-nasal text-[10px] uppercase tracking-widest text-[#1A1A1A]/40 ml-4">Full Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="e.g. Abdullah Ahmed"
                  onChange={handleChange}
                  className={inputStyles}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="font-nasal text-[10px] uppercase tracking-widest text-[#1A1A1A]/40 ml-4">Email Address</label>
                <input
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  onChange={handleChange}
                  className={inputStyles}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-nasal text-[10px] uppercase tracking-widest text-[#1A1A1A]/40 ml-4">Phone Number</label>
              <input
                name="phone"
                type="tel"
                placeholder="+971 -- --- ----"
                onChange={handleChange}
                className={inputStyles}
              />
            </div>

            <div className="space-y-2">
              <label className="font-nasal text-[10px] uppercase tracking-widest text-[#1A1A1A]/40 ml-4">Your Message</label>
              <textarea
                name="message"
                placeholder="How can our trading desk assist you today?"
                rows={6}
                onChange={handleChange}
                className={`${inputStyles} resize-none`}
                required
              />
            </div>

            <div className="pt-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#1A1A1A] text-white py-6 rounded-2xl font-nasal tracking-[0.3em] text-xs uppercase hover:bg-gold transition-all duration-500 shadow-xl shadow-black/10 flex items-center justify-center gap-3"
              >
                <Send size={16} />
                Initialize Inquiry
              </motion.button>
              
              <p className="text-center text-[10px] text-[#1A1A1A]/30 font-inter mt-8 uppercase tracking-widest">
                Protected by institutional-grade encryption
              </p>
            </div>
          </form>
        </motion.div>
      </Container>
    </section>
  );
}