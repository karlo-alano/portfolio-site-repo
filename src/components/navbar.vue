<template>
  <!-- NAVBAR -->
  <nav
    class="navBar w-full bg-green-1 flex flex-row justify-between items-center py-8 px-4 md:px-15 z-50 absolute"
  >
    <RouterLink
      to="/"
      class="logo text-2xl font-bold font-monospace text-yellow-1 hover:text-text-black hover:transition-all cursor-pointer hover:bg-yellow-1"
    >
      _karlo.
    </RouterLink>

    <div class="quickLinks hidden md:flex flex-row gap-5">
      <RouterLink
        to="/Experiments"
        class="font-monospace text-xl text-yellow-1 hover:text-text-black hover:transition-all cursor-pointer hover:bg-yellow-1"
        >Experiments</RouterLink
      >
      <RouterLink
        to="/Guides"
        class="font-monospace text-xl text-yellow-1 hover:text-text-black hover:transition-all cursor-pointer hover:bg-yellow-1"
        >Guides</RouterLink
      >
      <RouterLink
        to="/Projects"
        class="font-monospace text-xl text-yellow-1 hover:text-text-black hover:transition-all cursor-pointer hover:bg-yellow-1"
        >Projects</RouterLink
      >
      <a
        href="#about"
        class="font-monospace text-xl text-yellow-1 hover:text-text-black hover:transition-all cursor-pointer hover:bg-yellow-1"
        >About</a
      >
      <a
        class="font-monospace text-xl text-yellow-1 hover:text-text-black hover:transition-all cursor-pointer hover:bg-yellow-1"
        >Contact</a
      >
    </div>

    <button class="md:hidden flex flex-col gap-1.5 p-2" @click="isOpen = !isOpen">
      <span
        class="block w-6 h-0.5 bg-[#21160d] transition-all"
        :class="{ 'rotate-45 translate-y-2': isOpen }"
      ></span>
      <span
        class="block w-6 h-0.5 bg-[#21160d] transition-all"
        :class="{ 'opacity-0': isOpen }"
      ></span>
      <span
        class="block w-6 h-0.5 bg-[#21160d] transition-all"
        :class="{ '-rotate-45 -translate-y-2': isOpen }"
      ></span>
    </button>
  </nav>

  <Transition name="slidedown">
    <div
      v-if="isOpen"
      class="md:hidden flex flex-wrap flex-row gap-3 px-4 top-25 bg-dark w-full transition-all absolute justify-center z-20"
    >
      <RouterLink
        to="/Experiments"
        class="text-xl text-yellow-1 font-monospace"
        @click="isOpen = false"
        >Experiments</RouterLink
      >
      <RouterLink to="/Guides" class="text-xl text-yellow-1 font-monospace" @click="isOpen = false"
        >Guides</RouterLink
      >
      <RouterLink
        to="/Projects"
        class="text-xl text-yellow-1 font-monospace"
        @click="isOpen = false"
        >Projects</RouterLink
      >
      <a href="#about" class="text-xl text-yellow-1 font-monospace" @click="isOpen = false"
        >About</a
      >

      <a href="#contact" class="text-xl text-yellow-1 font-monospace" @click="isOpen = false"
        >Contact</a
      >
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isOpen = ref(false)
</script>

<style scoped>
.slidedown-enter-active,
.slidedown-leave-active {
  transition: opacity 0.1 ease;
}

.slidedown-enter-from,
.slidedown-leave-to {
  opacity: 0;
}

.slidedown-enter-to,
.slidedown-leave-from {
  opacity: 1;
}
</style>
