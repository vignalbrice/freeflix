<template>
  <TransitionGroup
    name="list"
    tag="div"
    :duration="550"
    class="trending-movies flex flex-row lg:flex-wrap lg:justify-between relative"
  >
    <div
      class="movies"
      v-for="(trending, index) in trendingMovies"
      :key="trending.id"
    >
      <LatestMovieCard :trending="trending" :index="index" />
    </div>
  </TransitionGroup>
</template>

<script setup lang="ts">
import { Movie } from "@/types/Movie";
import { PropType } from "vue";
import LatestMovieCard from "./LatestMovieCard.vue";

const { trendingMovies } = defineProps({
  trendingMovies: {
    type: Array as PropType<Movie[]>,
    required: true,
  },
});
</script>

<style scoped>
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
