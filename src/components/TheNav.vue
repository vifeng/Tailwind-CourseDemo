<script lang="ts" setup>
import AppButton from "@/components/AppButton.vue";
import { Icon } from "@iconify/vue";
import { ref } from "vue";
const toggleProfileMenu = ref(false);
const toggleUserMenu = ref(false);
const mobileMenuActive = ref(true);
</script>
<template>
  <header
    class="relative flex items-center justify-between bg-gray-800 p-2 text-white"
  >
    <button
      class="flex w-8 flex-col gap-1 rounded bg-gray-700 p-2 outline outline-white sm:hidden"
      @click="mobileMenuActive = !mobileMenuActive"
    >
      <span class="block h-[2px] w-full bg-white"></span
      ><span class="block h-[2px] w-full bg-white"></span
      ><span class="block h-[2px] w-full bg-white"></span>
    </button>
    <div class="flex items-center gap-4 p-4">
      <img class="h-8 w-8" src="/tailwind-icon.png" alt="logo" />
      <div
        class="absolute top-full left-0 flex flex-col sm:static sm:flex-row sm:gap-2"
        v-if="mobileMenuActive"
      >
        <AppButton class="w-full rounded-none sm:rounded" color="gray"
          >Dashboard</AppButton
        >
        <AppButton class="w-full rounded-none sm:rounded" color="gray"
          >Team</AppButton
        >
        <AppButton class="w-full rounded-none sm:rounded" color="gray"
          >Projects</AppButton
        >
        <AppButton class="w-full rounded-none sm:rounded" color="gray"
          >Calendar</AppButton
        >
      </div>
    </div>

    <div class="flex items-center gap-4 p-4">
      <Icon icon="mdi-light:bell" class="h-8 w-8 font-extrabold text-white" />
      <div class="relative">
        <img
          class="h-8 w-8 rounded-full p-0.5 font-extrabold text-white ring-2 ring-gray-800 ring-offset-2 ring-offset-amber-400"
          src="/woodysmile.jpeg"
          alt="avatar"
          @click="toggleProfileMenu = !toggleProfileMenu"
        />
        <ul class="absolute right-0 min-w-[200px]" v-if="toggleProfileMenu">
          <li class="flex w-full min-w-[200px] items-stretch">
            <AppButton class="w-full rounded-none" color="gray"
              >Your profil</AppButton
            >
          </li>
          <li>
            <AppButton class="w-full rounded-none" color="gray"
              >Settings</AppButton
            >
          </li>
          <li>
            <AppButton class="w-full rounded-none" color="gray"
              >Sign out</AppButton
            >
          </li>
        </ul>
      </div>
      <div class="relative">
        <button @click="toggleUserMenu = !toggleUserMenu">
          <Icon
            icon="mdi-light:account"
            class="mt-1 h-7 w-7 rounded-full ring-2 ring-white ring-offset-2 ring-offset-gray-800"
          />
        </button>

        <ul
          class="absolute top-full right-0 flex min-w-[175px] flex-col rounded bg-white text-gray-800"
          v-if="toggleUserMenu"
        >
          <li class="p-2 hover:bg-gray-100">Your Profile</li>
          <li class="p-2 hover:bg-gray-100">Settings</li>
          <li class="p-2 hover:bg-gray-100">Signout</li>
        </ul>
      </div>
    </div>
  </header>
</template>
<style scope></style>
