import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes.js'
import { setTitle } from '@/untils/index.js'

Vue.use(Router)

const vueRouter = new Router({
  mode: 'history',
  // mode: 'hash',
  routes
})

// vueRouter.beforeEach((to, from, next) => {
//   // 检查本地登录信息完整性以及是否超时
//   next()
// })

vueRouter.afterEach((to, from) => {
  // 设置标题
  setTitle(to.meta.title)
})

export default vueRouter
