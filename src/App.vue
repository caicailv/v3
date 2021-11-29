<script setup>
import Rate from './components/Rate.vue';
import { useFullscreen } from '@vueuse/core';
const { isFullscreen, enter, exit, toggle } = useFullscreen();
</script>
<template>
	<h1 @click="toggle">click</h1>
	<Rate theme="#fff000" val="3" />

</template>
