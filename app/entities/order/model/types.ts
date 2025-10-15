import type { CartItem } from '../../cart/model/types'

export interface OrderCustomer {
  name: string
  email: string
  phone: string
  address: string
}

export type DeliveryMethod = 'standard' | 'express' | 'pickup'
export type PaymentMethod = 'cash' | 'card' | 'online'

export interface Order {
  id?: number
  customer: OrderCustomer
  items: CartItem[]
  deliveryMethod: DeliveryMethod
  paymentMethod: PaymentMethod
  total: number
  createdAt?: string
}

export interface OrderResponse {
  success: boolean
  orderId?: number
  message?: string
}
