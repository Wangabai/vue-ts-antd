/*
 * @Author: 王鑫
 * @Description:
 * @Date: 2022-06-30 09:57:48
 */
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { viteMockServe } from 'vite-plugin-mock'
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      // ↓解析根目录下的mock文件夹
      mockPath: 'mock',
      supportTs: true, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件。
      watchFiles: true, // 监视文件更改
    }),
  ],
  base: './',
  resolve: {
    // 别名配置
    alias: {
      '@': resolve(__dirname, 'src/'),
    },
  },
});
