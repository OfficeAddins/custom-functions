var HTMLWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: false,
  entry: {
    index: __dirname + '/index.js',
    functions: __dirname + '/functions.js'
  },
  output: {
    filename: '[name]-bundle.js',
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        test: /.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: __dirname + '/index.html',
      chunks: ["index"]
    }),
    new HTMLWebpackPlugin({
      filename: 'functions.html',
      template: __dirname + '/functions.html',
      chunks: ["functions"]
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'functions.json',
          to: 'functions.json'
        },
      ],
    })
  ]
}; 