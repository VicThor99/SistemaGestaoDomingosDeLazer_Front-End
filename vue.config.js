const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: [
      'domingodelazer.click', // Domínio permitido
      'www.domingodelazer.click' // Outro domínio permitido
    ],
    disableHostCheck: true, // Desabilita a verificação do cabeçalho Host
  }
})
