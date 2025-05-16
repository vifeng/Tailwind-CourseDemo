<script setup lang="ts">
import CartCheckoutColumnLeft from "../components/CartCheckoutColumnLeft.vue";
import CartCheckoutColumnRight from "../components/CartCheckoutColumnRight.vue";
import CartCheckoutShadow from "../components/CartCheckoutShadow.vue";
</script>
<template>
  <div class="m-auto my-10 max-w-4xl">
    <div class="relative">
      <div
        class="relative z-10 grid grid-cols-9 overflow-hidden rounded-2xl border-2 border-white bg-[#323239]"
      >
        <CartCheckoutColumnLeft />
        <CartCheckoutColumnRight />
      </div>
      <CartCheckoutShadow />
    </div>
  </div>
</template>
