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
