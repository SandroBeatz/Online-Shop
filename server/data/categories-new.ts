import type { Category } from '../types/entities'

/**
 * Mock Categories Data
 * 6 categories representing main fashion departments
 * Some categories have parent relationships for hierarchical navigation
 */
export const mockCategoriesNew: Category[] = [
  {
    id: 1,
    name: 'Мужчинам',
    slug: 'men',
    description: 'Современная мода и базовые вещи для мужчин. Откройте для себя стильную одежду, обувь и аксессуары.',
    image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=800',
    parent_id: null // Root category
  },
  {
    id: 2,
    name: 'Женщинам',
    slug: 'women',
    description: 'Элегантная и трендовая мода для женщин. От повседневной одежды до вечерних платьев.',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800',
    parent_id: null // Root category
  },
  {
    id: 3,
    name: 'Детям',
    slug: 'kids',
    description: 'Удобная и яркая одежда для детей всех возрастов.',
    image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=800',
    parent_id: null // Root category
  },
  {
    id: 4,
    name: 'Обувь',
    slug: 'shoes',
    description: 'Поднимите свой стиль на новый уровень с нашей коллекцией обуви для любого случая.',
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800',
    parent_id: null // Root category
  },
  {
    id: 5,
    name: 'Аксессуары',
    slug: 'accessories',
    description: 'Завершите свой образ сумками, украшениями, часами и многим другим.',
    image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800',
    parent_id: null // Root category
  },
  {
    id: 6,
    name: 'Распродажа',
    slug: 'sale',
    description: 'Невероятные скидки на избранные товары. Предложения ограничены по времени!',
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
