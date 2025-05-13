<script setup lang="ts">
import AppButton from "./AppButton.vue";
defineProps<{
  price: number;
  features: string[];
  name: string;
  description: string;
}>();
</script>
<template>
  <div
    class="m-4 flex flex-col justify-between rounded-lg border-2 border-gray-400 p-4 text-center dark:border-gray-200 dark:bg-gray-800"
  >
    <div>
      <h3 class="mb-3 text-2xl font-bold">{{ name }}</h3>
      <p class="mb-3 text-gray-500 dark:text-gray-400">
        {{ description }}
      </p>
      <div class="mb-6">
        <!-- <div class="flex justify-center items-end"> -->
        <!-- Other solution.. items-center: Month is centered vertically, text is centered horizontally -->
        <span class="mr-2 inline-block text-4xl font-bold">${{ price }}</span>
        <span class="text-gray-500 dark:text-gray-400">/month</span>
      </div>
      <!-- List -->
      <ul role="list" class="text-left">
        <li v-for="feature in features" :key="feature" class="mb-3 flex">
          <!-- the flex assure that after the check there won't be any return line when responsive -->
          <!-- Icon -->
          <svg
            class="mr-3 inline h-5 w-5 text-green-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>{{ feature }}</span>
        </li>
      </ul>
    </div>

    <AppButton class="my-4 w-full">Get started</AppButton>
  </div>
</template>
