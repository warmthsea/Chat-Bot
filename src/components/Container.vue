<script lang="ts" setup>
onMounted(() => {

})
</script>

<template>
  <div class="w-screen h-screen flex flex-col">
    <div class="h-14 flex items-center justify-between pl-6 select-none bg-stone-50">
      <Logo />
      <Event class="app-no-drag" />
    </div>
    <div class="app-no-drag flex-1">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
