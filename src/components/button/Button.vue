<template>
  <div class="gg">
    <button class="ttt" @click="tabShow">
      <slot></slot>
    </button>
    <div class="bb">搜索树</div>
    <div class="cc" v-if="show">show</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const emit = defineEmits(['change', 'delete'])
// setInterval(() => {
//   emit("change")
//   emit("change")
// }, 500)
let show = ref(false)
function tabShow() {
  show.value = true
}
</script>

