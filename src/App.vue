<script setup lang="ts">

  import { useAuth0 } from '@auth0/auth0-vue';
  const auth0 = useAuth0();

  let isAuthenticated = auth0.isAuthenticated;

  function login()  {
    auth0.loginWithRedirect();
  }

  function logout() {
    auth0.logout({ logoutParams: { returnTo: window.location.origin } });
  }
</script>

<template>
  <div v-if="isAuthenticated">
    <button id="loginButton" @click="login()" class="btn btn-primary">Login</button>
    <button v-if="isAuthenticated" id="logoutButton" @click="logout()" class="btn btn-secondary">Logout</button>
  </div>
</template>

<style scoped>
</style>
