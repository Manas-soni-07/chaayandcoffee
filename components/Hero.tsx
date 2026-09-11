"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles, Heart, Clock, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#191612]"
      aria-label="Hero Section"
    >
      {/* Background Image with Cinematic Zoom & Reveal */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2000&q=85"
          alt="The Chaay House warm aesthetic interior"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Sophisticated Multi-layer Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#191612]/75 via-[#191612]/55 to-[#191612]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(181,106,60,0.18)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-black/25" />
        {/* Subtle texture */}
        <div className="absolute inset-0 dark-grain-overlay opacity-60" />
      </motion.div>

      {/* Floating Detail Badges */}
      {/* 1. Since 2018 (Top Left) */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
        className="hidden lg:flex items-center gap-3 absolute top-32 left-12 xl:left-24 z-10 px-4 py-2.5 rounded-full bg-[#241D17]/80 backdrop-blur-md border border-[#D9B892]/30 shadow-2xl animate-pulse"
      >
        <div className="w-7 h-7 rounded-full bg-[#B56A3C]/20 flex items-center justify-center text-[#D9B892]">
          <Clock className="w-3.5 h-3.5" />
        </div>
        <div className="text-left">
          <p className="text-[10px] tracking-widest uppercase text-[#D9B892]/70 font-mono">Heritage</p>
          <p className="text-xs font-serif font-semibold text-[#FFFDF8] tracking-wider">Since 2018</p>
        </div>
      </motion.div>

      {/* 2. 100% Fresh (Top Right) */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
        className="hidden lg:flex items-center gap-3 absolute top-36 right-12 xl:right-24 z-10 px-4 py-2.5 rounded-full bg-[#241D17]/80 backdrop-blur-md border border-[#D9B892]/30 shadow-2xl"
      >
        <div className="w-7 h-7 rounded-full bg-[#B56A3C]/20 flex items-center justify-center text-[#D9B892]">
          <Sparkles className="w-3.5 h-3.5 text-[#B56A3C]" />
        </div>
        <div className="text-left">
          <p className="text-[10px] tracking-widest uppercase text-[#D9B892]/70 font-mono">Purity</p>
          <p className="text-xs font-serif font-semibold text-[#FFFDF8] tracking-wider">100% Fresh</p>
        </div>
      </motion.div>

      {/* 3. Made With Love (Bottom Left) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
        className="hidden md:flex items-center gap-3 absolute bottom-28 left-12 xl:left-24 z-10 px-4 py-2.5 rounded-full bg-[#241D17]/80 backdrop-blur-md border border-[#D9B892]/30 shadow-2xl"
      >
        <div className="w-7 h-7 rounded-full bg-[#B56A3C]/20 flex items-center justify-center text-[#D9B892]">
          <Heart className="w-3.5 h-3.5 text-[#B56A3C]" />
        </div>
        <div className="text-left">
          <p className="text-[10px] tracking-widest uppercase text-[#D9B892]/70 font-mono">Philosophy</p>
          <p className="text-xs font-serif font-semibold text-[#FFFDF8] tracking-wider">Made With Love</p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center pt-24 pb-20 flex flex-col items-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B56A3C]/20 border border-[#B56A3C]/40 backdrop-blur-sm mb-6 sm:mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D9B892] animate-ping" />
          <span className="text-xs sm:text-sm tracking-[0.28em] uppercase text-[#D9B892] font-medium font-sans">
            AN INDIAN CAFE EXPERIENCE
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#FFFDF8] leading-[1.08] sm:leading-[1.05] uppercase drop-shadow-lg"
        >
          CHAAY.<br />
          <span className="text-[#D9B892] font-light italic font-cormorant lowercase tracking-normal text-3xl sm:text-5xl md:text-6xl">
            and &nbsp;
          </span>
          COFFEE.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDF8] via-[#D9B892] to-[#B56A3C]">
            CONVERSATIONS.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg md:text-xl text-[#F7F1E8]/90 font-light font-sans leading-relaxed tracking-wide"
        >
          From traditional Indian chai to handcrafted coffee,
          served with food that feels like home.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto justify-center"
        >
          <Link
            href="#menu"
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#191612] bg-[#D9B892] hover:bg-[#FFFDF8] rounded-full transition-all duration-300 shadow-xl shadow-black/30 transform hover:-translate-y-1"
          >
            <span>Explore Menu</span>
            <ArrowRight className="w-4 h-4 text-[#191612] transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="#reservation"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#FFFDF8] bg-[#B56A3C] hover:bg-[#C88A5A] rounded-full transition-all duration-300 shadow-xl shadow-[#B56A3C]/30 border border-[#B56A3C]/50 transform hover:-translate-y-1"
          >
            <span>Reserve a Table</span>
          </Link>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
      >
        <Link
          href="#intro"
          className="flex flex-col items-center text-decoration-none group"
          aria-label="Scroll to explore"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#D9B892]/80 font-mono group-hover:text-[#FFFDF8] transition-colors">
            SCROLL TO EXPLORE
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="mt-1"
          >
            <ChevronDown className="w-4 h-4 text-[#D9B892] group-hover:text-[#FFFDF8] transition-colors" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
