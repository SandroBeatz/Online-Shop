<script setup lang="ts">
</script>

<template>
  <UMain class="flex flex-col min-h-screen">
    <AppHeader/>
    <div class="flex flex-col flex-1">
      <slot/>
    </div>
    <AppFooter/>
  </UMain>
</template>

<style scoped>

</style>
