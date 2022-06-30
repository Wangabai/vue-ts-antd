/*
 * @Author: 王鑫
 * @Description: 路由入口
 * @Date: 2022-04-01 10:15:16
 */
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
