<script setup lang="ts">
console.log('[App.vue]', `Hello world from Electron ${process.versions.electron}!`)
</script>

<template>
  <div class="h-screen w-screen">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>
