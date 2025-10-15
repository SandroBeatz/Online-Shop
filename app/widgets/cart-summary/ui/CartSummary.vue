<script setup lang="ts">
import { useCartStore } from '~/entities/cart/model/cartStore'
import { formatPrice } from '~/shared/lib/utils'
import { DELIVERY_METHODS } from '~/shared/config/constants'
import type { DeliveryMethod } from '~/entities/order/model/types'

interface Props {
  deliveryMethod?: DeliveryMethod
}

const props = withDefaults(defineProps<Props>(), {
  deliveryMethod: 'standard'
})

const cartStore = useCartStore()

const deliveryCost = computed(() => {
  const method = DELIVERY_METHODS.find(m => m.value === props.deliveryMethod)
  return method?.price || 0
})

const finalTotal = computed(() => cartStore.total + deliveryCost.value)
</script>

<template>
  <UCard>
    <template #header>
      <h2 class="text-xl font-bold">Order Summary</h2>
    </template>

    <div class="space-y-4">
      <div class="flex justify-between">
        <span class="text-gray-600">Subtotal</span>
        <span class="font-semibold">{{ formatPrice(cartStore.total) }}</span>
      </div>

      <div class="flex justify-between">
        <span class="text-gray-600">Delivery</span>
        <span class="font-semibold">{{ formatPrice(deliveryCost) }}</span>
      </div>

      <UDivider />

      <div class="flex justify-between text-lg">
        <span class="font-bold">Total</span>
        <span class="font-bold text-primary">{{ formatPrice(finalTotal) }}</span>
      </div>

      <div class="text-sm text-gray-500">
        <Icon name="i-heroicons-shopping-bag" class="w-4 h-4 inline" />
        {{ cartStore.itemCount }} {{ cartStore.itemCount === 1 ? 'item' : 'items' }} in cart
      </div>
    </div>
  </UCard>
</template>
