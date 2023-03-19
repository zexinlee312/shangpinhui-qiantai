const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn',
      },
    },
  },
})
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

configureWebpack: {
  plugins: [new NodePolyfillPlugin()]
}
