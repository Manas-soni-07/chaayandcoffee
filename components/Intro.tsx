"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Feather } from "lucide-react";

export default function Intro() {
  return (
    <section
      id="intro"
      className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#F7F1E8] text-[#211B16] overflow-hidden grain-overlay"
      aria-label="About The Chaay House"
    >
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 -right-48 w-96 h-96 rounded-full border border-[#D9B892]/30 pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 -right-60 w-[30rem] h-[30rem] rounded-full border border-[#D9B892]/20 pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12 sm:mb-16"
        >
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#B56A3C] font-semibold">
            01 / OUR ESSENCE
          </span>
          <div className="h-[1px] w-12 bg-[#B56A3C]/40" />
        </motion.div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Framed Editorial Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl shadow-[#6B4B38]/15 border border-[#D9B892]/40 group">
              <Image
                src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=85"
                alt="Traditional Indian Chai pouring at The Chaay House"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#191612]/70 via-transparent to-transparent opacity-80" />

              {/* Inset Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#FFFDF8]/90 backdrop-blur-md border border-[#D9B892]/30 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#B56A3C]/15 flex items-center justify-center text-[#B56A3C]">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#191612] font-serif tracking-wide">
                        The Timeless Pour
                      </p>
                      <p className="text-[11px] text-[#6B4B38] font-sans">
                        Assam CTC & 7 Secret Spices
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#B56A3C] font-medium bg-[#B56A3C]/10 px-2.5 py-1 rounded-full">
                    Est. 2018
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative Offset Backdrop Accent */}
            <div className="absolute -bottom-6 -left-6 w-full h-full rounded-2xl border-2 border-[#B56A3C]/30 -z-10 hidden sm:block pointer-events-none" />
          </motion.div>

          {/* Right Column: Editorial Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B56A3C] font-semibold mb-4">
              <Feather className="w-3.5 h-3.5" />
              <span>MORE THAN A CAFE</span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#191612] leading-[1.15] mb-6">
              A little chai.<br />
              <span className="font-cormorant italic font-normal text-[#B56A3C]">
                A lot of stories.
              </span>
            </h2>

            {/* Main Paragraph */}
            <p className="text-base sm:text-lg text-[#211B16]/85 font-normal leading-relaxed mb-6 font-sans">
              We believe the best conversations begin with a warm cup,
              a shared plate and a little extra time.
            </p>

            <p className="text-sm sm:text-base text-[#6B4B38] leading-relaxed mb-8 font-light">
              In India, chai isn&apos;t merely a drink — it is an emotion, an unhurried pause in a bustling day, and an invitation to open your heart. At The Chaay House, we honor this heirloom ritual by brewing hand-pounded spices in terracotta vessels, pairing traditional aromas with contemporary culinary craftsmanship.
            </p>

            {/* Key Pillars */}
            <div className="grid grid-cols-2 gap-4 py-6 border-y border-[#D9B892]/40 mb-8">
              <div>
                <p className="text-2xl font-serif font-bold text-[#B56A3C]">100%</p>
                <p className="text-xs text-[#6B4B38] uppercase tracking-wider mt-1">Whole Spices Ground Daily</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-[#B56A3C]">Terracotta</p>
                <p className="text-xs text-[#6B4B38] uppercase tracking-wider mt-1">Earthen Smoky Infusion</p>
              </div>
            </div>

            {/* Discover Link */}
            <div>
              <Link
                href="#story"
                className="group inline-flex items-center gap-3 text-sm font-semibold tracking-widest uppercase text-[#191612] hover:text-[#B56A3C] transition-colors"
              >
                <span>Discover Our Story</span>
                <span className="w-8 h-8 rounded-full bg-[#B56A3C]/10 flex items-center justify-center group-hover:bg-[#B56A3C] group-hover:text-white transition-all">
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
