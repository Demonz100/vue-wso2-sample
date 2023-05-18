<template>
  <ul>
    <li><a @click="$router.push({ path: '/home' })">Home</a></li>
    <li><a @click="$router.push({ path: '/about' })">About</a></li>
    <li><a v-if="authStore.getIsAuth" @click="handleLogout()">Logout</a></li>
  </ul>
  <br />
  <hr />
  <br />
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore()

const handleLogout = () => {
  authStore.handleLogout()
}

authStore.checkForAuth()
</script>

<style scoped>
ul {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
}
li {
  padding: 6px 0;
}
a {
  position: relative;
  display: block;
  padding: 4px 0;
  font-family: Lato, sans-serif;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
}
a::after {
  position: absolute;
  content: '';
  top: 100%;
  left: 0;
  width: 100%;
  height: 3px;
  background: #3498db;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s;
}

a:hover {
  color: #95a5a6;
}

a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
</style>