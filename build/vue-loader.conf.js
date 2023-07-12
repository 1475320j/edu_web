'use strict'

module.exports = {
  //You can set the vue-loader configuration by yourself.
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:9110',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
