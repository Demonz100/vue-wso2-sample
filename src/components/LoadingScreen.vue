<template>
  <Teleport to="body">
    <div class="loader-container">
      <span class="loader"></span>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>

</script>

<style>
.loader-container {
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: rgb(183 183 183 / 42%);
position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999;
}

.loader-container .loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid hsla(160, 100%, 37%, 1);
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
</style>