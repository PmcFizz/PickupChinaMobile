import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  {
    path: '/authredirect',
    component: Layout,
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'personal',
    hidden: true
  },
  {
    path: '/personal',
    component: Layout,
    noDropdown: true,
    children: [
      {
        path: '',
        component: _import('personal/index'),
        name: '个人中心',
        meta: { title: '个人中心', icon: 'dashboard', noCache: true }
      },
      {
        path: 'info',
        component: _import('personal/info'),
        name: '个人信息',
        meta: { title: '个人信息', icon: 'dashboard', noCache: true }
      }
    ]
  },
 ]

 export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})