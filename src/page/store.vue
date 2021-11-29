<template>
	<div @click="addCount">{{ count }}</div>
</template>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
let store = useStore();
let count = computed(() => store.state.count);
function addCount() {
	store.commit('addCount');
}
</script>