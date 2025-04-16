
export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured: boolean;
  size: string;
  ingredients?: string;
  benefits?: string[];
};

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Cold-Pressed Coconut Oil",
    description: "Our cold-pressed coconut oil retains all the natural goodness and aroma of fresh coconuts. Perfect for cooking, baking, or as a natural beauty product.",
    price: 12.99,
    image: "https://nutrishopnaturals.in/cdn/shop/files/DSC01616s-1.jpg?v=1694281714&width=1946",
    category: "coconut",
    featured: true,
    size: "500ml",
    ingredients: "100% Organic Coconut",
    benefits: ["Rich in healthy fatty acids", "Supports heart health", "Natural antimicrobial properties", "Great for skin and hair care"]
  },
  {
    id: 2,
    name: "Organic Extra Virgin Olive Oil",
    description: "First cold-pressed extra virgin olive oil with a robust flavor profile. Ideal for salad dressings, dipping, and low-heat cooking.",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1000&auto=format&fit=crop",
    category: "olive",
    featured: true,
    size: "750ml",
    ingredients: "100% Organic Olives",
    benefits: ["High in antioxidants", "Anti-inflammatory properties", "Supports heart health", "Rich in vitamin E"]
  },
  {
    id: 3,
    name: "Pure Sesame Oil",
    description: "Traditional cold-pressed sesame oil with a rich, nutty flavor. Perfect for Asian cuisine and marinades.",
    price: 14.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl6DDa8As3VSZbR6MUtFF0db7ZouVBWRGWcg&s",
    category: "sesame",
    featured: true,
    size: "500ml",
    ingredients: "100% Organic Sesame Seeds",
    benefits: ["Rich in antioxidants", "Contains sesamol and sesamin", "Supports joint health", "Natural UV protection for skin"]
  },
  {
    id: 4,
    name: "Groundnut Oil",
    description: "Pure groundnut oil with a mild, nutty flavor. Ideal for deep frying and everyday cooking.",
    price: 10.99,
    image: "https://5.imimg.com/data5/SELLER/Default/2023/1/CP/YH/GY/110759621/chekku-wood-pressed-groundnut-oil-500x500.jpg",
    category: "groundnut",
    featured: false,
    size: "1L",
    ingredients: "100% Organic Groundnuts",
    benefits: ["High smoke point", "Rich in vitamin E", "Contains heart-healthy fats", "Stable for high-heat cooking"]
  },
  {
    id: 5,
    name: "Virgin Mustard Oil",
    description: "Pungent, flavorful mustard oil, perfect for authentic Indian cuisine and pickling.",
    price: 11.99,
    image: "https://m.media-amazon.com/images/I/61Ue7JjZBxL._AC_UF1000,1000_QL80_.jpg",
    category: "mustard",
    featured: false,
    size: "500ml",
    ingredients: "100% Organic Mustard Seeds",
    benefits: ["Rich in alpha-linolenic acid", "Contains glucosinolates", "Antimicrobial properties", "Supports skin health"]
  },
  {
    id: 6,
    name: "Cold-Pressed Sunflower Oil",
    description: "Light, versatile sunflower oil with a mild flavor. Great for baking and light sautéing.",
    price: 9.99,
    image: "https://m.media-amazon.com/images/I/51RlTlN+nLL._AC_UF1000,1000_QL80_.jpg",
    category: "sunflower",
    featured: false,
    size: "1L",
    ingredients: "100% Organic Sunflower Seeds",
    benefits: ["High in vitamin E", "Rich in phytosterols", "Helps maintain heart health", "Light flavor for versatile use"]
  },
  {
    id: 7,
    name: "Premium Gingelly Oil",
    description: "Traditional gingelly (sesame) oil, cold-pressed to preserve nutrients. Commonly used in South Indian cuisine.",
    price: 15.99,
    image: "https://jeevanfoods.org.in/wp-content/uploads/2023/04/gingelly-oil-600x600.webp",
    category: "sesame",
    featured: false,
    size: "500ml",
    ingredients: "100% Organic White Sesame Seeds",
    benefits: ["Rich in calcium", "Contains zinc and copper", "Helps with digestion", "Natural cooling properties"]
  },
  {
    id: 8,
    name: "Organic Flaxseed Oil",
    description: "Nutrient-rich flaxseed oil with a subtle nutty flavor. Great for salad dressings and as a nutritional supplement.",
    price: 16.99,
    image: "https://m.media-amazon.com/images/I/71SdWVQIJNL._AC_UF350,350_QL80_.jpg",
    category: "flaxseed",
    featured: true,
    size: "250ml",
    ingredients: "100% Organic Flaxseeds",
    benefits: ["High in omega-3 fatty acids", "Contains lignans", "Supports digestive health", "Anti-inflammatory properties"]
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "coconut", name: "Coconut Oil" },
  { id: "olive", name: "Olive Oil" },
  { id: "sesame", name: "Sesame Oil" },
  { id: "groundnut", name: "Groundnut Oil" },
  { id: "mustard", name: "Mustard Oil" },
  { id: "sunflower", name: "Sunflower Oil" },
  { id: "flaxseed", name: "Flaxseed Oil" }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "all") return products;
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};
