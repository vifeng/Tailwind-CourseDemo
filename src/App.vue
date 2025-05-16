<script setup lang="ts">
import { useRouter } from "vue-router";
import TheMainNav from "./components/TheMainNav.vue";
import TheNav from "./components/TheNav.vue";
import { Icon } from "@iconify/vue";

const router = useRouter();
</script>
<template>
  <TheNav></TheNav>
  <div class="m-1">
    <TheMainNav class="mt-5" />
    <router-view />
  </div>
</template>
<style></style>
