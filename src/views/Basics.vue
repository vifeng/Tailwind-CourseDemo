<script setup>
import AppCard from "@/components/AppCard.vue";
import AppInput from "@/components/AppInput.vue";
import AppButton from "@/components/AppButton.vue";
</script>
<template>
  <div class="m-10">
    autre
    <AppCard />
    <form action="">
      <label> </label>
      <AppInput label="Username" />
      <AppButton>Submit</AppButton>
    </form>

    <p class="first-letter:text-4xl selection:bg-blue-700 selection:text-white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
      nesciunt nam. Incidunt, mollitia soluta. Ex, ducimus iure! Obcaecati alias
      voluptate ab odio deserunt delectus labore cumque. Eveniet quibusdam ipsum
      asperiores!
    </p>

    List
    <!-- <ul class="list-bullet"> -->
    <ul class="list-disc list-inside marker:text-green-500 marker:text-2xl">
      <li><router-link to="Flexbox">flexbox</router-link></li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>
</template>

<style lang="postcss" scoped>
/* 
not working


.list-bullet li {
  @apply relative pl-6; 
}

.list-bullet li::before {
  content: "•"; 
  @apply absolute left-0 text-green-500 text-2xl; 
} 
*/
</style>
