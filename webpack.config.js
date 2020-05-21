const path = require('path');
const HtmlWebpack = require('html-webpack-plugin');
const copyWebpack = require('copy-webpack-plugin');
const HtmlWebpackTags = require('html-webpack-tags-plugin');

module.exports = {
  entry: "./src/main.js",
  mode: "none",
  output: {
    path: path.join(__dirname, "build"),
    filename: "fixter.js"
  },
  plugins: [
    new HtmlWebpack({
      filename: 'index.html',
      template: 'public/index.html'
    }),
    new copyWebpack({
      patterns: [{ from: 'public/assets/', to: 'css/' }],
    }),
    new HtmlWebpackTags({
      links: ['css/styles.css']
    })
  ]
}

