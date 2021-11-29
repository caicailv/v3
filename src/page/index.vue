<script setup>
import Rate from '../components/Rate.vue';
import { useFullscreen } from '@vueuse/core';
const { isFullscreen, enter, exit, toggle } = useFullscreen();
function rateChange(e) {
	console.log('rateChange', e);
}
</script>
<template>
	<h1 @click="toggle">click</h1>
	<Rate theme="#fff000" v-model="val"> 吵吵 </Rate>
</template>
