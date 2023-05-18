<template>
  <div class="container">
    <button class="btn" @click="getBasicUserInfo()">Get Basic User Info</button>
    <button class="btn" @click="revokeAccessToken()">
      Revoke Access Token (Clear Access Token)
    </button>
    <button class="btn" @click="getOIDCServiceEndpoints()">Get OIDC Service Endpoints</button>
    <button class="btn" @click="getDecodedIDToken()">Get Decoded ID Token</button>
    <button class="btn" @click="getIDToken()">Get ID Token</button>
    <button class="btn" @click="getAccessToken()">Get Access Token</button>
    <button class="btn" @click="getIDPAccessToken()">Get IDP Access Token</button>
    <button class="btn" @click="getDataLayer()">Get Data Layer</button>
    <button class="btn" @click="refreshAccessToken()">Refresh Access Token</button>
    <button class="btn" @click="isAuthenticated()">Is Authenticated?</button>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'
import { auth } from '@/services/auth'
import { Hooks } from '@asgardeo/auth-spa'

const isAuthenticated = async () => {
  await auth()
    ?.isAuthenticated()
    .then((value) => {
      console.log('Authenticated: ', value)
    })
}

const getBasicUserInfo = async () => {
  await auth()
    ?.getBasicUserInfo()
    .then((value) => {
      console.log('Basic User Info: ', value)
    })
}

const revokeAccessToken = async () => {
  await auth()?.revokeAccessToken()
}

auth()?.on(Hooks.RevokeAccessToken, () => {
  router.push('/login')
})

const getOIDCServiceEndpoints = async () => {
  await auth()
    ?.getOIDCServiceEndpoints()
    .then((value) => {
      console.log('OIDC Service Endpoints: ', value)
    })
}

const getDecodedIDToken = async () => {
  await auth()
    ?.getDecodedIDToken()
    .then((value) => {
      console.log('Decoded ID Token: ', value)
    })
}

const getIDToken = async () => {
  await auth()
    ?.getIDToken()
    .then((value) => {
      console.log('ID Token: ', value)
    })
}

const getAccessToken = async () => {
  await auth()
    ?.getAccessToken()
    .then((value) => {
      console.log('Access Token: ', value)
    })
}

const getIDPAccessToken = async () => {
  await auth()
    ?.getIDPAccessToken()
    .then((value) => {
      console.log('IDP Access Token: ', value)
    })
}

const getDataLayer = async () => {
  await auth()
    ?.getDataLayer()
    .then((value) => {
      console.log('Data Layer: ', value)
    })
}

const refreshAccessToken = async () => {
  await auth()
    ?.refreshAccessToken()
    .then(() => {
      getAccessToken()
    })
}
</script>

<style scoped></style>
