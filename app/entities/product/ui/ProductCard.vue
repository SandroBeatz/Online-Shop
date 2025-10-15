<script setup lang="ts">
import type { Product } from '../model/types'
import { formatPrice } from '~/shared/lib/utils'

interface Props {
  product: Product
}

const props = defineProps<Props>()
</script>

<template>
  <UCard class="h-full hover:shadow-lg transition-shadow">
    <template #header>
      <NuxtLink :to="`/catalog/${product.id}`" class="block">
        <NuxtImg
          :src="product.images[0]"
          :alt="product.title"
          class="w-full h-48 object-cover rounded-t-lg"
          loading="lazy"
        />
      </NuxtLink>
    </template>

    <div class="space-y-2">
      <NuxtLink :to="`/catalog/${product.id}`" class="hover:text-primary">
        <h3 class="font-semibold text-lg line-clamp-2">{{ product.title }}</h3>
      </NuxtLink>

      <div class="flex items-center gap-2">
        <div class="flex items-center">
          <Icon name="i-heroicons-star-solid" class="w-4 h-4 text-yellow-400" />
          <span class="ml-1 text-sm text-gray-600">{{ product.rating }}</span>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <span class="text-xl font-bold text-primary">{{ formatPrice(product.price) }}</span>
        <UBadge v-if="!product.inStock" color="red" variant="soft">Out of Stock</UBadge>
        <UBadge v-else color="green" variant="soft">In Stock</UBadge>
      </div>
    </div>

    <template #footer>
      <UButton
        :to="`/catalog/${product.id}`"
        block
        size="md"
        color="primary"
      >
        View Details
      </UButton>
    </template>
  </UCard>
</template>
