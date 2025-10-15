import type { Review } from '../types/entities'

/**
 * Mock Reviews Data
 * 1-3 reviews per product with varied ratings and comments
 * Reviews include author information and timestamps
 */
export const mockReviews: Review[] = [
  // Product 1 - Classic White Oxford Shirt (3 reviews)
  {
    id: 1,
    product_id: 1,
    rating: 5,
    comment: 'Идеальная посадка и отличное качество! Ткань плотная и хорошо держит форму после стирки. Очень рекомендую как для повседневной, так и для официальной носки.',
    author_name: 'Джеймс Митчелл',
    author_email: 'james.m@example.com',
    createdAt: '2025-01-20T14:30:00Z'
  },
  {
    id: 2,
    product_id: 1,
    rating: 4,
    comment: 'Отличная рубашка в целом. Белый цвет соответствует фотографиям. Единственная мелочь - легко мнется, но это ожидаемо для оксфордской ткани.',
    author_name: 'Роберт Чен',
    author_email: 'r.chen@example.com',
    createdAt: '2025-01-18T09:15:00Z'
  },
  {
    id: 3,
    product_id: 1,
    rating: 5,
    comment: 'Лучшая белая рубашка из всех, что у меня были. Воротник прекрасно держит форму, а посадка идеальная.',
    author_name: 'Майкл Торрес',
    author_email: 'mtorres@example.com',
    createdAt: '2025-01-16T16:45:00Z'
  },

  // Product 2 - Slim Fit Dark Wash Jeans (2 reviews)
  {
    id: 4,
    product_id: 2,
    rating: 4,
    comment: 'Удобные джинсы с современной приталенной посадкой. Темная стирка универсальна, а стрейчевый деним тянется вместе с вами.',
    author_name: 'Дэвид Ким',
    author_email: 'dkim@example.com',
    createdAt: '2025-01-19T11:20:00Z'
  },
  {
    id: 5,
    product_id: 2,
    rating: 5,
    comment: 'Эти джинсы просто фантастические! Отличное качество, идеальная посадка, и выглядят потрясающе. Стоят каждой копейки.',
    author_name: 'Алекс Джонсон',
    author_email: 'ajohnson@example.com',
    createdAt: '2025-01-14T13:30:00Z'
  },

  // Product 3 - Crew Neck Cotton T-Shirt (2 reviews)
  {
    id: 6,
    product_id: 3,
    rating: 5,
    comment: 'Простая, удобная и доступная по цене. Купил несколько цветов, все хорошо стираются без усадки.',
    author_name: 'Сара Уильямс',
    author_email: 'swilliams@example.com',
    createdAt: '2025-01-21T10:00:00Z'
  },
  {
    id: 7,
    product_id: 3,
    rating: 4,
    comment: 'Хорошая базовая футболка. Мягкая ткань и держится после нескольких стирок.',
    author_name: 'Эмма Дэвис',
    author_email: 'emma.d@example.com',
    createdAt: '2025-01-17T15:20:00Z'
  },

  // Product 4 - Wool Blend Blazer (3 reviews)
  {
    id: 8,
    product_id: 4,
    rating: 5,
    comment: 'Исключительный блейзер! Шерстяная смесь ощущается премиальной, а пошив безупречен. Идеально для деловых встреч.',
    author_name: 'Кристофер Ли',
    author_email: 'clee@example.com',
    createdAt: '2025-01-15T14:00:00Z'
  },
  {
    id: 9,
    product_id: 4,
    rating: 5,
    comment: 'Стоит вложения. Посадка лестная, а качество выдающееся.',
    author_name: 'Дэниел Мартинес',
    author_email: 'dmartinez@example.com',
    createdAt: '2025-01-12T09:30:00Z'
  },
  {
    id: 10,
    product_id: 4,
    rating: 4,
    comment: 'Отличный блейзер, немного большемерит, так что подумайте о меньшем размере.',
    author_name: 'Мэттью Браун',
    author_email: 'mbrown@example.com',
    createdAt: '2025-01-10T16:15:00Z'
  },

  // Product 5 - Casual Chino Pants (1 review)
  {
    id: 11,
    product_id: 5,
    rating: 4,
    comment: 'Удобные чинос для повседневной носки. Цвет хаки универсален и хорошо сочетается со всем.',
    author_name: 'Райан Андерсон',
    author_email: 'randerson@example.com',
    createdAt: '2025-01-19T12:00:00Z'
  },

  // Product 6 - Floral Print Midi Dress (3 reviews)
  {
    id: 12,
    product_id: 6,
    rating: 5,
    comment: 'Просто обожаю это платье! Цветочный узор великолепен, и оно прекрасно сидит. Идеально для летних свадеб.',
    author_name: 'Джессика Паркер',
    author_email: 'jparker@example.com',
    createdAt: '2025-01-20T13:45:00Z'
  },
  {
    id: 13,
    product_id: 6,
    rating: 5,
    comment: 'Красивое платье с лестным силуэтом. Ткань красиво струится, а длина идеальна.',
    author_name: 'Эшли Уайт',
    author_email: 'awhite@example.com',
    createdAt: '2025-01-18T10:30:00Z'
  },
  {
    id: 14,
    product_id: 6,
    rating: 4,
    comment: 'Красивое платье! Принт яркий, и я получила много комплиментов. Немного большемерит.',
    author_name: 'Лорен Гарсия',
    author_email: 'lgarcia@example.com',
    createdAt: '2025-01-15T14:20:00Z'
  },

  // Product 7 - High-Waist Skinny Jeans (2 reviews)
  {
    id: 15,
    product_id: 7,
    rating: 5,
    comment: 'Эти джинсы потрясающие! Высокая талия так лестна, и они суперкомфортные.',
    author_name: 'Оливия Тейлор',
    author_email: 'otaylor@example.com',
    createdAt: '2025-01-17T11:15:00Z'
  },
  {
    id: 16,
    product_id: 7,
    rating: 4,
    comment: 'Отличного качества джинсы. Хорошая растяжка и не растягиваются после ношения.',
    author_name: 'София Мур',
    author_email: 'smoore@example.com',
    createdAt: '2025-01-13T09:00:00Z'
  },

  // Product 8 - Silk Blend Blouse (2 reviews)
  {
    id: 17,
    product_id: 8,
    rating: 5,
    comment: 'Роскошная блузка! Шелковая смесь ощущается прекрасно и красиво драпируется. Идеально для офиса.',
    author_name: 'Аманда Кларк',
    author_email: 'aclark@example.com',
    createdAt: '2025-01-16T15:30:00Z'
  },
  {
    id: 18,
    product_id: 8,
    rating: 5,
    comment: 'Элегантная и удобная. Посадка идеальная и выглядит дорого!',
    author_name: 'Мишель Родригес',
    author_email: 'mrodriguez@example.com',
    createdAt: '2025-01-11T13:00:00Z'
  },

  // Product 9 - Cashmere Knit Sweater (3 reviews)
  {
    id: 19,
    product_id: 9,
    rating: 5,
    comment: 'Этот кашемировый свитер невероятен! Такой мягкий и теплый. Стоит своих денег.',
    author_name: 'Дженнифер Льюис',
    author_email: 'jlewis@example.com',
    createdAt: '2025-01-14T10:45:00Z'
  },
  {
    id: 20,
    product_id: 9,
    rating: 5,
    comment: 'Лучший кашемировый свитер, который у меня есть. Качество выдающееся, и он совсем не скатывается.',
    author_name: 'Элизабет Уокер',
    author_email: 'ewalker@example.com',
    createdAt: '2025-01-09T16:00:00Z'
  },
  {
    id: 21,
    product_id: 9,
    rating: 4,
    comment: 'Прекрасный свитер, очень мягкий. Только ручная стирка, что немного хлопотно, но ожидаемо для кашемира.',
    author_name: 'Рэйчел Холл',
    author_email: 'rhall@example.com',
    createdAt: '2025-01-05T12:30:00Z'
  },

  // Product 10 - Wide Leg Trousers (1 review)
  {
    id: 22,
    product_id: 10,
    rating: 4,
    comment: 'Шикарные и удобные брюки. Широкий крой очень трендовый, и их легко стилизовать.',
    author_name: 'Николь Аллен',
    author_email: 'nallen@example.com',
    createdAt: '2025-01-18T14:00:00Z'
  },

  // Continue with more popular products getting reviews
  // Product 16 - Leather Oxford Shoes (3 reviews)
  {
    id: 23,
    product_id: 16,
    rating: 5,
    comment: 'Отличного качества кожаные туфли. Комфортные с первого дня, не требуют разнашивания.',
    author_name: 'Уильям Скотт',
    author_email: 'wscott@example.com',
    createdAt: '2025-01-13T11:00:00Z'
  },
  {
    id: 24,
    product_id: 16,
    rating: 5,
    comment: 'Эти туфли фантастические. Классический стиль и превосходное качество изготовления.',
    author_name: 'Томас Янг',
    author_email: 'tyoung@example.com',
    createdAt: '2025-01-08T10:15:00Z'
  },
  {
    id: 25,
    product_id: 16,
    rating: 4,
    comment: 'Отличная официальная обувь. Кожа высокого качества, и они выглядят профессионально.',
    author_name: 'Джозеф Кинг',
    author_email: 'jking@example.com',
    createdAt: '2025-01-03T15:45:00Z'
  },

  // Product 18 - Running Shoes Pro (2 reviews)
  {
    id: 26,
    product_id: 18,
    rating: 5,
    comment: 'Лучшие беговые кроссовки, которые у меня когда-либо были! Отличная амортизация и поддержка для длинных забегов.',
    author_name: 'Кевин Райт',
    author_email: 'kwright@example.com',
    createdAt: '2025-01-19T09:00:00Z'
  },
  {
    id: 27,
    product_id: 18,
    rating: 5,
    comment: 'Потрясающие кроссовки! Они легкие, но при этом обеспечивают отличную поддержку. Идеальны для марафонов.',
    author_name: 'Брэндон Лопес',
    author_email: 'blopez@example.com',
    createdAt: '2025-01-15T13:20:00Z'
  },

  // Product 21 - Leather Crossbody Bag (2 reviews)
  {
    id: 28,
    product_id: 21,
    rating: 5,
    comment: 'Идеальная повседневная сумка! Кожа красивая, и в неё помещается всё самое необходимое.',
    author_name: 'Меган Хилл',
    author_email: 'mhill@example.com',
    createdAt: '2025-01-20T11:30:00Z'
  },
  {
    id: 29,
    product_id: 21,
    rating: 4,
    comment: 'Отличного качества сумка. Размер идеален для ежедневного использования, а кожа кажется прочной.',
    author_name: 'Саманта Грин',
    author_email: 'sgreen@example.com',
    createdAt: '2025-01-17T14:45:00Z'
  },

  // Product 23 - Minimalist Watch (3 reviews)
  {
    id: 30,
    product_id: 23,
    rating: 5,
    comment: 'Элегантные часы с вневременным дизайном. Выглядят намного дороже, чем стоят!',
    author_name: 'Эндрю Адамс',
    author_email: 'aadams@example.com',
    createdAt: '2025-01-12T10:00:00Z'
  },
  {
    id: 31,
    product_id: 23,
    rating: 5,
    comment: 'Обожаю эти часы! Минималистичный дизайн идеален, и они подходят ко всему.',
    author_name: 'Нейтан Бейкер',
    author_email: 'nbaker@example.com',
    createdAt: '2025-01-08T16:30:00Z'
  },
  {
    id: 32,
    product_id: 23,
    rating: 4,
    comment: 'Красивые часы. Простые и элегантные. Кожаный ремешок удобный.',
    author_name: 'Грегори Нельсон',
    author_email: 'gnelson@example.com',
    createdAt: '2025-01-04T13:15:00Z'
  },

  // Add a few more reviews for variety
  {
    id: 33,
    product_id: 12,
    rating: 5,
    comment: 'Мой ребенок обожает эту куртку! Прочная и стильная, идеальна для повседневной носки.',
    author_name: 'Патриция Картер',
    author_email: 'pcarter@example.com',
    createdAt: '2025-01-16T12:00:00Z'
  },
  {
    id: 34,
    product_id: 12,
    rating: 4,
    comment: 'Хорошего качества джинсовая куртка для детей. Размер соответствует.',
    author_name: 'Линда Митчелл',
    author_email: 'lmitchell@example.com',
    createdAt: '2025-01-12T09:30:00Z'
  },
  {
    id: 35,
    product_id: 17,
    rating: 4,
    comment: 'Классические холщовые кеды. Удобные и универсальные для повседневных образов.',
    author_name: 'Брайан Перес',
    author_email: 'bperez@example.com',
    createdAt: '2025-01-11T15:00:00Z'
  }
]

/**
 * Helper function to get reviews by product ID
 */
export function getReviewsByProductId(productId: number): Review[] {
  return mockReviews.filter(r => r.product_id === productId)
}

/**
 * Helper function to calculate average rating for a product
 */
export function getProductAverageRating(productId: number): number {
  const reviews = getReviewsByProductId(productId)
  if (reviews.length === 0) return 0

  const sum = reviews.reduce((acc, review) => acc + review.rating, 0)
  return Number((sum / reviews.length).toFixed(1))
}

/**
 * Helper function to get review count for a product
 */
export function getProductReviewCount(productId: number): number {
  return getReviewsByProductId(productId).length
}

/**
 * Helper function to get recent reviews (all products)
 */
export function getRecentReviews(limit: number = 10): Review[] {
  return [...mockReviews]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit)
}
