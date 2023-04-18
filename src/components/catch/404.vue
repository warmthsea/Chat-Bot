<script lang="ts" setup></script>

<template>
  <div class="w-screen h-screen flex flex-col items-center justify-center text-5xl">
    404

    <button
      class="btn dark:dark-btn text-xl mt-6 rounded border px-3 p-2 duration-150 active:opacity-60 hover:bg-slate-100"
      @click="$router.push('/')"
    >
      回到首页
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
