import { createRouter, createWebHashHistory } from 'vue-router'
// import { createRouter, createWebHashHistory } from './router/myrouter.js'
const router = createRouter({
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
    {
      path: '/router',
      component: import('./page/router.vue'),
    },
    {
      path: '/render',
      component: import('./page/render'),
    },
  ],
})

export default router
