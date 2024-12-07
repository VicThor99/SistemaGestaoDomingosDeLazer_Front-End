const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    server: true, 
    host: '127.0.0.1', 
    port: 8443, 
    client: {
        webSocketURL: {
            protocol: 'wss', 
            hostname: '127.0.0.1',
            port: 8443,
        },
    },
    proxy: {
        '/api': {
            target: 'https://www.domingodelazer.click:8443',
            changeOrigin: true,
        },
    },
    allowedHosts: [
      'domingodelazer.click', 
      'www.domingodelazer.click' 
    ], 
  },
})
