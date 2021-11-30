import { reactive } from 'vue'
const store = reactive({
  nickname: 'cc',
})
export default function getStore() {
  return store
}
