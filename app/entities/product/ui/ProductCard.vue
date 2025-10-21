<script setup lang="ts">
import type {ProductCardProps} from '../model/types'
import { formatPrice } from '~/shared/lib/utils'

withDefaults(defineProps<ProductCardProps>(), {
  imageUrl: '',
  title: 'Product Title',
  price: 0,
  to: '#'
})

// Локальные стили для ProductCard - переопределяют глобальные из app.config.ts
const CardUI = {
  root: 'bg-transparent rounded-none divide-none',
  header: 'p-0 sm:px-0',  // Убираем padding для header (для изображения)
  body: 'px-0 sm:px-0 py-2 sm:py-3'  // Минимальный padding для body
}
</script>

<template>
  <UCard class="h-full " variant="soft" :ui="CardUI">
    <template #header>
      <NuxtLink :to="to" class="block">
        <NuxtImg
          :src="imageUrl"
          :alt="title"
          class="w-full aspect-4/5 object-cover"
          loading="lazy"
        />
      </NuxtLink>
    </template>

    <div class="space-y-2">
      <NuxtLink :to="to" class="hover:text-primary">
        <h3>{{ title }}</h3>
      </NuxtLink>

      <div class="flex justify-between items-center">
        <div class="flex items-center justify-between">
          <span class="text-lg font-bold text-primary">{{ formatPrice(price) }}</span>
        </div>

        <div class="flex items-center gap-2">
          <div class="flex items-center">
            <Icon name="i-heroicons-star-solid" class="w-4 h-4 text-yellow-400" />
            <span class="ml-1 text-sm text-gray-600">4</span>
          </div>
        </div>
      </div>
    </div>
  </UCard>
</template>
