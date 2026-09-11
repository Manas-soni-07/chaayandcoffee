"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Coffee, Calendar, Phone, MapPin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#menu" },
  { name: "Our Story", href: "#story" },
  { name: "Experience", href: "#experience" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 sm:px-6 lg:px-12",
          isScrolled
            ? "py-3.5 bg-[#191612]/85 backdrop-blur-md border-b border-[#D9B892]/20 shadow-xl shadow-black/10"
            : "py-6 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="group flex items-center gap-2.5 text-decoration-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B56A3C] rounded-sm"
          >
            <div className="w-8 h-8 rounded-full border border-[#D9B892]/40 flex items-center justify-center bg-[#B56A3C]/15 group-hover:border-[#B56A3C] transition-colors">
              <Coffee className="w-4 h-4 text-[#D9B892] group-hover:text-[#B56A3C] transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.2em] text-[#FFFDF8] uppercase leading-none">
                THE CHAAY HOUSE
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#D9B892]/80 uppercase font-sans mt-0.5">
                Indore • Est. 2018
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm tracking-widest uppercase font-medium text-[#FFFDF8]/90 hover:text-[#D9B892] transition-colors py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B56A3C] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#reservation"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-widest uppercase text-[#FFFDF8] bg-[#B56A3C] hover:bg-[#C88A5A] rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#B56A3C]/20 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve a Table</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden p-2 text-[#FFFDF8] hover:text-[#D9B892] rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B56A3C]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#191612] text-[#FFFDF8] flex flex-col justify-between pt-24 pb-8 px-6 md:hidden overflow-y-auto"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 -right-20 w-72 h-72 rounded-full bg-[#B56A3C]/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 -left-20 w-72 h-72 rounded-full bg-[#D9B892]/10 blur-3xl pointer-events-none" />

            <div className="flex flex-col space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[#D9B892]/70 border-b border-[#241D17] pb-3">
                Navigation
              </span>
              <nav className="flex flex-col space-y-4">
                {NAV_LINKS.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex items-center justify-between font-serif text-2xl tracking-wider text-[#FFFDF8] hover:text-[#D9B892] transition-colors py-1"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#B56A3C]" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Bottom Mobile Drawer Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 pt-6 border-t border-[#241D17] space-y-5"
            >
              <Link
                href="#reservation"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold tracking-widest uppercase text-white bg-[#B56A3C] hover:bg-[#C88A5A] rounded-full shadow-lg shadow-[#B56A3C]/20 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Table</span>
              </Link>

              <div className="grid grid-cols-2 gap-3 text-xs text-[#D9B892]/80">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#B56A3C]" />
                  <span>Vijay Nagar, Indore</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#B56A3C]" />
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
