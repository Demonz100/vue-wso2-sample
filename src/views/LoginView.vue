<template>
  <div class="home">
    <div class="home">
      <button class="btn" @click="handleLogin()">Login</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'
import { Hooks } from '@asgardeo/auth-spa'
import { auth } from '@/services/auth'
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const isError = ref(false)
const isLoading = ref(true)

const authStore = useAuthStore()

const handleLogin = () => {
  authStore.handleLogin()
}

// Handling Authentication
auth()
  ?.signIn({ callOnlyOnRedirect: true })
  .catch(() => {
    isError.value = true
  })
  .finally(() => {
    isLoading.value = false
  })

auth()?.on(Hooks.SignIn, () => {
  authStore.checkForAuth()
  router.push('/home')
})
</script>
