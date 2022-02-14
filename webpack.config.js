const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  devtool: false,
  output: {
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}