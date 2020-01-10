module.exports = {
  devServer: {
    proxy: {
      '/db': {
        target: 'http://localhost:8080',  // 代理
        changeOrigin: true
      }
    }
  }
}
