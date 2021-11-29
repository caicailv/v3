<!-- 组件间传值 -->
<template>
	<p class="rate" @mouseout="mouseout">
		<span class="rate_list" v-for="i in 5" @click="rateNum = i">
			<span v-if="i < rateNum + 1">★</span>
			<span v-else>☆</span>
		</span>
	</p>
</template>
<script setup>
import { ref, watch } from 'vue';
let { val, theme } = defineProps({
	val: {
		type: Number,
		default: 2,
	},
	theme: {
		type: String,
		default: 'red',
	},
});
let rateNum = ref(val);
watch(rateNum, (e) => {
	console.log('e', e);
	defineEmits();
});
</script>
<style scoped>
.rate {
	color: v-bind(theme);
}
.rate span {
	font-size: 20px;
	display: inline-block;
	margin-left: 5px;
}
</style>