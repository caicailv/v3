import Button from './Button.vue'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
describe('按钮测试', () => {
  it('按钮能够显示文本', () => {
    const content = '下老弟'
    const wrapper = mount(Button, {
      slots: {
        default: content,
      },
    })
    // console.log('wrapper', wrapper.contains)
    // expect(wrapper.contains()).toBe(content)
  })
 
})
