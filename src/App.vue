<template>
  <div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">{{ helloMessage }}</h1>
      <div class="mockup-window border bg-base-300">
        <div class="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'App',
    data() {
      return {
        helloMessage: 'Hello Scofield'
      }
    }
  })
</script>

<style scoped>
</style>
