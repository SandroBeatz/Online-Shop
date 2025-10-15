<script setup lang="ts">
import type { CartItem } from '../model/types'
import { formatPrice } from '~/shared/lib/utils'
import { useCartStore } from '../model/cartStore'

interface Props {
  item: CartItem
}

const props = defineProps<Props>()
const cartStore = useCartStore()

const itemTotal = computed(() => props.item.product.price * props.item.quantity)

const increaseQty = () => {
  cartStore.increaseQuantity(props.item.product.id)
}

const decreaseQty = () => {
  cartStore.decreaseQuantity(props.item.product.id)
}

const removeItem = () => {
  cartStore.removeFromCart(props.item.product.id)
}
</script>

<template>
  <div class="flex gap-4 p-4 border rounded-lg">
    <NuxtLink :to="`/catalog/${item.product.id}`" class="flex-shrink-0">
      <NuxtImg
        :src="item.product.images[0]"
        :alt="item.product.title"
        class="w-24 h-24 object-cover rounded"
      />
    </NuxtLink>

    <div class="flex-1 flex flex-col justify-between">
      <div>
        <NuxtLink :to="`/catalog/${item.product.id}`" class="hover:text-primary">
          <h3 class="font-semibold text-lg">{{ item.product.title }}</h3>
        </NuxtLink>
        <p class="text-sm text-gray-600">{{ formatPrice(item.product.price) }} each</p>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <UButton
            icon="i-heroicons-minus"
            size="sm"
            color="gray"
            variant="outline"
            @click="decreaseQty"
          />
          <span class="w-12 text-center font-medium">{{ item.quantity }}</span>
          <UButton
            icon="i-heroicons-plus"
            size="sm"
            color="gray"
            variant="outline"
            @click="increaseQty"
          />
        </div>

        <div class="text-right">
          <p class="font-bold text-lg">{{ formatPrice(itemTotal) }}</p>
        </div>
      </div>
    </div>

    <div class="flex-shrink-0">
      <UButton
        icon="i-heroicons-trash"
        size="sm"
        color="red"
        variant="ghost"
        @click="removeItem"
      />
    </div>
  </div>
</template>
