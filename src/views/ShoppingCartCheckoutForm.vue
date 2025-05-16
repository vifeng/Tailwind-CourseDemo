<template>
  <section
    class="relative m-30 flex rounded-2xl bg-gray-900 text-white shadow-lg shadow-neutral-700 outline-2 outline-white"
  >
    <img src="/checkout-image.jpg" class="rounded-l-2xl" />

    <section
      class="grid h-10 w-full grid-cols-6 items-center justify-between gap-2 p-10 pb-100"
    >
      <div class="col-span-4 flex flex-row justify-between">
        <div>shopping</div>
        <div>...</div>
        <div>Payment method</div>
        <div>...</div>
        <div>Confirmation</div>
      </div>
      <div class=""></div>
      <span class="text-right">
        <span class="icon-[lucide--align-left]"></span>
      </span>

      <div class="col-span-6 mt-40 h-10 text-xl font-black">CHECKOUT</div>
      <div class="col-span-6 flex h-10 flex-row gap-4">
        <span class="icon-[logos--visa] text-orange-500"></span>
        <span class="icon-[logos--mastercard]"></span>
        <span class="icon-[logos--amex]"></span>
        <span class="icon-[logos--paypal]"></span>
      </div>

      <AppInput modelValue="John Doe" class="col-span-4 h-10" />
      <AppInput modelValue="9/18" class="col-span-2 h-10" />
      <AppInput modelValue="345678876545" class="col-span-4 h-10" />
      <AppInput modelValue="532" class="col-span-2 h-10" />
      <div
        class="col-span-6 flex h-10 items-center justify-end gap-1 text-right text-gray-500"
      >
        <Icon icon="mdi:circle-outline" class="text-orange h-3 w-3" />
        <span>Add cart to wallet</span>
      </div>
    </section>

    <section
      class="absolute bottom-0 left-0 flex w-full flex-row items-center justify-between pr-30 pb-15 pl-5"
    >
      <div class="flex flex-col justify-between gap-2 text-orange-500">
        <Icon icon="mdi:circle" class="h-3 w-3 text-orange-500" />
        <Icon icon="mdi:circle-outline" class="h-3 w-3 text-black" />
        <Icon icon="mdi:circle-outline" class="h-3 w-3 text-black" />
      </div>
      <div class="flex flex-row items-center justify-center gap-2">
        <span class="text-black">Total:</span>
        <div class="mr-20 ml-5 w-fit bg-orange-400 p-2 text-center text-white">
          <div class="text-2xl font-black">$1,999.00</div>
          <div>In stock | free shipping</div>
        </div>
      </div>
      <div class="flex flex-row items-center gap-2">
        <div class="font-black">CONTINUE</div>
        <div class="h-[2px] w-[40px] bg-orange-400"></div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import AppInput from "@/components/AppInput.vue";
</script>

<style scoped>
@reference "@/assets/index.css";
.see {
  @apply border-2 border-gray-500;
}
</style>
