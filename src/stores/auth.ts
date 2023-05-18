import { auth } from '@/services/auth'
import { defineStore } from 'pinia'

interface State {
  isAuth: boolean
  isLoading: boolean
}

export const useAuthStore = defineStore('auth', {
  state: (): State => {
    return {
      isAuth: false,
      isLoading: false
    }
  },

  getters: {
    getIsAuth: (state) => state.isAuth,
    getIsLoading: (state) => state.isLoading
  },
  
  actions: {
    async checkForAuth() {
      this.isLoading = true
      await auth()
        ?.isAuthenticated()
        .then((res) => {
          if (res !== undefined) {
            this.isAuth = res
          }
        })
      this.isLoading = false
    },

    async handleLogout() {
      this.isLoading = true
      await auth()
        ?.signOut()
        .then((res) => {
          if (res) {
            this.isAuth = false
          }
        })
      this.isLoading = false
    },

    async handleLogin() {
      this.isLoading = true
      await auth()?.signIn().then(()=>{
        this.isAuth = true
      })
      this.isLoading = false
    }
  }
})
