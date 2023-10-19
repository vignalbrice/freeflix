<template>
  <div
    class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
  >
    <div class="flex flex-wrap justify-center items-center -mb-px">
      <div v-for="item in genders" :key="item.id">
        <div class="mr-2" role="presentation">
          <button
            :id="`${item.name}-tab`"
            role="tab"
            :data-tabs-target="`#${item.name}`"
            @click="changeSelectedTabs(item.id)"
            :class="selected === item.id && '!border-blue-600'"
            class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          >
            {{ item.name }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import constants from "@/constants/constants";
import { useMovieStore } from "@/store/movie";
import { computed, defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "BaseTabs",
  emits: ["update"],
  props: {
    selected: {
      type: Number,
      required: true,
    },
  },
  setup({}, { emit }) {
    const movieStore = useMovieStore();

    const genders = computed(() => {
      return movieStore.getGenderOfMovies
        .slice(0, 6)
        .filter((g) => g.name !== constants.GENDER_TO_REMOVE);
    });

    const changeSelectedTabs = (id: number) => {
      emit("update", id);
    };

    onMounted(() => {
      movieStore.fetchGenderOfMovies();
    });
    return {
      genders,
      changeSelectedTabs,
    };
  },
});
</script>

<style scoped></style>
