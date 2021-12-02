import { defineComponent,ref } from 'vue'
export default defineComponent({
  setup() {
    console.log('asd')
    let count = ref(true)
    setInterval(() => {
      count.value = !count.value
    }, 500)
    return () => <div>{count.value ? 'a' : 'b'}</div>
  },
})
