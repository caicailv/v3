<script setup lang="ts">
import Rate from '../components/Rate.vue';
import Button from '../components/button/Button.vue'
import { useFullscreen } from '@vueuse/core';
const { isFullscreen, enter, exit, toggle } = useFullscreen();
function rateChange(e: any) {
	console.log('rateChange', e);
}
function btnChange() {
	console.log('btnChange');
}
function btnDelete() {
	console.log('btnChange');
}
</script>
<template>
	<h1 @click="toggle">click</h1>
	<Button @change="btnChange" @delete="btnDelete">小老弟</Button>
	<!-- <Rate theme="#fff000" v-model="val"> 吵吵 </Rate> -->
</template>
