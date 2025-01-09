const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    server: true, 
    client: {
        webSocketURL: {
            protocol: 'https',
            hostname: 'api.domingodelazer.click',
            port:8443
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
