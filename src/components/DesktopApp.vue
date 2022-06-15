<script lang="ts" setup>import { useDesktop } from '~/store/desktop';

const desktop = useDesktop()
</script>

<template>
  <div w-0 h-full flex flex-col flex-wrap>
    <div class="dsk-app" flex flex-col items-center justify-center v-for="app in desktop.apps" :key="app.name">
      <Icon :src="`img/icon/${app.icon}.png`" class="icon" cursor-pointer></Icon>
      <span text-center mt-4px max-h-20px style="color:#fafafa;text-shadow: 0 0 4px rgb(0 0 0 / 60%);">{{ app.name
      }}</span>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.dsk-app {
  margin: 4px;
  height: 86px;
  width: 76px;
  font-size: 0.8em;
  transition: all ease-in-out 200ms;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }

  .icon:active {
    animation: 200ms ease-in-out icon-click;
  }

}

@keyframes icon-click {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.7);
  }

  100% {
    transform: scale(1);
  }
}
</style>
