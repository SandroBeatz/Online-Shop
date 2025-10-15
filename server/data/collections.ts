import type { Collection } from '../types/entities'

/**
 * Mock Collections Data
 * 5 curated collections for seasonal promotions and featured product groups
 * Collections are used to group products for marketing purposes
 */
export const mockCollections: Collection[] = [
  {
    id: 1,
    title: 'Лето 2025',
    slug: 'summer-2025',
    description: 'Легкие, воздушные и яркие стили, идеальные для летнего сезона. Оставайтесь прохладными и выглядите потрясающе!',
    image: 'https://images.unsplash.com/photo-1523359346063-d879354c0ea5?w=1200'
  },
  {
    id: 2,
    title: 'Новинки',
    slug: 'new-arrivals',
    description: 'Свежие стили только что поступили! Будьте первыми, кто откроет для себя наши последние модные находки.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200'
  },
  {
    id: 3,
    title: 'Хиты продаж',
    slug: 'best-sellers',
    description: 'Любимые товары покупателей, которые постоянно раскупаются. Эти популярные вещи нравятся тысячам!',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200'
  },
  {
    id: 4,
    title: 'Зимняя коллекция',
    slug: 'winter-collection',
    description: 'Уютная и теплая одежда для холодного сезона. Оставайтесь стильными и согревайтесь.',
    image: 'https://images.unsplash.com/photo-1483181957632-8bda974cbc91?w=1200'
  },
  {
    id: 5,
    title: 'Городской стиль',
    slug: 'urban-style',
    description: 'Умная уличная мода для современного городского жителя. Комфорт встречается с современностью.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea24f0e8?w=1200'
  }
]

/**
 * Helper function to get collection by ID
 */
export function getCollectionById(id: number): Collection | undefined {
  return mockCollections.find(col => col.id === id)
}

/**
 * Helper function to get collection by slug
 */
export function getCollectionBySlug(slug: string): Collection | undefined {
  return mockCollections.find(col => col.slug === slug)
}
