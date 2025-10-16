<script setup lang="ts">
import {type ProductItem, ProductCard} from "~/entities/product";

interface Props {
  title?: string
  placeholder?: string
  products: ProductItem[]
  viewAllPath?: string
}
defineProps<Props>()
</script>

<template>
  <section>
    <UContainer>
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-3xl font-bold">{{title}}</h2>
        <UButton v-if="viewAllPath" :to="viewAllPath" variant="ghost" trailing-icon="i-heroicons-arrow-right">
          View All
        </UButton>
      </div>
      <div v-if="products.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
      <div v-else class="text-center py-12 text-gray-500">
        {{placeholder}}
      </div>
    </UContainer>
  </section>
</template>

<style scoped>

</style>
