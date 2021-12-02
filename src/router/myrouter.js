import { inject, ref } from 'vue'
const ROUTER_KEY = '__router__'
class Router {
  constructor({ history, routes }) {
    this.history = history
    this.routes = routes
    this.current = ref(this.history.url)
    this.history.bindEvent((hashEvent) => {
      this.current.value = window.location.hash.slice(1)
    })
  }
  install(app) {
    app.provide(ROUTER_KEY, this)
  }
}

export function createWebHashHistory() {
  function bindEvent(fn) {
    window.addEventListener('hashchange', fn)
  }
  return { bindEvent, url: window.location.hash.slice(1) || '/' }
}
export function createRouter(options) {
  return new Router(options)
}
export function useRouter() {
  return inject(ROUTER_KEY)
}
