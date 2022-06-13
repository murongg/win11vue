
<script lang="ts" setup>
const props = defineProps<{
  id: string,
  err: any,
  src: string,
  ext: any,
  dir: any,
  back: any,
  click: any,
  payload: any,
  var: any,
  w: any,
  h: any,
  free: any,
  lazy: any
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

const clickDispatch = (event: any) => {
  // var action = {
  //   type: event.target.dataset.action,
  //   payload: event.target.dataset.payload
  // };

  // if (action.type) {
  //   dispatch(action);
  // }
}
</script>

<template>
  <div :class="`imageCont prtclk`" :id="props.id" :style="{
    backgroundImage: props.back && `url(${src})`
  }" :data-back="props.back != null" @click="props.click && clickDispatch" :data-action="props.click"
    :data-payload="props.payload" :data-var="props.var">
    <img v-if="!props.back" :width="props.w" :height="props.h" :data-free="props.free != null" :data-var="props.var"
      :loading="props.lazy ? 'lazy' : null" :src="src" alt="" @error="errorHandler" />
  </div>
</template>
