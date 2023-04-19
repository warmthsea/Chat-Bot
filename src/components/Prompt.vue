<script lang="ts" setup>
const emit = defineEmits(['sendMsg'])
const list = ['Coding Help', 'Cooking']
</script>

<template>
  <div class="bg-stone-100 select-none my-2 py-3 pl-3 rounded-sm text-gray-500">
    <div class="text-sm">
      Try asking me about
    </div>
    <div class="mt-2 flex">
      <div
        v-for="i in list" :key="i"
        class="p-1.5 my-1 mr-4 cursor-pointer hover:border-purple-300 text-sm rounded border border-gray-300"
        @click="emit('sendMsg', i) "
      >
        {{ i }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
