<template>
	<div>
		<button @click="show = !show">tab</button>
		<button @click="router.go(-1)">back</button>
		<transition name="fade">
			<p v-if="show">show</p>
		</transition>
		<p>animation count -> {{ state.count }}</p>
	</div>
</template>
<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
// import { useStore } from '../store/myvuex';
import { useStore } from 'vuex';
const router = useRouter();
let show = ref(true);
let { state } = useStore();
// const count = computed(() => state.count);
</script>

<style>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s linear;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>