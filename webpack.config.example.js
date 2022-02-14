const path = require('path');

console.log(path.resolve(__dirname, 'lib/index.js'));

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
              [path.resolve(__dirname, 'lib/index.js')]
            ]
          }
        }
      }
    ]
  }
}