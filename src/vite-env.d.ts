/// <reference types="vite/client" />

import { RouteLocationNormalized, Router } from 'vue-router'
import { ComponentCustomProperties, DefineComponent } from 'vue'

// 扩展Vue组件的类型定义
declare module 'vue' {
	// 声明组件的默认导出
	export interface ComponentCustomProperties {
		// 扩展$route属性
		$route: RouteLocationNormalized
	}
}
