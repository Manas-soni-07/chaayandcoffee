"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Send, CheckCircle2, Clock } from "lucide-react";
import { InstagramIcon } from "@/components/icons/BrandIcons";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setIsSent(true);
    setTimeout(() => {
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-[#F7F1E8] text-[#211B16] overflow-hidden grain-overlay"
      aria-label="Contact The Chaay House"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#B56A3C] font-semibold">
              09 / REACH OUT
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#191612] uppercase"
          >
            LET&apos;S TALK CHAAY
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-[#6B4B38] font-sans"
          >
            Private gatherings, catering inquiries, or just saying hello — we&apos;d love to hear from you.
          </motion.p>
        </div>

        {/* Contact Grid: Direct Info on Left, Inquiry Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Direct Channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* Phone */}
            <a
              href="tel:+919876543210"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-[#FFFDF8] border border-[#D9B892]/40 shadow-sm hover:shadow-md hover:border-[#B56A3C] transition-all block text-decoration-none"
            >
              <div className="w-12 h-12 rounded-xl bg-[#B56A3C]/15 text-[#B56A3C] flex items-center justify-center group-hover:bg-[#B56A3C] group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-[#6B4B38]">
                  Phone / Reservations
                </p>
                <p className="font-serif text-lg font-bold text-[#191612] group-hover:text-[#B56A3C] transition-colors">
                  +91 98765 43210
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:hello@thechaayhouse.in"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-[#FFFDF8] border border-[#D9B892]/40 shadow-sm hover:shadow-md hover:border-[#B56A3C] transition-all block text-decoration-none"
            >
              <div className="w-12 h-12 rounded-xl bg-[#B56A3C]/15 text-[#B56A3C] flex items-center justify-center group-hover:bg-[#B56A3C] group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-[#6B4B38]">
                  Electronic Mail
                </p>
                <p className="font-serif text-lg font-bold text-[#191612] group-hover:text-[#B56A3C] transition-colors">
                  hello@thechaayhouse.in
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-[#FFFDF8] border border-[#D9B892]/40 shadow-sm hover:shadow-md hover:border-[#B56A3C] transition-all block text-decoration-none"
            >
              <div className="w-12 h-12 rounded-xl bg-[#B56A3C]/15 text-[#B56A3C] flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-[#6B4B38]">
                  Instant WhatsApp
                </p>
                <p className="font-serif text-lg font-bold text-[#191612] group-hover:text-emerald-700 transition-colors">
                  Chat With Our Concierge
                </p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-[#FFFDF8] border border-[#D9B892]/40 shadow-sm hover:shadow-md hover:border-[#B56A3C] transition-all block text-decoration-none"
            >
              <div className="w-12 h-12 rounded-xl bg-[#B56A3C]/15 text-[#B56A3C] flex items-center justify-center group-hover:bg-[#E1306C] group-hover:text-white transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-[#6B4B38]">
                  Instagram Community
                </p>
                <p className="font-serif text-lg font-bold text-[#191612] group-hover:text-[#B56A3C] transition-colors">
                  @thechaayhouse
                </p>
              </div>
            </a>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7 bg-[#FFFDF8] rounded-3xl p-6 sm:p-10 border border-[#D9B892]/40 shadow-xl">
            <h3 className="font-serif text-2xl font-bold text-[#191612] mb-2">
              Send a Note to Our Kitchen & Team
            </h3>
            <p className="text-xs sm:text-sm text-[#6B4B38] mb-6">
              Have a special dietary requirement, feedback, or private event inquiry? Drop us a line.
            </p>

            {isSent ? (
              <div className="py-12 text-center flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#191612]">
                  Thank You for Writing to Us!
                </h4>
                <p className="text-xs text-[#6B4B38] mt-1 max-w-sm">
                  Your note has been received. One of our team members will respond within 4 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#191612] font-semibold mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D9B892]/60 bg-[#F7F1E8]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#B56A3C]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#191612] font-semibold mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D9B892]/60 bg-[#F7F1E8]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#B56A3C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#191612] font-semibold mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Private Gathering / Catering / Feedback"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D9B892]/60 bg-[#F7F1E8]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#B56A3C]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#191612] font-semibold mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we make your experience memorable?"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D9B892]/60 bg-[#F7F1E8]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#B56A3C] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#191612] hover:bg-[#B56A3C] text-white text-xs font-semibold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
