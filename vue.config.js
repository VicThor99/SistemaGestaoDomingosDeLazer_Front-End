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
    allowedHosts: [
      'domingodelazer.click', 
      'www.domingodelazer.click',
      'localhost', 
    ], 
  },
})
