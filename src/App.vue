<script lang="ts" setup>
import { useWallpaper } from '~/store/wallpaper';
const wallpaper = useWallpaper()
</script>

<template>
  <Background></Background>
  <BootScreen v-if="wallpaper.booted"></BootScreen>
</template>
