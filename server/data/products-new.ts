import type { Product } from '../types/entities'

/**
 * Mock Products Data
 * 30 unique products across different categories
 * Each product has a base price, actual pricing is in variants
 * Products are linked to categories via category_id
 */
export const mockProductsNew: Product[] = [
  // Men's Category (category_id: 1)
  {
    id: 1,
    title: 'Classic White Oxford Shirt',
    slug: 'classic-white-oxford-shirt',
    description: 'Timeless white Oxford shirt crafted from premium cotton. Perfect for both casual and formal occasions.',
    category_id: 1,
    base_price: 59.99,
    is_featured: true,
    publishedAt: '2025-01-15T10:00:00Z'
  },
  {
    id: 2,
    title: 'Slim Fit Dark Wash Jeans',
    slug: 'slim-fit-dark-wash-jeans',
    description: 'Modern slim fit jeans in a versatile dark wash. Comfortable stretch denim for all-day wear.',
    category_id: 1,
    base_price: 79.99,
    is_featured: false,
    publishedAt: '2025-01-10T10:00:00Z'
  },
  {
    id: 3,
    title: 'Crew Neck Cotton T-Shirt',
    slug: 'crew-neck-cotton-tshirt',
    description: 'Essential crew neck t-shirt in soft cotton. A wardrobe staple for everyday comfort.',
    category_id: 1,
    base_price: 24.99,
    is_featured: false,
    publishedAt: '2025-01-20T10:00:00Z'
  },
  {
    id: 4,
    title: 'Wool Blend Blazer',
    slug: 'wool-blend-blazer',
    description: 'Sophisticated blazer in a wool blend fabric. Tailored fit for a sharp, professional look.',
    category_id: 1,
    base_price: 189.99,
    is_featured: true,
    publishedAt: '2024-12-01T10:00:00Z'
  },
  {
    id: 5,
    title: 'Casual Chino Pants',
    slug: 'casual-chino-pants',
    description: 'Versatile chino pants in a comfortable regular fit. Perfect for smart-casual occasions.',
    category_id: 1,
    base_price: 54.99,
    is_featured: false,
    publishedAt: '2025-01-05T10:00:00Z'
  },

  // Women's Category (category_id: 2)
  {
    id: 6,
    title: 'Floral Print Midi Dress',
    slug: 'floral-print-midi-dress',
    description: 'Elegant midi dress with beautiful floral print. Flowing silhouette perfect for summer events.',
    category_id: 2,
    base_price: 89.99,
    is_featured: true,
    publishedAt: '2025-01-18T10:00:00Z'
  },
  {
    id: 7,
    title: 'High-Waist Skinny Jeans',
    slug: 'high-waist-skinny-jeans',
    description: 'Flattering high-waist skinny jeans with excellent stretch. A modern wardrobe essential.',
    category_id: 2,
    base_price: 69.99,
    is_featured: false,
    publishedAt: '2025-01-12T10:00:00Z'
  },
  {
    id: 8,
    title: 'Silk Blend Blouse',
    slug: 'silk-blend-blouse',
    description: 'Luxurious silk blend blouse with delicate detailing. Sophisticated and comfortable.',
    category_id: 2,
    base_price: 74.99,
    is_featured: true,
    publishedAt: '2025-01-08T10:00:00Z'
  },
  {
    id: 9,
    title: 'Cashmere Knit Sweater',
    slug: 'cashmere-knit-sweater',
    description: 'Premium cashmere sweater with a relaxed fit. Ultimate softness and warmth.',
    category_id: 2,
    base_price: 149.99,
    is_featured: false,
    publishedAt: '2024-11-25T10:00:00Z'
  },
  {
    id: 10,
    title: 'Wide Leg Trousers',
    slug: 'wide-leg-trousers',
    description: 'Chic wide-leg trousers in a flowy fabric. Elegant and comfortable for any occasion.',
    category_id: 2,
    base_price: 79.99,
    is_featured: false,
    publishedAt: '2025-01-03T10:00:00Z'
  },

  // Kids' Category (category_id: 3)
  {
    id: 11,
    title: 'Kids Rainbow Hoodie',
    slug: 'kids-rainbow-hoodie',
    description: 'Fun and colorful hoodie with rainbow design. Soft fleece lining for extra warmth.',
    category_id: 3,
    base_price: 34.99,
    is_featured: false,
    publishedAt: '2025-01-16T10:00:00Z'
  },
  {
    id: 12,
    title: 'Kids Denim Jacket',
    slug: 'kids-denim-jacket',
    description: 'Classic denim jacket sized for kids. Durable and stylish for everyday adventures.',
    category_id: 3,
    base_price: 44.99,
    is_featured: true,
    publishedAt: '2025-01-11T10:00:00Z'
  },
  {
    id: 13,
    title: 'Kids Cotton Pajama Set',
    slug: 'kids-cotton-pajama-set',
    description: 'Cozy pajama set in soft cotton. Comfortable sleepwear for sweet dreams.',
    category_id: 3,
    base_price: 29.99,
    is_featured: false,
    publishedAt: '2025-01-19T10:00:00Z'
  },
  {
    id: 14,
    title: 'Kids Graphic T-Shirt Pack',
    slug: 'kids-graphic-tshirt-pack',
    description: 'Set of 3 graphic t-shirts with fun prints. Made from breathable cotton.',
    category_id: 3,
    base_price: 39.99,
    is_featured: false,
    publishedAt: '2025-01-07T10:00:00Z'
  },
  {
    id: 15,
    title: 'Kids Track Pants',
    slug: 'kids-track-pants',
    description: 'Athletic track pants for active kids. Comfortable and durable for play.',
    category_id: 3,
    base_price: 27.99,
    is_featured: false,
    publishedAt: '2025-01-14T10:00:00Z'
  },

  // Shoes Category (category_id: 4)
  {
    id: 16,
    title: 'Leather Oxford Shoes',
    slug: 'leather-oxford-shoes',
    description: 'Classic leather Oxford shoes with premium craftsmanship. Perfect for formal occasions.',
    category_id: 4,
    base_price: 129.99,
    is_featured: true,
    publishedAt: '2024-12-20T10:00:00Z'
  },
  {
    id: 17,
    title: 'Canvas Sneakers',
    slug: 'canvas-sneakers',
    description: 'Casual canvas sneakers in classic style. Comfortable for everyday wear.',
    category_id: 4,
    base_price: 54.99,
    is_featured: false,
    publishedAt: '2025-01-09T10:00:00Z'
  },
  {
    id: 18,
    title: 'Running Shoes Pro',
    slug: 'running-shoes-pro',
    description: 'High-performance running shoes with advanced cushioning and support.',
    category_id: 4,
    base_price: 119.99,
    is_featured: true,
    publishedAt: '2025-01-13T10:00:00Z'
  },
  {
    id: 19,
    title: 'Ankle Boots',
    slug: 'ankle-boots',
    description: 'Stylish ankle boots with a chunky heel. Versatile footwear for multiple looks.',
    category_id: 4,
    base_price: 99.99,
    is_featured: false,
    publishedAt: '2024-11-30T10:00:00Z'
  },
  {
    id: 20,
    title: 'Suede Loafers',
    slug: 'suede-loafers',
    description: 'Elegant suede loafers with comfort insole. Smart-casual sophistication.',
    category_id: 4,
    base_price: 89.99,
    is_featured: false,
    publishedAt: '2025-01-06T10:00:00Z'
  },

  // Accessories Category (category_id: 5)
  {
    id: 21,
    title: 'Leather Crossbody Bag',
    slug: 'leather-crossbody-bag',
    description: 'Compact crossbody bag in genuine leather. Perfect size for essentials.',
    category_id: 5,
    base_price: 79.99,
    is_featured: true,
    publishedAt: '2025-01-17T10:00:00Z'
  },
  {
    id: 22,
    title: 'Classic Aviator Sunglasses',
    slug: 'classic-aviator-sunglasses',
    description: 'Timeless aviator sunglasses with UV protection. Style meets function.',
    category_id: 5,
    base_price: 49.99,
    is_featured: false,
    publishedAt: '2025-01-04T10:00:00Z'
  },
  {
    id: 23,
    title: 'Minimalist Watch',
    slug: 'minimalist-watch',
    description: 'Sleek minimalist watch with leather strap. Elegant simplicity for any wrist.',
    category_id: 5,
    base_price: 129.99,
    is_featured: true,
    publishedAt: '2024-12-15T10:00:00Z'
  },
  {
    id: 24,
    title: 'Silk Scarf',
    slug: 'silk-scarf',
    description: 'Luxurious silk scarf with artistic print. Versatile accessory for any outfit.',
    category_id: 5,
    base_price: 39.99,
    is_featured: false,
    publishedAt: '2025-01-02T10:00:00Z'
  },
  {
    id: 25,
    title: 'Leather Belt',
    slug: 'leather-belt',
    description: 'Classic leather belt with metal buckle. Essential accessory for any wardrobe.',
    category_id: 5,
    base_price: 34.99,
    is_featured: false,
    publishedAt: '2025-01-21T10:00:00Z'
  },

  // Sale Category (category_id: 6)
  {
    id: 26,
    title: 'Striped Polo Shirt',
    slug: 'striped-polo-shirt',
    description: 'Classic polo shirt with stripe design. Comfortable cotton piqué fabric.',
    category_id: 6,
    base_price: 39.99,
    is_featured: false,
    publishedAt: '2024-10-15T10:00:00Z'
  },
  {
    id: 27,
    title: 'Plaid Flannel Shirt',
    slug: 'plaid-flannel-shirt',
    description: 'Cozy flannel shirt in classic plaid pattern. Perfect for layering.',
    category_id: 6,
    base_price: 49.99,
    is_featured: false,
    publishedAt: '2024-09-20T10:00:00Z'
  },
  {
    id: 28,
    title: 'Quilted Vest',
    slug: 'quilted-vest',
    description: 'Lightweight quilted vest for transitional weather. Packable and practical.',
    category_id: 6,
    base_price: 64.99,
    is_featured: false,
    publishedAt: '2024-11-10T10:00:00Z'
  },
  {
    id: 29,
    title: 'Knit Beanie',
    slug: 'knit-beanie',
    description: 'Warm knit beanie in various colors. Essential winter accessory.',
    category_id: 6,
    base_price: 19.99,
    is_featured: false,
    publishedAt: '2024-10-01T10:00:00Z'
  },
  {
    id: 30,
    title: 'Canvas Tote Bag',
    slug: 'canvas-tote-bag',
    description: 'Durable canvas tote bag with interior pocket. Eco-friendly and spacious.',
    category_id: 6,
    base_price: 24.99,
    is_featured: false,
    publishedAt: '2024-12-05T10:00:00Z'
  }
]

/**
 * Helper function to get product by ID
 */
export function getProductById(id: number): Product | undefined {
  return mockProductsNew.find(p => p.id === id)
}

/**
 * Helper function to get product by slug
 */
export function getProductBySlug(slug: string): Product | undefined {
  return mockProductsNew.find(p => p.slug === slug)
}

/**
 * Helper function to get products by category
 */
export function getProductsByCategory(categoryId: number): Product[] {
  return mockProductsNew.filter(p => p.category_id === categoryId)
}

/**
 * Helper function to get featured products
 */
export function getFeaturedProducts(): Product[] {
  return mockProductsNew.filter(p => p.is_featured)
}

/**
 * Helper function to get newest products
 */
export function getNewestProducts(limit: number = 10): Product[] {
  return [...mockProductsNew]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit)
}
