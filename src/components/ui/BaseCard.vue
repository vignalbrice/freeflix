<template>
  <div
    :style="{
      backgroundImage: `url(${movie.poster_path})`,
    }"
    class="movie-card lg:w-72 h-40 bg-cover bg-center rounded-xl border border-gray-600 relative"
  >
    <div
      class="movie-card-info absolute w-full h-full rounded-xl bg-black bg-opacity-70 flex flex-col justify-center items-center"
    >
      <h3 class="text-sm text-center">{{ movie.title }}</h3>
      <p class="text-xs">{{ formatDate(movie.release_date) }}</p>
      <button
        class="movie-like absolute bottom-4 right-4"
        @click="isLiked(movie.id) ? onDisLike(movie) : onLike(movie)"
      >
        <HeartIcon :is-liked="isLiked(movie.id)" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formatDate } from "@/utils/date";
import HeartIcon from "@/components/ui/HeartIcon.vue";
export default defineComponent({
  name: "BaseCard",
  components: {
    HeartIcon,
  },
  props: {
    movie: {
      type: Object,
      required: true,
    },
    isLiked: {
      type: Function,
      required: true,
    },
    onLike: {
      type: Function,
      required: true,
    },
    onDisLike: {
      type: Function,
      required: true,
    },
  },
  setup() {
    return {
      formatDate,
    };
  },
});
</script>

<style scoped></style>
