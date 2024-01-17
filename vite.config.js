import vue from '@vitejs/plugin-vue'
import visualizer from 'rollup-plugin-visualizer'
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
import path from 'path'

// https://cn.vitejs.dev/config/
export default {
  plugins: [
    // Vite Vue Base
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
    // 打包结果体积分析
    {
      ...visualizer({
        filename: 'dist/report.html',
        gzipSize: true,
      }),
      apply: 'build',
    },
  ],
  resolve: {
    alias: [
      // 支持 @/xxx 的写法
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  build: {
    // 不输出 brotli 压缩后的体积，提高构建速度
    // 服务端目前不支持此压缩方式
    brotliSize: false
  },
}
