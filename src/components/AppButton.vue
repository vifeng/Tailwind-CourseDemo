<template>
  <button
    :class="`rounded p-3 text-white transition-colors duration-500 bg-${props.color}-600 hover:bg-${props.color}-900`"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ color?: string }>(), {
  color: "blue",
});
</script>
