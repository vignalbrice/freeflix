<template>
  <TransitionGroup
    name="list"
    tag="div"
    :duration="550"
    class="skeleton-list movies lg:flex lg:flex-wrap md:grid md:grid-cols-2 md:gap-6 grid grid-cols-1 lg:gap-6 gap-y-6 relative"
  >
    <div v-for="(_item, index) in mockMovies" :key="index">
      <SkeletonCard :isAnimated="false" />
    </div>
    <div class="badckdrop"></div>
  </TransitionGroup>
</template>

<script setup lang="ts">
import { ref } from "vue";
import constants from "@/constants/constants";
import SkeletonCard from "./SkeletonCard.vue";

const mockMovies = ref(new Array(constants.MOCK_DATA_MOVIES).fill({}));
</script>

<style scoped>
.badckdrop {
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: -10px;
  left: 0;
  background: linear-gradient(to bottom, transparent 0%, black 100%);
  z-index: 10;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
