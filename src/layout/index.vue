<script lang="ts" setup>
import { nextTick, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { shell } from 'electron'
import type { MenuItemType } from '~/types'

const route = useRoute()
const router = useRouter()

const list: MenuItemType[] = [
  { name: 'ChatGPT', icon: 'https://poe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FchatGPTAvatar.04ed8443.png&w=48&q=75' },
  { name: 'GPT-4', introduction: 'Limited Access', icon: 'https://poe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FopenAIBlue.915c0399.png&w=48&q=75' },
  { name: 'Dragonfly', disabled: true, icon: 'https://poe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FblueAvatar.d858b62d.png&w=48&q=75' },
  { name: 'Sage', icon: 'https://poe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FpurpleAvatar.d066304c.png&w=48&q=75' },
]

const mainRef = ref<HTMLElement>()

const active = ref<MenuItemType>(list[0])
function goRoute(item: MenuItemType) {
  if (item.disabled)
    return
  active.value = item
  router.push(item.name)
}

watch(() => route.path, async () => {
  await nextTick()
  mainRef.value?.scrollTo(0, mainRef.value.scrollHeight)
}, { immediate: true })
</script>

<template>
  <div class="h-full flex">
    <div class="w-64 p-4 px-5 select-none flex flex-col">
      <div class="h-12 font-semibold flex items-center justify-center">
        <img src="/logo.svg" class="w-8 h-8 animate-pulse">
        <span class="mt-1 ml-1.5 mr-4">Chat Bot</span>
      </div>
      <div class="bg-stone-50 mt-4 rounded-lg overflow-hidden">
        <div
          v-for="(item, index) in list" :key="item.name"
          class="h-16 px-4 border-b flex items-center justify-between cursor-pointer"
          :class="{
            'border-none': index === list.length - 1,
            '!cursor-not-allowed opacity-50': item.disabled,
            'hover:bg-gray-100': !item.disabled,
            'bg-purple-50 hover:bg-purple-50': item.name === active.name,
          }"
          @click="goRoute(item)"
        >
          <div class="flex items-center">
            <img :src="item.icon" class="rounded-full w-9 mr-2">
            <div>
              <p>
                {{ item.name }}
              </p>
              <p v-if="item.introduction" class="opacity-75 text-sm">
                {{ item.introduction }}
              </p>
            </div>
          </div>
          <svg t="1681801309527" class="icon w-4" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2622" width="128" height="128"><path d="M722.438 510.815c-0.246-0.246-0.513-0.454-0.766-0.69l-299.893-299.892c-14.231-14.24-37.291-14.24-51.529 0-14.241 14.231-14.241 37.291 0 51.529l274.851 274.859-274.849 274.851c-14.241 14.237-14.241 37.301 0 51.532 7.116 7.119 16.436 10.682 25.764 10.682 9.321 0 18.644-3.563 25.763-10.682l299.905-299.901c0.246-0.234 0.51-0.438 0.751-0.678 7.129-7.13 10.685-16.469 10.674-25.804 0.006-9.337-3.55-18.676-10.674-25.804z" :fill="item.name === active.name ? 'purple' : '#272636'" p-id="2623" /></svg>
        </div>
      </div>

      <div
        class="mt-auto mb-4 flex items-center justify-center text-white rounded-full h-11 w-full cursor-pointer bg-stone-300 duration-75 hover:bg-stone-400"
        @click="shell.openExternal('https://github.com/warmthsea/Chat-Bot')"
      >
        GitHub
      </div>
    </div>
    <div class="flex-1">
      <div class="h-full flex flex-col border-l">
        <div class="h-14 select-none bg-stone-50 border-b flex">
          <div class="flex-1 flex items-center justify-center">
            <img :src="active.icon" class="rounded-full w-7 mr-2">
            <span class="font-semibold mx-0.5">{{ active.name }}</span>
            <svg t="1681801309527" class="icon w-4 opacity-80" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2622" width="128" height="128"><path d="M722.438 510.815c-0.246-0.246-0.513-0.454-0.766-0.69l-299.893-299.892c-14.231-14.24-37.291-14.24-51.529 0-14.241 14.231-14.241 37.291 0 51.529l274.851 274.859-274.849 274.851c-14.241 14.237-14.241 37.301 0 51.532 7.116 7.119 16.436 10.682 25.764 10.682 9.321 0 18.644-3.563 25.763-10.682l299.905-299.901c0.246-0.234 0.51-0.438 0.751-0.678 7.129-7.13 10.685-16.469 10.674-25.804 0.006-9.337-3.55-18.676-10.674-25.804z" fill="'#272636'" p-id="2623" /></svg>
          </div>
          <Event />
        </div>
        <div class="flex-1 w-full pr-0.5 overflow-hidden">
          <div ref="mainRef" class="px-4 h-full overflow-y-scroll">
            <router-view />
          </div>
        </div>
        <InputBox />
      </div>
    </div>
  </div>
</template>
