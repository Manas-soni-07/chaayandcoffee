"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sunrise, Laptop, Moon, Sparkles } from "lucide-react";

const EXPERIENCES = [
  {
    number: "01",
    title: "Morning Chai",
    tagline: "Start slow. Start warm.",
    description:
      "The quiet hours before the city awakes. The gentle hiss of the kettle, the fragrance of crushed ginger and lemongrass in the air, and hot clay kulhad between your palms.",
    icon: Sunrise,
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80",
    timing: "8:00 AM – 11:30 AM",
    highlight: "Fresh bun maska & hot kulhad",
  },
  {
    number: "02",
    title: "Work & Create",
    tagline: "Good coffee. Better ideas.",
    description:
      "A sun-dappled haven tailored for thinkers, writers, and digital nomads. Ergonomic seating, whisper-quiet acoustic playlists, reliable power points, and artisanal filter coffee that sparks breakthroughs.",
    icon: Laptop,
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80",
    timing: "12:00 PM – 5:30 PM",
    highlight: "High-speed Wi-Fi & quiet corners",
  },
  {
    number: "03",
    title: "Evening Conversations",
    tagline: "Where every table has a story.",
    description:
      "As dusk descends on Indore, fairy lights kindle and the room fills with shared laughter, clinking dabarah tumblers, spicy small plates, and conversations that stretch until midnight.",
    icon: Moon,
    image:
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80",
    timing: "6:00 PM – Midnight",
    highlight: "Golden hour ambiance & live acoustics",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#191612] text-[#FFFDF8] overflow-hidden"
      aria-label="The Chaay House Experience"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-[#B56A3C]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#D9B892]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 dark-grain-overlay opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#D9B892] font-semibold">
              03 / SPACES & RITUALS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FFFDF8] uppercase"
          >
            THE CHAAY HOUSE EXPERIENCE
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#D9B892]/80 font-sans max-w-xl mx-auto"
          >
            Designed for different moods of your day — from reflective dawns to electric evenings.
          </motion.p>
        </div>

        {/* 3 Experience Cards - Alternating Editorial Layout */}
        <div className="space-y-16 sm:space-y-24">
          {EXPERIENCES.map((exp, idx) => {
            const Icon = exp.icon;
            const isReversed = idx % 2 !== 0;

            return (
              <motion.div
                key={exp.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Side */}
                <div
                  className={`lg:col-span-7 relative group ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#D9B892]/25 shadow-2xl shadow-black/60">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#191612]/80 via-transparent to-transparent opacity-70" />

                    {/* Badge Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#FFFDF8] bg-[#191612]/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#D9B892]/20">
                      <span className="font-mono text-[#D9B892] tracking-wider uppercase">
                        {exp.timing}
                      </span>
                      <span className="text-[#F7F1E8]/90 font-medium">{exp.highlight}</span>
                    </div>
                  </div>
                </div>

                {/* Narrative Side */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-center ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-serif text-3xl font-light text-[#B56A3C]">
                      {exp.number}
                    </span>
                    <div className="h-[1px] w-10 bg-[#B56A3C]/40" />
                    <div className="p-2 rounded-lg bg-[#241D17] border border-[#D9B892]/20 text-[#D9B892]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFFDF8] mb-2">
                    {exp.title}
                  </h3>

                  <p className="font-cormorant italic text-xl sm:text-2xl text-[#D9B892] mb-4">
                    &ldquo;{exp.tagline}&rdquo;
                  </p>

                  <p className="text-sm sm:text-base text-[#D9B892]/80 leading-relaxed font-sans font-light mb-6">
                    {exp.description}
                  </p>

                  <div>
                    <a
                      href="#reservation"
                      className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B56A3C] hover:text-[#D9B892] transition-colors"
                    >
                      <span>Reserve for this experience</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
