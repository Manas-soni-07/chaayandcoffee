export interface MenuItem {
  id: string;
  name: string;
  hindiName?: string;
  category: "CHAI" | "COFFEE" | "SMALL PLATES" | "MAINS" | "DESSERTS";
  price: number;
  description: string;
  image: string;
  isVeg: boolean;
  isSignature?: boolean;
  badge?: string;
  calories?: string;
  spiceLevel?: 1 | 2 | 3;
  prepTime?: string;
}

export const MENU_CATEGORIES = [
  "CHAI",
  "COFFEE",
  "SMALL PLATES",
  "MAINS",
  "DESSERTS",
] as const;

export type MenuCategory = (typeof MENU_CATEGORIES)[number];

export const MENU_ITEMS: MenuItem[] = [
  // CHAI
  {
    id: "kulhad-chai",
    name: "Kulhad Chai",
    hindiName: "कुल्हड़ चाय",
    category: "CHAI",
    price: 150,
    description:
      "Hand-brewed single-origin Assam CTC tea simmered with fresh crushed ginger and cardamom, served in a smoky unglazed terracotta kulhad.",
    image:
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    isSignature: true,
    badge: "House Specialty",
    prepTime: "5 mins",
  },
  {
    id: "masala-chai",
    name: "Masala Chai",
    hindiName: "मसाला चाय",
    category: "CHAI",
    price: 120,
    description:
      "Our heritage secret blend of seven whole spices — cloves, cinnamon, star anise, nutmeg, and black pepper — slow-boiled in creamy whole milk.",
    image:
      "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    isSignature: true,
    badge: "Bestseller",
    prepTime: "6 mins",
  },
  {
    id: "kesar-badam-chai",
    name: "Kesar Badam Chai",
    hindiName: "केसर बादाम चाय",
    category: "CHAI",
    price: 180,
    description:
      "Kashmiri Mogra saffron infused tea enriched with slivered California almonds and a touch of organic wildflower honey.",
    image:
      "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    badge: "Royal Blend",
    prepTime: "7 mins",
  },
  {
    id: "lemoongrass-ginger-chai",
    name: "Lemongrass Adrak Chai",
    hindiName: "लेमनग्रास अदरक चाय",
    category: "CHAI",
    price: 140,
    description:
      "Invigorating fusion of fresh garden lemongrass stalks, sun-dried ginger, and Darjeeling second-flush leaves.",
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    prepTime: "5 mins",
  },

  // COFFEE
  {
    id: "filter-coffee",
    name: "Filter Coffee",
    hindiName: "फ़िल्टर कॉफ़ी",
    category: "COFFEE",
    price: 160,
    description:
      "Authentic Chikmagalur dark roast decoction frothed high in traditional brass dabarah and tumbler with aerated, velvety milk foam.",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    isSignature: true,
    badge: "Traditional",
    prepTime: "4 mins",
  },
  {
    id: "saffron-cold-coffee",
    name: "Saffron Cold Coffee",
    hindiName: "केसर कोल्ड कॉफ़ी",
    category: "COFFEE",
    price: 220,
    description:
      "Double shot espresso slow-whipped with creamy vanilla milk, crushed Kashmiri saffron strands, and artisanal condensed milk over clear crystal ice.",
    image:
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    isSignature: true,
    badge: "Most Loved",
    prepTime: "5 mins",
  },
  {
    id: "cardamom-latte",
    name: "Spiced Elaichi Latte",
    hindiName: "इलायची लाते",
    category: "COFFEE",
    price: 190,
    description:
      "Smooth microfoam latte kissed with freshly ground green cardamom pods, cinnamon dusting, and brown demerara sugar.",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    prepTime: "4 mins",
  },

  // SMALL PLATES
  {
    id: "paneer-tikka-sandwich",
    name: "Paneer Tikka Sandwich",
    hindiName: "पनीर टिक्का सैंडविच",
    category: "SMALL PLATES",
    price: 280,
    description:
      "Tandoor-marinated cottage cheese char-grilled to perfection, mint-coriander chutney, pickled onions, and cheddar inside artisan sourdough bread.",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    isSignature: true,
    badge: "Chef's Special",
    prepTime: "12 mins",
  },
  {
    id: "cheese-chilli-toast",
    name: "Cheese Chilli Toast",
    hindiName: "चीज़ चिली टोस्ट",
    category: "SMALL PLATES",
    price: 240,
    description:
      "Crunchy buttered brioche toasts loaded with melted Amul cheese, spicy Bhavnagri green chillies, garlic herb glaze, and bell peppers.",
    image:
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    isSignature: true,
    badge: "Crowd Favorite",
    prepTime: "10 mins",
  },
  {
    id: "peri-peri-fries",
    name: "Peri Peri Fries",
    hindiName: "पेरी पेरी फ्राइज",
    category: "SMALL PLATES",
    price: 220,
    description:
      "Crispy skin-on hand-cut potatoes tossed in zesty homemade peri-peri spice dust, served with smoked mint mayo and spicy makhani dip.",
    image:
      "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    prepTime: "8 mins",
  },

  // MAINS
  {
    id: "indian-breakfast-platter",
    name: "Indian Breakfast Platter",
    hindiName: "शाही नाश्ता थाल",
    category: "MAINS",
    price: 350,
    description:
      "A celebration of Indian morning traditions: mini soft maska buns, Indori poha with sev & jeeravan, mini parathas, house pickle, and your choice of hot chai.",
    image:
      "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    isSignature: true,
    badge: "Signature Platter",
    prepTime: "15 mins",
  },
  {
    id: "makhani-paneer-bowl",
    name: "Makhani Paneer Rice Bowl",
    hindiName: "मखनी पनीर बाउल",
    category: "MAINS",
    price: 340,
    description:
      "Velvety cashew and slow-roasted tomato makhani gravy poured over fragrant jeera basmati rice, topped with soft paneer cubes and garlic crisp.",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    prepTime: "14 mins",
  },
  {
    id: "bombay-club-grilled-toastie",
    name: "Bombay Club Toastie",
    hindiName: "बॉम्बे क्लब टोस्टी",
    category: "MAINS",
    price: 310,
    description:
      "Triple-decker toasted perfection layered with spiced potato mash, beetroot, heirloom tomatoes, English cucumber, cheese, and nylon sev garnish.",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    prepTime: "12 mins",
  },

  // DESSERTS
  {
    id: "gulab-jamun-cheesecake",
    name: "Gulab Jamun Cheesecake",
    hindiName: "गुलाब जामुन चीज़केक",
    category: "DESSERTS",
    price: 260,
    description:
      "Velvety Philadelphia cream cheese cake with whole cardamom-soaked warm gulab jamuns baked inside, on a roasted pistachio Parle-G crumb crust.",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    isSignature: true,
    badge: "Iconic Fusion",
    prepTime: "Ready to serve",
  },
  {
    id: "chocolate-brownie",
    name: "Chocolate Brownie",
    hindiName: "डार्क चॉकलेट ब्राउनी",
    category: "DESSERTS",
    price: 190,
    description:
      "Warm fudge dark Belgian chocolate brownie served with a scoop of Madagascar vanilla bean ice cream and hot spiced ganache drizzle.",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    isSignature: true,
    badge: "Decadent",
    prepTime: "5 mins",
  },
  {
    id: "rasmalai-tres-leches",
    name: "Rasmalai Tres Leches",
    hindiName: "रसमलाई त्रेस लेचेस",
    category: "DESSERTS",
    price: 280,
    description:
      "Airy sponge cake soaked in saffron, cardamom, and almond milk trio, crowned with whipped rose cream and edible gold vark.",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    isVeg: true,
    prepTime: "Ready to serve",
  },
];
