<script lang="ts" setup>
import { ipcRenderer } from 'electron'

const hover = ref(false)
</script>

<template>
  <div class="flex items-center pr-2">
    <div
      class="w-7 h-7 duration-75 rounded flex items-center justify-center cursor-pointer hover:bg-stone-200"
      @click="ipcRenderer.send('window-open-tools')"
    >
      <svg
        t="1681808261161"
        class="icon w-4"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="23780"
        width="128"
        height="128"
      >
        <path
          d="M864 640a32 32 0 0 1 64 0v224.096A63.936 63.936 0 0 1 864.096 928H159.904A63.936 63.936 0 0 1 96 864.096V159.904C96 124.608 124.64 96 159.904 96H384a32 32 0 0 1 0 64H192.064A31.904 31.904 0 0 0 160 192.064v639.872A31.904 31.904 0 0 0 192.064 864h639.872A31.904 31.904 0 0 0 864 831.936V640z m-485.184 52.48a31.84 31.84 0 0 1-45.12-0.128 31.808 31.808 0 0 1-0.128-45.12L815.04 166.048l-176.128 0.736a31.392 31.392 0 0 1-31.584-31.744 32.32 32.32 0 0 1 31.84-32l255.232-1.056a31.36 31.36 0 0 1 31.584 31.584L924.928 388.8a32.32 32.32 0 0 1-32 31.84 31.392 31.392 0 0 1-31.712-31.584l0.736-179.392L378.816 692.48z"
          fill="#515151"
          p-id="23781"
        />
      </svg>
    </div>

    <div
      class="w-7 h-7 mx-1 duration-75 rounded flex items-center justify-center cursor-pointer hover:bg-stone-200"
      @click="ipcRenderer.send('window-minimize')"
    >
      <svg
        t="1681803669490"
        class="icon w-4"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3610"
        width="128"
        height="128"
      >
        <path
          d="M863.7 552.5H160.3c-10.6 0-19.2-8.6-19.2-19.2v-41.7c0-10.6 8.6-19.2 19.2-19.2h703.3c10.6 0 19.2 8.6 19.2 19.2v41.7c0 10.6-8.5 19.2-19.1 19.2z"
          p-id="3611"
          fill="#515151"
        />
      </svg>
    </div>
    <div
      class="w-7 h-7 duration-75 mr-1 rounded flex items-center justify-center cursor-pointer hover:bg-red-500"
      @click="ipcRenderer.send('window-close')"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <svg
        t="1681803819217"
        class="icon w-4"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="13275"
        width="128"
        height="128"
      >
        <path
          d="M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z"
          :fill="hover ? '#fff' : '#515151'"
          p-id="13276"
        />
      </svg>
    </div>
  </div>
</template>
