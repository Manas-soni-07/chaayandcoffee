export interface GalleryItem {
  id: string;
  title: string;
  category: "Ambiance" | "Beverages" | "Culinary" | "Moments";
  image: string;
  span?: string; // masonry span helper
  location: string;
  description: string;
} 

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "The Golden Hour Veranda",
    category: "Ambiance",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    span: "col-span-1 md:col-span-2 md:row-span-2",
    location: "Courtyard Garden",
    description:
      "Handcrafted wooden seating bathed in natural afternoon sunshine with artisanal brass fixtures.",
  },
  {
    id: "g2",
    title: "Kulhad Boiling Over Clay Stove",
    category: "Beverages",
    image:
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    span: "col-span-1 md:col-span-1 md:row-span-1",
    location: "Chai Brew Bar",
    description:
      "Fresh cardamom and ginger essence bubbling in pure whole milk over slow simmering coals.",
  },
  {
    id: "g3",
    title: "Morning Pour-Over Ritual",
    category: "Beverages",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    span: "col-span-1 md:col-span-1 md:row-span-1",
    location: "Espresso Bar",
    description:
      "Estate-grown South Indian filter roast brewed slow for unmatched crema and aroma.",
  },
  {
    id: "g4",
    title: "Artisanal Paneer Tikka Toastie",
    category: "Culinary",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    span: "col-span-1 md:col-span-1 md:row-span-2",
    location: "Kitchen Studio",
    description:
      "Crisp sourdough layered with char-grilled paneer, mint emulsion, and molten cheese.",
  },
  {
    id: "g5",
    title: "Quiet Corner for Creators",
    category: "Moments",
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80",
    span: "col-span-1 md:col-span-1 md:row-span-1",
    location: "The Library Nook",
    description:
      "Cozy reading alcove with warm incandescent bulbs, paperbacks, and uninterrupted focus.",
  },
  {
    id: "g6",
    title: "Gulab Jamun Cheesecake Slice",
    category: "Culinary",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
    span: "col-span-1 md:col-span-1 md:row-span-1",
    location: "Pastry Case",
    description:
      "Signature fusion delight dusted with toasted pistachios and silver leaf.",
  },
  {
    id: "g7",
    title: "Evening Laughter & Banter",
    category: "Moments",
    image:
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80",
    span: "col-span-1 md:col-span-1 md:row-span-1",
    location: "The Main Hall",
    description:
      "Friends reuniting over hot cups and stories that linger long past closing hours.",
  },
];

export interface InstagramPost {
  id: string;
  image: string;
  likes: string;
  caption: string;
  tag: string;
}

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "ig-1",
    image:
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    likes: "2.4k",
    caption: "The first pour of the day. Pure warmth in earthen clay. ✨ #ChaiLovers",
    tag: "@thechaayhouse",
  },
  {
    id: "ig-2",
    image:
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80",
    likes: "1.8k",
    caption: "Kashmiri saffron meets artisanal cold brew. A mid-week luxury. ☕ #IndoreCafes",
    tag: "@thechaayhouse",
  },
  {
    id: "ig-3",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80",
    likes: "3.1k",
    caption: "Afternoons here move at your own speed. 🌿 #AestheticSpaces",
    tag: "@thechaayhouse",
  },
  {
    id: "ig-4",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
    likes: "2.9k",
    caption: "Comfort on a plate: Grilled Paneer Tikka toasties straight from the tandoor. 🥪",
    tag: "@thechaayhouse",
  },
  {
    id: "ig-5",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
    likes: "4.2k",
    caption: "Our viral Gulab Jamun Cheesecake. Have you had your slice yet? 🍰",
    tag: "@thechaayhouse",
  },
  {
    id: "ig-6",
    image:
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=600&q=80",
    likes: "2.1k",
    caption: "Where strangers turn into familiar faces. Tag your chai partner below! 💛",
    tag: "@thechaayhouse",
  },
];
