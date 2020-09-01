import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 9
  },
  mutations: {
    add (state) {
      state.count++
    },
    addN (state, step) {
      state.count += step
    },
    jian (state) {
      state.count--
    },
    jianS (state, step) {
      state.count -= step
    }
  },
  actions: {
    sadd (context) {
      setTimeout(() => {
        context.commit('add')
      }, 3000)
    },
    saddN (context, step) {
      setTimeout(() => {
        context.commit('addN', step)
      }, 3000)
    }
  },
  modules: {
  },
  getters: {
    show (state) {
      return state.count
    }
  }
})
