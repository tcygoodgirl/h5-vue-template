import nextState from '../types/store/next'

export default {
	namespaced: true,
	state() {
		return {
			count: 0
		}
	},
	mutations: {
		increment(state: nextState) {
			state.count++
		}
	}
}
