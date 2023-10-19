<template>
  <header>
    <img
      :src="
        getMovieDetailsById?.backdrop_path ??
        '../src/assets/img/header/header.jpg'
      "
      class="header-poster object-cover w-full h-screen"
    />
    <div class="header-filter"></div>
    <div
      class="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      v-if="getMovieDetailsById"
    >
      <div
        class="header-content flex flex-col justify-center items-center gap-9"
      >
        <img
          src="@/assets/img/header/header-title.png"
          :alt="getMovieDetailsById.title"
          class="header-title text-6xl text-center lg:max-w-xl max-md:max-w-xs animate-fade-in"
        />
        <div
          class="header-info flex flex-row justify-center items-center gap-4 lg:text-lg text-sm animate-fade-in"
        >
          <p
            class="vote-average border border-white rounded-full p-2 font-semibold"
          >
            {{ getMovieDetailsById.vote_average }}
          </p>

          <div
            class="genders flex items-center gap-3"
            v-for="(gender, index) in getMovieDetailsById.genders"
            :key="index"
          >
            <Dot v-if="index !== 0" />
            <p class="sm:text-xs lg:text-lg">{{ gender }}</p>
          </div>
          <div class="release-date flex items-center gap-3">
            <Dot />
            {{ formatDate(getMovieDetailsById.release_date) }}
          </div>
        </div>
        <p
          class="header-description px-2 text-center lg:text-sm text-xs text-gray-300 animate-fade-in"
        >
          {{ getMovieDetailsById.overview }}
        </p>
        <div class="header-buttons flex gap-4">
          <Button
            class="p-4 bg-white rounded-full text-black font-thin flex gap-x-2 animate-fade-in"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                clip-rule="evenodd"
              />
            </svg>

            <span class="header-button-text"> Watch Now</span>
          </Button>
          <Button
            class="header-button rounded-full bg-slate-400 border border-gray-400 px-6 py-4 font-thin flex items-center gap-2 animate-fade-in"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 border border-white rounded-full bg-white text-black p-1"
            >
              <path
                fill-rule="evenodd"
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                clip-rule="evenodd"
              />
            </svg>

            <span class="header-button-text lg:text-lg text-sm">More Info</span>
          </Button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Dot from "@/components/ui/Dot.vue";
import { onMounted } from "vue";
import { useMovieStore } from "@/store/movie";
import { formatDate } from "@/utils/date";
import { storeToRefs } from "pinia";
import constants from "@/constants/constants";
import Button from "./Button.vue";

const movieStore = useMovieStore();
const { getMovieDetailsById } = storeToRefs(movieStore);

onMounted(() => {
  movieStore.fetchMovieById(constants.HEADER_MOVIE_ID);
});
</script>

<style scoped>
.header-filter {
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
  background: linear-gradient(to bottom, transparent 0%, black 100%);
  z-index: 10;
}
</style>
