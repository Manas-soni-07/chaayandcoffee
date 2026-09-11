import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Chaay House | Premium Indian Cafe in Indore",
  description:
    "Discover The Chaay House — a modern Indian cafe in Indore serving handcrafted chai, coffee, comfort food and memorable experiences.",
  keywords: [
    "Indian cafe",
    "Chai cafe Indore",
    "The Chaay House",
    "Kulhad Chai",
    "Filter Coffee Indore",
    "Artisanal Indian Cafe",
    "Best cafe in Vijay Nagar Indore",
  ],
  authors: [{ name: "The Chaay House" }],
  creator: "The Chaay House",
  metadataBase: new URL("https://thechaayhouse.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://thechaayhouse.in",
    title: "The Chaay House | Premium Indian Cafe in Indore",
    description:
      "Where Every Sip Tells a Story. Authentic Indian chai, specialty coffee, artisanal comforting food, and unforgettable conversations.",
    siteName: "The Chaay House",
    images: [
      {
        url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "The Chaay House Ambience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Chaay House | Premium Indian Cafe in Indore",
    description:
      "Where Every Sip Tells a Story. Handcrafted chai, specialty coffee & warm conversations.",
    images: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85",
    ],
    creator: "@thechaayhouse",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${cormorant.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#F7F1E8] text-[#211B16] antialiased selection:bg-[#B56A3C] selection:text-white">
        {children}
      </body>
    </html>
  );
}
