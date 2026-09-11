"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, MapPin, X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { GALLERY_ITEMS, type GalleryItem } from "@/data/gallery";

const CATEGORIES = ["ALL", "Ambiance", "Beverages", "Culinary", "Moments"] as const;

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<(typeof CATEGORIES)[number]>("ALL");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeTab === "ALL"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = GALLERY_ITEMS.findIndex((i) => i.id === item.id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  const currentItem = lightboxIndex !== null ? GALLERY_ITEMS[lightboxIndex] : null;

  return (
    <section
      id="gallery"
      className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-[#FFFDF8] text-[#211B16] overflow-hidden"
      aria-label="Cafe Visual Archive"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#B56A3C] font-semibold">
              05 / VISUAL ARCHIVE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#191612] uppercase"
          >
            MOMENTS AT THE TABLE
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-[#6B4B38] font-sans"
          >
            An intimate glimpse into our everyday rituals, spaces, and flavors.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B56A3C] ${
                  isActive
                    ? "bg-[#191612] text-[#FFFDF8] shadow-md"
                    : "bg-[#F7F1E8] text-[#6B4B38] hover:text-[#191612] hover:bg-[#D9B892]/20"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid (2-column on mobile, 3-column / masonry on desktop) */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                onClick={() => handleOpenLightbox(item)}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-md bg-[#241D17] aspect-[4/5] ${
                  idx === 0 ? "col-span-2 row-span-2 aspect-[1/1] sm:aspect-[4/4]" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Dark Overlay with Warm Tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#191612]/90 via-[#191612]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-6 text-white" />

                {/* Hover Content */}
                <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase bg-[#B56A3C]/90 px-2.5 py-1 rounded-full backdrop-blur-sm">
                      {item.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#D9B892] mb-1">
                      <MapPin className="w-3 h-3 text-[#B56A3C]" />
                      <span>{item.location}</span>
                    </div>
                    <h3 className="font-serif text-sm sm:text-lg font-bold leading-snug drop-shadow-sm">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {currentItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              aria-label="Close Lightbox"
              className="absolute top-6 right-6 z-20 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Prev Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous image"
              className="absolute left-4 sm:left-8 z-20 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Next Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next image"
              className="absolute right-4 sm:right-8 z-20 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Content Card */}
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[85vh] flex flex-col rounded-2xl overflow-hidden bg-[#191612] border border-[#D9B892]/30"
            >
              <div className="relative w-full h-[60vh] sm:h-[68vh] bg-black">
                <Image
                  src={currentItem.image}
                  alt={currentItem.title}
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              {/* Bottom Caption Info */}
              <div className="p-5 bg-[#241D17] border-t border-[#D9B892]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#B56A3C]">
                      {currentItem.category}
                    </span>
                    <span className="text-white/40">•</span>
                    <span className="text-xs text-[#D9B892] flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {currentItem.location}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold">{currentItem.title}</h3>
                  <p className="text-xs text-white/70 font-sans mt-0.5 max-w-xl">
                    {currentItem.description}
                  </p>
                </div>

                <div className="text-xs font-mono text-[#D9B892]/80">
                  {lightboxIndex !== null ? lightboxIndex + 1 : 1} / {GALLERY_ITEMS.length}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
