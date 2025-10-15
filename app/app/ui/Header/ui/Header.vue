<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Catalog',
    to: '/catalog',
    active: route.path.startsWith('/catalog')
  },
  {
    label: 'About',as
    to: '/about',
    active: route.path.startsWith('/about')
  }
])
</script>

<template>
  <UHeader>
    <template #title>
      <span>Logo</span>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
            color="neutral"
            variant="ghost"
            icon="i-lucide-user"
            aria-label="User Account"
        />
      </UTooltip>
      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
            color="neutral"
            variant="ghost"
            icon="i-lucide-handbag"
            aria-label="Shopping Cart"
        />
      </UTooltip>
    </template>
  </UHeader>
</template>
