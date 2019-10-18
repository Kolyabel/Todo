const webpack = require('webpack')
const path = require('path')

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        port: 8000
    },
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
                use:{
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env'],
                        presets: ['@babel/preset-react'],
                    }
                }
            }
        ]
    }
}