<template>
  <div class="home">
    <Header />
    <Section>
      <SectionTitle>Latest & Trending</SectionTitle>
      <LatestMovieList :trending-movies="trendingMovies" />
    </Section>
    <Separator />
    <Experience />
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/ui/Header.vue";
import { onMounted, computed } from "vue";
import { useMovieStore } from "@/store/movie";
import Section from "../components/common/Section/Section.vue";
import Experience from "@/components/ui/WebGL/Experience.vue";
import SectionTitle from "@/components/common/Section/SectionTitle.vue";
import LatestMovieList from "@/components/ui/LatestMovieList.vue";
import Separator from "@/components/ui/Separator.vue";

const movieStore = useMovieStore();

const trendingMovies = computed(() => {
  return movieStore.trendingMovies.slice(0, 4);
});

onMounted(() => {
  movieStore.fetchTrendingMovies();
});
</script>

<style scoped>
@media (max-width: 768px) {
  .trending-movies {
    overflow-x: scroll;
    overflow-y: hidden;
    gap: 1rem;
  }
}
</style>
