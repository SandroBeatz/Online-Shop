import type { Collection } from '../types/entities'

/**
 * Mock Collections Data
 * 5 curated collections for seasonal promotions and featured product groups
 * Collections are used to group products for marketing purposes
 */
export const mockCollections: Collection[] = [
  {
    id: 1,
    title: 'Summer 2025',
    slug: 'summer-2025',
    description: 'Light, breezy, and vibrant styles perfect for the summer season. Stay cool and look hot!',
    image: 'https://images.unsplash.com/photo-1523359346063-d879354c0ea5?w=1200'
  },
  {
    id: 2,
    title: 'New Arrivals',
    slug: 'new-arrivals',
    description: 'Fresh styles just in! Be the first to discover our latest fashion finds.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200'
  },
  {
    id: 3,
    title: 'Best Sellers',
    slug: 'best-sellers',
    description: 'Customer favorites that keep selling out. These popular items are loved by thousands!',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200'
  },
  {
    id: 4,
    title: 'Winter Collection',
    slug: 'winter-collection',
    description: 'Cozy and warm essentials for the cold season. Stay stylish while staying warm.',
    image: 'https://images.unsplash.com/photo-1483181957632-8bda974cbc91?w=1200'
  },
  {
    id: 5,
    title: 'Urban Style',
    slug: 'urban-style',
    description: 'Street-smart fashion for the modern city dweller. Comfortable meets contemporary.',
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
