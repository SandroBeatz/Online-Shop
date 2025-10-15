<script setup lang="ts">
import { useCartStore } from '~/entities/cart/model/cartStore'
import CartItemComponent from '~/entities/cart/ui/CartItem.vue'
import CartSummary from '~/widgets/cart-summary/ui/CartSummary.vue'

const cartStore = useCartStore()

const clearCart = () => {
  if (confirm('Are you sure you want to clear your cart?')) {
    cartStore.clearCart()
  }
}

// SEO
useHead({
  title: 'Shopping Cart - Online Shop',
  meta: [
    { name: 'description', content: 'Review your shopping cart and proceed to checkout' }
  ]
})
</script>

<template>
  <UContainer class="py-8">
    <h1 class="text-4xl font-bold mb-8">Shopping Cart</h1>

    <div v-if="cartStore.isEmpty" class="text-center py-16">
      <Icon name="i-heroicons-shopping-cart" class="w-24 h-24 mx-auto text-gray-300 mb-6" />
      <h2 class="text-2xl font-semibold text-gray-600 mb-4">Your cart is empty</h2>
      <p class="text-gray-500 mb-8">Start shopping to add items to your cart</p>
      <UButton to="/catalog" size="lg" color="primary">
        Browse Products
      </UButton>
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Cart Items -->
      <div class="lg:col-span-2 space-y-4">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-2xl font-semibold">
            Cart Items ({{ cartStore.itemCount }})
          </h2>
          <UButton
            color="red"
            variant="ghost"
            icon="i-heroicons-trash"
            @click="clearCart"
          >
            Clear Cart
          </UButton>
        </div>

        <CartItemComponent
          v-for="item in cartStore.items"
          :key="item.product.id"
          :item="item"
        />
      </div>

      <!-- Cart Summary -->
      <div class="lg:col-span-1">
        <div class="sticky top-4 space-y-4">
          <CartSummary />

          <UButton
            to="/checkout"
            block
            size="xl"
            color="primary"
            icon="i-heroicons-arrow-right"
            trailing
          >
            Proceed to Checkout
          </UButton>

          <UButton
            to="/catalog"
            block
            size="lg"
            color="gray"
            variant="outline"
            icon="i-heroicons-arrow-left"
          >
            Continue Shopping
          </UButton>
        </div>
      </div>
    </div>
  </UContainer>
</template>
