<template>
  <!-- create a navbar with logo and link home, list, and favorites -->
  <nav class="flex items-center justify-between flex-wrap bg-transparent p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <img
        src="@/assets/img/logo/logo.png"
        alt="Freeflix Logo"
        class="fill-current h-14 w-14 mr-2"
      />
      <span class="font-semibold text-2xl tracking-tight">FreeFlix</span>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 0h20v20H0z" fill="none" />
          <path d="M0 5h20v2H0z" />
          <path d="M0 11h20v2H0z" />
          <path d="M0 17h20v2H0z" />
        </svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a
          href="/"
          class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
        >
          Home
        </a>
        <a
          href="/liste"
          class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
        >
          Liste
        </a>
        <a
          href="/favoris"
          class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white"
        >
          Favoris
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped></style>
