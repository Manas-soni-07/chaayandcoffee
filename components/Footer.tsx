"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Coffee, ArrowUp, MessageCircle, Heart, Send, Check } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/icons/BrandIcons";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
    }, 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#191612] text-[#FFFDF8] border-t border-[#241D17] overflow-hidden">
      {/* Subtle Texture */}
      <div className="absolute inset-0 dark-grain-overlay opacity-50 pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#241D17]">
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="#home"
              className="inline-flex items-center gap-2.5 text-decoration-none group"
            >
              <div className="w-9 h-9 rounded-full border border-[#D9B892]/40 flex items-center justify-center bg-[#B56A3C]/20 group-hover:border-[#B56A3C] transition-colors">
                <Coffee className="w-4 h-4 text-[#D9B892] group-hover:text-[#B56A3C] transition-colors" />
              </div>
              <span className="font-serif text-xl font-bold tracking-[0.2em] text-[#FFFDF8] uppercase">
                THE CHAAY HOUSE
              </span>
            </Link>

            <p className="font-cormorant italic text-xl text-[#D9B892]">
              &ldquo;Good chai. Great conversations.&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-[#D9B892]/70 leading-relaxed font-sans max-w-sm">
              Handcrafted single-origin teas, slow-boiled spices in terracotta, and artisanal coffee paired with contemporary Indian hospitality.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#241D17] border border-[#D9B892]/20 flex items-center justify-center text-[#D9B892] hover:bg-[#B56A3C] hover:text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#241D17] border border-[#D9B892]/20 flex items-center justify-center text-[#D9B892] hover:bg-[#B56A3C] hover:text-white transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-[#241D17] border border-[#D9B892]/20 flex items-center justify-center text-[#D9B892] hover:bg-[#25D366] hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B56A3C] font-semibold block mb-4">
              Explore
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#D9B892]/80">
              <li>
                <Link href="#home" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#story" className="hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-white transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Location */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B56A3C] font-semibold block mb-4">
              Visiting Hours
            </span>
            <div className="text-xs sm:text-sm text-[#D9B892]/80 space-y-2">
              <p>
                <span className="font-semibold text-white block">Mon – Thu:</span>
                10:00 AM – 11:00 PM
              </p>
              <p>
                <span className="font-semibold text-white block">Fri – Sun:</span>
                10:00 AM – 12:00 AM (Midnight)
              </p>
              <div className="pt-2 text-xs text-[#D9B892]/60">
                Plot 42, Scheme 54, PU-4, Vijay Nagar, Indore
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B56A3C] font-semibold block mb-4">
              From Our Table
            </span>
            <p className="text-xs sm:text-sm text-[#D9B892]/70 leading-relaxed font-sans">
              Get the latest from our table. Seasonal chai releases, poetry evenings, and secret recipes.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>You&apos;re on our table list! Welcome.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-4 pr-10 py-2.5 rounded-xl border border-[#D9B892]/30 bg-[#241D17] text-xs text-[#FFFDF8] placeholder:text-[#D9B892]/40 focus:outline-none focus:border-[#B56A3C]"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-[#B56A3C] text-white flex items-center justify-center hover:bg-[#C88A5A] transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-[#D9B892]/40 block">
                  We respect your privacy. No spam, ever.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D9B892]/60">
          <div className="flex items-center gap-2">
            <span>© 2026 The Chaay House. Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#B56A3C] fill-[#B56A3C]" />
            <span>in Indore, India.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="#home" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#home" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors font-mono"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
