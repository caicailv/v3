// import { createStore } from './myvuex'
import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 55,
  },
  mutations: {
    addCount(state) {
      state.count++
    },
  },
  getters: {
    getCountTwo(state) {
      return state.count * 2
    },
  },
  actions: {
    asyncAdd({ commit }) {
      setTimeout(() => {
        commit('addCount')
      }, 2000)
    },
  },
})
