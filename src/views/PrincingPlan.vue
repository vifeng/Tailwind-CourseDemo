<script setup lang="ts">
import PricingCard from "../components/PricingCard.vue";
</script>
<template>
  <section class="p-8 text-center">
    <h1 class="font-poppin pb-5 text-5xl font-extrabold">
      Designed for teams like yours
    </h1>
    <p>
      Here at flowbite we focus on markets where technology, innovation, and
      capital can unlock long-term value and drive evonomic growth
    </p>
  </section>
  <div class="">
    <div class="mx-auto grid max-w-6xl gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
      <!-- my solution <div class="sm:flex gap-8 sm:flex-wrap xl:justify-center p-4"> -->
      <PricingCard
        :price="29"
        :features="[
          'Unlimited Access to All Features',
          '24/7 Customer Support',
          'Customizable Dashboard',
          'Advanced Analytics Tools',
          'Integration with Third-Party Services',
          'Secure Data Encryption',
        ]"
        name="Starter"
        description="Best option for personal use & for your next project."
      ></PricingCard>
      <PricingCard
        name="Plus"
        :features="[
          'Multi-User Collaboration Tools',
          'Real-Time Data Backup',
          'Mobile App Access',
          'Custom Branding Options',
          'Automated Reporting System',
        ]"
        :price="50"
        description="Great for small teams and anyone looking to scale"
      ></PricingCard>
      <PricingCard
        name="Enterprise"
        :features="[
          'Priority Feature Updates',
          'Extended Data Storage Capacity',
          'Personalized User Experience',
          'In-Depth Training Materials',
          'Dedicated Account Manager',
        ]"
        :price="150"
        description="Best for large scale uses and extended redistribution rights."
      ></PricingCard>
    </div>
  </div>
</template>
