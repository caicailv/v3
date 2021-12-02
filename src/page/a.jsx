import { defineComponent,ref } from 'vue'
export default defineComponent({
  setup() {
    let count = ref(true)
    setInterval(() => {
      count.value = !count.value
    }, 500)
    return () => <div style="background:red" onClick={()=>alert(2)}>{count.value ? 'a' : 'b'}</div>
  },
})
