<script setup lang="ts">
import { useProductStore } from '~/entities/product/model/productStore'
import AddToCartButton from '~/features/add-to-cart/ui/AddToCartButton.vue'
import ProductCard from '~/entities/product/ui/ProductCard.vue'
import { formatPrice } from '~/shared/lib/utils'

const route = useRoute()
const productStore = useProductStore()

const productId = Number(route.params.id)

// Fetch product details
await productStore.fetchProductById(productId)

const product = computed(() => productStore.currentProduct)
const quantity = ref(1)

// Get related products
const relatedProducts = computed(() => {
  if (!product.value) return []
  return productStore.getRelatedProducts(product.value.id, product.value.category)
})

const increaseQty = () => {
  quantity.value++
}

const decreaseQty = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

// Error handling
if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found'
  })
}

// SEO
useHead({
  title: `${product.value.title} - Online Shop`,
  meta: [
    { name: 'description', content: product.value.description }
  ]
})
</script>

<template>
  <UContainer v-if="product" class="py-8">
    <!-- Product Details -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
      <!-- Image Gallery -->
      <div>
        <Swiper
          :modules="[SwiperNavigation, SwiperPagination, SwiperThumbs]"
          :slides-per-view="1"
          :space-between="10"
          :navigation="true"
          :pagination="{ clickable: true }"
          class="mb-4"
        >
          <SwiperSlide v-for="(image, index) in product.images" :key="index">
            <NuxtImg
              :src="image"
              :alt="`${product.title} - Image ${index + 1}`"
              class="w-full h-96 object-cover rounded-lg"
            />
          </SwiperSlide>
        </Swiper>

        <!-- Thumbnail Gallery -->
        <div v-if="product.images.length > 1" class="grid grid-cols-4 gap-2">
          <NuxtImg
            v-for="(image, index) in product.images"
            :key="index"
            :src="image"
            :alt="`${product.title} - Thumbnail ${index + 1}`"
            class="w-full h-20 object-cover rounded cursor-pointer hover:opacity-75"
          />
        </div>
      </div>

      <!-- Product Info -->
      <div class="space-y-6">
        <div>
          <UBadge color="gray" variant="soft" class="mb-2">
            {{ product.category }}
          </UBadge>
          <h1 class="text-4xl font-bold mb-4">{{ product.title }}</h1>

          <div class="flex items-center gap-4 mb-4">
            <div class="flex items-center">
              <Icon name="i-heroicons-star-solid" class="w-5 h-5 text-yellow-400" />
              <span class="ml-1 text-lg font-semibold">{{ product.rating }}</span>
            </div>
            <UBadge v-if="product.inStock" color="green" variant="soft">In Stock</UBadge>
            <UBadge v-else color="red" variant="soft">Out of Stock</UBadge>
          </div>

          <div class="text-4xl font-bold text-primary mb-6">
            {{ formatPrice(product.price) }}
          </div>
        </div>

        <UDivider />

        <div>
          <h2 class="text-xl font-semibold mb-3">Description</h2>
          <p class="text-gray-600 leading-relaxed">{{ product.description }}</p>
        </div>

        <UDivider />

        <!-- Quantity Selector -->
        <div>
          <h3 class="text-lg font-semibold mb-3">Quantity</h3>
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-2">
              <UButton
                icon="i-heroicons-minus"
                size="lg"
                color="gray"
                variant="outline"
                @click="decreaseQty"
                :disabled="quantity <= 1"
              />
              <span class="w-16 text-center text-xl font-semibold">{{ quantity }}</span>
              <UButton
                icon="i-heroicons-plus"
                size="lg"
                color="gray"
                variant="outline"
                @click="increaseQty"
              />
            </div>
          </div>
        </div>

        <!-- Add to Cart Button -->
        <div class="pt-4">
          <AddToCartButton :product="product" :quantity="quantity" block />
        </div>

        <!-- Product Meta -->
        <UCard class="bg-gray-50">
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span class="text-gray-600">Category:</span>
              <span class="font-semibold">{{ product.category }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Product ID:</span>
              <span class="font-semibold">#{{ product.id }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Availability:</span>
              <span :class="product.inStock ? 'text-green-600' : 'text-red-600'" class="font-semibold">
                {{ product.inStock ? 'In Stock' : 'Out of Stock' }}
              </span>
            </div>
          </div>
        </UCard>
      </div>
    </div>

    <!-- Related Products -->
    <div v-if="relatedProducts.length > 0" class="mt-16">
      <h2 class="text-3xl font-bold mb-8">Related Products</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard v-for="relatedProduct in relatedProducts" :key="relatedProduct.id" :product="relatedProduct" />
      </div>
    </div>
  </UContainer>
</template>
