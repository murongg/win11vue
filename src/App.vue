<script lang="ts" setup>
import { useWallpaper } from '~/store/wallpaper';
const wallpaper = useWallpaper()
</script>

<template>
  <BootScreen v-if="wallpaper.booted"></BootScreen>
  <LockScreen v-if="wallpaper.locked"></LockScreen>
  <div relative z-0>
    <Background></Background>
    <div absolute w-screen top-0 overflow-hidden class="h-[calc(100%-48px)]" data-menu="desk">
      <DesktopApp></DesktopApp>
    </div>
    <TaskBar></TaskBar>
  </div>
</template>
