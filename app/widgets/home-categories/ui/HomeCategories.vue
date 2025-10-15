<script setup lang="ts">
import CategoryCard from "~/entities/category/ui/CategoryCard.vue";

const { data: categoriesData } = await useFetch('/api/categories')
const categories = computed(() => categoriesData.value || [])
</script>

<template>
  <section>
    <UContainer>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <CategoryCard v-for="category in categories" :key="category.id" :category="category" />
      </div>
    </UContainer>
  </section>
</template>

<style scoped>

</style>
