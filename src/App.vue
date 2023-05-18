<template>
  <NavigationBar />
  <RouterView />
  <LoadingScreen v-if="authStore.getIsLoading"/>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { useAuthStore } from '@/stores/auth';

const NavigationBar = defineAsyncComponent(()=>import('./components/NavigationBar.vue'))
const LoadingScreen = defineAsyncComponent(()=>import('./components/LoadingScreen.vue'))

const authStore = useAuthStore()
</script>