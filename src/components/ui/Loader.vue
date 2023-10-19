<template>
  <div v-if="movies.length > 0">
    <div class="flex justify-center" v-if="isReachedEnd()">
      <p class="text-sm text-gray-400">You've reached the end</p>
    </div>
    <div class="flex justify-center" v-else>
      <button class="btn btn-primary" @click="loadMore()" v-if="!isLoadMore">
        Load More
      </button>
      <SpinLoader v-else />
    </div>
  </div>
</template>

<script lang="ts">
import SpinLoader from "./SpinLoader.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Loader",
  components: { SpinLoader },
  props: {
    movies: {
      type: Array,
      required: true,
    },
    isReachedEnd: {
      type: Function,
      required: true,
    },
    isLoadMore: {
      type: Boolean,
      required: true,
    },
    loadMore: {
      type: Function,
      required: true,
    },
  },
});
</script>

<style scoped></style>
