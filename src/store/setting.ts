import { defineStore } from "pinia";

export const useSetting = defineStore('setting', {
  state: () => ({
    system: {
      power: {
        saver: {
          state: false,
        },
        battery: 100,
      },
      display: {
        brightness: 100,
        nightlight: {
          state: false,
        },
        connect: false,
      },
    },
    person: {
      name: "Blue Edge",
      theme: "light",
      color: "blue",
    },
    devices: {
      bluetooth: false,
    },
    network: {
      wifi: {
        state: true,
      },
      airplane: false,
    },
    privacy: {
      location: {
        state: false,
      },
    },
  })
})
