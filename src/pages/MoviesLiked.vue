<template>
  <div class="movies-list relative mt-40 px-12">
    <div class="movies-list-container flex flex-col gap-12">
      <SectionTitle>Liked Movies</SectionTitle>
      <BaseList
        v-if="likedMovies.length > 0"
        :is-liked="isMovieLiked"
        :movies="likedMovies"
        :on-dislike="onDislike"
        :on-like="onLike"
      />
      <div v-else>
        <SkeletonList />
        <p
          class="text-lg text-gray-400 absolute z-20 -bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          You haven't liked any movies yet
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMovieStore } from "@/store/movie";
import { storeToRefs } from "pinia";
import SkeletonList from "@/components/ui/Skeletons/SkeletonList.vue";
import BaseList from "@/components/ui/BaseList.vue";
import SectionTitle from "@/components/common/Section/SectionTitle.vue";

const movieStore = useMovieStore();
const { onLike, onDislike } = movieStore;
const { likedMovies } = storeToRefs(movieStore);
const isMovieLiked = (isLiked: boolean) => isLiked;
</script>

<style scoped></style>
