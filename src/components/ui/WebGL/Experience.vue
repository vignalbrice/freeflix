<script setup lang="ts">
import { TresCanvas } from "@tresjs/core";
import { Levioso, OrbitControls } from "@tresjs/cientos";
import ClapperBoard from "./ClapperBoard.vue";
import SectionTitle from "@/components/common/Section/SectionTitle.vue";

const gl = {
  shadows: true,
  antialias: true,
  alpha: false,
  preserveDrawingBuffer: true,
  windowSize: true,
};
</script>

<template>
  <div class="w-full mt-6 h-96">
    <SectionTitle class="mx-14">We are all around the world</SectionTitle>
    <TresCanvas v-bind:gl="gl" preset="realistic">
      <TresPerspectiveCamera
        :fov="50"
        :near="0.1"
        :far="1000"
        :position="[0, 0, 40]"
        :look-at="[0, 0, 0]"
      />
      <OrbitControls
        :enable-zoom="false"
        auto-rotate
        :auto-rotate-speed="7"
        :min-polar-angle="Math.PI / 2"
        :max-polar-angle="Math.PI / 2"
      />
      <Suspense>
        <Levioso>
          <ClapperBoard />
        </Levioso>
      </Suspense>
      <TresDirectionalLight
        :position="[-4, 8, 4]"
        :intensity="1.5"
        cast-shadow
      />
    </TresCanvas>
  </div>
</template>

<style scoped></style>
