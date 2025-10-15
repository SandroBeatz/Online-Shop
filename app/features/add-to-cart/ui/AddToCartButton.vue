<script setup lang="ts">
import type { Product } from '~/entities/product/model/types'
import { useCartStore } from '~/entities/cart/model/cartStore'

interface Props {
  product: Product
  quantity?: number
  block?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  quantity: 1,
  block: false
})

const cartStore = useCartStore()
const toast = useToast()

const addToCart = () => {
  if (!props.product.inStock) {
    toast.add({
      title: 'Out of Stock',
      description: 'This product is currently unavailable',
      color: 'red',
      icon: 'i-heroicons-x-circle'
    })
    return
  }

  cartStore.addToCart(props.product, props.quantity)
  toast.add({
    title: 'Added to Cart',
    description: `${props.product.title} has been added to your cart`,
    color: 'green',
    icon: 'i-heroicons-check-circle'
  })
}
</script>

<template>
  <UButton
    :block="block"
    color="primary"
    size="lg"
    icon="i-heroicons-shopping-cart"
    :disabled="!product.inStock"
    @click="addToCart"
  >
    {{ product.inStock ? 'Add to Cart' : 'Out of Stock' }}
  </UButton>
</template>
