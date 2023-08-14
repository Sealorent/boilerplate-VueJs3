import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => ({
    message: '',
    type: '',
    show: false
  }),
  actions: {
    showAlert(type, message) {
      this.show = true
      this.message = message
      this.type = type
      setTimeout(() => {
        this.clear()
      }, 2000)
    },
    clear() {
      this.show = false
    },
    hideAlert() {
      this.message = ''
    }
  }
})
