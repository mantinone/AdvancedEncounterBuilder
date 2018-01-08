const webpack = require('webpack')
const path = require('path')

const config = {
  entry: './src/home.js',
  output: {
    path: path.resolve(__dirname, 'src/public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}

module.exports = config

