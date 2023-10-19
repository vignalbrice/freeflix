<template>
  <div class="movies-list relative mt-40 px-12">
    <div class="movies-list-container flex flex-col gap-12">
      <SectionTitle>Movies & Categories</SectionTitle>
      <BaseTabs :selected="genderSelected" @update="changeSelectedTabs" />
      <SkeletonList v-if="isLoading === true && movies.length === 0" />
      <BaseList
        :gender-selected="genderSelected"
        :is-liked="isLiked"
        :movies="movies"
        :on-dislike="onDisLike"
        :on-like="onLike"
        v-else
      />
      <Loader
        :movies="movies"
        :is-load-more="isLoadMore"
        :is-reached-end="isReachedEnd"
        :load-more="loadMore"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useMovieStore } from "@/store/movie";
import BaseTabs from "@/components/ui/BaseTabs.vue";
import Contants from "@/constants/constants";
import { Movie } from "@/types/Movie";
import { storeToRefs } from "pinia";
import SkeletonList from "@/components/ui/Skeletons/SkeletonList.vue";
import Loader from "@/components/ui/Loader.vue";
import BaseList from "@/components/ui/BaseList.vue";
import SectionTitle from "@/components/common/Section/SectionTitle.vue";

const {
  fetchMoviesByGender,
  resetMoviesByGender,
  getIsLoading,
  onLike: likeMovie,
  onDislike: dislikeMovie,
} = useMovieStore();

const movieStore = useMovieStore();
const { getLikedMovies, moviesByGender: movies } = storeToRefs(movieStore);

const genderSelected = ref<number>(Contants.DEFAULT_GENDER_ID);
const page = ref<number>(Contants.DEFAULT_PAGE);
const isLoadMore = ref<boolean>(false);

// Helpers
const isReachedEnd = () => movies.value.length === Contants.MAX_ITEMS;
const isLiked = (movieId: number) => {
  return getLikedMovies.value.some((item) => item.id === movieId);
};
const onLike = (movie: Movie) => likeMovie(movie);
const onDisLike = (movie: Movie) => dislikeMovie(movie);

// Computed
const isLoading = computed(() => {
  return getIsLoading;
});

// Methods
const changeSelectedTabs = (id: number) => {
  page.value = Contants.DEFAULT_PAGE;
  genderSelected.value = id;
  resetMoviesByGender(id, page.value);
};
const loadMore = () => {
  isLoadMore.value = true;
  page.value = page.value + 1;
  fetchMoviesByGender(genderSelected.value, page.value);
  setTimeout(() => {
    isLoadMore.value = false;
  }, 500);
};
// Lifecycle
onMounted(() => {
  fetchMoviesByGender(genderSelected.value, page.value);
});
</script>

<style scoped></style>
