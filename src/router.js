import { createRouter, createWebHashHistory } from 'vue-router'
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/index',
      component: import('./page/index.vue'),
    },
    {
      path: '/animation',
      component: import('./page/animation.vue'),
    },

    {
      path: '/:pathMatch(.*)*',
      component: import('./page/404.vue'),
    },
    {
      path: '/store',
      component: import('./page/store.vue'),
    },
  ],
})
