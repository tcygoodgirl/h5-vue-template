import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	plugins: [
		vue(),
		viteCompression({
			algorithm: 'gzip', // 压缩算法，可选[‘gzip’，‘brotliCompress’，‘deflate’，‘deflateRaw’]
			threshold: 10240, // 如果体积大于阈值，则进行压缩，单位为b
			deleteOriginFile: false // 压缩后是否删除源文件
		}),
		AutoImport({
			include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
			imports: ['vue', 'vue-router'],
			dts: 'src/auto-import.d.ts', // 路径下自动生成文件夹存放全局指令
			eslintrc: {
				enabled: true // 1、改为true用于生成eslint配置。2、生成后改回false，避免重复生成消耗
			}
		})
	],
	resolve: {
		alias: {
			'@': path.resolve('./src') // 相对路径别名配置，使用 @ 代替 src
		}
	},
	// scss 全局变量的一个配置
	css: {
		preprocessorOptions: {
			scss: {
				javascriptEnabled: true,
				additionalData: '@import "./src/assets/scss/global.scss";'
			}
		}
	},
	build: {
		outDir: 'dist/app',
		rollupOptions: {
			output: {
				/** S-静态文件按类型分包 */
				chunkFileNames: 'static/js/[name]-[hash].js',
				entryFileNames: 'static/js/[name]-[hash].js',
				assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
				/** E-静态文件按类型分包 */
				manualChunks(id) {
					// 超大静态资源拆分
					if (id.includes('node_modules')) {
						return id.toString().split('node_modules/')[1].split('/')[0].toString()
					}
				}
			}
		},
		terserOptions: {
			//打包后移除console和注释
			compress: {
				drop_console: true,
				drop_debugger: true
			}
		}
	}
})
