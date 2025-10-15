import type { Category } from '~/app/entities/category/model/types'

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    slug: 'electronics',
    description: 'Latest gadgets and electronic devices'
  },
  {
    id: '2',
    name: 'Clothing',
    slug: 'clothing',
    description: 'Fashion and apparel for all occasions'
  },
  {
    id: '3',
    name: 'Home & Garden',
    slug: 'home-garden',
    description: 'Everything for your home and garden'
  },
  {
    id: '4',
    name: 'Sports & Outdoors',
    slug: 'sports-outdoors',
    description: 'Gear for your active lifestyle'
  }
]
