<script setup>import { ref } from 'vue';

// import MyRouterView from './components/MyRouterView.vue';
function fib(n) {
	if (n <= 1) return 1
	return fib(n - 1) + fib(n - 2)
}
let count = ref(fib(38))

</script>
<template>
	<router-view></router-view>
	count-> {{ count }}
	<!-- <MyRouterView /> -->
</template>
