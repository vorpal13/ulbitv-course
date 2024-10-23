const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
  },
}
