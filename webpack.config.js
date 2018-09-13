// const path = require('path');
// const webpack = require("webpack");

// const config = {
//   name: "development",
//   mode: "development",
//   entry: [
//     'react-hot-loader/patch',
//     path.join(__dirname, 'src/index.js')
//   ],
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: "[name].js"
//   },
//   module: {
//     rules: [{
//         test: /\.js$/,
//         loader: "babel-loader",
//         include: path.resolve(__dirname, 'src'),
//         exclude: [
//           path.resolve(__dirname, "node_modules")
//         ],
//         options: {
//           presets: ["react"],
//         },
//     }]
//   },
//   devServer: {
//     port: 8080,
//     contentBase: path.join(__dirname, './dist'),
//     historyApiFallback: true,
//     host: '0.0.0.0'
//   }
// }

// module.exports = config
const path = require('path');
const config = {
  entry: path.join(__dirname,'src/index.js'),
  output: {
    path: path.join(__dirname,'./dist'),
    filename: 'bundle.js'
  }
  
}
module.exports = config;