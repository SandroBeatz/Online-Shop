<script setup lang="ts">
import type {ProductCardProps} from '../model/types'
import { formatPrice } from '~/shared/lib/utils'

withDefaults(defineProps<ProductCardProps>(), {
  imageUrl: '',
  title: 'Product Title',
  price: 0,
  to: '#'
})

const CardUI = {header: 'p-0 sm:px-0', body: 'px-0 sm:px-0 py-2 sm:py-3'}
</script>

<template>
  <UCard class="h-full" variant="soft" :ui="CardUI">
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
        <h3 class="font-semibold text-lg line-clamp-2">{{ title }}</h3>
      </NuxtLink>

      <div class="flex items-center justify-between">
        <span class="text-xl font-bold text-primary">{{ formatPrice(price) }}</span>
<!--        <UBadge v-if="!product.totalStock" color="red" variant="soft">Out of Stock</UBadge>-->
<!--        <UBadge v-else color="green" variant="soft">In Stock</UBadge>-->
      </div>

      <div class="flex items-center gap-2">
        <div class="flex items-center">
          <Icon name="i-heroicons-star-solid" class="w-4 h-4 text-yellow-400" />
          <span class="ml-1 text-sm text-gray-600">4</span>
        </div>
      </div>
    </div>
  </UCard>
</template>
