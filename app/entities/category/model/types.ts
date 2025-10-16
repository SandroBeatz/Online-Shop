export type CategoryId = number

export interface Category {
  id: CategoryId
  name: string
  slug: string
  description: string
  image: string
  parent_id: Nullable<CategoryId>
}
