## vite+v3+setup 学习

### 组件相关

具体实例代码-> `components/Rate` 组件

#### 局部导入组件

局部导入组件无需再使用`component api`,只要引入组件,即可在模板中使用

```vue
<template>
  <h1 @click="toggle">click</h1>
  <Rate theme="#fff000" v-model="val" />
</template>
<script setup>
import Rate from './components/Rate.vue'
</script>
```

#### 父子传值 + v-module

使用 `defineEmits`触发子传父,使用 `defineProps` 接收父组件传来的值,如果想用`v-model`,则`props`的参数名改成`modelValue`,触发事件名用 `update:modelValue`

```vue
<script setup>
import { ref, watch } from 'vue'
let emit = defineEmits(['update:modelValue'])
let { modelValue: val, theme } = defineProps({
  modelValue: {
    type: Number,
    default: 2,
  },
  theme: {
    type: String,
    default: 'red',
  },
})
let rateNum = ref(val)
watch(rateNum, (e) => {
  emit('update:modelValue', e)
})
</script>
```

#### 插槽

和 v2 没区别

#### 实现v3版vuex
vuex和自定义全局变量的差别:

vuex相对于自定义变量的优点:
  1. 数据是响应式,可以直接放在模板里用
  2. 组件中不能直接修改state,只能提交mutation或者action, 数据变化更清晰
  3. 可以使用vue对应浏览器插件,调试更方便

缺点: 写法不简洁需要定义和记忆API

```js

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
  // 未完成
  get getters() {
    return this._getters
  }
}

export const createStore = (options) => new Store(options)
export function useStore() {
  return inject(STORE_KEY)
}

```

#### vue router
v3->vue-router的简单实现
```js
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


```
vue-view的简单实现?

#### h函数
h函数用来直接返回虚拟节点(VNode),以便于实现一些template不好实现的功能,
template正常来说,编译后也会返回一个VNode
h函数写起来太过于繁琐,不利于维护

```js
import { defineComponent, h } from 'vue'

let VNode = h('h1', {}, 'h1h1h1h1hh1')
console.log('VNode',VNode);

export default defineComponent({
  setup() {
    return () => h('h1', {}, 'h1h1h1h1hh1')
  },
})

```
