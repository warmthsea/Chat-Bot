<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="">
    dpt
    <div v-for=" i in 100" :key="i">
      test scroll -{{ i }}
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
