import type { MenuItemType } from '~/types'

export const menuList: MenuItemType[] = [
  { name: 'ChatGPT', icon: 'https://poe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FchatGPTAvatar.04ed8443.png&w=48&q=75' },
  { name: 'GPT-4', introduction: 'Limited Access', icon: 'https://poe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FopenAIBlue.915c0399.png&w=48&q=75' },
  { name: 'Dragonfly', disabled: true, icon: 'https://poe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FblueAvatar.d858b62d.png&w=48&q=75' },
  { name: 'Sage', icon: 'https://poe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FpurpleAvatar.d066304c.png&w=48&q=75' },
]
