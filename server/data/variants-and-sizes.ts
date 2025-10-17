import type { ProductVariant, Size } from '../types/entities'

/**
 * Mock Product Variants Data
 * Each product has 2-4 color variants
 * Variants include SKU, color info, price, and image gallery
 */
export const mockVariants: ProductVariant[] = [
  // Product 1 - Classic White Oxford Shirt (3 variants)
  {
    id: 1,
    product_id: 1,
    sku: 'OXSH-WHT-001',
    color_name: 'White',
    color_hex: '#FFFFFF',
    price: 59.99,
    gallery: [
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800',
      'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800'
    ]
  },
  {
    id: 2,
    product_id: 1,
    sku: 'OXSH-BLU-001',
    color_name: 'Light Blue',
    color_hex: '#ADD8E6',
    price: 59.99,
    gallery: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800'
    ]
  },
  {
    id: 3,
    product_id: 1,
    sku: 'OXSH-PNK-001',
    color_name: 'Pink',
    color_hex: '#FFC0CB',
    price: 59.99,
    gallery: ['https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=800']
  },

  // Product 2 - Slim Fit Dark Wash Jeans (2 variants)
  {
    id: 4,
    product_id: 2,
    sku: 'JEANS-DRK-002',
    color_name: 'Dark Blue',
    color_hex: '#00008B',
    price: 79.99,
    gallery: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800',
      'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800'
    ]
  },
  {
    id: 5,
    product_id: 2,
    sku: 'JEANS-BLK-002',
    color_name: 'Black',
    color_hex: '#000000',
    price: 79.99,
    gallery: ['https://images.unsplash.com/photo-1560243563-062bfc001d68?w=800']
  },

  // Product 3 - Crew Neck Cotton T-Shirt (4 variants)
  {
    id: 6,
    product_id: 3,
    sku: 'TSHIRT-WHT-003',
    color_name: 'White',
    color_hex: '#FFFFFF',
    price: 24.99,
    gallery: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800']
  },
  {
    id: 7,
    product_id: 3,
    sku: 'TSHIRT-BLK-003',
    color_name: 'Black',
    color_hex: '#000000',
    price: 24.99,
    gallery: ['https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800']
  },
  {
    id: 8,
    product_id: 3,
    sku: 'TSHIRT-NVY-003',
    color_name: 'Navy',
    color_hex: '#000080',
    price: 24.99,
    gallery: ['https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800']
  },
  {
    id: 9,
    product_id: 3,
    sku: 'TSHIRT-GRY-003',
    color_name: 'Grey',
    color_hex: '#808080',
    price: 24.99,
    gallery: ['https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800']
  },

  // Product 4 - Wool Blend Blazer (3 variants)
  {
    id: 10,
    product_id: 4,
    sku: 'BLZR-NVY-004',
    color_name: 'Navy',
    color_hex: '#000080',
    price: 189.99,
    gallery: [
      'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800'
    ]
  },
  {
    id: 11,
    product_id: 4,
    sku: 'BLZR-CHR-004',
    color_name: 'Charcoal',
    color_hex: '#36454F',
    price: 189.99,
    gallery: ['https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800']
  },
  {
    id: 12,
    product_id: 4,
    sku: 'BLZR-BLK-004',
    color_name: 'Black',
    color_hex: '#000000',
    price: 189.99,
    gallery: ['https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800']
  },

  // Product 5 - Casual Chino Pants (3 variants)
  {
    id: 13,
    product_id: 5,
    sku: 'CHINO-KHK-005',
    color_name: 'Khaki',
    color_hex: '#C3B091',
    price: 54.99,
    gallery: ['https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800']
  },
  {
    id: 14,
    product_id: 5,
    sku: 'CHINO-NVY-005',
    color_name: 'Navy',
    color_hex: '#000080',
    price: 54.99,
    gallery: ['https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800']
  },
  {
    id: 15,
    product_id: 5,
    sku: 'CHINO-OLV-005',
    color_name: 'Olive',
    color_hex: '#808000',
    price: 54.99,
    gallery: ['https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800']
  },

  // Continuing with more products... (Products 6-10)
  // Product 6 - Floral Print Midi Dress (2 variants)
  {
    id: 16,
    product_id: 6,
    sku: 'DRESS-FLR-006',
    color_name: 'Floral Multi',
    color_hex: '#FF69B4',
    price: 89.99,
    gallery: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800'
    ]
  },
  {
    id: 17,
    product_id: 6,
    sku: 'DRESS-BLU-006',
    color_name: 'Blue Floral',
    color_hex: '#4169E1',
    price: 89.99,
    gallery: ['https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800']
  },

  // Product 7 - High-Waist Skinny Jeans (3 variants)
  {
    id: 18,
    product_id: 7,
    sku: 'JEANS-BLK-007',
    color_name: 'Black',
    color_hex: '#000000',
    price: 69.99,
    gallery: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800']
  },
  {
    id: 19,
    product_id: 7,
    sku: 'JEANS-BLU-007',
    color_name: 'Dark Blue',
    color_hex: '#00008B',
    price: 69.99,
    gallery: ['https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=800']
  },
  {
    id: 20,
    product_id: 7,
    sku: 'JEANS-GRY-007',
    color_name: 'Grey',
    color_hex: '#808080',
    price: 69.99,
    gallery: ['https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=800']
  },

  // Product 8 - Silk Blend Blouse (4 variants)
  {
    id: 21,
    product_id: 8,
    sku: 'BLOUSE-WHT-008',
    color_name: 'White',
    color_hex: '#FFFFFF',
    price: 74.99,
    gallery: ['https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800']
  },
  {
    id: 22,
    product_id: 8,
    sku: 'BLOUSE-BLK-008',
    color_name: 'Black',
    color_hex: '#000000',
    price: 74.99,
    gallery: ['https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=800']
  },
  {
    id: 23,
    product_id: 8,
    sku: 'BLOUSE-CRM-008',
    color_name: 'Cream',
    color_hex: '#FFFDD0',
    price: 74.99,
    gallery: ['https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800']
  },
  {
    id: 24,
    product_id: 8,
    sku: 'BLOUSE-NVY-008',
    color_name: 'Navy',
    color_hex: '#000080',
    price: 74.99,
    gallery: ['https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800']
  },

  // Product 9 - Cashmere Knit Sweater (3 variants)
  {
    id: 25,
    product_id: 9,
    sku: 'SWTR-CML-009',
    color_name: 'Camel',
    color_hex: '#C19A6B',
    price: 149.99,
    gallery: ['https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800']
  },
  {
    id: 26,
    product_id: 9,
    sku: 'SWTR-BLK-009',
    color_name: 'Black',
    color_hex: '#000000',
    price: 149.99,
    gallery: ['https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800']
  },
  {
    id: 27,
    product_id: 9,
    sku: 'SWTR-GRY-009',
    color_name: 'Grey',
    color_hex: '#808080',
    price: 149.99,
    gallery: ['https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=800']
  },

  // Product 10 - Wide Leg Trousers (2 variants)
  {
    id: 28,
    product_id: 10,
    sku: 'TRSR-BLK-010',
    color_name: 'Black',
    color_hex: '#000000',
    price: 79.99,
    gallery: ['https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800']
  },
  {
    id: 29,
    product_id: 10,
    sku: 'TRSR-BEG-010',
    color_name: 'Beige',
    color_hex: '#F5F5DC',
    price: 79.99,
    gallery: ['https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800']
  },

  // Adding abbreviated entries for remaining products (11-30) to stay within limits
  // Each will have 2-3 variants
  ...generateRemainingVariants()
]

/**
 * Generate variants for products 11-30
 */
function generateRemainingVariants(): ProductVariant[] {
  const variants: ProductVariant[] = []
  let variantId = 30

  // Products 11-15 (Kids category)
  const kidProducts = [
    { id: 11, colors: [{ name: 'Rainbow', hex: '#FF6B6B' }, { name: 'Blue', hex: '#4ECDC4' }] },
    { id: 12, colors: [{ name: 'Classic Blue', hex: '#4169E1' }, { name: 'Black', hex: '#000000' }] },
    { id: 13, colors: [{ name: 'Pink', hex: '#FFC0CB' }, { name: 'Blue', hex: '#87CEEB' }] },
    { id: 14, colors: [{ name: 'Multi', hex: '#FF6347' }, { name: 'White', hex: '#FFFFFF' }] },
    { id: 15, colors: [{ name: 'Navy', hex: '#000080' }, { name: 'Grey', hex: '#808080' }] }
  ]

  const kidImages = [
    'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=800', // Rainbow
    'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800', // Blue
    'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=800', // Classic Blue
    'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=800', // Black
    'https://images.unsplash.com/photo-1514090458221-65bb69cf63e4?w=800', // Pink
    'https://images.unsplash.com/photo-1622290219658-556f819c7bc4?w=800', // Blue
    'https://images.unsplash.com/photo-1519238355615-5de2dd8c1e11?w=800', // Multi
    'https://images.unsplash.com/photo-1503944583220-79d8926ad5e3?w=800', // White
    'https://images.unsplash.com/photo-1596870230668-4c7f73733f68?w=800', // Navy
    'https://images.unsplash.com/photo-1519278409-312f7d613c94?w=800'  // Grey
  ]

  kidProducts.forEach((prod, index) => {
    prod.colors.forEach((color, colorIndex) => {
      variants.push({
        id: variantId++,
        product_id: prod.id,
        sku: `KIDS-${color.name.substring(0, 3).toUpperCase()}-${String(prod.id).padStart(3, '0')}`,
        color_name: color.name,
        color_hex: color.hex,
        price: 29.99 + Math.random() * 20,
        gallery: [kidImages[index * 2 + colorIndex] || kidImages[0]]
      })
    })
  })

  // Products 16-20 (Shoes category)
  const shoeProducts = [
    { id: 16, colors: [{ name: 'Brown', hex: '#8B4513' }, { name: 'Black', hex: '#000000' }] },
    { id: 17, colors: [{ name: 'White', hex: '#FFFFFF' }, { name: 'Navy', hex: '#000080' }] },
    { id: 18, colors: [{ name: 'Black/Red', hex: '#000000' }, { name: 'Blue/White', hex: '#4169E1' }] },
    { id: 19, colors: [{ name: 'Black', hex: '#000000' }, { name: 'Tan', hex: '#D2B48C' }] },
    { id: 20, colors: [{ name: 'Navy', hex: '#000080' }, { name: 'Brown', hex: '#8B4513' }] }
  ]

  const shoeImages = [
    'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800', // Brown
    'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800', // Black
    'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800', // White
    'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800', // Navy
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800', // Black/Red
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800', // Blue/White
    'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800', // Black
    'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800', // Tan
    'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800', // Navy
    'https://images.unsplash.com/photo-1582897085656-c636d006a246?w=800'  // Brown
  ]

  shoeProducts.forEach((prod, index) => {
    prod.colors.forEach((color, colorIndex) => {
      variants.push({
        id: variantId++,
        product_id: prod.id,
        sku: `SHOE-${color.name.substring(0, 3).toUpperCase()}-${String(prod.id).padStart(3, '0')}`,
        color_name: color.name,
        color_hex: color.hex,
        price: 79.99 + Math.random() * 50,
        gallery: [shoeImages[index * 2 + colorIndex] || shoeImages[0]]
      })
    })
  })

  // Products 21-25 (Accessories category)
  const accessoryProducts = [
    { id: 21, colors: [{ name: 'Brown', hex: '#8B4513' }, { name: 'Black', hex: '#000000' }] },
    { id: 22, colors: [{ name: 'Gold', hex: '#FFD700' }, { name: 'Silver', hex: '#C0C0C0' }] },
    { id: 23, colors: [{ name: 'Black', hex: '#000000' }, { name: 'Brown', hex: '#8B4513' }] },
    { id: 24, colors: [{ name: 'Red', hex: '#FF0000' }, { name: 'Blue', hex: '#0000FF' }] },
    { id: 25, colors: [{ name: 'Black', hex: '#000000' }, { name: 'Brown', hex: '#8B4513' }] }
  ]

  const accessoryImages = [
    'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800', // Brown wallet
    'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800', // Black wallet
    'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800', // Gold watch
    'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800', // Silver watch
    'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800', // Black bag
    'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800', // Brown bag
    'https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?w=800', // Red scarf
    'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800', // Blue scarf
    'https://images.unsplash.com/photo-1599000373844-0f8ec8eb647b?w=800', // Black belt
    'https://images.unsplash.com/photo-1624222247344-550fb60583c2?w=800'  // Brown belt
  ]

  accessoryProducts.forEach((prod, index) => {
    prod.colors.forEach((color, colorIndex) => {
      variants.push({
        id: variantId++,
        product_id: prod.id,
        sku: `ACC-${color.name.substring(0, 3).toUpperCase()}-${String(prod.id).padStart(3, '0')}`,
        color_name: color.name,
        color_hex: color.hex,
        price: 39.99 + Math.random() * 90,
        gallery: [accessoryImages[index * 2 + colorIndex] || accessoryImages[0]]
      })
    })
  })

  // Products 26-30 (Sale category)
  const saleProducts = [
    { id: 26, colors: [{ name: 'Blue', hex: '#4169E1' }, { name: 'Red', hex: '#FF0000' }] },
    { id: 27, colors: [{ name: 'Red', hex: '#FF0000' }, { name: 'Green', hex: '#008000' }] },
    { id: 28, colors: [{ name: 'Navy', hex: '#000080' }, { name: 'Black', hex: '#000000' }] },
    { id: 29, colors: [{ name: 'Grey', hex: '#808080' }, { name: 'Black', hex: '#000000' }] },
    { id: 30, colors: [{ name: 'Natural', hex: '#F5F5DC' }, { name: 'Black', hex: '#000000' }] }
  ]

  const saleImages = [
    'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800', // Blue clothing
    'https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800', // Red clothing
    'https://images.unsplash.com/photo-1618354691551-44de113f0164?w=800', // Red item
    'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800', // Green item
    'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800', // Navy
    'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800', // Black
    'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800', // Grey
    'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800', // Black item
    'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800', // Natural
    'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800'  // Black blazer
  ]

  saleProducts.forEach((prod, index) => {
    prod.colors.forEach((color, colorIndex) => {
      variants.push({
        id: variantId++,
        product_id: prod.id,
        sku: `SALE-${color.name.substring(0, 3).toUpperCase()}-${String(prod.id).padStart(3, '0')}`,
        color_name: color.name,
        color_hex: color.hex,
        price: 19.99 + Math.random() * 45,
        gallery: [saleImages[index * 2 + colorIndex] || saleImages[0]]
      })
    })
  })

  return variants
}

/**
 * Mock Sizes Data
 * Each variant has 3-5 size options with stock quantities
 * Sizes vary by product category
 */
export const mockSizes: Size[] = [
  // Sizes for clothing variants (variants 1-29) - Standard sizes S, M, L, XL, XXL
  // Variant 1 - Oxford Shirt White
  { id: 1, variant_id: 1, label: 'S', quantity: 15 },
  { id: 2, variant_id: 1, label: 'M', quantity: 25 },
  { id: 3, variant_id: 1, label: 'L', quantity: 20 },
  { id: 4, variant_id: 1, label: 'XL', quantity: 12 },
  { id: 5, variant_id: 1, label: 'XXL', quantity: 8 },

  // Variant 2 - Oxford Shirt Light Blue
  { id: 6, variant_id: 2, label: 'S', quantity: 10 },
  { id: 7, variant_id: 2, label: 'M', quantity: 18 },
  { id: 8, variant_id: 2, label: 'L', quantity: 15 },
  { id: 9, variant_id: 2, label: 'XL', quantity: 10 },

  // Variant 3 - Oxford Shirt Pink
  { id: 10, variant_id: 3, label: 'S', quantity: 8 },
  { id: 11, variant_id: 3, label: 'M', quantity: 12 },
  { id: 12, variant_id: 3, label: 'L', quantity: 10 },

  // Variant 4 - Jeans Dark Blue
  { id: 13, variant_id: 4, label: '28', quantity: 8 },
  { id: 14, variant_id: 4, label: '30', quantity: 15 },
  { id: 15, variant_id: 4, label: '32', quantity: 20 },
  { id: 16, variant_id: 4, label: '34', quantity: 18 },
  { id: 17, variant_id: 4, label: '36', quantity: 10 },

  // Variant 5 - Jeans Black
  { id: 18, variant_id: 5, label: '28', quantity: 6 },
  { id: 19, variant_id: 5, label: '30', quantity: 12 },
  { id: 20, variant_id: 5, label: '32', quantity: 15 },
  { id: 21, variant_id: 5, label: '34', quantity: 12 },

  // Generate remaining sizes programmatically
  ...generateRemainingSizes()
]

/**
 * Generate sizes for remaining variants
 */
function generateRemainingSizes(): Size[] {
  const sizes: Size[] = []
  let sizeId = 22

  // Generate for variants 6-90 (all remaining variants)
  for (let variantId = 6; variantId <= 90; variantId++) {
    // Determine size labels based on variant
    let sizeLabels: string[] = []

    // Clothing variants (6-29 and beyond for apparel)
    if (variantId <= 29 || (variantId >= 30 && variantId <= 49)) {
      sizeLabels = ['S', 'M', 'L', 'XL']
    }
    // Shoe variants (around 50-59)
    else if (variantId >= 50 && variantId <= 59) {
      sizeLabels = ['7', '8', '9', '10', '11']
    }
    // Accessories (one size or small/medium/large)
    else {
      sizeLabels = ['One Size']
    }

    sizeLabels.forEach(label => {
      sizes.push({
        id: sizeId++,
        variant_id: variantId,
        label,
        quantity: Math.floor(Math.random() * 20) + 5 // Random quantity between 5-24
      })
    })
  }

  return sizes
}

/**
 * Helper function to get variants by product ID
 */
export function getVariantsByProductId(productId: number): ProductVariant[] {
  return mockVariants.filter(v => v.product_id === productId)
}

/**
 * Helper function to get variant by ID
 */
export function getVariantById(id: number): ProductVariant | undefined {
  return mockVariants.find(v => v.id === id)
}

/**
 * Helper function to get sizes by variant ID
 */
export function getSizesByVariantId(variantId: number): Size[] {
  return mockSizes.filter(s => s.variant_id === variantId)
}

/**
 * Helper function to get total stock for a variant
 */
export function getVariantTotalStock(variantId: number): number {
  const sizes = getSizesByVariantId(variantId)
  return sizes.reduce((total, size) => total + size.quantity, 0)
}
