export default {
	plugins: {
		'postcss-pxtorem': {
			rootValue: 100,
			propList: ['*', '!border']
		}
	}
}
