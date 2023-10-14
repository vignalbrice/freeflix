<template>
  <footer class="fixed bottom-0 w-full mb-4">
    <div class="flex flex-row">
      <div
        class="w-full flex flex-row justify-between text-gray-400 border-t border-t-slate-400 pt-5 px-10"
      >
        <ul class="flex flex-row gap-10">
          <li>© {{ actualDate }} FREEFLIX. All Rights Reserved.</li>
          <li>Terms Of Use</li>
          <li>Privacy Policy</li>
          <li>FAQ</li>
        </ul>
        <img class="w-10" src="@/assets/img/logo/logo.png" alt="" />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const actualDate = ref<number>(new Date().getFullYear());
</script>

<style scoped></style>
