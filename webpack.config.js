const path = require('path');
const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./src/main.js",
  mode: "development",
  output: {
    path: path.join(__dirname, "build"),
    filename: "fixter.js"
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    }]
  },
  plugins: [
    new HtmlWebpack({
      filename: 'index.html',
      template: 'public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ]
}

