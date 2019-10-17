const webpack = require('webpack')
const path = require('path')

devServer: {
  inline: true,
  port: 8080
},

module.exports = {
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build')
    },
    entry:'./src/index.js',
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: "babel-loader"
          }
        ]
      }
}