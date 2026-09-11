"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Utensils, Award, Star } from "lucide-react";

interface CounterItemProps {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
  sublabel: string;
  icon: React.ElementType;
  delay?: number;
}

function CounterItem({
  value,
  suffix = "",
  decimals = 0,
  label,
  sublabel,
  icon: Icon,
  delay = 0,
}: CounterItemProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // easeOutExpo
      const current = value * (1 - Math.pow(2, -10 * progress));

      if (frame >= totalFrames) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(current);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="p-6 sm:p-8 rounded-3xl bg-[#241D17]/80 backdrop-blur-md border border-[#D9B892]/20 flex flex-col items-center text-center group hover:border-[#B56A3C]/60 hover:bg-[#241D17] transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-2xl bg-[#B56A3C]/15 border border-[#B56A3C]/30 flex items-center justify-center text-[#D9B892] group-hover:scale-110 group-hover:bg-[#B56A3C] group-hover:text-white transition-all duration-300 mb-4">
        <Icon className="w-6 h-6" />
      </div>

      <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FFFDF8] mb-1">
        <span>{decimals > 0 ? displayValue.toFixed(decimals) : Math.floor(displayValue)}</span>
        <span className="text-[#B56A3C]">{suffix}</span>
      </div>

      <h3 className="font-serif text-lg font-semibold text-[#D9B892] tracking-wide mb-1">
        {label}
      </h3>

      <p className="text-xs text-[#D9B892]/60 font-sans tracking-wide">
        {sublabel}
      </p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section
      className="relative py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-[#191612] text-[#FFFDF8] overflow-hidden"
      aria-label="Why People Love Us"
    >
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-[#B56A3C]/10 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 dark-grain-overlay opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Eyebrow */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#D9B892] font-semibold">
            WHY PEOPLE LOVE US
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold mt-2 text-[#FFFDF8] uppercase">
            NUMBERS THAT REFLECT OUR WARMTH
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <CounterItem
            value={50}
            suffix="K+"
            label="Happy Guests"
            sublabel="Welcomed since day one"
            icon={Users}
            delay={0.1}
          />
          <CounterItem
            value={30}
            suffix="+"
            label="Signature Dishes"
            sublabel="Handcrafted recipes"
            icon={Utensils}
            delay={0.2}
          />
          <CounterItem
            value={8}
            suffix="+"
            label="Years of Stories"
            sublabel="Brewing since 2018"
            icon={Award}
            delay={0.3}
          />
          <CounterItem
            value={4.9}
            decimals={1}
            suffix=" ★"
            label="Average Rating"
            sublabel="Across Google & Zomato"
            icon={Star}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}
