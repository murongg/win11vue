<script lang="ts" setup>
import { useNow } from '@vueuse/core'
import { useSetting } from '~/store/setting';
import { useWallpaper } from '~/store/wallpaper';
const wallpaper = useWallpaper()
const setting = useSetting()
const now = useNow()

const props = defineProps<{
  dir?: number
}>()

let lock = $ref(false)
let unlocked = $ref(false)

const userName = computed(() => setting.person.name)
const action = (e: any) => {
  const act = e.target.dataset.action
  if (act == "splash") lock = true;
};

const proceed = () => {
  unlocked = true
  setTimeout(() => {
    wallpaper.setWallUnLock()
  }, 1000);
};
</script>

<template>
  <div :class="'lockscreen ' + (props.dir == -1 ? 'slowfadein' : '')" :data-unlock="unlocked" :style="{
    backgroundImage: `url(${`img/wallpaper/lock.jpg`})`,
  }" @click="action" data-action="splash" :data-blur="lock">
    <div class="splashScreen" mt-40 :data-faded="lock">
      <div text-6xl text-gray-100 font-semibold>
        {{
            now.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })
        }}
      </div>
      <div text-lg font-medium text-gray-200>
        {{ now.toLocaleDateString(undefined, {
            weekday: "long",
            month: "long",
            day: "numeric",
          })
        }}
      </div>
    </div>
    <div class="fadeinScreen" :data-faded="!lock" :data-unlock="unlocked">
      <Image rounded-full overflow-hidden src="img/asset/prof.jpg" :w="200" ext />
      <div mt-2 text-2xl font-medium text-gray-200>
        {{ userName }}
      </div>
      <div className="signInBtn" flex items-center mt-6 cursor-pointer @click="proceed">
        Sign in
      </div>
    </div>
    <div class="bottomInfo" flex>
      <span icon-btn i-carbon-wifi text-white mx-2></span>
      <span icon-btn i-carbon-battery-full text-white></span>
      <!-- <Icon mx-2 src="wifi" ui width={16} invert /> -->
      <!-- <Battery /> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lockscreen {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
  z-index: 1;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1s ease-in-out;

  &[data-unlock="true"] {
    opacity: 0;
  }

  &::after {
    -webkit-backdrop-filter: blur(0);
    backdrop-filter: blur(0);
    transition: all 200ms ease-in-out;
  }

  &[data-blur="true"]::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    -webkit-backdrop-filter: blur(25px);
    backdrop-filter: blur(25px);
    background: rgba(0, 0, 0, 0.1);
  }
}

.bottomInfo {
  position: absolute;
  bottom: 24px;
  right: 24px;
}

.splashScreen {
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(0);
  transition: all 200ms ease-in-out;

  &[data-faded="true"] {
    opacity: 0;
    pointer-events: none;
    transform: translateY(-200px);
  }
}

.fadeinScreen {
  position: absolute;
  top: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transform: translateY(60px);
  transition: all 400ms ease-in-out;
  pointer-events: none;

  &[data-faded="false"] {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);
  }

  &[data-unlock="true"] {
    opacity: 0;
  }

  .signInBtn {
    background: rgba(255, 255, 255, 0.2);
    font-size: 13px;
    padding: 4px 36px 6px;
    color: #fff;
    border: 2px solid transparent;
    border-radius: 4px;

    &:hover {
      border: 2px solid rgba(255, 255, 255, 0.33);
    }

    &:active {
      border: 2px solid transparent;
      background: rgba(255, 255, 255, 0.33);
    }
  }
}
</style>
