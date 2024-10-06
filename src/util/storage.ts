export default {
	/**
	 * 根据key获取storage缓存
	 */
	get(key: string) {
		let value: string = localStorage.getItem(key) || ''
		try {
			value = JSON.parse(value)
			return value
		} catch {
			return value
		}
	},

	/**
	 * 根据key和value设置storage缓存
	 */
	set(key: string, value: string) {
		localStorage.setItem(key, value)
	},

	/**
	 * 根据key移除缓存
	 */
	remove(key: string) {
		localStorage.removeItem(key)
	},
	// 清除所有缓存
	clear() {
		localStorage.clear()
	}
}
