import { defineStore } from 'pinia'

export const useStateStore = defineStore('state', {
  state: () => ({
    loading: false,
    success: false,
    error: null,
    state: false,
    time: import.meta.env.VITE_ERROR_TIMEOUT
  }),
  actions: {
    Loading() {
      this.state = true
      this.loading = true
    },
    Success() {
      this.state = false
      this.error = null
      this.success = false
      this.loading = false

      setTimeout(() => {
        this.Finish()
      }, this.time)
    },
    Error(message) {
      this.error = message
      this.success = false
      this.state = true
      this.loading = false

      setTimeout(() => {
        this.Finish()
      }, this.time)
    },
    Finish() {
      this.state = false
      this.loading = false
      this.success = false
      this.error = null
    }
  }
})
