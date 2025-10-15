<script setup lang="ts">
import type { Category } from '../model/types'

interface Props {
  category: Category
}

const props = defineProps<Props>()
</script>

<template>
  <NuxtLink :to="`/catalog?category=${category.slug}`">
    <UCard class="hover:shadow-lg transition-shadow cursor-pointer">
      <div class="text-center p-6">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon name="i-heroicons-squares-2x2" class="w-8 h-8 text-primary" />
        </div>
        <h3 class="font-semibold text-lg mb-2">{{ category.name }}</h3>
        <p v-if="category.description" class="text-sm text-gray-600">
          {{ category.description }}
        </p>
      </div>
    </UCard>
  </NuxtLink>
</template>
