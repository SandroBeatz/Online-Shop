import type { Category } from '../types/entities'

/**
 * Mock Categories Data
 * 6 categories representing main fashion departments
 * Some categories have parent relationships for hierarchical navigation
 */
export const mockCategoriesNew: Category[] = [
  {
    id: 1,
    name: 'Men',
    slug: 'men',
    description: 'Modern fashion and essentials for men. Discover stylish clothing, shoes, and accessories.',
    image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=800',
    parent_id: null // Root category
  },
  {
    id: 2,
    name: 'Women',
    slug: 'women',
    description: 'Elegant and trendy fashion for women. From casual wear to evening dresses.',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800',
    parent_id: null // Root category
  },
  {
    id: 3,
    name: 'Kids',
    slug: 'kids',
    description: 'Comfortable and playful clothing for children of all ages.',
    image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=800',
    parent_id: null // Root category
  },
  {
    id: 4,
    name: 'Shoes',
    slug: 'shoes',
    description: 'Step up your style with our collection of footwear for every occasion.',
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800',
    parent_id: null // Root category
  },
  {
    id: 5,
    name: 'Accessories',
    slug: 'accessories',
    description: 'Complete your look with bags, jewelry, watches, and more.',
    image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800',
    parent_id: null // Root category
  },
  {
    id: 6,
    name: 'Sale',
    slug: 'sale',
    description: 'Amazing deals and discounts on selected items. Limited time offers!',
    image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=800',
    parent_id: null // Root category
  }
]

/**
 * Helper function to get category by ID
 */
export function getCategoryById(id: number): Category | undefined {
  return mockCategoriesNew.find(cat => cat.id === id)
}

/**
 * Helper function to get category by slug
 */
export function getCategoryBySlug(slug: string): Category | undefined {
  return mockCategoriesNew.find(cat => cat.slug === slug)
}

/**
 * Helper function to get root categories (parent_id === null)
 */
export function getRootCategories(): Category[] {
  return mockCategoriesNew.filter(cat => cat.parent_id === null)
}

/**
 * Helper function to get child categories of a parent
 */
export function getChildCategories(parentId: number): Category[] {
  return mockCategoriesNew.filter(cat => cat.parent_id === parentId)
}
