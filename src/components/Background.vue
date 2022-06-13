<script setup lang="ts">
import { useWallpaper } from '~/store/wallpaper';
const wallpaper = useWallpaper()
</script>

<template>
  <div class="background" :style="{ backgroundImage: `url(img/wallpaper/${wallpaper.src})` }">

  </div>
</template>

<style scoped>
.background {
  min-width: 100vw;
  min-height: 100vh;
  background-color: var(--wintheme);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: all 0.2s ease;
}
</style>
