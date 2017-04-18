import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Work from '@/components/Work';
import About from '@/components/About';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/work/:id',
      name: 'work',
      component: Work,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '*',
      redirect: 'home',
    },
  ],
});
