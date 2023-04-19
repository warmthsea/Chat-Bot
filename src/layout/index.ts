import type { Router } from 'vue-router'
import type InputBoxVue from '~/components/InputBox.vue'
import { menuList } from '~/const/menu'
import type { MenuItemType } from '~/types'

export function onMenu(router: Router) {
  const active = ref<MenuItemType>(menuList[0])
  function goRoute(item: MenuItemType) {
    if (item.disabled)
      return
    active.value = item
    router.push(item.name)
  }

  return {
    active, goRoute,
  }
}

export function onInputBox() {
  const inputBoxRef = ref<InstanceType<typeof InputBoxVue>>()

  return { inputBoxRef }
}
