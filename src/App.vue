<script setup lang="ts">
import { useRouter } from "vue-router";
import TheMainNav from "./components/TheMainNav.vue";

const router = useRouter();
</script>
<template>
  <div class="m-1">
    <TheMainNav class="mt-5" />
    <router-view />
  </div>
</template>

<style></style>
