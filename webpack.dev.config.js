// const path = require('path');
// const webpack = require("webpack");
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// const config = {
//   name: "development",
//   mode: "development",
//   //配置入口文件
//   entry: [
//     'react-hot-loader/patch',
//     path.join(__dirname, 'src/index.js')
//   ],
//   //出口文件
//   output: {
//     // path: path.resolve(__dirname, 'dist'),
//     // //[name]是webpack的占位符，确保文件的唯一名称
//     // filename: "[name].js"
//     path: path.join(__dirname, './dist'),
//     filename: '[name].[hash].js',
//     chunkFilename: '[name].[chunkhash].js'
//   },
//   module: {
//     rules: [{
//       test: /\.js$/,
//       loader: "babel-loader",
//       include: path.resolve(__dirname, 'src'),
//       exclude: [
//         path.resolve(__dirname, "node_modules")
//       ],
//       options: {
//         presets: ["react"],
//         // plugins: ['dynamic-import-webpack'] // import()插件
//         plugins: ['syntax-dynamic-import']
//       },
//     }, {
//       test: /\.less$/,
//       use: [{
//         loader: "style-loader" // creates style nodes from JS strings
//       }, {
//         loader: "css-loader" // translates CSS into CommonJS
//       }, {
//         loader: "less-loader" // compiles Less to CSS
//       }]
//     }]
//   },
//   resolve: {
//     alias: {
//       pages: path.join(__dirname, 'src/pages'),
//       component: path.join(__dirname, 'src/component'),
//       router: path.join(__dirname, 'src/router'),
//     }
//   },
//   devServer: {
//     port: 8080,
//     contentBase: path.join(__dirname, './dist'),
//     historyApiFallback: true,
//     host: '0.0.0.0'
//   },
//   devtool: 'inline-source-map',
//   plugins: [
//     new HtmlWebpackPlugin({
//       filename: 'index.html',
//       template: path.join(__dirname, 'src/index.html')
//     }),

//   ],
// }

// module.exports = config
const path = require('path');
const config = {
  mode: "development",
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader?cacheDirectory=true',
        },
        include: path.join(__dirname, 'src')
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, './dist')
  }
}
module.exports = config;