<script setup lang="ts">
// import {useProductStore} from '~/entities/product/model/productStore'
import {HomeBanner} from "~/widgets/home-banner";
import {HomeCategories} from "~/widgets/home-categories";
import {ProductShowcase} from "~/widgets/product-showcase";

// const productStore = useProductStore()
//
// // Fetch products on mount
//
// await productStore.fetchProducts({limit: 15})
//
//
// const featuredProducts = computed(() => productStore.featuredProducts)
// const newArrivals = computed(() => productStore.newArrivals)


const { data: featuredProductsData } = await useFetch('/api/product-variants?category_id=6&limit=4')
const featuredProducts = computed(() => featuredProductsData.value?.variants || [])

// SEO
useHead({
  title: 'Online Shop - Your One-Stop Shopping Destination',
  meta: [
    {
      name: 'description',
      content: 'Discover amazing products across electronics, clothing, home & garden, and sports. Quality products at great prices with fast delivery.'
    }
  ]
})
</script>

<template>
  <div class="py-6">
    <!-- Hero Banner with Swiper -->
    <HomeBanner class="mb-12"/>
    <!-- Categories Section -->
    <HomeCategories class="mb-12"/>
<!--    <pre>{{featuredProducts}}</pre>-->
    <!-- Featured Products Section -->
    <ProductShowcase
        class="mb-16"
        title="Featured Products"
        view-all-path="/catalog"
        placeholder="No featured products available"
        :products="featuredProducts"
    />
<!--    &lt;!&ndash; New Arrivals Section &ndash;&gt;-->
<!--    <ProductShowcase-->
<!--        class="mb-16"-->
<!--        title="New Arrivals"-->
<!--        view-all-path="/catalog?sort=newest"-->
<!--        placeholder="No new products available"-->
<!--        :products="newArrivals"-->
<!--    />-->
  </div>
</template>
