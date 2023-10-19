import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
  state() {
    return {
      userInfo: {}
    }
  },
  actions: {
    saveData(data: any) {
      this.userInfo = data
    }
  },
  persist: {
    storage: {
      getItem(key: string): string | null {
        return uni.getStorageSync(key)
      },
      setItem(key: string, value: string) {
        return uni.setStorageSync(key, value)
      }
    }
  }
})
