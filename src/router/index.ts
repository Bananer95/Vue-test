import LoginPageVue from '@/pages/LoginPage.vue';
import MainPageVue from '@/pages/MainPage.vue';
import SuccessPageVue from '@/pages/SuccessPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPageVue,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPageVue,
    },
    {
      path: '/success',
      name: 'success',
      component: SuccessPageVue,
    },
  ],
});

export default router;
