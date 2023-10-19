<template>
  <!-- create a navbar with logo and link home, list, and favorites -->
  <nav
    class="navbar absolute top-0 flex items-center justify-between flex-wrap p-6 z-20 w-full"
  >
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <img
        src="@/assets/img/logo/logo.png"
        alt="Freeflix Logo"
        class="fill-current h-14 w-14 mr-2 rounded-full"
      />
      <span class="font-semibold text-2xl tracking-tight">FreeFlix</span>
    </div>
    <div class="block lg:hidden">
      <button
        data-collapse-toggle="navbar-language"
        type="button"
        @click="toggleMenu"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-500 dark:focus:ring-gray-600"
        aria-controls="navbar-language"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>
    <div
      :class="{ hidden: !isShowMenu, block: isShowMenu }"
      class="w-full flex-grow lg:flex lg:items-center lg:w-auto z-40 bg-gray-500 p-3 rounded-xl lg:bg-transparent text-sm lg:text-base font-semibold lg:font-normal sm:mt-3 lg:mt-0"
    >
      <div
        class="text-sm lg:flex-grow lg:flex lg:flex-row lg:gap-0 flex flex-col gap-4"
      >
        <router-link
          @click="toggleMenu"
          to="/"
          :class="{ '!border-b-white ': $route.path === '/' }"
          class="relative text-lg w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center block lg:inline-block lg:mt-0 text-gray-50 hover:text-white mr-4"
        >
          Home
        </router-link>
        <router-link
          @click="toggleMenu"
          to="/movies-by-gender"
          class="relative text-lg w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center block lg:inline-block lg:mt-0 text-gray-50 hover:text-white mr-4"
        >
          Movies List
        </router-link>
        <router-link
          @click="toggleMenu"
          to="/movies-liked"
          class="relative text-lg w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center block lg:inline-block lg:mt-0 text-gray-50 hover:text-white"
        >
          Likes List
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isShowMenu = ref<boolean>(false);

const toggleMenu = () => {
  isShowMenu.value = !isShowMenu.value;
};
</script>

<style scoped>
nav {
  background: linear-gradient(to top, transparent 0%, #000 100%);
}
</style>
