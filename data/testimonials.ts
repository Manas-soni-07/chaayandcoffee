export interface Testimonial {
  id: string;
  name: string;
  role: string;
  city: string;
  avatar: string;
  rating: number;
  quote: string;
  favoriteItem: string;
  tag: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Riya Sharma",
    role: "Architect & Spatial Designer",
    city: "Indore",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    quote:
      "One of the most beautiful cafes I've visited. The kulhad chai is absolutely amazing, and the sunlight hitting the terracotta tiles during golden hour is sheer poetry.",
    favoriteItem: "Kulhad Chai & Cheese Chilli Toast",
    tag: "Aesthetics & Ambiance",
  },
  {
    id: "2",
    name: "Arjun Mehta",
    role: "Tech Lead & Remote Founder",
    city: "Bangalore (Frequent Visitor)",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    quote:
      "Perfect place for coffee, conversations and work. The ambience is incredible, high-speed Wi-Fi actually works, and the staff treats you like family.",
    favoriteItem: "Filter Coffee & Paneer Tikka Sandwich",
    tag: "Remote Work Heaven",
  },
  {
    id: "3",
    name: "Neha Kapoor",
    role: "Culinary Writer & Critic",
    city: "Mumbai",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    quote:
      "Food, music, interiors — everything feels thoughtfully designed. The Gulab Jamun Cheesecake is revolutionary without losing its Indian soul.",
    favoriteItem: "Gulab Jamun Cheesecake",
    tag: "Culinary Excellence",
  },
  {
    id: "4",
    name: "Kabir & Ananya Roy",
    role: "Creative Duo & Photographers",
    city: "Indore",
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    quote:
      "Every anniversary or casual date night starts here. The acoustic playlists and slow evening vibe make you forget your phone and just talk for hours.",
    favoriteItem: "Saffron Cold Coffee",
    tag: "Couples & Conversations",
  },
];
