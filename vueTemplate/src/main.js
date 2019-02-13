// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import vFilters from './untils/filter.js'
// import FastClick from 'fastclick'

// vant
import { Loading } from 'vant';

Vue.use(Loading);
// 注册全局过滤器

Object.keys(vFilters).forEach(key => Vue.filter(key, vFilters[key]))

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
