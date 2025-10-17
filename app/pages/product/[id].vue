<script setup lang="ts">
import AddToCartButton from '~/features/add-to-cart/ui/AddToCartButton.vue'
import { formatPrice } from '~/shared/lib/utils'
import type {ProductItem, ProductItemsResponse} from "~/entities/product";
import {Navigation} from "swiper/modules";
import {ProductShowcase} from "~/widgets/product-showcase";

const route = useRoute()
const productId = Number(route.params.id)

const { data: productData } = await useFetch<ProductItem>(`/api/product-variants/${productId}`)
const product: ComputedRef<Nullable<ProductItem>> = computed(() => productData.value || null)

// // Fetch product details
// await productStore.fetchProductById(productId)
//
// const product = computed(() => productStore.currentProduct)
const quantity = ref(1)

// Get related products
// const relatedProducts = computed(() => {
//   if (!product.value) return []
//   return productStore.getRelatedProducts(product.value.id, product.value.category)
// })

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

const { data: featuredProductsData } = await useFetch<ProductItemsResponse>('/api/product-variants?category_id=5&limit=4')
const featuredProducts: ComputedRef<ProductItem[]> = computed(() => featuredProductsData.value?.variants || [])

// SEO
useHead({
  title: `${product.value?.product.title ?? ''} - Online Shop`,
  meta: [
    { name: 'description', content: product.value?.product.description ?? '' }
  ]
})
</script>

<template>
  <div class="py-8">
    <UContainer v-if="product">
      <!-- Product Details -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <Swiper
              :modules="[Navigation]"
              :slides-per-view="1"
              :space-between="10"
              :navigation="true"
              :pagination="{ clickable: true }"
              class="mb-4"
          >
            <SwiperSlide v-for="(image, index) in product.gallery" :key="index">
              <NuxtImg
                  :src="image"
                  :alt="`${product.product.title} - Image ${index + 1}`"
                  class="w-full h-96 object-cover rounded-lg"
              />
            </SwiperSlide>
          </Swiper>

          <div v-if="product.gallery.length > 1" class="grid grid-cols-4 gap-2">
            <NuxtImg
                v-for="(image, index) in product.gallery"
                :key="index"
                :src="image"
                :alt="`${product.product.title} - Thumbnail ${index + 1}`"
                class="w-full h-20 object-cover rounded cursor-pointer hover:opacity-75"
            />
          </div>
        </div>

        <div class="space-y-6">
          <div>
            <UBadge color="gray" variant="soft" class="mb-2">
              {{ product.product.category_id }}
            </UBadge>
            <h1 class="text-4xl font-bold mb-4">{{ product.product.title }}</h1>

            <div class="flex items-center gap-4 mb-4">
              <div class="flex items-center">
                <Icon name="i-heroicons-star-solid" class="w-5 h-5 text-yellow-400" />
                <span class="ml-1 text-lg font-semibold">4</span>
              </div>
<!--              <UBadge v-if="product.inStock" color="green" variant="soft">In Stock</UBadge>-->
<!--              <UBadge v-else color="red" variant="soft">Out of Stock</UBadge>-->
            </div>

            <div class="text-4xl font-bold text-primary mb-6">
              {{ formatPrice(product.price) }}
            </div>
          </div>

          <UDivider />

          <div>
            <h2 class="text-xl font-semibold mb-3">Description</h2>
            <p class="text-gray-600 leading-relaxed">{{ product.product.description }}</p>
          </div>

          <UDivider />

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

          <div class="pt-4">
            <AddToCartButton :product="product" :quantity="quantity" block />
          </div>

          <UCard class="bg-gray-50">
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-600">Category:</span>
                <span class="font-semibold">{{ product.product.category_id }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Product ID:</span>
                <span class="font-semibold">#{{ product.id }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Availability:</span>
<!--                <span :class="product.inStock ? 'text-green-600' : 'text-red-600'" class="font-semibold">-->
<!--                  {{ product.inStock ? 'In Stock' : 'Out of Stock' }}-->
<!--                </span>-->
              </div>
            </div>
          </UCard>
        </div>
      </div>


      <!-- Related Products -->
      <ProductShowcase
          class="mb-16"
          title="Related Products"
          view-all-path="/catalog"
          placeholder="No featured products available"
          :products="featuredProducts"
      />
    </UContainer>
  </div>
</template>
