"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Clock, ArrowRight, X, Heart } from "lucide-react";
import { MENU_CATEGORIES, MENU_ITEMS, type MenuCategory, type MenuItem } from "@/data/menu";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | "ALL">("CHAI");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems =
    activeCategory === "ALL"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section
      id="menu"
      className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-[#FFFDF8] text-[#211B16] overflow-hidden"
      aria-label="Signature Menu"
    >
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D9B892]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B56A3C]/10 rounded-full blur-3xl pointer-events-none" />

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
              02 / SIGNATURE MENU
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#191612] uppercase"
          >
            OUR SIGNATURES
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-[#6B4B38] font-sans"
          >
            Comforting classics. Modern favourites.
          </motion.p>
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-start md:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 sm:mb-12 no-scrollbar px-2"
        >
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B56A3C] ${
                  isActive
                    ? "text-[#FFFDF8] shadow-md shadow-[#B56A3C]/25"
                    : "text-[#6B4B38] bg-[#F7F1E8] hover:bg-[#D9B892]/20 hover:text-[#191612]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeMenuTab"
                    className="absolute inset-0 bg-[#B56A3C] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span>{cat}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Menu Items Grid (Desktop) & Swipeable List (Mobile) */}
        <motion.div layout className="relative">
          {/* Desktop & Tablet: Grid Layout */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.94, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: 15 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  onClick={() => setSelectedItem(item)}
                  className="group relative bg-[#F7F1E8] rounded-2xl overflow-hidden border border-[#D9B892]/30 shadow-md hover:shadow-xl hover:shadow-[#6B4B38]/10 transition-all duration-300 cursor-pointer flex flex-col"
                >
                  {/* Item Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#241D17]/10">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Vegetarian Indicator */}
                    <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-sm p-1.5 rounded-md shadow-md">
                      <div className="w-3.5 h-3.5 border-2 border-emerald-600 flex items-center justify-center rounded-[2px]">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      </div>
                    </div>

                    {/* Badge */}
                    {item.badge && (
                      <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-[#191612]/85 backdrop-blur-md border border-[#D9B892]/30 text-[10px] font-mono tracking-wider uppercase text-[#D9B892]">
                        {item.badge}
                      </div>
                    )}

                    {/* Price Tag */}
                    <div className="absolute bottom-3 right-3.5 px-3 py-1 rounded-full bg-[#B56A3C] text-[#FFFDF8] font-serif font-bold text-sm tracking-wide shadow-md">
                      ₹{item.price}
                    </div>
                  </div>

                  {/* Item Details */}
                  <div className="p-5 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex items-baseline justify-between gap-2 mb-1">
                        <h3 className="font-serif text-lg font-bold text-[#191612] group-hover:text-[#B56A3C] transition-colors">
                          {item.name}
                        </h3>
                        {item.hindiName && (
                          <span className="font-cormorant text-sm text-[#B56A3C] font-medium">
                            {item.hindiName}
                          </span>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-[#6B4B38] line-clamp-2 leading-relaxed font-sans mb-3">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-[#D9B892]/30 text-[11px] text-[#6B4B38]">
                      {item.prepTime && (
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#B56A3C]" />
                          <span>{item.prepTime}</span>
                        </div>
                      )}
                      <span className="font-semibold text-[#B56A3C] group-hover:underline flex items-center gap-1">
                        View Details →
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile: Horizontal Swipeable Cards */}
          <div className="sm:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 px-1 no-scrollbar">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  onClick={() => setSelectedItem(item)}
                  className="snap-center shrink-0 w-[82vw] max-w-[320px] bg-[#F7F1E8] rounded-2xl overflow-hidden border border-[#D9B892]/40 shadow-lg flex flex-col active:scale-[0.98] transition-transform"
                >
                  <div className="relative aspect-[4/3] w-full bg-[#241D17]/10">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="320px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                    {/* Vegetarian Indicator */}
                    <div className="absolute top-3 left-3 bg-white/95 p-1.5 rounded-md shadow-md">
                      <div className="w-3 h-3 border-2 border-emerald-600 flex items-center justify-center rounded-[2px]">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      </div>
                    </div>

                    {item.badge && (
                      <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-[#191612]/85 text-[10px] font-mono uppercase text-[#D9B892]">
                        {item.badge}
                      </div>
                    )}

                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-[#B56A3C] text-[#FFFDF8] font-serif font-bold text-sm">
                      ₹{item.price}
                    </div>
                  </div>

                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-baseline justify-between gap-1 mb-1">
                        <h3 className="font-serif text-base font-bold text-[#191612]">
                          {item.name}
                        </h3>
                        {item.hindiName && (
                          <span className="font-cormorant text-xs text-[#B56A3C]">
                            {item.hindiName}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#6B4B38] line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2.5 mt-2 border-t border-[#D9B892]/30 text-[11px] text-[#6B4B38]">
                      {item.prepTime && <span>🕒 {item.prepTime}</span>}
                      <span className="font-semibold text-[#B56A3C]">Tap for details →</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Menu CTA Bar */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-xs uppercase tracking-widest text-[#6B4B38] mb-3">
            Pure Vegetarian • Jain Options Available on Request • Handcrafted Daily
          </p>
          <a
            href="#reservation"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#B56A3C] hover:text-[#191612] transition-colors"
          >
            <span>Reserve A Table To Taste Fresh</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Lightbox / Item Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-[#FFFDF8] rounded-3xl overflow-hidden shadow-2xl border border-[#D9B892]/40 text-[#211B16]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                aria-label="Close details"
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/75 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between text-white">
                  <div>
                    <span className="text-xs uppercase font-mono tracking-widest text-[#D9B892]">
                      {selectedItem.category}
                    </span>
                    <h3 className="font-serif text-2xl font-bold">{selectedItem.name}</h3>
                  </div>
                  <span className="font-serif text-2xl font-bold text-[#D9B892]">
                    ₹{selectedItem.price}
                  </span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    <span>100% Pure Vegetarian</span>
                  </div>
                  {selectedItem.badge && (
                    <span className="px-2.5 py-1 rounded-md bg-[#B56A3C]/10 text-[#B56A3C] text-xs font-semibold">
                      {selectedItem.badge}
                    </span>
                  )}
                </div>

                <p className="text-sm text-[#211B16]/90 leading-relaxed font-sans">
                  {selectedItem.description}
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-[#6B4B38] border-t border-[#D9B892]/30">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#B56A3C]">Preparation</span>
                    <p className="font-medium text-[#191612]">{selectedItem.prepTime || "Made to order"}</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#B56A3C]">Serving Style</span>
                    <p className="font-medium text-[#191612]">Earthen Kulhad & Brass</p>
                  </div>
                </div>

                {/* Modal CTA */}
                <div className="pt-3">
                  <a
                    href="#reservation"
                    onClick={() => setSelectedItem(null)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 text-xs font-bold tracking-widest uppercase text-white bg-[#B56A3C] hover:bg-[#C88A5A] rounded-xl shadow-md transition-colors"
                  >
                    <span>Reserve Table To Order</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
