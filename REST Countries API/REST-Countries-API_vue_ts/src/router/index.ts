import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      // 路徑報錯 => ts不認得vue檔案，要到env.d.ts加入宣告
    },
        {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/CardDetail.vue'),
    },
  ],
})

export default router
