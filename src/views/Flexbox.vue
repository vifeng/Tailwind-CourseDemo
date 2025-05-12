<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  const tocList = document.getElementById(
    "toc-list"
  ) as HTMLUListElement | null;
  if (!tocList) return;

  const headers = document.querySelectorAll<HTMLHeadingElement>("h2");

  headers.forEach((header) => {
    let id = header.id;

    if (!id) {
      id =
        header.textContent
          ?.toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w\-]+/g, "") ?? "";
      header.id = id;
    }

    if (!id) return;

    const link = document.createElement("a");
    link.href = `#${id}`;
    link.textContent = header.textContent ?? "";
    link.className = "text-blue-600 hover:underline";

    const li = document.createElement("li");
    li.appendChild(link);
    tocList.appendChild(li);
  });
});
</script>

<template>
  <nav id="toc" class="mb-8 p-4 bg-gray-100 rounded-lg">
    <h1 class="text-lg font-semibold mb-2">Table of Contents</h1>
    <p>you should play with the size of the window viewport..</p>
    <ul id="toc-list" class="list-disc list-inside space-y-1"></ul>
  </nav>
  <hr />

  <h2>flex</h2>
  Avec class="flex", permet de créer un conteneur flexible dans lequel les
  éléments enfants peuvent se placer horizontalement ou verticalement, selon la
  direction choisie. les div enfants sont placés côte à côte (horizontalement)
  par défaut.

  <section>
    <div class="flex gap-2">
      <div class="bg-pink-300">1</div>
      <div class="bg-pink-600">2</div>
    </div>
    <div class="flex gap-2 flex-col">
      <div class="bg-pink-300">1</div>
      <div class="bg-pink-600">2</div>
    </div>
  </section>
  <h2>vertical</h2>
  <section class="">
    <div
      v-for="i in 5"
      :key="i"
      class="p-4 text-center text-white bg-amber-600 w-14 h-14"
    >
      {{ i }}
    </div>
  </section>
  <h1 class="font-bold">Contrôle de l'alignement</h1>
  <h2>vertical justify-around</h2>
  <section class="flex flex-col gap-2 flex-wrap justify-around h-[30vh]">
    <div
      v-for="i in 18"
      :key="i"
      class="flex-shrink-0 p-4 text-center text-white bg-amber-950 w-14 h-14"
    >
      {{ i }}
    </div>
  </section>
  <h2>horizontal wrap no shrink</h2>
  <section class="flex flex-wrap gap-2">
    <div
      v-for="i in 15"
      :key="i"
      class="flex-shrink-0 p-4 text-center text-white bg-amber-300 w-14 h-14"
    >
      {{ i }}
    </div>
  </section>
  <h2>justify</h2>
  <section class="flex flex-wrap gap-2 justify-around">
    <div
      v-for="i in 20"
      :key="i"
      class="flex-shrink-0 p-4 text-center text-white bg-emerald-200 w-14 h-14"
    >
      {{ i }}
    </div>
  </section>
  <h2>horizontal</h2>
  <section class="flex">
    <div
      v-for="i in 5"
      :key="i"
      class="p-4 text-center text-white bg-blue-300 w-14 h-14"
    >
      {{ i }}
    </div>
  </section>
  <h2>horizontal reverse</h2>
  <section class="flex flex-row-reverse gap-1">
    <div
      v-for="i in 5"
      :key="i"
      class="p-4 text-center text-white bg-blue-300 w-14 h-14"
    >
      {{ i }}
    </div>
  </section>
  <h2>horizontal bars items justified bottom</h2>
  <section class="flex flex-wrap items-end justify-center gap-2">
    <div
      v-for="i in 15"
      :key="i"
      class="flex-shrink-0 p-4 text-center text-white bg-gray-500 w-14 h-14"
      :style="`height: ${i * 30 + 30}px`"
    >
      {{ i }}
    </div>
  </section>
  <h2>horizontal bars items justified top</h2>
  <section class="flex flex-wrap justify-center gap-2">
    <div
      v-for="i in 15"
      :key="i"
      class="flex-shrink-0 p-4 text-center text-white bg-gray-500 w-14 h-14"
      :style="`height: ${i * 30 + 30}px`"
    >
      {{ i }}
    </div>
  </section>
  <h2>horizontal bars items center reversed</h2>
  <section
    class="flex flex-wrap items-center flex-row-reverse justify-center gap-2"
  >
    <div
      v-for="i in 15"
      :key="i"
      class="flex-shrink-0 p-4 text-center text-white bg-gray-500 w-14 h-14"
      :style="`height: ${i * 30 + 30}px`"
    >
      {{ i }}
    </div>
  </section>
</template>

<style scoped></style>
