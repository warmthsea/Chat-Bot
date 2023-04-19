import { defineStore } from 'pinia'

export const useMsgStore = defineStore('msg', {
  state: () => {
    const contentlist = ref<string[]>([])

    return {
      contentlist,
    }
  },
  persist: {
    storage: sessionStorage,
  },
})
