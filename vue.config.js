const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    server: true, 
    client: {
        webSocketURL: {
            protocol: 'wss',
            port:8443
        },
    },
    proxy: {
      '/api': {
        target: 'https://domingodelazer.click',
        port: 8443,
        changeOrigin: true,
        secure: false,
      },
    },
    allowedHosts: [
      'domingodelazer.click', 
      'www.domingodelazer.click',
      'localhost', 
    ], 
  },
})
