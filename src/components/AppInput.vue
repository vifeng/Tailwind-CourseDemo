<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{
  label?: string;
  modelValue?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const _modelValue = computed({
  get() {
    return props.modelValue || "";
  },
  set(value: string) {
    emit("update:modelValue", value);
  },
});
</script>
<template>
  <label class="block mb-3">
    <span
      v-if="label"
      class="after:content-['*'] after:text-red-500 block text-2xl text-gray-800"
      >{{ label }}</span
    >
    <input
      v-model="_modelValue"
      type="text"
      placeholder="your name"
      required="true"
      class="block w-full p-3 border border-gray-400 rounded-lg focus:outline-lime-600 disabled:opacity-50 invalid:border-red-600 placeholder:text-gray-500 placeholder:italic"
    />
  </label>
</template>
