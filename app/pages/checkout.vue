<script setup lang="ts">
import { useCartStore } from '~/entities/cart/model/cartStore'
import CheckoutForm from '~/features/checkout-form/ui/CheckoutForm.vue'
import CartSummary from '~/widgets/cart-summary/ui/CartSummary.vue'
import type { OrderCustomer, DeliveryMethod, PaymentMethod } from '~/entities/order/model/types'

const cartStore = useCartStore()
const router = useRouter()
const toast = useToast()

// Redirect if cart is empty
if (cartStore.isEmpty) {
  await navigateTo('/cart')
}

// Form state
const customer = ref<OrderCustomer>({
  name: '',
  email: '',
  phone: '',
  address: ''
})

const deliveryMethod = ref<DeliveryMethod>('standard')
const paymentMethod = ref<PaymentMethod>('cash')

const isSubmitting = ref(false)

// Validation
const isFormValid = computed(() => {
  return (
    customer.value.name.trim() !== '' &&
    customer.value.email.trim() !== '' &&
    customer.value.phone.trim() !== '' &&
    customer.value.address.trim() !== ''
  )
})

// Place order
const placeOrder = async () => {
  if (!isFormValid.value) {
    toast.add({
      title: 'Validation Error',
      description: 'Please fill in all required fields',
      color: 'red',
      icon: 'i-heroicons-x-circle'
    })
    return
  }

  isSubmitting.value = true

  try {
    const orderData = {
      customer: customer.value,
      items: cartStore.items,
      deliveryMethod: deliveryMethod.value,
      paymentMethod: paymentMethod.value,
      total: cartStore.total
    }

    const { data, error } = await useFetch('/api/orders', {
      method: 'POST',
      body: orderData
    })

    if (error.value) {
      throw new Error(error.value.message)
    }

    if (data.value?.success) {
      toast.add({
        title: 'Order Placed Successfully!',
        description: `Your order #${data.value.orderId} has been placed`,
        color: 'green',
        icon: 'i-heroicons-check-circle'
      })

      // Clear cart
      cartStore.clearCart()

      // Redirect to home
      setTimeout(() => {
        router.push('/')
      }, 2000)
    }
  } catch (err) {
    toast.add({
      title: 'Order Failed',
      description: err instanceof Error ? err.message : 'Failed to place order',
      color: 'red',
      icon: 'i-heroicons-x-circle'
    })
  } finally {
    isSubmitting.value = false
  }
}

// SEO
useHead({
  title: 'Checkout - Online Shop',
  meta: [
    { name: 'description', content: 'Complete your purchase' }
  ]
})
</script>

<template>
  <UContainer class="py-8">
    <h1 class="text-4xl font-bold mb-8">Checkout</h1>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Checkout Form -->
      <div class="lg:col-span-2">
        <UCard>
          <CheckoutForm
            v-model:customer="customer"
            v-model:delivery-method="deliveryMethod"
            v-model:payment-method="paymentMethod"
          />
        </UCard>
      </div>

      <!-- Order Summary -->
      <div class="lg:col-span-1">
        <div class="sticky top-4 space-y-4">
          <CartSummary :delivery-method="deliveryMethod" />

          <UButton
            block
            size="xl"
            color="primary"
            icon="i-heroicons-check-circle"
            :loading="isSubmitting"
            :disabled="!isFormValid || isSubmitting"
            @click="placeOrder"
          >
            {{ isSubmitting ? 'Placing Order...' : 'Place Order' }}
          </UButton>

          <UButton
            to="/cart"
            block
            size="lg"
            color="gray"
            variant="outline"
            icon="i-heroicons-arrow-left"
          >
            Back to Cart
          </UButton>

          <!-- Security Notice -->
          <UCard class="bg-blue-50">
            <div class="flex items-start gap-3">
              <Icon name="i-heroicons-lock-closed" class="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
              <div class="text-sm text-blue-900">
                <p class="font-semibold mb-1">Secure Checkout</p>
                <p class="text-blue-700">Your information is protected and encrypted</p>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </div>
  </UContainer>
</template>
