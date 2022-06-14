
<script lang="ts" setup>
const props = defineProps<{
  err?: any,
  src: string,
  ext?: any,
  dir?: any,
  back?: any,
  w?: any,
  h?: any,
}>()
let src = `img/${(props.dir ? props.dir + "/" : "") + props.src}.png`;
if (props.ext != null) {
  src = props.src
}

const errorHandler = (e: any) => {
  if (props.err) {
    e.target.src = props.err
  }
}

</script>

<template>
  <div :class="`imageCont prtclk`" :style="{
    backgroundImage: props.back && `url(${src})`
  }">
    <img v-if="!props.back" :width="props.w" :height="props.h" :src="src" @error="errorHandler" />
  </div>
</template>
