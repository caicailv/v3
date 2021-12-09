
<template>
	<slot></slot>
	<div class="block"></div>
	<p class="rate" @mouseout="mouseout">
		<span class="rate_list" v-for="i in 5" @click="rateNum = i">
			<span v-if="i < rateNum + 1">★</span>
			<span v-else>☆</span>
		</span>
	</p>
</template>
<script setup>
import { ref, watch } from 'vue';
let emit = defineEmits(['update:modelValue']);
let { modelValue: val, theme } = defineProps({
	modelValue: {
		type: Number,
		default: 2,
	},
	theme: {
		type: String,
		default: 'red',
	},
});
let rateNum = ref(val);

let h = ref('20px')
watch(rateNum, (e) => {
	emit('update:modelValue', e);
});
</script>
<style >
.rate {
	color: v-bind(theme);
}
.block{
	height: v-bind(h);
	width: v-bind(h);
	background-color: red;
	
}
.rate span {
	font-size: 20px;
	display: inline-block;
	margin-left: 5px;
}
</style>