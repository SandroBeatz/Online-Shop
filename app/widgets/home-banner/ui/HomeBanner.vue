<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Hero slides data
const heroSlides = [
  {
    title: 'Welcome to Our Store',
    subtitle: 'Discover amazing products at great prices',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200',
    cta: 'Shop Now',
    link: '/catalog'
  },
  {
    title: 'New Arrivals',
    subtitle: 'Check out our latest collection',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200',
    cta: 'Explore',
    link: '/catalog?sort=newest'
  },
  {
    title: 'Special Offers',
    subtitle: 'Up to 50% off on selected items',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200',
    cta: 'View Deals',
    link: '/catalog'
  }
]
</script>

<template>
  <section>
    <UContainer>
      <Swiper
          :modules="[Autoplay, Pagination, Navigation]"
          :slides-per-view="1"
          loop
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          :pagination="{ clickable: true }"
          navigation
          class="h-[400px] md:h-[500px] rounded-3xl"
      >
        <SwiperSlide v-for="(slide, index) in heroSlides" :key="index">
          <div class="relative h-full">
            <NuxtImg
                :src="slide.image"
                :alt="slide.title"
                class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div class="text-center text-white px-4">
                <h1 class="text-4xl md:text-6xl font-bold mb-4">{{ slide.title }}</h1>
                <p class="text-xl md:text-2xl mb-8">{{ slide.subtitle }}</p>
                <UButton :to="slide.link" size="xl" color="primary">
                  {{ slide.cta }}
                </UButton>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </UContainer>
  </section>
</template>

<style scoped>

</style>
