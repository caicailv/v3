<template>
	<p>
		1231212312312
		<!-- {{ JSON.stringify(store) }} -->
		<!-- <span> a-> {{ a }} </span> -->
		<span>
			{{ store }}
		</span>
	</p>
</template>
<script setup>
import getStore from '../store/mystore';
const store = getStore();
</script>