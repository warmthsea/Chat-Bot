import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'default-layout',
      component: () => import('@/layout/index.vue'),
      redirect: '/ChatGPT',
      children: [
        {
          path: '/ChatGPT',
          name: 'chat-gpt',
          component: () => import('@/views/ChatGPT.vue'),
        },
        {
          path: '/GPT-4',
          name: 'gpt-4',
          component: () => import('@/views/GPT-4.vue'),
        },
        {
          path: '/Sage',
          name: 'sage',
          component: () => import('@/views/Sage.vue'),
        },
      ],
    },
    {
      path: '/key',
      name: 'key',
      component: () => import('~/views/key/index.vue'),
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: () => import('@/components/catch/404.vue'),
    },
  ],
})
