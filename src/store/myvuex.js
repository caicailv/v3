import { inject, reactive } from 'vue'
const STORE_KEY = '__store__'
class Store {
  constructor(options) {
    let state = options.state
    if (typeof options.state === 'function') {
      state = options.state()
    }
    this._state = reactive({ data: state })
    this._mutations = options.mutations
    this._getters = options.getters
  }
  install(app) {
    app.provide(STORE_KEY, this)
  }
  get state() {
    return this._state.data
  }
  commit(type, payload) {
    const entry = this._mutations[type]
    if (!entry) return console.error(`no ${type} is mutation`)
    entry(this.state, payload)
  }
  get getters() {
    return this._getters
  }
}

export const createStore = (options) => new Store(options)
export function useStore() {
  return inject(STORE_KEY)
}
