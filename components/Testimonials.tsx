"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-[#191612] text-[#FFFDF8] overflow-hidden"
      aria-label="Guest Testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#B56A3C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 dark-grain-overlay opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Tag & Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#D9B892] font-semibold">
              06 / KIND WORDS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#FFFDF8] uppercase"
          >
            STORIES FROM OUR TABLES
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-[#D9B892]/80 font-sans"
          >
            The memories, laughter, and reviews that keep our kettles singing.
          </motion.p>
        </div>

        {/* Testimonial Card Display */}
        <div className="relative min-h-[380px] sm:min-h-[320px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="w-full bg-[#241D17] border border-[#D9B892]/25 rounded-3xl p-6 sm:p-12 shadow-2xl relative"
            >
              {/* Quote Watermark */}
              <Quote className="absolute top-6 right-8 w-16 h-16 text-[#D9B892]/10 pointer-events-none" />

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
                {/* Avatar */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 border-2 border-[#B56A3C] shadow-lg">
                  <Image
                    src={current.avatar}
                    alt={current.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-grow text-center sm:text-left">
                  {/* Rating Stars */}
                  <div className="flex items-center justify-center sm:justify-start gap-1 mb-3 text-amber-400">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="font-cormorant italic text-xl sm:text-2xl lg:text-3xl text-[#FFFDF8] leading-relaxed mb-6">
                    &ldquo;{current.quote}&rdquo;
                  </p>

                  {/* Author Meta */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-[#D9B892]/20 pt-4">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-[#FFFDF8]">
                        {current.name}
                      </h4>
                      <p className="text-xs text-[#D9B892]/80 font-sans">
                        {current.role} • {current.city}
                      </p>
                    </div>

                    <div className="text-xs text-[#B56A3C] font-mono tracking-wider">
                      Favorite: <span className="text-[#FFFDF8] font-sans font-medium">{current.favoriteItem}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="flex items-center justify-between mt-8 pt-4">
          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-[#B56A3C]"
                    : "w-2 bg-[#D9B892]/30 hover:bg-[#D9B892]/60"
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-[#D9B892]/30 bg-[#241D17] text-[#FFFDF8] flex items-center justify-center hover:bg-[#B56A3C] hover:border-[#B56A3C] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-[#D9B892]/30 bg-[#241D17] text-[#FFFDF8] flex items-center justify-center hover:bg-[#B56A3C] hover:border-[#B56A3C] transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
