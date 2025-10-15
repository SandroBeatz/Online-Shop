import { useCartStore } from '~/entities/cart/model/cartStore'

export default defineNuxtPlugin(() => {
  const cartStore = useCartStore()
  cartStore.loadFromLocalStorage()
})
