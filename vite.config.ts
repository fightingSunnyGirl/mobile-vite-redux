import { defineConfig } from 'vite'
import path from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'
import legacy from '@vitejs/plugin-legacy'
import createImportPlugin from 'vite-plugin-import'

export default defineConfig({
  plugins: [
    reactRefresh(),
    legacy({
      targets: ['> 1%, last 1 version, ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'], // 面向IE11时需要此插件
    }),
    createImportPlugin({
      onlyBuild: false,
      babelImportPluginOptions: [
        {
          libraryName: 'antd-mobile',
          libraryDirectory: 'es',
          style: true, // or 'css'
        },
      ],
    }),
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json', '.sass', '.scss'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
  css: {
    modules: { // css模块化 文件以.module.[css|less|scss]结尾
      generateScopedName: '[name]__[local]___[hash:base64:5]',
      hashPrefix: 'prefix',
    },
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      },
    },
  },
  // 生产
  build: {
    outDir: 'build',
    rollupOptions: {

    },
  },
  // 开发
  server: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})
