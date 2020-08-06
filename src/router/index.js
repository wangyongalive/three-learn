import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
const routes = [
    {
      path: '/process',
      name: 'process',
      component: r => require.ensure([], () => r(require('../components/process/threeMap')), 'process'),
      meta: {
        title: '后期处理'
      }
    },
    {
      path: '/model',
      name: 'model',
      component: r => require.ensure([], () => r(require('../components/Model/Model')), 'model'),
      meta: {
        title: '港航模型'
      }
    },
    {
      path: '/',
      name: 'home',
      component: r => require.ensure([], () => r(require('../components/Home/Home')), 'home'),
      meta: {
        title: '主页'
      }

    }
  ]
;
const router = new Router({
  routes
});
export default router;

