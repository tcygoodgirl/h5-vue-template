import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
	{
		path: '/index',
		component: () => import('@/views/page-index.vue'),
		meta: {
			keepAlive: true
		}
	},
	{
		path: '/next',
		component: () => import('@/views/next.vue')
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
