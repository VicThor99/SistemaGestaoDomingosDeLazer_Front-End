const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    https: true, // Serve the development server over HTTPS
    host: 'www.domingodelazer.click', // Specify the host (default is localhost)
    port: 8443, // Specify the port
    client: {
        webSocketURL: {
            protocol: 'wss', // Use WSS for WebSocket
            host: 'www.domingodelazer.click',
            port: 8443,
        },
    },
    proxy: {
        '/api': {
            target: 'https://www.domingodelazer.click:8443', // Proxy API requests to your backend
            changeOrigin: true,
        },
    },
    allowedHosts: [
      'domingodelazer.click', 
      'www.domingodelazer.click' 
    ], 
  },
})
