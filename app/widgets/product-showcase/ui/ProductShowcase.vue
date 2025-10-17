<script setup lang="ts">
import {type ProductItem, ProductCard, type ProductCardProps} from "~/entities/product";

interface Props {
  title?: string
  placeholder?: string
  products: ProductItem[]
  viewAllPath?: string
}
const props = defineProps<Props>()

const productsUI: ComputedRef<ProductCardProps[]> = computed(() =>
  props.products.map(product => ({
    title: product.product.title,
    price: product.price,
    imageUrl: product.gallery[0] || '',
    to: `/product/${product.id}`
  }))
)
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
        <ProductCard v-for="product in productsUI" :key="product.to" v-bind="product" />
      </div>
      <div v-else class="text-center py-12 text-gray-500">
        {{placeholder}}
      </div>
    </UContainer>
  </section>
</template>

<style scoped>

</style>
