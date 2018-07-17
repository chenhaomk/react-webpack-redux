const path = require('path');
const webpack = require("webpack");

const config = {
  name: "production",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js"
  },
  module: {
    rules: [{
        test: /\.js$/,
        loader: "babel-loader",
        include: path.resolve(__dirname, 'src'),
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        options: {
          presets: ["react"]
        },
    }]
  }
}

module.exports = config