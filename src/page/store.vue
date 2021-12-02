<template>
	<!-- <button @click="toPath">去动画</button> -->
	<div @click="addCount">{{ count }}</div>

	<p>----------------------------------------</p>
	<div @click="addCount">------->乘以兔{{ store.getters.getCountTwo }}</div>
	<div @click="changeStore">------->乘以兔{{ myst }}</div>
	<storechidren />
</template>
<script setup>
import { computed, onMounted } from 'vue';

import { useRouter } from 'vue-router';
// import { useStore } from '../store/myvuex';
import { useStore } from 'vuex';
import storechidren from './storechidren.vue';
import getStore from '../store/mystore';
let myst = getStore();
let store = useStore();
let router = useRouter();
let count = computed(() => store.state.count);
function addCount() {
	store.dispatch('asyncAdd');
}
function changeStore() {
	myst.nickname = Math.random();
}
onMounted(() => {
	console.log('store->onMounted');
});
</script>