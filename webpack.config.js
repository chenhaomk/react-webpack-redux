const path = require('path');
const webpack = require("webpack");

const config = {
  name: "production",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js"
  }
}

module.exports = config