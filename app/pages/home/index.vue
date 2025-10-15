<script setup lang="ts">
import { useProductStore } from '~/entities/product/model/productStore'
import ProductCard from '~/entities/product/ui/ProductCard.vue'
import CategoryCard from '~/entities/category/ui/CategoryCard.vue'
import HomeBanner from "~/widgets/home-banner/ui/HomeBanner.vue";

const productStore = useProductStore()

// Fetch products on mount
const { data: categoriesData } = await useFetch('/api/categories')
await productStore.fetchProducts({ limit: 15 })

const categories = computed(() => categoriesData.value || [])
const featuredProducts = computed(() => productStore.featuredProducts)
const newArrivals = computed(() => productStore.newArrivals)


// SEO
useHead({
  title: 'Online Shop - Your One-Stop Shopping Destination',
  meta: [
    { name: 'description', content: 'Discover amazing products across electronics, clothing, home & garden, and sports. Quality products at great prices with fast delivery.' }
  ]
})
</script>

<template>
  <div>
    <!-- Hero Banner with Swiper -->
    <section class="mb-12">
      <HomeBanner/>
    </section>

    <UContainer>
      <!-- Categories Section -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8">Shop by Category</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <CategoryCard v-for="category in categories" :key="category.id" :category="category" />
        </div>
      </section>

      <!-- Featured Products Section -->
      <section class="mb-16">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-3xl font-bold">Featured Products</h2>
          <UButton to="/catalog" variant="ghost" trailing-icon="i-heroicons-arrow-right">
            View All
          </UButton>
        </div>
        <div v-if="featuredProducts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard v-for="product in featuredProducts" :key="product.id" :product="product" />
        </div>
        <div v-else class="text-center py-12 text-gray-500">
          No featured products available
        </div>
      </section>

      <!-- New Arrivals Section -->
      <section class="mb-16">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-3xl font-bold">New Arrivals</h2>
          <UButton to="/catalog?sort=newest" variant="ghost" trailing-icon="i-heroicons-arrow-right">
            View All
          </UButton>
        </div>
        <div v-if="newArrivals.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard v-for="product in newArrivals" :key="product.id" :product="product" />
        </div>
        <div v-else class="text-center py-12 text-gray-500">
          No new products available
        </div>
      </section>
    </UContainer>
  </div>
</template>
