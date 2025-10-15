<script setup lang="ts">
const searchQuery = defineModel<string>('searchQuery', { default: '' })

const handleSearch = () => {
  // The parent component will handle the actual search
}
</script>

<template>
  <UInput
    v-model="searchQuery"
    placeholder="Search products..."
    icon="i-heroicons-magnifying-glass"
    size="lg"
    @keyup.enter="handleSearch"
  />
</template>
