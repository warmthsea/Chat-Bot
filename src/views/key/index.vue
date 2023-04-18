<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="">
    <button type="button" @click="router.push('/')">
      go index
    </button>
  </div>
</template>

<style lang="scss" scoped>

</style>
