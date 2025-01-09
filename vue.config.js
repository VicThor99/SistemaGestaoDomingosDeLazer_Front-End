const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    server: true, 
    client: {
        webSocketURL: {
            protocol: 'wss',
            hostname: 'api.domingodelazer.click',
            port:8443
        },
    },
    proxy: {
      '/api': {
        target: 'https://api.domingodelazer.click',
        port: 8443,
        changeOrigin: true,
        secure: false,
      },
    },
    allowedHosts: [
      'domingodelazer.click', 
      'api.domingodelazer.click',
      'www.domingodelazer.click',
      'localhost', 
    ], 
  },
})
