
<script lang="ts" setup>
const props = defineProps<{
  icon: string
}>()
</script>

<template>
  <div grid place-items-center transition-duration-200 transition-ease-in-out transition-all w-auto h-full>
    <div class="icon" flex items-center justify-center relative w-38px h-38px m-y-auto m-x-3px box-border
      transform-origin-center
      style="background: rgba(254, 254, 254, 0);animation: popintro 800ms ease-in-out;border-radius: 4px;">
      <img :src="`img/icon/${props.icon}.png`" w-24px h-24px transform-origin-center transition-duration-400
        transition-ease-in-out>
    </div>
  </div>
</template>


<style scoped>
.icon:hover {
  background: var(--bg2) !important;
  transition: all 0.2s ease-in-out;
}
</style>
