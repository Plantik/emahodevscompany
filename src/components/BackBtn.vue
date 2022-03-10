<script setup>
	import { useRouter } from 'vue-router'
	const router = useRouter()
</script>

<template>
	<small @click="router.go(-1)" class="text-green-500 hover:cursor-pointer">
		<i class="fa fa-chevron-left"></i>
	</small>
</template>
