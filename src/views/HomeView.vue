<template>
  <main>
    <div class="container">
      <div class="banner">
        <h1>Signed in successfully</h1>
      </div>
    </div>
    <br>
    <hr>
    <br>
    <BasicFuntionalities />
  </main>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const BasicFuntionalities = defineAsyncComponent(()=>import("../components/BasicFunctionalities.vue"))
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
