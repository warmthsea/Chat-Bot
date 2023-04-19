<script lang="ts" setup>
import { useMsgStore } from '~/store/msg'

const msgStore = useMsgStore()
</script>

<template>
  <div>
    <div
      v-for="i in msgStore.contentlist" :key="i"
      class="flex justify-end"
    >
      <div class="rounded-xl bg-purple-400 text-white inline-block p-2 m-2 ">
        {{ i }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
