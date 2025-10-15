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
    title: 'Классическая белая рубашка Оксфорд',
    slug: 'classic-white-oxford-shirt',
    description: 'Вневременная белая рубашка Оксфорд из премиального хлопка. Идеальна как для повседневных, так и для официальных случаев.',
    category_id: 1,
    base_price: 59.99,
    is_featured: true,
    publishedAt: '2025-01-15T10:00:00Z'
  },
  {
    id: 2,
    title: 'Джинсы слим темной стирки',
    slug: 'slim-fit-dark-wash-jeans',
    description: 'Современные джинсы слим в универсальной темной стирке. Удобный стрейчевый деним для ношения весь день.',
    category_id: 1,
    base_price: 79.99,
    is_featured: false,
    publishedAt: '2025-01-10T10:00:00Z'
  },
  {
    id: 3,
    title: 'Хлопковая футболка с круглым вырезом',
    slug: 'crew-neck-cotton-tshirt',
    description: 'Базовая футболка с круглым вырезом из мягкого хлопка. Основа гардероба для повседневного комфорта.',
    category_id: 1,
    base_price: 24.99,
    is_featured: false,
    publishedAt: '2025-01-20T10:00:00Z'
  },
  {
    id: 4,
    title: 'Блейзер из шерстяной смеси',
    slug: 'wool-blend-blazer',
    description: 'Изысканный блейзер из шерстяной смеси. Приталенный крой для четкого профессионального образа.',
    category_id: 1,
    base_price: 189.99,
    is_featured: true,
    publishedAt: '2024-12-01T10:00:00Z'
  },
  {
    id: 5,
    title: 'Повседневные брюки чинос',
    slug: 'casual-chino-pants',
    description: 'Универсальные брюки чинос комфортного классического кроя. Идеальны для умного повседневного стиля.',
    category_id: 1,
    base_price: 54.99,
    is_featured: false,
    publishedAt: '2025-01-05T10:00:00Z'
  },

  // Women's Category (category_id: 2)
  {
    id: 6,
    title: 'Платье миди с цветочным принтом',
    slug: 'floral-print-midi-dress',
    description: 'Элегантное платье миди с красивым цветочным принтом. Струящийся силуэт идеален для летних мероприятий.',
    category_id: 2,
    base_price: 89.99,
    is_featured: true,
    publishedAt: '2025-01-18T10:00:00Z'
  },
  {
    id: 7,
    title: 'Джинсы скинни с высокой талией',
    slug: 'high-waist-skinny-jeans',
    description: 'Лестные джинсы скинни с высокой талией и отличной растяжкой. Современная основа гардероба.',
    category_id: 2,
    base_price: 69.99,
    is_featured: false,
    publishedAt: '2025-01-12T10:00:00Z'
  },
  {
    id: 8,
    title: 'Блузка из шелковой смеси',
    slug: 'silk-blend-blouse',
    description: 'Роскошная блузка из шелковой смеси с деликатными деталями. Изысканная и комфортная.',
    category_id: 2,
    base_price: 74.99,
    is_featured: true,
    publishedAt: '2025-01-08T10:00:00Z'
  },
  {
    id: 9,
    title: 'Вязаный кашемировый свитер',
    slug: 'cashmere-knit-sweater',
    description: 'Премиальный кашемировый свитер свободного кроя. Максимальная мягкость и тепло.',
    category_id: 2,
    base_price: 149.99,
    is_featured: false,
    publishedAt: '2024-11-25T10:00:00Z'
  },
  {
    id: 10,
    title: 'Брюки широкого кроя',
    slug: 'wide-leg-trousers',
    description: 'Шикарные брюки широкого кроя из струящейся ткани. Элегантные и комфортные для любого случая.',
    category_id: 2,
    base_price: 79.99,
    is_featured: false,
    publishedAt: '2025-01-03T10:00:00Z'
  },

  // Kids' Category (category_id: 3)
  {
    id: 11,
    title: 'Детская толстовка с радугой',
    slug: 'kids-rainbow-hoodie',
    description: 'Веселая и яркая толстовка с дизайном радуги. Мягкая флисовая подкладка для дополнительного тепла.',
    category_id: 3,
    base_price: 34.99,
    is_featured: false,
    publishedAt: '2025-01-16T10:00:00Z'
  },
  {
    id: 12,
    title: 'Детская джинсовая куртка',
    slug: 'kids-denim-jacket',
    description: 'Классическая джинсовая куртка для детей. Прочная и стильная для повседневных приключений.',
    category_id: 3,
    base_price: 44.99,
    is_featured: true,
    publishedAt: '2025-01-11T10:00:00Z'
  },
  {
    id: 13,
    title: 'Детская хлопковая пижама',
    slug: 'kids-cotton-pajama-set',
    description: 'Уютная пижама из мягкого хлопка. Комфортная одежда для сна и сладких снов.',
    category_id: 3,
    base_price: 29.99,
    is_featured: false,
    publishedAt: '2025-01-19T10:00:00Z'
  },
  {
    id: 14,
    title: 'Набор детских футболок с принтами',
    slug: 'kids-graphic-tshirt-pack',
    description: 'Набор из 3 футболок с веселыми принтами. Изготовлены из дышащего хлопка.',
    category_id: 3,
    base_price: 39.99,
    is_featured: false,
    publishedAt: '2025-01-07T10:00:00Z'
  },
  {
    id: 15,
    title: 'Детские спортивные брюки',
    slug: 'kids-track-pants',
    description: 'Спортивные брюки для активных детей. Комфортные и прочные для игр.',
    category_id: 3,
    base_price: 27.99,
    is_featured: false,
    publishedAt: '2025-01-14T10:00:00Z'
  },

  // Shoes Category (category_id: 4)
  {
    id: 16,
    title: 'Кожаные туфли Оксфорд',
    slug: 'leather-oxford-shoes',
    description: 'Классические кожаные туфли Оксфорд премиального качества. Идеальны для официальных случаев.',
    category_id: 4,
    base_price: 129.99,
    is_featured: true,
    publishedAt: '2024-12-20T10:00:00Z'
  },
  {
    id: 17,
    title: 'Холщовые кеды',
    slug: 'canvas-sneakers',
    description: 'Повседневные холщовые кеды классического стиля. Комфортные для ежедневного ношения.',
    category_id: 4,
    base_price: 54.99,
    is_featured: false,
    publishedAt: '2025-01-09T10:00:00Z'
  },
  {
    id: 18,
    title: 'Профессиональные кроссовки для бега',
    slug: 'running-shoes-pro',
    description: 'Высокопроизводительные беговые кроссовки с продвинутой амортизацией и поддержкой.',
    category_id: 4,
    base_price: 119.99,
    is_featured: true,
    publishedAt: '2025-01-13T10:00:00Z'
  },
  {
    id: 19,
    title: 'Ботильоны',
    slug: 'ankle-boots',
    description: 'Стильные ботильоны на массивном каблуке. Универсальная обувь для разных образов.',
    category_id: 4,
    base_price: 99.99,
    is_featured: false,
    publishedAt: '2024-11-30T10:00:00Z'
  },
  {
    id: 20,
    title: 'Замшевые лоферы',
    slug: 'suede-loafers',
    description: 'Элегантные замшевые лоферы с комфортной стелькой. Умная повседневная изысканность.',
    category_id: 4,
    base_price: 89.99,
    is_featured: false,
    publishedAt: '2025-01-06T10:00:00Z'
  },

  // Accessories Category (category_id: 5)
  {
    id: 21,
    title: 'Кожаная сумка через плечо',
    slug: 'leather-crossbody-bag',
    description: 'Компактная сумка через плечо из натуральной кожи. Идеальный размер для самого необходимого.',
    category_id: 5,
    base_price: 79.99,
    is_featured: true,
    publishedAt: '2025-01-17T10:00:00Z'
  },
  {
    id: 22,
    title: 'Классические солнцезащитные очки-авиаторы',
    slug: 'classic-aviator-sunglasses',
    description: 'Вневременные очки-авиаторы с УФ-защитой. Стиль встречается с функциональностью.',
    category_id: 5,
    base_price: 49.99,
    is_featured: false,
    publishedAt: '2025-01-04T10:00:00Z'
  },
  {
    id: 23,
    title: 'Минималистичные часы',
    slug: 'minimalist-watch',
    description: 'Элегантные минималистичные часы с кожаным ремешком. Изысканная простота для любого запястья.',
    category_id: 5,
    base_price: 129.99,
    is_featured: true,
    publishedAt: '2024-12-15T10:00:00Z'
  },
  {
    id: 24,
    title: 'Шелковый шарф',
    slug: 'silk-scarf',
    description: 'Роскошный шелковый шарф с художественным принтом. Универсальный аксессуар для любого наряда.',
    category_id: 5,
    base_price: 39.99,
    is_featured: false,
    publishedAt: '2025-01-02T10:00:00Z'
  },
  {
    id: 25,
    title: 'Кожаный ремень',
    slug: 'leather-belt',
    description: 'Классический кожаный ремень с металлической пряжкой. Незаменимый аксессуар для любого гардероба.',
    category_id: 5,
    base_price: 34.99,
    is_featured: false,
    publishedAt: '2025-01-21T10:00:00Z'
  },

  // Sale Category (category_id: 6)
  {
    id: 26,
    title: 'Полосатая рубашка поло',
    slug: 'striped-polo-shirt',
    description: 'Классическая рубашка поло в полоску. Удобная хлопковая ткань пике.',
    category_id: 6,
    base_price: 39.99,
    is_featured: false,
    publishedAt: '2024-10-15T10:00:00Z'
  },
  {
    id: 27,
    title: 'Фланелевая рубашка в клетку',
    slug: 'plaid-flannel-shirt',
    description: 'Уютная фланелевая рубашка в классическую клетку. Идеальна для многослойных образов.',
    category_id: 6,
    base_price: 49.99,
    is_featured: false,
    publishedAt: '2024-09-20T10:00:00Z'
  },
  {
    id: 28,
    title: 'Стеганый жилет',
    slug: 'quilted-vest',
    description: 'Легкий стеганый жилет для переходной погоды. Компактный и практичный.',
    category_id: 6,
    base_price: 64.99,
    is_featured: false,
    publishedAt: '2024-11-10T10:00:00Z'
  },
  {
    id: 29,
    title: 'Вязаная шапка',
    slug: 'knit-beanie',
    description: 'Теплая вязаная шапка в различных цветах. Незаменимый зимний аксессуар.',
    category_id: 6,
    base_price: 19.99,
    is_featured: false,
    publishedAt: '2024-10-01T10:00:00Z'
  },
  {
    id: 30,
    title: 'Холщовая сумка-тоут',
    slug: 'canvas-tote-bag',
    description: 'Прочная холщовая сумка-тоут с внутренним карманом. Экологичная и вместительная.',
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
