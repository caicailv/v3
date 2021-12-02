<template>
	<component :is="currentComponent" />
	<routerComponent />
</template>
<script setup>
import { computed } from 'vue';
import { useRouter } from '../router/myrouter';
import routerComponent from '../page/router.vue';
import storeComponent from '../page/store.vue';
// 拿到当前url
const router = useRouter();
computed(router.current.value, () => {});
// 拿到匹配组件
// let [currentComponent] = router.routes.filter(
// 	(el) => el.path === router.current.value
// );
// if (currentComponent) {
// 	console.log('currentComponent', currentComponent);
// }
let currentComponent = 2
let count = 0;
// setInterval(() => {
setTimeout(() => {
	count++;

	currentComponent = !(count % 2) ? routerComponent : storeComponent;
	console.log('currentComponent', currentComponent.name);
}, 500);
</script>

