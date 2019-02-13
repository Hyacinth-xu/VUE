import Vue from 'vue'
import Vuex from 'vuex'
import {
  SET_POST_TYPE,
  IS_UP,
  SET_SELECTED_YEAR,
  SET_SELECTED_MONTH
} from './mutationTypes.js'

Vue.use(Vuex)

const state = {
  isUp: window.sessionStorage.getItem('postType') ? Number(window.sessionStorage.getItem('postType')) : false,
  postType: window.sessionStorage.getItem('postType') ? Number(window.sessionStorage.getItem('postType')) : null, // 4 总监; 5 合伙人
  selectedYear: new Date().getFullYear(),
  selectedMonth: new Date().getMonth() + 1
}

const mutations = {
  [SET_POST_TYPE] (state, data) {
    state.postType = data
  },
  [IS_UP] (state, data) {
    state.isUp = data
  },
  [SET_SELECTED_YEAR] (state, data) {
    state.selectedYear = data
  },
  [SET_SELECTED_MONTH] (state, data) {
    state.selectedMonth = data
  }
}

const actions = {
}

export default new Vuex.Store({
  strict: false, // 请确保在发布环境下关闭严格模式，以避免性能损失。
  state,
  mutations,
  actions
})
