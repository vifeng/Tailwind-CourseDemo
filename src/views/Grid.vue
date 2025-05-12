<template>
  <section class="grid grid-cols-4 gap-2 grid-flow-dense">
    <div class="col-span-2 !bg-green-600">1</div>
    <div class="row-span-2 !bg-green-600">2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div class="col-span-3 !bg-green-600">
      9, is on 3 col so it go back in line leaving 2 col empty
    </div>
    <div>
      10, grid-flow-dense allow the empty col to be fi lled with other div
    </div>
    <div>
      11, grid-flow-dense allow the empty col to be filled with other div
    </div>
    <div>12</div>
    <div>13</div>
  </section>
</template>
<style scoped>
@reference "../assets/index.css";

div {
  @apply bg-gray-400 min-h-[100px] even:bg-gray-600 text-white text-center flex items-center justify-center;
}
</style>
