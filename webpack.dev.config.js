const path = require('path');
const webpack = require("webpack");

const config = {
  name: "development",
  mode: "development",
  //配置入口文件
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, 'src/index.js')
  ],
  //出口文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    //[name]是webpack的占位符，确保文件的唯一名称
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
        presets: ["react"],
      },
    }]
  },
  resolve: {
    alias: {
      pages: path.join(__dirname, 'src/pages'),
      component: path.join(__dirname, 'src/component'),
      router: path.join(__dirname, 'src/router'),
    }
  },
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    host: '0.0.0.0'
  }
}

module.exports = config