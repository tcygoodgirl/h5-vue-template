import { createStore } from 'vuex'
import app from './app.ts'
import next from './next.ts'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
	modules: {
		app,
		next
	},
	plugins: [
		createPersistedState({
			storage: window.sessionStorage // 或者 localStorage
		})
	]
})

export default store
