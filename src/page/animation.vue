<template>
	<div>
		<button @click="show = !show">tab</button>
		<transition name="fade">
			<p v-if="show">show</p>
		</transition>
	</div>
</template>
<script setup>
import { ref } from 'vue';
let show = ref(true);
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