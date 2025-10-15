<script setup lang="ts">
import type { OrderCustomer, DeliveryMethod, PaymentMethod } from '~/entities/order/model/types'
import { DELIVERY_METHODS, PAYMENT_METHODS } from '~/shared/config/constants'

const customer = defineModel<OrderCustomer>('customer', {
  default: {
    name: '',
    email: '',
    phone: '',
    address: ''
  }
})

const deliveryMethod = defineModel<DeliveryMethod>('deliveryMethod', { default: 'standard' })
const paymentMethod = defineModel<PaymentMethod>('paymentMethod', { default: 'cash' })

const deliveryOptions = DELIVERY_METHODS.map(method => ({
  value: method.value,
  label: `${method.label} - $${method.price.toFixed(2)}`
}))

const paymentOptions = PAYMENT_METHODS.map(method => ({
  value: method.value,
  label: method.label
}))
</script>

<template>
  <div class="space-y-8">
    <!-- Customer Information -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Customer Information</h2>

      <UFormGroup label="Full Name" required>
        <UInput v-model="customer.name" placeholder="John Doe" />
      </UFormGroup>

      <UFormGroup label="Email" required>
        <UInput v-model="customer.email" type="email" placeholder="john@example.com" />
      </UFormGroup>

      <UFormGroup label="Phone" required>
        <UInput v-model="customer.phone" type="tel" placeholder="+1 (555) 123-4567" />
      </UFormGroup>

      <UFormGroup label="Shipping Address" required>
        <UTextarea v-model="customer.address" placeholder="123 Main St, City, State, ZIP" :rows="3" />
      </UFormGroup>
    </div>

    <!-- Delivery Method -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Delivery Method</h2>
      <URadioGroup
        v-model="deliveryMethod"
        :options="deliveryOptions"
      />
    </div>

    <!-- Payment Method -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Payment Method</h2>
      <URadioGroup
        v-model="paymentMethod"
        :options="paymentOptions"
      />
    </div>
  </div>
</template>
