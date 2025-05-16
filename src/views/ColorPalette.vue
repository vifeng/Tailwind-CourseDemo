<script setup lang="ts">
const colors = [
  "slate",
  "avocado", // bg-avocado-50 bg-avocado-100 bg-avocado-200 bg-avocado-300 bg-avocado-400 bg-avocado-500 bg-avocado-600 bg-avocado-700 bg-avocado-800 bg-avocado-900 bg-avocado-950
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
  "gray",
  "neutral",
  "stone",
];
</script>
<template>
  <h1>This color palette don't work in tailwind 4</h1>
  <div class="mb-3 flex items-stretch gap-3">
    <div class="bg-primary grow p-5 text-white">Primary</div>
    <div class="bg-secondary grow p-5 text-white">Secondary</div>
    <div class="bg-accent grow p-5 text-white">Accent</div>
  </div>
  <section class="m-1 mb-3 flex gap-3">
    <div
      class="flex aspect-square w-[10%] items-center justify-center border-2 border-gray-300 bg-gray-100 p-1 text-lg font-bold text-black"
    >
      colors
    </div>
    <div
      v-for="i in 9"
      :key="i"
      class="flex aspect-square w-[10%] items-center justify-center border-2 border-gray-300 bg-gray-100 p-1 text-lg font-bold text-black"
    >
      {{ i * 100 }}
    </div>
    <div
      class="flex aspect-square w-[10%] items-center justify-center border-2 border-gray-300 bg-gray-100 p-1 text-lg font-bold text-black"
    >
      950
    </div>
  </section>
  <div v-for="color in colors" :key="color" class="mb-3 flex gap-3">
    <div
      class="flex aspect-square w-[10%] items-center justify-center p-1 text-lg text-black"
      :class="`bg-${color}-50`"
    >
      {{ color }}
    </div>
    <div
      v-for="i in 9"
      :class="`bg-${color}-${i * 100}`"
      class="aspect-square w-[10%]"
      :key="i"
    ></div>
    <div class="aspect-square w-[10%]" :class="`bg-${color}-950`"></div>
  </div>
</template>
