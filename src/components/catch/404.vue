<script lang="ts" setup></script>

<template>
  <Container>
    <div class="w-full h-full flex flex-col items-center justify-center text-5xl">
      404
      <button
        class="btn cursor-pointer dark:dark-btn  text-xl mt-6 rounded border px-3 p-2 duration-150 active:opacity-60 hover:bg-slate-100"
        @click="$router.push('/ChatGPT')"
      >
        回到首页
      </button>
    </div>
  </Container>
</template>

<style lang="scss" scoped></style>
