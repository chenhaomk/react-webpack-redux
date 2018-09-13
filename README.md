## 从零搭建react+react-router+webpack+redux应用
___
### 目录
1.[init项目](#init)  
2.[webpck](#webpack)  
3.[babel](#bable)  
4.[react](#react)  
5.[命令优化](#cli)  
6.[react-reouter](#jump)  
7.[webpack-dev-server](#jump)  
___
### <span id='init'>init项目</span>  
___
1.创建项目文件夹并进入  
```mkdir react-app && cd react-app```  
2.初始化npm  
```npm init```  
### <span id='webpack'>webpack</span>  
___  
1.安装webpack  
```npm i --save-dev webpack webpack-cli```  
&ensp;&ensp;这儿我们安装webpack4.x的版本,所以必须安装[webpack-cli](https://www.webpackjs.com/guides/installation/#%E5%89%8D%E6%8F%90%E6%9D%A1%E4%BB%B6),不然执行不然执行打包命令是时命令行会提示你安装```webpack-cli```  
&ensp;&ensp;Q：为什么不使用全局安装？  
&ensp;&ensp;A: 不推荐全局安装 webpack。这会将你项目中的 webpack 锁定到指定版本，并且在使用不同的 webpack 版本的项目中，可能会导致构建失败  
2.根据[webpack](https://www.webpackjs.com)编写配)编写配置文件  
&ensp;&ensp;项目根目录新建```webpack.dev.config.js```文件  
&ensp;&ensp;```webpack.dev.config.js```  
```
const path = require('path');
const config = {
  entry: path.join(__dirname,'src/index.js'),
  output: {
    path: path.join(__dirname,'./dist'),
    filename: 'bundle.js'
  }
}
module.exports = config;   
```  
3.使用```webpack```编译文件  
&ensp;&ensp;```mkdir src && touch ./src/rc/index.js```  
&ensp;&ensp;```./src/rc/index.js```添加内容  
```
document.getElementById('app').innerHTML = "is webpack"
```  
&ensp;&ensp;webpack全局安装执行命令```webpack --config  webpack.dev.config.js```没有全局安装需要在```./node_modules/.bin/webpack --config webpack.dev.config.js```  
&ensp;&ensp;我们可以看到生成了dist文件夹和件夹和bundle.js  
4.测试打包结果  
&ensp;&ensp;在dist文件夹下面新建一个index.html文件  
&ensp;&ensp;```touch ./dist/st/index.html```  
&ensp;&ensp;index.html填写内容填写内容  
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <div id="app"></div>
    <script src='./bundle.js'></script>
</body>

</html>
```  
&ensp;&ensp;用浏览器打开器打开index.html,可以看,可以看到Webpack works  
![avatar](/pubilc/1536842661(1).jpg) 
### <span id='bable'>bable</span>
___
```npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env @babel/preset-react```  
新建babel配置文件.babelrc  
.babelrc文件添加内容  
``` 
{
   "presets": [
     "@babel/preset-env",
     "babel/preset-react"
   ],
   "plugins": []
}
```  
修改webpack.dev.config.js增加babel-loader！  
```
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
}
```
[cacheDirectory](https://www.webpackjs.com/loaders/babel-loader/#babel-loader-%E5%BE%88%E6%85%A2-)是用来缓是用来缓存编译结果，下次编译加速  
测试下是否配置正确，修改src/rc/index.js文件  
```
var func = str => {
  document.getElementById('app').innerHTML = str;
};
func('我现在在使用Babel!');
```  
执行打包命令```./node_modules/.bin/webpack --config webpack.dev.config.js```,浏览器,浏览器打开器打开index.html我们看到正确输出了我现在在使用Babel!，然后我们打开打包后的包后的bundle.js,翻页到最下面,可以看到箭头函数被转换成普通函数了.  
![avatar](/pubilc/1536842562(1).jpg)  
### <span id='react'>react</span>  
___
```npm install --save react react-dom```  
修改src/rc/index.js文件，使用react  
```
import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
    <div>React</div>, document.getElementById('app'));
```  
执行打包命令```./node_modules/.bin/webpack --config webpack.dev.config.js```  
打开index.html看效果，如果看到'React'说明编译成功，接下来试试写一个react组件  
```
cd src
mkdir component
cd component
mkdir Hello
cd Hello
touch Hello.js
```  
Hello.js添加内容添加内容  
```
import React,{Compoent} from 'react';

class Hello extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <div>引用Hello组件</div>
        )
    }
}
export default Hello;
```  
src/index.js引入Hello 组件  
```
import React from 'react';
import ReactDom from 'react-dom';
import Hello from './component/Hello/Hello';

ReactDom.render(
    <Hello/>, document.getElementById('app'));
```  
然后在根目录执行打包命令```./node_modules/.bin/webpack --config webpack.dev.config.js``` 打开index.html可以看到  
![avatar](/pubilc/1536844117(1).jpg)  
### <span id='cli' >命令优化</span>  
___

进入package.json  
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack --config webpack.dev.config.js"
  }
```  
现在我们打包只需要执行npm run start  
参考地址:http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html  
