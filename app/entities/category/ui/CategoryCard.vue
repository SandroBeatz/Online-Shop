<script setup lang="ts">
import type { Category } from '../model/types'

interface Props {
  category: Category
}

const props = defineProps<Props>()

const categoryIcon: Record<Category['slug'], string> = {
  'outerwear': 'i-lucide-shirt',
  'sports': 'i-lucide-dumbbell',
  'accessories': 'i-lucide-hat-glasses',
  'shoes': 'i-lucide-footprints',
}
</script>

<template>
  <NuxtLink :to="`/catalog?category=${category.slug}`">
    <UCard class="hover:shadow-lg transition-shadow cursor-pointer">
      <div class="flex items-center gap-4">
        <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon :name="categoryIcon[category.slug] ?? 'i-heroicons-book-open'" class="w-8 h-8 text-primary" />
        </div>
        <h3 class="font-semibold text-lg">{{ category.name }}</h3>
      </div>
    </UCard>
  </NuxtLink>
</template>
