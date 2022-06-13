import { defineStore } from "pinia";
const wps = Number(localStorage.getItem("wps")) || 0;
const locked = localStorage.getItem("locked");

const walls = [
  "default/img0.jpg",
  "dark/img0.jpg",
  "ThemeA/img0.jpg",
  "ThemeA/img1.jpg",
  "ThemeA/img2.jpg",
  "ThemeA/img3.jpg",
  "ThemeB/img0.jpg",
  "ThemeB/img1.jpg",
  "ThemeB/img2.jpg",
  "ThemeB/img3.jpg",
  "ThemeC/img0.jpg",
  "ThemeC/img1.jpg",
  "ThemeC/img2.jpg",
  "ThemeC/img3.jpg",
  "ThemeD/img0.jpg",
  "ThemeD/img1.jpg",
  "ThemeD/img2.jpg",
  "ThemeD/img3.jpg",
]

const themes = [
  "default",
  "dark",
  "ThemeA",
  "ThemeB",
  "ThemeD",
  "ThemeC",
]


export const useWallpaper = defineStore('wallpaper', {
  state: () => ({
    themes: themes,
    wps: wps,
    src: walls[wps],
    locked: !(locked == 'false'),
    booted: false,
    act: '',
    dir: 0
  }),
  getters: {

  },
  actions: {
    setWallUnLock() {
      this.locked = false
      localStorage.setItem("locked", false as unknown as string)
    },
    setWallUnExt() {
      const twps = (this.wps + 1) % walls.length;
      localStorage.setItem("wps", twps as unknown as string)
      this.wps = twps
      this.src = walls[twps]
    },
    setWallAlock() {
      this.locked = true
      this.dir = -1
    },
    setWallBooted() {
      this.booted = true
      this.dir = 0
      this.act = ''
    },
    setWallRestart() {
      this.booted = false
      this.dir = -1
      this.locked = true
      this.act = 'restart'
    },
    setWallShutdn() {
      this.booted = false
      this.dir = -1
      this.locked = true
      this.act = 'shutdn'
    },
    setWallSet(payload: number) {
      let isIndex = !Number.isNaN(parseInt),
        wps = 0, src = ""
      if (isIndex) {
        wps = payload
        src = walls[payload]
      } else {
        src = payload.toString()
        wps = walls.indexOf(payload.toString())
      }
      this.wps = wps
      this.src = src
    }
  }
})
