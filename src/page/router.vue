<template>
	<p>router1router1router1router1router1router1router1</p>
</template>

<script lang="ts" setup>

type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any

type c<S> = S extends (...args: any) => any ? 'aaa' : 'bbb'
let t: c<string> = "bbb"
</script>
