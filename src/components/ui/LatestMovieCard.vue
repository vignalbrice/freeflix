<template>
  <div
    :style="{
      backgroundImage: `url(${trending.poster_path})`,
    }"
    class="movie-card w-48 h-64 bg-cover bg-center rounded-xl border border-gray-600 relative"
  >
    <TransitionGroup
      appear
      tag="h1"
      name="list"
      class="movie-number font-extrabold lg:z-10 absolute lg:text-9xl"
    >
      {{ index + 1 }}
    </TransitionGroup>
    <div class="movie-info hidden">
      <h1>{{ trending.title }}</h1>
      <p>{{ formatDate(trending.release_date) }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatDate } from "@/utils/date";

const { trending } = defineProps({
  trending: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
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
.movie-number {
  top: -3rem;
  z-index: -10;
  font-size: 18rem;
  color: #000;
  text-shadow: -6px -6px 0 #fff, 6px -6px 0 #fff, -6px 6px 0 #fff,
    6px 6px 0 #fff;
}

@media (max-width: 1024px) {
  .trending-movies {
    overflow-x: scroll;
    overflow-y: hidden;
    gap: 1rem;
  }
  .movie-number {
    top: 2.1rem;
    z-index: 10;
    font-size: 12rem;
  }
  .movies:nth-child(1) > .movie-card > .movie-number {
    left: 6rem !important;
  }
  .movies:nth-child(2) > .movie-card > .movie-number {
    left: 4rem !important;
  }
  .movies:nth-child(3) > .movie-card > .movie-number {
    left: 4rem !important;
  }
  .movies:nth-child(4) > .movie-card > .movie-number {
    left: 3rem !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  .movie-number {
    top: 5rem;
    z-index: 10;
    font-size: 12rem;
  }
}

.movies:nth-child(1) > .movie-card > .movie-number {
  left: -25%;
}
.movies:nth-child(2) > .movie-card > .movie-number {
  left: -60%;
}
.movies:nth-child(3) > .movie-card > .movie-number {
  left: -52%;
}
.movies:nth-child(4) > .movie-card > .movie-number {
  left: -80%;
}
</style>
