import { createStore } from './myvuex'

export default createStore({
  state() {
    return {
      count: 55,
    }
  },
  mutations: {
    addCount(state) {
      state.count++
    },
  },
})
