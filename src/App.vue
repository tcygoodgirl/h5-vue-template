<template>
	<div>
		<router-view v-slot="{ Component }">
			<keep-alive>
				<component :is="Component" v-if="$route.meta.keepAlive"></component>
			</keep-alive>
			<component :is="Component" v-if="!$route.meta.keepAlive"></component>
		</router-view>
	</div>
</template>

<script setup lang="ts"></script>
