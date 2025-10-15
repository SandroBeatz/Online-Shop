<script setup lang="ts">
import type { Category } from '~/entities/category/model/types'
import { PRICE_RANGES } from '~/shared/config/constants'

interface Props {
  categories: Category[]
}

const props = defineProps<Props>()

interface Filters {
  category: string
  priceRange: number
}

const filters = defineModel<Filters>('filters', { default: { category: 'all', priceRange: 0 } })

const categoryOptions = computed(() => [
  { value: 'all', label: 'All Categories' },
  ...props.categories.map(cat => ({ value: cat.slug, label: cat.name }))
])

const priceRangeOptions = computed(() =>
  PRICE_RANGES.map((range, index) => ({ value: index, label: range.label }))
)
</script>

<template>
  <div class="space-y-6">
    <div>
      <h3 class="font-semibold text-lg mb-3">Category</h3>
      <URadioGroup
        v-model="filters.category"
        :options="categoryOptions"
      />
    </div>

    <div>
      <h3 class="font-semibold text-lg mb-3">Price Range</h3>
      <URadioGroup
        v-model="filters.priceRange"
        :options="priceRangeOptions"
      />
    </div>
  </div>
</template>
