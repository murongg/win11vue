
<script lang="ts" setup>
import { useTasks } from '~/store/tasks';

const tasks = useTasks()
</script>

<template>
  <div class="taskbar" absolute w-screen h-48px bottom-0>
    <div relative w-full h-full>
      <div flex justify-center w-full h-full>
        <TaskIcon icon="home"></TaskIcon>
        <TaskIcon icon="search"></TaskIcon>
        <TaskIcon :icon="app.icon" v-for="app in tasks.apps" :key="app.name"></TaskIcon>
        <TaskIcon absolute left-8px icon="widget"></TaskIcon>
      </div>
    </div>
  </div>
</template>

<style scoped>
.taskbar {
  --bg1: rgba(243, 243, 243, 0.85);
  --bg2: rgba(255, 255, 255, 0.67);
  color: var(--dark-txt);
  background: var(--bg1);
  backdrop-filter: saturate(3) blur(20px);
  z-index: 10000;
}
</style>
