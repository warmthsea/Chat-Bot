<script lang="ts" setup>
import { shell } from 'electron'
import { onInputBox, onMenu } from './index'
import HeaderTitle from '~/components/HeaderTitle.vue'
import { menuList } from '~/const/menu'
import { useMsgStore } from '~/store/msg'

const route = useRoute()
const router = useRouter()
const msgStore = useMsgStore()

const mainRef = ref<HTMLElement>()

const { active, goRoute } = onMenu(router)
const { inputBoxRef } = onInputBox()

async function msgReceive(val: string) {
  msgStore.contentlist.push(val)
  await nextTick()
  mainRef.value?.scrollTo(0, mainRef.value.scrollHeight)
}

watch(() => route.path, async () => {
  await nextTick()
  mainRef.value?.scrollTo(0, mainRef.value.scrollHeight)
  inputBoxRef.value?.focus()
}, { immediate: true })
</script>

<template>
  <div class="h-full flex">
    <div class="app-no-drag w-64 p-4 px-5 select-none flex flex-col">
      <Logo />
      <Menu :active="active" :list="menuList" @change="goRoute" />
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
          <HeaderTitle :active="active" />
          <Event class="app-no-drag" />
        </div>
        <div class="app-no-drag flex-1 w-full pr-0.5 overflow-hidden">
          <div ref="mainRef" class="pr-0.5 h-full overflow-y-scroll">
            <Prompt @send-msg="msgReceive" />
            <div class="pl-4 pb-60">
              <router-view />
            </div>
          </div>
        </div>
        <InputBox ref="inputBoxRef" class="app-no-drag" @send-msg="msgReceive" />
      </div>
    </div>
  </div>
</template>
