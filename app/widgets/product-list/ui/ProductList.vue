<script setup lang="ts">
import type { Product } from '~/entities/product/model/types'
import ProductCard from '~/entities/product/ui/ProductCard.vue'

interface Props {
  products: Product[]
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  loading: false
})
</script>

<template>
  <div>
    <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <USkeleton v-for="i in 8" :key="i" class="h-96" />
    </div>

    <div v-else-if="products.length === 0" class="text-center py-12">
      <Icon name="i-heroicons-inbox" class="w-16 h-16 mx-auto text-gray-400 mb-4" />
      <h3 class="text-xl font-semibold text-gray-600">No products found</h3>
      <p class="text-gray-500 mt-2">Try adjusting your filters or search query</p>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>
