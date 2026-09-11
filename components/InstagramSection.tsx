"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, ExternalLink } from "lucide-react";
import { InstagramIcon } from "@/components/icons/BrandIcons";
import { INSTAGRAM_POSTS } from "@/data/gallery";

export default function InstagramSection() {
  return (
    <section
      className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-[#F7F1E8] text-[#211B16] overflow-hidden grain-overlay"
      aria-label="Instagram Community Showcase"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <InstagramIcon className="w-4 h-4 text-[#B56A3C]" />
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#B56A3C] font-semibold">
                COMMUNITY & MEMORIES
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#191612] uppercase">
              SPOTTED AT THE CHAAY HOUSE
            </h2>
          </div>

          <div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase text-white bg-[#191612] hover:bg-[#B56A3C] transition-colors shadow-md group"
            >
              <span>Follow Our Story</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* 6 Image Tiles Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post, idx) => (
            <motion.a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block bg-[#241D17]"
            >
              <Image
                src={post.image}
                alt="Instagram post from The Chaay House"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#191612]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5 text-white">
                <div className="flex items-center justify-between">
                  <InstagramIcon className="w-4 h-4 text-[#D9B892]" />
                  <div className="flex items-center gap-1 text-[11px] font-mono text-[#FFFDF8]">
                    <Heart className="w-3 h-3 text-red-400 fill-red-400" />
                    <span>{post.likes}</span>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] text-white/90 line-clamp-2 leading-tight mb-1 font-sans">
                    {post.caption}
                  </p>
                  <span className="text-[10px] font-mono text-[#D9B892] tracking-wider block">
                    {post.tag}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
