<script setup lang="ts">
import { GLTFModel } from "@tresjs/cientos";
</script>
<template>
  <GLTFModel
    path="/models/clapperboard.glb"
    draco
    :position-y="-12"
    :rotation-x="-0.3"
    :rotation-y="-0.4"
  />
</template>

<style scoped></style>
