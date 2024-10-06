import appState from '../types/store/app'

export default {
	namespaced: true,
	state() {
		return {
			count: 0
		}
	},
	mutations: {
		increment(state: appState) {
			state.count++
		}
	}
}
