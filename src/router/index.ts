import LoginPageVue from '@/pages/LoginPage.vue';
import MainPageVue from '@/pages/MainPage.vue';
import SuccessPageVue from '@/pages/SuccessPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPageVue,
      meta: {
        title: 'Main Page',
      },
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPageVue,
      meta: {
        title: 'Login Page',
      },
    },
    {
      path: '/success',
      name: 'SuccessPage',
      component: SuccessPageVue,
      meta: {
        title: 'Success Page',
      },
    },
  ],
});

router.beforeEach((to, from, next): void => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
