/*
 * @Description: feature name
 * @Author: xujian
 * @Date: 2022-02-09 10:56:30
 */
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './example.js',
  devtool: false,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              [path.resolve(__dirname, 'index.js')]
            ]
          }
        }
      }
    ]
  }
}