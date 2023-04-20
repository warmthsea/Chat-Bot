<script lang="ts" setup>
import type { MenuItemType } from '~/types'

defineProps<{
  item: MenuItemType
  active: MenuItemType
}>()
</script>

<template>
  <div
    class="bg-stone-50 rounded-lg overflow-hidden h-16 px-4 flex items-center justify-between cursor-pointer hover:bg-gray-100"
    :class="{
      '!cursor-not-allowed opacity-50': item.disabled,
      '!bg-purple-50 hover:!bg-purple-50': item.name === active.name,
    }"
  >
    <div class="flex items-center">
      <div class="rounded-full overflow-hidden w-9 h-9 mr-2">
        <img v-if="item.icon" class="w-full h-full" :src="item.icon">
        <slot />
      </div>
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
</template>
