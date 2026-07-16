export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  images: string[];
  rating: number;
  reviewCount: number;
  colors: string[];
  sizes: string[];
  inStock: boolean;
  stockCount: number;
  description: string;
  isNew?: boolean;
  isSale?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Cotton Panjabi",
    category: "Men",
    price: 1490,
    image: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1597983073492-bc2415978135?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?q=80&w=600&auto=format&fit=crop"
    ],
    rating: 4.6,
    reviewCount: 48,
    colors: ["White", "Navy", "Olive"],
    sizes: ["M", "L", "XL", "XXL"],
    inStock: true,
    stockCount: 15,
    description: "Crafted from breathable, premium long-staple cotton, this classic Panjabi features elegant embroidery around the collar and placket. Ideal for both festive celebrations and sophisticated casual wear.",
    isNew: true
  },
  {
    id: 2,
    name: "Premium Linen Shirt",
    category: "Men",
    price: 1890,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=600&auto=format&fit=crop"
    ],
    rating: 4.8,
    reviewCount: 32,
    colors: ["Sky Blue", "White", "Sand"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    stockCount: 8,
    description: "Keep cool in style. This lightweight button-up shirt is woven from pure European flax linen. Designed with a modern slim fit, structured collar, and single-cuff detailing.",
    isSale: true
  },
  {
    id: 3,
    name: "Summer Floral Maxi Dress",
    category: "Women",
    price: 2450,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=600&auto=format&fit=crop"
    ],
    rating: 4.5,
    reviewCount: 64,
    colors: ["Pink Floral", "Yellow Daisy"],
    sizes: ["XS", "S", "M", "L"],
    inStock: true,
    stockCount: 12,
    description: "Flowing silhouette designed with a vibrant hand-painted floral pattern. Featuring adjustable wrap styling, delicate flutter sleeves, and a tiered ruffle hemline.",
    isNew: true
  },
  {
    id: 4,
    name: "Casual Denim Trucker Jacket",
    category: "Men",
    price: 2990,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=600&auto=format&fit=crop"
    ],
    rating: 4.7,
    reviewCount: 92,
    colors: ["Classic Indigo", "Faded Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    stockCount: 5,
    description: "A timeless wardrobe staple. Heavyweight non-stretch cotton denim jacket featuring chest button-flap pockets, side welt pockets, and adjustable waist tabs.",
    isSale: true
  },
  {
    id: 5,
    name: "Sleek Leather Backpack",
    category: "Accessories",
    price: 3490,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=600&auto=format&fit=crop"
    ],
    rating: 4.9,
    reviewCount: 110,
    colors: ["Chestnut Brown", "Midnight Black"],
    sizes: ["Standard"],
    inStock: true,
    stockCount: 6,
    description: "Crafted from full-grain vegetable-tanned leather, this backpack offers a spacious main compartment with a padded sleeve for up to a 15-inch laptop.",
    isNew: true
  },
  {
    id: 6,
    name: "Elegant Silk Jamdani Saree",
    category: "Women",
    price: 5800,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop"
    ],
    rating: 4.9,
    reviewCount: 25,
    colors: ["Crimson Red", "Royal Blue", "Emerald Green"],
    sizes: ["One Size"],
    inStock: true,
    stockCount: 3,
    description: "Woven by traditional artisans, this gorgeous half-silk Jamdani saree boasts intricate floral patterns woven directly into the fabric using gold-toned zari threads.",
    isNew: true
  },
  {
    id: 7,
    name: "Minimalist Leather Watch",
    category: "Accessories",
    price: 2190,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?q=80&w=600&auto=format&fit=crop"
    ],
    rating: 4.4,
    reviewCount: 42,
    colors: ["Tan Leather", "Black Matte"],
    sizes: ["Standard"],
    inStock: true,
    stockCount: 14,
    description: "Featuring a 40mm brushed stainless steel case, sapphire crystal glass, and a genuine Italian leather strap. Driven by high-precision Japanese quartz movement.",
    isSale: false
  },
  {
    id: 8,
    name: "Breathable Knit Sneakers",
    category: "Accessories",
    price: 2790,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop"
    ],
    rating: 4.6,
    reviewCount: 81,
    colors: ["Crimson Red", "Cloud White", "Carbon Black"],
    sizes: ["39", "40", "41", "42", "43", "44"],
    inStock: true,
    stockCount: 22,
    description: "Designed for day-long agility. Feature an ultra-breathable engineered knit upper, adaptive sock-like collar, and a lightweight cushioned foam midsole.",
    isNew: false
  },
  {
    id: 9,
    name: "Slim Fit Stretch Chinos",
    category: "Men",
    price: 1690,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=600&auto=format&fit=crop"
    ],
    rating: 4.3,
    reviewCount: 57,
    colors: ["Khaki", "Navy Blue", "Olive Green"],
    sizes: ["30", "32", "34", "36"],
    inStock: true,
    stockCount: 11,
    description: "A comfortable fit that stretches with you. Made from soft stretch-twill cotton, featuring a flat-front design, coin pocket, and button-through rear pockets.",
    isSale: true
  },
  {
    id: 10,
    name: "Oversized Knitted Cardigan",
    category: "Women",
    price: 2200,
    image: "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=600&auto=format&fit=crop"
    ],
    rating: 4.5,
    reviewCount: 39,
    colors: ["Oatmeal Melange", "Charcoal Gray"],
    sizes: ["S/M", "L/XL"],
    inStock: true,
    stockCount: 0,
    description: "Comfy, cozy, and cozy. Knit from an incredibly soft wool-blend boucle fabric, featuring dropped shoulders, ribbed patch pockets, and a clean button-free open front.",
    isSale: false
  },
  {
    id: 11,
    name: "Classic Aviator Sunglasses",
    category: "Accessories",
    price: 1290,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=600&auto=format&fit=crop"
    ],
    rating: 4.7,
    reviewCount: 124,
    colors: ["Gold/Green Polarized", "Black/Gray Polarized"],
    sizes: ["Standard"],
    inStock: true,
    stockCount: 18,
    description: "Featuring ultra-lightweight metal alloy frames, adjustable nose pads, and polarized UV400 protective lenses to block glare and reduce eye fatigue.",
    isNew: true
  },
  {
    id: 12,
    name: "Boho Chic Tiered Maxi Skirt",
    category: "Women",
    price: 1950,
    image: "https://images.unsplash.com/photo-1583496661160-fb48862c4a4e?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb48862c4a4e?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop"
    ],
    rating: 4.2,
    reviewCount: 19,
    colors: ["Terracotta", "Forest Green"],
    sizes: ["XS", "S", "M", "L"],
    inStock: true,
    stockCount: 7,
    description: "Crafted from a breathable slub-viscose fabric, this skirt has an elasticized drawcord waist with decorative tassels and tiered shirring details.",
    isSale: false
  }
];
