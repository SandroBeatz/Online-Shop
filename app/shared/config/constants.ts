import type { SortOption } from '~/entities/product/model/types'
import type { DeliveryMethod, PaymentMethod } from '~/entities/order/model/types'

export const SORT_OPTIONS: Array<{ value: SortOption; label: string }> = [
  { value: 'newest', label: 'Newest First' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A-Z' },
  { value: 'name-desc', label: 'Name: Z-A' }
]

export const DELIVERY_METHODS: Array<{ value: DeliveryMethod; label: string; price: number }> = [
  { value: 'standard', label: 'Standard Delivery (5-7 days)', price: 5.99 },
  { value: 'express', label: 'Express Delivery (2-3 days)', price: 12.99 },
  { value: 'pickup', label: 'Store Pickup', price: 0 }
]

export const PAYMENT_METHODS: Array<{ value: PaymentMethod; label: string }> = [
  { value: 'cash', label: 'Cash on Delivery' },
  { value: 'card', label: 'Credit/Debit Card' },
  { value: 'online', label: 'Online Payment' }
]

export const PRODUCTS_PER_PAGE = 10

export const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $100', min: 50, max: 100 },
  { label: '$100 - $200', min: 100, max: 200 },
  { label: 'Over $200', min: 200, max: Infinity }
]
