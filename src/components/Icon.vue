<script lang="ts" setup>
  const props = defineProps<{
    src: string
  }>()
</script>

<template>
  <div relative grid place-items-center>
    <img 
      :src="props.src" 
      width="36" 
      transform-origin-center 
      transition-duration-400 
      transition-ease-in-out
    >
  </div>
</template>
