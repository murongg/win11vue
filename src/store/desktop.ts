import { defineStore } from "pinia";
import { APPS, DEFAUILT_DESKDTOP_APPS } from '../constant/apps'

const desktopApps = APPS.filter(x => DEFAUILT_DESKDTOP_APPS.includes(x.name)).sort((a, b) => {
  return DEFAUILT_DESKDTOP_APPS.indexOf(a.name) > DEFAUILT_DESKDTOP_APPS.indexOf(b.name) ? 1 : -1;
});

export const useDesktop = defineStore('desktop', {
  state: () => ({
    apps: desktopApps,
    hide: false,
    size: 1,
    sort: "none",
    abOpen: false
  })
})
