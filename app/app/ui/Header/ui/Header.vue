<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { useCartStore } from '~/entities/cart/model/cartStore'

const route = useRoute()
const cartStore = useCartStore()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
    active: route.path === '/'
  },
  {
    label: 'Catalog',
    to: '/catalog',
    active: route.path.startsWith('/catalog')
  },
  {
    label: 'About',
    to: '/about',
    active: route.path.startsWith('/about')
  }
])
</script>

<template>
  <UHeader>
    <template #title>
      <NuxtLink to="/" class="font-bold text-xl">
        Online Shop
      </NuxtLink>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />

      <UTooltip text="Shopping Cart">
        <UButton
          to="/cart"
          color="neutral"
          variant="ghost"
          icon="i-heroicons-shopping-cart"
          aria-label="Shopping Cart"
        >
          <template v-if="cartStore.itemCount > 0" #trailing>
            <UBadge color="primary" size="xs">
              {{ cartStore.itemCount }}
            </UBadge>
          </template>
        </UButton>
      </UTooltip>
    </template>
  </UHeader>
</template>
