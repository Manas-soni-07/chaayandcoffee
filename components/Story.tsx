"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Calendar, Coffee, Users, Flame, Heart } from "lucide-react";

const TIMELINE = [
  {
    year: "2018",
    title: "The First Cup",
    subtitle: "A modest 6-table dream in Indore",
    description:
      "Armed with our grandmother’s blend of 7 hand-pounded spices, a single kerosene stove, and a dream to celebrate real Indian chai ritual.",
    icon: Flame,
  },
  {
    year: "2020",
    title: "A Growing Community",
    subtitle: "Connecting hearts from afar",
    description:
      "When the world paused, our patrons kept us brewing. We delivered hot ginger brews in insulated flasks with handwritten notes of hope across Indore.",
    icon: Heart,
  },
  {
    year: "2023",
    title: "New Flavours",
    subtitle: "Artisanal coffee & fusion desserts",
    description:
      "Expanded our studio with Chikmagalur single-estate filter roasts, sourdough Indian toasties, and our iconic Gulab Jamun Cheesecake.",
    icon: Coffee,
  },
  {
    year: "2026",
    title: "Still Brewing Stories",
    subtitle: "A sanctuary for every soul",
    description:
      "Now a beloved landmark where college cohorts, creative founders, families, and solo book lovers converge every single day.",
    icon: Users,
  },
];

export default function Story() {
  return (
    <section
      id="story"
      className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#F7F1E8] text-[#211B16] overflow-hidden grain-overlay"
      aria-label="Our Story and Timeline"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#B56A3C] font-semibold">
              04 / OUR STORY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#191612] uppercase leading-tight"
          >
            BORN FROM A LOVE FOR CHAAY.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#6B4B38] font-sans leading-relaxed"
          >
            The Chaay House started with one simple idea:
            bring the warmth of Indian chai culture into a modern space
            where people can pause, connect and create memories.
          </motion.p>
        </div>

        {/* Storytelling Quote Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto mb-20 p-8 sm:p-12 rounded-3xl bg-[#FFFDF8] border border-[#D9B892]/40 shadow-xl shadow-[#6B4B38]/5"
        >
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 shrink-0 rounded-full overflow-hidden border-4 border-[#D9B892]/30 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=400&q=80"
                alt="Boiling Chai at The Chaay House"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="font-cormorant italic text-xl sm:text-2xl text-[#211B16] leading-relaxed mb-3">
                &ldquo;Every tea leaf we brew carries the mist of Assam hills; every cardamom pod is cracked with intent. We don&apos;t just serve beverages — we preserve an Indian living art.&rdquo;
              </p>
              <span className="text-xs font-mono tracking-widest uppercase text-[#B56A3C] font-semibold">
                — Founder & Brewmaster, The Chaay House
              </span>
            </div>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <div className="mt-12">
          {/* Desktop: Horizontal Timeline */}
          <div className="hidden lg:block relative">
            {/* Progress line */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#D9B892]/40 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-4 gap-8 relative z-10">
              {TIMELINE.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className={`flex flex-col items-center text-center ${
                      isEven ? "justify-start" : "justify-end pt-12"
                    }`}
                  >
                    {isEven && (
                      <div className="mb-6 p-5 rounded-2xl bg-[#FFFDF8] border border-[#D9B892]/40 shadow-lg">
                        <span className="text-xs font-mono text-[#B56A3C] font-semibold uppercase tracking-wider block mb-1">
                          {item.year}
                        </span>
                        <h4 className="font-serif text-lg font-bold text-[#191612]">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#B56A3C] font-medium mb-2">
                          {item.subtitle}
                        </p>
                        <p className="text-xs text-[#6B4B38] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    )}

                    {/* Timeline Node */}
                    <div className="w-12 h-12 rounded-full bg-[#191612] text-[#D9B892] border-4 border-[#F7F1E8] shadow-md flex items-center justify-center my-4 group hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-[#D9B892]" />
                    </div>

                    {!isEven && (
                      <div className="mt-6 p-5 rounded-2xl bg-[#FFFDF8] border border-[#D9B892]/40 shadow-lg">
                        <span className="text-xs font-mono text-[#B56A3C] font-semibold uppercase tracking-wider block mb-1">
                          {item.year}
                        </span>
                        <h4 className="font-serif text-lg font-bold text-[#191612]">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#B56A3C] font-medium mb-2">
                          {item.subtitle}
                        </p>
                        <p className="text-xs text-[#6B4B38] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile & Tablet: Vertical Timeline */}
          <div className="lg:hidden relative pl-6 sm:pl-8 border-l-2 border-[#D9B892]/50 space-y-10">
            {TIMELINE.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-8 h-8 rounded-full bg-[#191612] text-[#D9B892] border-2 border-[#D9B892] flex items-center justify-center shadow-md">
                    <Icon className="w-3.5 h-3.5" />
                  </div>

                  <div className="p-5 rounded-2xl bg-[#FFFDF8] border border-[#D9B892]/40 shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono font-bold text-[#B56A3C]">
                        {item.year}
                      </span>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#6B4B38]">
                        Chapter 0{index + 1}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#191612]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#B56A3C] font-medium mb-2">
                      {item.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-[#6B4B38] leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
