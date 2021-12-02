<template>
	<p>router1router1router1router1router1router1router1</p>
</template>

<script setup>
import { useRouter } from '../router/myrouter';
const router = useRouter();
console.log('router', router);
setInterval(()=>{
	console.log('cc')
},500)
</script>