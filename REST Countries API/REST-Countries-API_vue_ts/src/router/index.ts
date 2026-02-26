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
          // 原先路徑用'/detail'寫死，導致後面卡片不能顯示他的路徑位置，要改成'/detail/:id'
      path: '/detail/:id',
      name: 'detail',
      component: () => import('../views/CountryCard.vue'),
    },
  ],
})

export default router
