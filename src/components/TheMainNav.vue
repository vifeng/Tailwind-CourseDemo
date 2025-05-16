<script setup>
import { RouterLink } from "vue-router";
import { useDark, useToggle } from "@vueuse/core";
import AppButton from "@/components/AppButton.vue";
import { useRouter } from "vue-router";
const isDark = useDark();
const toggleDark = useToggle(isDark);
const router = useRouter();
</script>

<template>
  <div>
    <div class="flex items-center justify-between">
      <AppButton @click="router.push({ name: 'Home' })">Home</AppButton>
      <AppButton @click="router.back()">Back</AppButton>
      <AppButton @click="toggleDark()"> dark mode </AppButton>
    </div>

    <hr class="my-2" />
    <ul>
      <li>
        <RouterLink
          to="/"
          class="visited:text-green-500 focus:outline-purple-400"
          >Home</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/basics"
          class="visited:text-green-500 focus:outline-green-400"
          >Basics</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/flexbox"
          class="visited:text-green-500 focus:outline-green-400"
          >Flexbox</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/grid"
          class="visited:text-green-500 focus:outline-green-400"
          >Grid</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/color"
          class="visited:text-green-500 focus:outline-green-400"
          >ColorPalette</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/fonts"
          class="visited:text-green-500 focus:outline-green-400"
          >Fonts</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/prosePlugins"
          class="visited:text-green-500 focus:outline-green-400"
          >Prose Plugins</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/princingPlan"
          class="visited:text-green-500 focus:outline-green-400"
          >Pricing plan</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/shoppingCartCheckoutForm"
          class="visited:text-green-500 focus:outline-green-400"
          >My Shopping Cart Checkout Form</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/cartCheckout"
          class="visited:text-green-500 focus:outline-green-400"
          >Solution: Shopping Cart Checkout Form (transition, group, glow
          hover...)</RouterLink
        >
      </li>
    </ul>
    <hr class="my-2" />
  </div>
</template>
