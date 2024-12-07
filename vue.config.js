const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    server: true, 
    client: {
        webSocketURL: {
            protocol: 'wss'
        },
    },
    allowedHosts: [
      'domingodelazer.click', 
      'www.domingodelazer.click' 
    ], 
  },
})
