import { defineStore } from "pinia";
import { APPS, DEFAULT_TASKBAR_APPS } from '../constant/apps'
export const taskApps = APPS.filter(x => DEFAULT_TASKBAR_APPS.includes(x.name));


export const useTasks = defineStore('task', {
  state: () => ({
    apps: taskApps,
    prev: false,
    prevApp: '',
    prevPos: 0,
    align: 'center',
    search: true,
    widgets: true,
    audio: 3
  })
})
