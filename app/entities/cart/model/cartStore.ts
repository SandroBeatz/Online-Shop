import { defineStore } from 'pinia'
import type { CartItem } from './types'
import type { Product } from '../../product/model/types'

interface CartState {
  items: CartItem[]
}

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    items: []
  }),

  getters: {
    total: (state): number => {
      return state.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
    },

    itemCount: (state): number => {
      return state.items.reduce((sum, item) => sum + item.quantity, 0)
    },

    isEmpty: (state): boolean => {
      return state.items.length === 0
    }
  },

  actions: {
    addToCart(product: Product, quantity: number = 1) {
      const existingItem = this.items.find(item => item.product.id === product.id)

      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        this.items.push({ product, quantity })
      }

      this.saveToLocalStorage()
    },

    removeFromCart(productId: number) {
      this.items = this.items.filter(item => item.product.id !== productId)
      this.saveToLocalStorage()
    },

    updateQuantity(productId: number, quantity: number) {
      const item = this.items.find(item => item.product.id === productId)

      if (item) {
        if (quantity <= 0) {
          this.removeFromCart(productId)
        } else {
          item.quantity = quantity
        }
      }

      this.saveToLocalStorage()
    },

    increaseQuantity(productId: number) {
      const item = this.items.find(item => item.product.id === productId)
      if (item) {
        item.quantity++
        this.saveToLocalStorage()
      }
    },

    decreaseQuantity(productId: number) {
      const item = this.items.find(item => item.product.id === productId)
      if (item) {
        if (item.quantity > 1) {
          item.quantity--
        } else {
          this.removeFromCart(productId)
        }
        this.saveToLocalStorage()
      }
    },

    clearCart() {
      this.items = []
      this.saveToLocalStorage()
    },

    saveToLocalStorage() {
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(this.items))
      }
    },

    loadFromLocalStorage() {
      if (typeof window !== 'undefined') {
        const savedCart = localStorage.getItem('cart')
        if (savedCart) {
          try {
            this.items = JSON.parse(savedCart)
          } catch (err) {
            console.error('Error parsing saved cart:', err)
            this.items = []
          }
        }
      }
    }
  }
})
