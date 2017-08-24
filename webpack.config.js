const webpack = require('webpack');
const path = require('path');

const config = {
  context: path.resolve(__dirname),
  entry: [
  //   'eventsource-polyfill',
    path.resolve(__dirname, './src/index.js'),
  ],
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname),
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', { modules: false}]
          ]
        }
      }]
    }]
  }
}

module.exports = config;