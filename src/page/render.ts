import { defineComponent, h } from 'vue'

let render = h('div', {
  class:'red'
}, 'h1h1h1h1hh1')
console.log('render',render);

export default defineComponent({
  setup() {
    return () => h('h1', {}, 'h1h1h1h1hh1')
  },
})
