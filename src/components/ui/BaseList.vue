<template>
  <TransitionGroup
    name="list"
    tag="div"
    :duration="550"
    :appear="true"
    class="movies lg:flex lg:flex-wrap md:grid md:grid-cols-2 grid grid-cols-1 gap-5 relative"
  >
    <div class="movie cursor-pointer" v-for="movie in movies" :key="movie.id">
      <BaseCard
        :movie="movie"
        :is-liked="isLiked"
        :on-dis-like="onDislike"
        :on-liked-movie="isLiked"
        :on-like="onLike"
      />
    </div>
  </TransitionGroup>
</template>

<script lang="ts">
import { Movie } from "@/types/Movie";
import { defineComponent, PropType } from "vue";
import BaseCard from "./BaseCard.vue";

export default defineComponent({
  name: "BaseList",
  components: {
    BaseCard,
  },
  props: {
    movies: {
      type: Array as PropType<Movie[]>,
      required: true,
    },
    isLiked: {
      type: Function as PropType<(params: any) => boolean>,
      required: true,
    },
    onLike: {
      type: Function as PropType<(movie: Movie) => void>,
      required: true,
    },
    onDislike: {
      type: Function as PropType<(movie: Movie) => void>,
      required: true,
    },
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
