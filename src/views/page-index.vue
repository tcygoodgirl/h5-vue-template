<template>
	<div class="page-wrapper">
		<child></child>
	</div>
</template>
<script setup>
import child from './child.vue'
// import '@/util/index'
import '@/util/study3'
const log = ref('') // 创建一个响应式引用来记录日志

// onBeforeMount(() => {
// 	log.value += 'onBeforeMount is called, DOM not rendered yet.\n'
// 	console.log(log.value)
// })

// onMounted(() => {
// 	log.value += 'onMounted is called, DOM is now rendered.\n'
// 	console.log(log.value)
// })
</script>
<style lang="scss" scoped>
.page-wrapper {
	.next-btn {
		height: 75px;
		line-height: 75px;
		background-color: $primary;
		@include no-border();
		@extend .primary-btn;
	}
}
</style>
