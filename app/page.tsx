import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Menu from "@/components/Menu";
import Experience from "@/components/Experience";
import Story from "@/components/Story";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import InstagramSection from "@/components/InstagramSection";
import Testimonials from "@/components/Testimonials";
import Reservation from "@/components/Reservation";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#F7F1E8] text-[#211B16] font-sans selection:bg-[#B56A3C] selection:text-white">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Sections */}
      <main id="main-content" className="w-full">
        {/* 1. Cinematic Hero */}
        <Hero />

        {/* 2. Editorial Split Intro */}
        <Intro />

        {/* 3. Signature Menu with Interactive Filter & Details */}
        <Menu />

        {/* 4. Immersive Experience */}
        <Experience />

        {/* 5. Our Story & Timeline */}
        <Story />

        {/* 6. Why People Love Us / Animated Counters */}
        <Stats />

        {/* 7. Gallery with Masonry & Framer Motion Lightbox */}
        <Gallery />

        {/* 8. Spotted at The Chaay House / Instagram Community */}
        <InstagramSection />

        {/* 9. Guest Testimonials Carousel */}
        <Testimonials />

        {/* 10. Table Reservation CTA Form & WhatsApp Alternative */}
        <Reservation />

        {/* 11. Location & Opening Hours with Map */}
        <Location />

        {/* 12. Direct Contact Channels & Notes */}
        <Contact />
      </main>

      {/* 13. Premium Dark Footer */}
      <Footer />
    </div>
  );
}
