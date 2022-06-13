<script lang="ts" setup>
import { useWallpaper } from '~/store/wallpaper';
const wallpaper = useWallpaper()
let blackout = $ref(false)
const props = defineProps<{
  dir: number
}>()
watchEffect(() => {
  if (props.dir < 0) {
    setTimeout(() => {
      console.log("blackout");
      blackout = true
    }, 4000);
  }
})

watchEffect(() => {
  if (props.dir < 0) {
    if (blackout) {
      if (wallpaper.act == "restart") {
        setTimeout(() => {
          blackout = false
          setTimeout(() => {
            wallpaper.setWallBooted()
          }, 4000);
        }, 2000);
      }
    }
  }
})
</script>

<template>
  <div class="bootscreen">
    <div :class="blackout ? 'hidden' : ''">
      <Image src="asset/bootlogo" w="180" />
      <div mt-48 id="loader">
        <svg class="progressRing" w-full flex justify-center :height="48" viewBox="0 0 16 16">
          <circle cx="8px" cy="8px" r="7px"></circle>
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bootscreen {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
  background-color: #010001;
  z-index: 2;
  display: grid;
  place-items: center;
  cursor: progress;
}

.progressRing circle {
  stroke: white;
  fill: none;
  stroke-width: 2px;
  stroke-linecap: round;
  transform-origin: 50% 50%;
  transition: all 0.2s ease-in-out 0s;
  animation: 2s linear 0s infinite normal none running spin-infinite;
}

@keyframes spin-infinite {
  0% {
    stroke-dasharray: 0.01px, 43.97px;
    transform: rotate(0deg);
  }

  50% {
    stroke-dasharray: 21.99px, 21.99px;
    transform: rotate(450deg);
  }

  100% {
    stroke-dasharray: 0.01px, 43.97px;
    transform: rotate(1080deg);
  }
}
</style>
