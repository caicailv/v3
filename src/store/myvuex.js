import { reactive } from 'vue'
class Store {
  constructor(options) {
    this._state = reactive({
      data: options.state,
    })
    this._mutations = options.mutations
  }
}

export const createStore = (options) => new Store(options)
export function useStore() {
  
}
