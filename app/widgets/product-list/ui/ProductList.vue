<script setup lang="ts">
import {ProductCard, type ProductItem} from "~/entities/product";

interface Props {
  products: ProductItem[]
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  loading: false
})

const productsUI = computed(() => props.products.map(i => ({
  title: i.product.title,
  price: i.price,
  imageUrl: i.gallery[0] || '',
  to: `/product/${i.id}`
})))
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

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProductCard v-for="product in productsUI" :key="product.to" v-bind="product" />
    </div>
  </div>
</template>
