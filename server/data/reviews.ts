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
    comment: 'Perfect fit and excellent quality! The fabric is crisp and holds up well after washing. Highly recommend for both casual and formal wear.',
    author_name: 'James Mitchell',
    author_email: 'james.m@example.com',
    createdAt: '2025-01-20T14:30:00Z'
  },
  {
    id: 2,
    product_id: 1,
    rating: 4,
    comment: 'Great shirt overall. The white color is true to the photos. Only minor issue is it wrinkles easily, but that\'s expected with Oxford cloth.',
    author_name: 'Robert Chen',
    author_email: 'r.chen@example.com',
    createdAt: '2025-01-18T09:15:00Z'
  },
  {
    id: 3,
    product_id: 1,
    rating: 5,
    comment: 'Best white shirt I\'ve owned. The collar holds its shape beautifully and the fit is spot on.',
    author_name: 'Michael Torres',
    author_email: 'mtorres@example.com',
    createdAt: '2025-01-16T16:45:00Z'
  },

  // Product 2 - Slim Fit Dark Wash Jeans (2 reviews)
  {
    id: 4,
    product_id: 2,
    rating: 4,
    comment: 'Comfortable jeans with a modern slim fit. The dark wash is versatile and the stretch denim moves with you.',
    author_name: 'David Kim',
    author_email: 'dkim@example.com',
    createdAt: '2025-01-19T11:20:00Z'
  },
  {
    id: 5,
    product_id: 2,
    rating: 5,
    comment: 'These jeans are fantastic! Great quality, perfect fit, and they look amazing. Worth every penny.',
    author_name: 'Alex Johnson',
    author_email: 'ajohnson@example.com',
    createdAt: '2025-01-14T13:30:00Z'
  },

  // Product 3 - Crew Neck Cotton T-Shirt (2 reviews)
  {
    id: 6,
    product_id: 3,
    rating: 5,
    comment: 'Simple, comfortable, and affordable. Bought multiple colors and they all wash well without shrinking.',
    author_name: 'Sarah Williams',
    author_email: 'swilliams@example.com',
    createdAt: '2025-01-21T10:00:00Z'
  },
  {
    id: 7,
    product_id: 3,
    rating: 4,
    comment: 'Good basic tee. Soft fabric and holds up after several washes.',
    author_name: 'Emma Davis',
    author_email: 'emma.d@example.com',
    createdAt: '2025-01-17T15:20:00Z'
  },

  // Product 4 - Wool Blend Blazer (3 reviews)
  {
    id: 8,
    product_id: 4,
    rating: 5,
    comment: 'Exceptional blazer! The wool blend feels premium and the tailoring is impeccable. Perfect for business meetings.',
    author_name: 'Christopher Lee',
    author_email: 'clee@example.com',
    createdAt: '2025-01-15T14:00:00Z'
  },
  {
    id: 9,
    product_id: 4,
    rating: 5,
    comment: 'Worth the investment. The fit is flattering and the quality is outstanding.',
    author_name: 'Daniel Martinez',
    author_email: 'dmartinez@example.com',
    createdAt: '2025-01-12T09:30:00Z'
  },
  {
    id: 10,
    product_id: 4,
    rating: 4,
    comment: 'Great blazer, runs slightly large so consider sizing down.',
    author_name: 'Matthew Brown',
    author_email: 'mbrown@example.com',
    createdAt: '2025-01-10T16:15:00Z'
  },

  // Product 5 - Casual Chino Pants (1 review)
  {
    id: 11,
    product_id: 5,
    rating: 4,
    comment: 'Comfortable chinos for everyday wear. The khaki color is versatile and pairs well with everything.',
    author_name: 'Ryan Anderson',
    author_email: 'randerson@example.com',
    createdAt: '2025-01-19T12:00:00Z'
  },

  // Product 6 - Floral Print Midi Dress (3 reviews)
  {
    id: 12,
    product_id: 6,
    rating: 5,
    comment: 'Absolutely love this dress! The floral pattern is gorgeous and it fits beautifully. Perfect for summer weddings.',
    author_name: 'Jessica Parker',
    author_email: 'jparker@example.com',
    createdAt: '2025-01-20T13:45:00Z'
  },
  {
    id: 13,
    product_id: 6,
    rating: 5,
    comment: 'Beautiful dress with a flattering silhouette. The fabric flows nicely and the length is perfect.',
    author_name: 'Ashley White',
    author_email: 'awhite@example.com',
    createdAt: '2025-01-18T10:30:00Z'
  },
  {
    id: 14,
    product_id: 6,
    rating: 4,
    comment: 'Pretty dress! The print is vibrant and I received many compliments. Runs a bit large.',
    author_name: 'Lauren Garcia',
    author_email: 'lgarcia@example.com',
    createdAt: '2025-01-15T14:20:00Z'
  },

  // Product 7 - High-Waist Skinny Jeans (2 reviews)
  {
    id: 15,
    product_id: 7,
    rating: 5,
    comment: 'These jeans are amazing! The high waist is so flattering and they\'re super comfortable.',
    author_name: 'Olivia Taylor',
    author_email: 'otaylor@example.com',
    createdAt: '2025-01-17T11:15:00Z'
  },
  {
    id: 16,
    product_id: 7,
    rating: 4,
    comment: 'Great quality jeans. They have good stretch and don\'t bag out after wearing.',
    author_name: 'Sophia Moore',
    author_email: 'smoore@example.com',
    createdAt: '2025-01-13T09:00:00Z'
  },

  // Product 8 - Silk Blend Blouse (2 reviews)
  {
    id: 17,
    product_id: 8,
    rating: 5,
    comment: 'Luxurious blouse! The silk blend feels wonderful and drapes beautifully. Perfect for the office.',
    author_name: 'Amanda Clark',
    author_email: 'aclark@example.com',
    createdAt: '2025-01-16T15:30:00Z'
  },
  {
    id: 18,
    product_id: 8,
    rating: 5,
    comment: 'Elegant and comfortable. The fit is perfect and it looks expensive!',
    author_name: 'Michelle Rodriguez',
    author_email: 'mrodriguez@example.com',
    createdAt: '2025-01-11T13:00:00Z'
  },

  // Product 9 - Cashmere Knit Sweater (3 reviews)
  {
    id: 19,
    product_id: 9,
    rating: 5,
    comment: 'This cashmere sweater is incredible! So soft and warm. Worth the price.',
    author_name: 'Jennifer Lewis',
    author_email: 'jlewis@example.com',
    createdAt: '2025-01-14T10:45:00Z'
  },
  {
    id: 20,
    product_id: 9,
    rating: 5,
    comment: 'Best cashmere sweater I own. The quality is outstanding and it hasn\'t pilled at all.',
    author_name: 'Elizabeth Walker',
    author_email: 'ewalker@example.com',
    createdAt: '2025-01-09T16:00:00Z'
  },
  {
    id: 21,
    product_id: 9,
    rating: 4,
    comment: 'Lovely sweater, very soft. Hand wash only which is a bit of a hassle but expected for cashmere.',
    author_name: 'Rachel Hall',
    author_email: 'rhall@example.com',
    createdAt: '2025-01-05T12:30:00Z'
  },

  // Product 10 - Wide Leg Trousers (1 review)
  {
    id: 22,
    product_id: 10,
    rating: 4,
    comment: 'Chic and comfortable trousers. The wide leg is very on-trend and they\'re easy to style.',
    author_name: 'Nicole Allen',
    author_email: 'nallen@example.com',
    createdAt: '2025-01-18T14:00:00Z'
  },

  // Continue with more popular products getting reviews
  // Product 16 - Leather Oxford Shoes (3 reviews)
  {
    id: 23,
    product_id: 16,
    rating: 5,
    comment: 'Excellent quality leather shoes. Comfortable from day one with no break-in period needed.',
    author_name: 'William Scott',
    author_email: 'wscott@example.com',
    createdAt: '2025-01-13T11:00:00Z'
  },
  {
    id: 24,
    product_id: 16,
    rating: 5,
    comment: 'These shoes are fantastic. Classic style and superb craftsmanship.',
    author_name: 'Thomas Young',
    author_email: 'tyoung@example.com',
    createdAt: '2025-01-08T10:15:00Z'
  },
  {
    id: 25,
    product_id: 16,
    rating: 4,
    comment: 'Great formal shoes. The leather is high quality and they look professional.',
    author_name: 'Joseph King',
    author_email: 'jking@example.com',
    createdAt: '2025-01-03T15:45:00Z'
  },

  // Product 18 - Running Shoes Pro (2 reviews)
  {
    id: 26,
    product_id: 18,
    rating: 5,
    comment: 'Best running shoes I\'ve ever owned! Great cushioning and support for long runs.',
    author_name: 'Kevin Wright',
    author_email: 'kwright@example.com',
    createdAt: '2025-01-19T09:00:00Z'
  },
  {
    id: 27,
    product_id: 18,
    rating: 5,
    comment: 'Amazing shoes! They\'re lightweight yet provide excellent support. Perfect for marathons.',
    author_name: 'Brandon Lopez',
    author_email: 'blopez@example.com',
    createdAt: '2025-01-15T13:20:00Z'
  },

  // Product 21 - Leather Crossbody Bag (2 reviews)
  {
    id: 28,
    product_id: 21,
    rating: 5,
    comment: 'Perfect everyday bag! The leather is beautiful and it fits all my essentials.',
    author_name: 'Megan Hill',
    author_email: 'mhill@example.com',
    createdAt: '2025-01-20T11:30:00Z'
  },
  {
    id: 29,
    product_id: 21,
    rating: 4,
    comment: 'Great quality bag. The size is perfect for daily use and the leather seems durable.',
    author_name: 'Samantha Green',
    author_email: 'sgreen@example.com',
    createdAt: '2025-01-17T14:45:00Z'
  },

  // Product 23 - Minimalist Watch (3 reviews)
  {
    id: 30,
    product_id: 23,
    rating: 5,
    comment: 'Elegant watch with a timeless design. Looks much more expensive than it is!',
    author_name: 'Andrew Adams',
    author_email: 'aadams@example.com',
    createdAt: '2025-01-12T10:00:00Z'
  },
  {
    id: 31,
    product_id: 23,
    rating: 5,
    comment: 'Love this watch! The minimalist design is perfect and it goes with everything.',
    author_name: 'Nathan Baker',
    author_email: 'nbaker@example.com',
    createdAt: '2025-01-08T16:30:00Z'
  },
  {
    id: 32,
    product_id: 23,
    rating: 4,
    comment: 'Beautiful watch. Simple and elegant. The leather strap is comfortable.',
    author_name: 'Gregory Nelson',
    author_email: 'gnelson@example.com',
    createdAt: '2025-01-04T13:15:00Z'
  },

  // Add a few more reviews for variety
  {
    id: 33,
    product_id: 12,
    rating: 5,
    comment: 'My kid loves this jacket! Durable and stylish, perfect for everyday wear.',
    author_name: 'Patricia Carter',
    author_email: 'pcarter@example.com',
    createdAt: '2025-01-16T12:00:00Z'
  },
  {
    id: 34,
    product_id: 12,
    rating: 4,
    comment: 'Good quality denim jacket for kids. Fits true to size.',
    author_name: 'Linda Mitchell',
    author_email: 'lmitchell@example.com',
    createdAt: '2025-01-12T09:30:00Z'
  },
  {
    id: 35,
    product_id: 17,
    rating: 4,
    comment: 'Classic canvas sneakers. Comfortable and versatile for casual outfits.',
    author_name: 'Brian Perez',
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
