"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar as CalendarIcon,
  Clock,
  Users,
  User,
  Phone,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

interface ReservationData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  specialRequest: string;
}

const TIME_SLOTS = [
  "09:00 AM",
  "10:30 AM",
  "12:00 PM",
  "01:30 PM",
  "03:00 PM",
  "04:30 PM",
  "06:00 PM",
  "07:30 PM",
  "09:00 PM",
  "10:30 PM",
];

const GUEST_OPTIONS = ["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5-6 Guests", "7+ Large Party"];

export default function Reservation() {
  const [formData, setFormData] = useState<ReservationData>({
    name: "",
    phone: "",
    date: "",
    time: "06:00 PM",
    guests: "2 Guests",
    specialRequest: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationId, setConfirmationId] = useState("");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = "Please enter your full name.";
    }
    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = "Please enter a valid 10-digit mobile number.";
    }
    if (!formData.date) {
      errs.date = "Please choose a reservation date.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setConfirmationId(`TCH-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      date: "",
      time: "06:00 PM",
      guests: "2 Guests",
      specialRequest: "",
    });
  };

  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent(
      `Hello The Chaay House! I would like to reserve a table.\n\nName: ${
        formData.name || "Guest"
      }\nPhone: ${formData.phone || "N/A"}\nDate: ${formData.date || "Today"}\nTime: ${
        formData.time
      }\nGuests: ${formData.guests}`
    );
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  // Get today's date in YYYY-MM-DD for min date attribute
  const today = new Date().toISOString().split("T")[0];

  return (
    <section
      id="reservation"
      className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-[#F7F1E8] text-[#211B16] overflow-hidden grain-overlay"
      aria-label="Table Reservation"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#B56A3C] font-semibold">
              07 / TABLE RESERVATION
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#191612] uppercase"
          >
            YOUR TABLE IS WAITING.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 font-cormorant italic text-xl sm:text-2xl text-[#B56A3C]"
          >
            &ldquo;Come for the chai. Stay for the conversation.&rdquo;
          </motion.p>
        </div>

        {/* Card Form Wrapper */}
        <div className="max-w-3xl mx-auto bg-[#FFFDF8] rounded-3xl p-6 sm:p-12 border border-[#D9B892]/40 shadow-2xl shadow-[#6B4B38]/10">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono tracking-wider uppercase text-[#191612] font-semibold mb-2">
                      Your Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6B4B38]">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        placeholder="e.g. Aryan Sharma"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: "" });
                        }}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-[#F7F1E8]/50 text-[#191612] text-sm focus:outline-none focus:ring-2 focus:ring-[#B56A3C] transition-all ${
                          errors.name ? "border-red-500 ring-1 ring-red-500" : "border-[#D9B892]/60"
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-mono tracking-wider uppercase text-[#191612] font-semibold mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6B4B38]">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: "" });
                        }}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-[#F7F1E8]/50 text-[#191612] text-sm focus:outline-none focus:ring-2 focus:ring-[#B56A3C] transition-all ${
                          errors.phone ? "border-red-500 ring-1 ring-red-500" : "border-[#D9B892]/60"
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Date */}
                  <div>
                    <label className="block text-xs font-mono tracking-wider uppercase text-[#191612] font-semibold mb-2">
                      Reservation Date *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6B4B38]">
                        <CalendarIcon className="w-4 h-4" />
                      </div>
                      <input
                        type="date"
                        min={today}
                        value={formData.date}
                        onChange={(e) => {
                          setFormData({ ...formData, date: e.target.value });
                          if (errors.date) setErrors({ ...errors, date: "" });
                        }}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-[#F7F1E8]/50 text-[#191612] text-sm focus:outline-none focus:ring-2 focus:ring-[#B56A3C] transition-all ${
                          errors.date ? "border-red-500 ring-1 ring-red-500" : "border-[#D9B892]/60"
                        }`}
                      />
                    </div>
                    {errors.date && (
                      <p className="mt-1 text-xs text-red-500">{errors.date}</p>
                    )}
                  </div>

                  {/* Time Slot */}
                  <div>
                    <label className="block text-xs font-mono tracking-wider uppercase text-[#191612] font-semibold mb-2">
                      Preferred Time *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6B4B38]">
                        <Clock className="w-4 h-4" />
                      </div>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#D9B892]/60 bg-[#F7F1E8]/50 text-[#191612] text-sm focus:outline-none focus:ring-2 focus:ring-[#B56A3C] transition-all appearance-none"
                      >
                        {TIME_SLOTS.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-xs font-mono tracking-wider uppercase text-[#191612] font-semibold mb-2">
                      Number of Guests *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6B4B38]">
                        <Users className="w-4 h-4" />
                      </div>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#D9B892]/60 bg-[#F7F1E8]/50 text-[#191612] text-sm focus:outline-none focus:ring-2 focus:ring-[#B56A3C] transition-all appearance-none"
                      >
                        {GUEST_OPTIONS.map((g) => (
                          <option key={g} value={g}>
                            {g}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Special Request */}
                <div>
                  <label className="block text-xs font-mono tracking-wider uppercase text-[#191612] font-semibold mb-2">
                    Special Requests (Optional)
                  </label>
                  <div className="relative">
                    <div className="absolute top-3.5 left-3.5 text-[#6B4B38]">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <textarea
                      rows={2}
                      placeholder="e.g. Quiet corner table, anniversary setup, Jain preparation..."
                      value={formData.specialRequest}
                      onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#D9B892]/60 bg-[#F7F1E8]/50 text-[#191612] text-sm focus:outline-none focus:ring-2 focus:ring-[#B56A3C] transition-all resize-none"
                    />
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 py-4 px-8 rounded-full bg-[#B56A3C] hover:bg-[#C88A5A] text-white text-xs sm:text-sm font-semibold tracking-widest uppercase shadow-lg shadow-[#B56A3C]/25 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-75 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Reserving Table...</span>
                    ) : (
                      <>
                        <span>Reserve My Table</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppBooking}
                    className="w-full sm:w-auto py-4 px-8 rounded-full bg-[#241D17] hover:bg-[#191612] text-[#FFFDF8] border border-[#D9B892]/30 text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Book via WhatsApp</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-[#6B4B38] pt-2">
                  <ShieldCheck className="w-4 h-4 text-[#B56A3C]" />
                  <span>Instant SMS confirmation. No cancellation fee. Free table hold for 15 mins.</span>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-8 px-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B56A3C] font-semibold">
                  BOOKING CONFIRMED
                </span>

                <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#191612] mt-2 mb-2">
                  We Have Reserved Your Table!
                </h3>

                <p className="text-sm text-[#6B4B38] max-w-md mx-auto mb-6">
                  We look forward to welcoming you, <span className="font-semibold text-[#191612]">{formData.name}</span>.
                  A confirmation SMS has been dispatched to {formData.phone}.
                </p>

                {/* Booking Summary Box */}
                <div className="max-w-md mx-auto bg-[#F7F1E8] rounded-2xl p-5 border border-[#D9B892]/50 text-left mb-8 space-y-2 text-xs text-[#211B16]">
                  <div className="flex justify-between border-b border-[#D9B892]/30 pb-2">
                    <span className="text-[#6B4B38]">Reference ID</span>
                    <span className="font-mono font-bold text-[#B56A3C]">{confirmationId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B4B38]">Date & Time</span>
                    <span className="font-semibold">{formData.date} at {formData.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B4B38]">Party Size</span>
                    <span className="font-semibold">{formData.guests}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B4B38]">Location</span>
                    <span className="font-semibold">Vijay Nagar, Indore</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase bg-[#191612] text-white hover:bg-[#B56A3C] transition-colors"
                  >
                    Reserve Another Table
                  </button>
                  <a
                    href="#location"
                    className="px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase border border-[#D9B892] text-[#191612] hover:bg-[#D9B892]/20 transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
