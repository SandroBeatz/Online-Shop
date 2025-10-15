<script setup lang="ts">
import { useProductStore } from '~/entities/product/model/productStore'
import ProductFilters from '~/features/product-filters/ui/ProductFilters.vue'
import SearchBar from '~/features/search-products/ui/SearchBar.vue'
import { SORT_OPTIONS, PRICE_RANGES } from '~/shared/config/constants'
import {ProductList} from "~/widgets/product-list";

const productStore = useProductStore()
const route = useRoute()
const router = useRouter()

// Fetch categories for filters
const { data: categoriesData } = await useFetch('/api/categories')
const categories = computed(() => categoriesData.value || [])

// Filters and search state
const searchQuery = ref((route.query.search as string) || '')
const filters = ref({
  category: (route.query.category as string) || 'all',
  priceRange: 0
})
const sortOption = ref((route.query.sort as string) || 'newest')
const currentPage = ref(Number(route.query.page) || 1)

// Watch for query changes
watch(() => route.query, (newQuery) => {
  searchQuery.value = (newQuery.search as string) || ''
  filters.value.category = (newQuery.category as string) || 'all'
  sortOption.value = (newQuery.sort as string) || 'newest'
  currentPage.value = Number(newQuery.page) || 1
  fetchProducts()
}, { deep: true })

// Fetch products based on current filters
const fetchProducts = async () => {
  const priceRange = PRICE_RANGES[filters.value.priceRange]

  await productStore.fetchProducts({
    filters: {
      category: filters.value.category === 'all' ? undefined : filters.value.category,
      search: searchQuery.value || undefined,
      minPrice: priceRange.min || undefined,
      maxPrice: priceRange.max === Infinity ? undefined : priceRange.max
    },
    sort: sortOption.value as any,
    page: currentPage.value,
    limit: 10
  })
}

// Update URL query params
const updateQuery = () => {
  router.push({
    query: {
      ...(searchQuery.value && { search: searchQuery.value }),
      ...(filters.value.category !== 'all' && { category: filters.value.category }),
      ...(sortOption.value !== 'newest' && { sort: sortOption.value }),
      ...(currentPage.value > 1 && { page: currentPage.value.toString() })
    }
  })
}

// Watch filters and trigger query update
watch([filters, sortOption, searchQuery], () => {
  currentPage.value = 1
  updateQuery()
}, { deep: true })

// Pagination
const goToPage = (page: number) => {
  currentPage.value = page
  updateQuery()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Initial fetch
await fetchProducts()

// SEO
useHead({
  title: 'Catalog - Browse Our Products',
  meta: [
    { name: 'description', content: 'Browse our wide selection of products. Filter by category, price, and more.' }
  ]
})
</script>

<template>
  <UContainer class="py-8">
    <!-- Page Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold mb-4">Product Catalog</h1>
      <p class="text-gray-600">Browse our collection of quality products</p>
    </div>

    <!-- Search Bar -->
    <div class="mb-8">
      <SearchBar v-model:search-query="searchQuery" />
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <!-- Filters Sidebar -->
      <aside class="lg:col-span-1">
        <UCard>
          <template #header>
            <h2 class="text-xl font-bold">Filters</h2>
          </template>
          <ProductFilters v-model:filters="filters" :categories="categories" />
        </UCard>
      </aside>

      <!-- Products Grid -->
      <main class="lg:col-span-3 space-y-6">
        <!-- Sort and Results Count -->
        <div class="flex items-center justify-between">
          <p class="text-gray-600">
            {{ productStore.total }} product{{ productStore.total !== 1 ? 's' : '' }} found
          </p>
          <USelect
            v-model="sortOption"
            :options="SORT_OPTIONS"
            size="md"
            class="w-48"
          />
        </div>

        <!-- Products List -->
        <ProductList :products="productStore.products" :loading="productStore.loading" />

        <!-- Pagination -->
        <div v-if="productStore.totalPages > 1" class="flex justify-center mt-8">
          <UPagination
            v-model="currentPage"
            :total="productStore.total"
            :page-count="10"
            @update:model-value="goToPage"
          />
        </div>
      </main>
    </div>
  </UContainer>
</template>
