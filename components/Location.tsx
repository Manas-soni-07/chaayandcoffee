"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Navigation, Compass, ExternalLink, Phone } from "lucide-react";

export default function Location() {
  return (
    <section
      id="location"
      className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-[#FFFDF8] text-[#211B16] overflow-hidden"
      aria-label="Location and Opening Hours"
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
              08 / VISIT US
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#191612] uppercase"
          >
            COME SAY CHAAY
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-[#6B4B38] font-sans"
          >
            A calm sanctuary in the vibrant heart of Vijay Nagar, Indore.
          </motion.p>
        </div>

        {/* Content Split: Details on Left, Stylish Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 bg-[#F7F1E8] rounded-3xl p-8 sm:p-10 border border-[#D9B892]/40 shadow-xl space-y-8"
          >
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-[#B56A3C]/15 border border-[#B56A3C]/30 flex items-center justify-center text-[#B56A3C] shrink-0 mt-1">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#191612] mb-1">
                  The Chaay House
                </h3>
                <p className="text-sm text-[#6B4B38] leading-relaxed">
                  Plot 42, Scheme 54, PU-4 Commercial Hub,<br />
                  Behind C21 Mall, Vijay Nagar,<br />
                  Indore, Madhya Pradesh 452010
                </p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-start gap-4 border-t border-[#D9B892]/40 pt-6">
              <div className="w-11 h-11 rounded-2xl bg-[#B56A3C]/15 border border-[#B56A3C]/30 flex items-center justify-center text-[#B56A3C] shrink-0 mt-1">
                <Clock className="w-5 h-5" />
              </div>
              <div className="w-full">
                <h3 className="font-serif text-lg font-bold text-[#191612] mb-2">
                  Opening Hours
                </h3>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between items-center text-[#211B16]">
                    <span className="font-medium text-[#6B4B38]">Mon – Thu</span>
                    <span className="font-mono font-semibold">10:00 AM – 11:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-[#211B16]">
                    <span className="font-medium text-[#6B4B38]">Fri – Sun</span>
                    <span className="font-mono font-semibold text-[#B56A3C]">10:00 AM – 12:00 AM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Amenities tags */}
            <div className="border-t border-[#D9B892]/40 pt-6">
              <span className="text-xs uppercase font-mono tracking-wider text-[#6B4B38] block mb-3">
                Cafe Amenities
              </span>
              <div className="flex flex-wrap gap-2 text-xs text-[#191612]">
                <span className="px-3 py-1 rounded-full bg-white border border-[#D9B892]/40">
                  ⚡ High-Speed Wi-Fi
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-[#D9B892]/40">
                  🚗 Valet Parking
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-[#D9B892]/40">
                  🌿 Outdoor Courtyard
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-[#D9B892]/40">
                  🐾 Pet Friendly Patio
                </span>
              </div>
            </div>

            {/* Directions CTA */}
            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Vijay+Nagar+Indore"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-[#191612] text-white hover:bg-[#B56A3C] transition-colors text-xs font-semibold tracking-widest uppercase shadow-md group"
              >
                <Navigation className="w-4 h-4 text-[#D9B892]" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Stylish Map Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 h-[420px] sm:h-[480px] rounded-3xl overflow-hidden border border-[#D9B892]/40 shadow-2xl relative bg-[#191612]"
          >
            {/* Custom stylized map graphic with roads, river, buildings */}
            <div className="absolute inset-0 bg-[#241D17] opacity-90 overflow-hidden">
              {/* Map grid lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#3d3228_1px,transparent_1px),linear-gradient(to_bottom,#3d3228_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />

              {/* Stylized arterial road vector */}
              <div className="absolute top-0 bottom-0 left-1/3 w-16 bg-[#2d241d] rotate-12 border-x border-[#D9B892]/20" />
              <div className="absolute left-0 right-0 top-1/2 h-12 bg-[#2d241d] -rotate-6 border-y border-[#D9B892]/20" />
              <div className="absolute top-1/4 right-0 w-1/2 h-8 bg-[#2d241d] rotate-45 border-y border-[#D9B892]/20" />

              {/* Landmark Labels */}
              <div className="absolute top-12 left-10 text-[11px] font-mono tracking-widest text-[#D9B892]/40 uppercase">
                AB Road Corridor
              </div>
              <div className="absolute bottom-16 right-16 text-[11px] font-mono tracking-widest text-[#D9B892]/40 uppercase">
                Vijay Nagar Square
              </div>
              <div className="absolute top-20 right-20 text-[11px] font-mono tracking-widest text-[#D9B892]/40 uppercase">
                C21 Mall Enclave
              </div>
            </div>

            {/* Glowing Cafe Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
              {/* Radar pulse animation */}
              <div className="absolute -inset-6 rounded-full bg-[#B56A3C]/25 animate-ping" />
              <div className="absolute -inset-12 rounded-full bg-[#B56A3C]/15 animate-pulse" />

              {/* Marker Card */}
              <div className="relative z-10 flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#191612]/95 border-2 border-[#B56A3C] shadow-2xl backdrop-blur-md">
                <div className="w-8 h-8 rounded-full bg-[#B56A3C] text-white flex items-center justify-center shadow-lg">
                  <MapPin className="w-4 h-4 fill-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-serif font-bold text-[#FFFDF8] tracking-wide">
                    THE CHAAY HOUSE
                  </p>
                  <p className="text-[10px] text-[#D9B892] font-mono">
                    Vijay Nagar, Indore
                  </p>
                </div>
              </div>

              {/* Pointer Tip */}
              <div className="w-3 h-3 bg-[#B56A3C] rotate-45 -mt-1.5 shadow-md" />
            </div>

            {/* Map Top-Right Badge */}
            <div className="absolute top-5 right-5 z-10 px-3 py-1.5 rounded-full bg-[#191612]/80 backdrop-blur-md border border-[#D9B892]/30 text-[11px] text-[#D9B892] font-mono flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-[#B56A3C] animate-spin" />
              <span>Live Location View</span>
            </div>

            {/* Interactive Bottom Bar overlay */}
            <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between p-3.5 rounded-2xl bg-[#191612]/90 backdrop-blur-md border border-[#D9B892]/25 text-xs text-white">
              <span className="text-[#D9B892] font-sans">
                Open today until 11:00 PM • Free parking available
              </span>
              <a
                href="https://maps.google.com/?q=Vijay+Nagar+Indore"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#B56A3C] hover:underline flex items-center gap-1"
              >
                <span>Navigate</span>
                <Navigation className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
