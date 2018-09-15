## 从零搭建react+react-router+webpack+redux应用~持续更新中...
___
### 目录
1.[init项目](#init)  
2.[webpck](#webpack)  
3.[babel](#bable)  
4.[react](#react)  
5.[命令优化](#cli)  
6.[react-router](#router)  
7.[webpack-dev-server](#server)  
8.[模块热替换](#hmr)
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
### <react id='router'>react-router</span>  
___
```npm i react-router-dom --save-dev```  
新建router文件  
```
cd src
mkdir router && touch router/router.js
```  
新建pages文件夹,添加Home,Page1页面  
```
cd src
mkdir pages
cd pages
mkdir Home && touch Home/Home.js
mkdir Page1 &&  touch Page1/Page1.js
```
src/pages/Home/Home.js添加  
```
import React,{Component} from 'react';

class Home extends React.Component {
    render () {
        return (
            <div>Home</div>
        )
    }
}
export default Home;
```  
scr/pages/Page1/Page1.js添加  
```
import React,{Component} from 'react';

class Page1 extends React.Component {
    render () {
        return (
            <div>page1</div>
        )
    }
}
export default Page1;
```  
src/router/router.js添加  
```
import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Home from '../pages/Home/Home';
import Page1 from '../pages/Page1/Page1';


const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/page1" component={Page1}/>
            </Switch>
        </div>
    </Router>
);

export default getRouter;
```  
修改src/index.js文件,引入路由组件  
```
import React from 'react';
import ReactDom from 'react-dom';

import getRouter from './router/router';

ReactDom.render(
    getRouter(), document.getElementById('app'));
```  
现在执行```npm run start```命令，刷新dist/index.html文件就能看到  
![avatar](/pubilc/1536988002(1).jpg)  
我们发现点击‘首页’和‘Page1’没有反应。不要惊慌，这是正常的.  
我们之前一直用这个路径访问index.html，类似这样：file:///D:/my%20project/react-webpack-redux/dist/index.html。
这种路径了，不是我们想象中的路由那样的路径http://localhost:3000~我们需要配置一个简单的WEB服务器，指向index.html。~有下面两种方法来实现  
&ensp;&ensp;1.Nginx, Apache, IIS等配置启动一个简单的的WEB服务器。  
&ensp;&ensp;2.使用webpack-dev-server来配置启动WEB服务器。  
react-router参考资料:http://www.jianshu.com/p/e3adc9b5f75c  
### <span id='server'>webpack-dev-server</span>  
___
安装```npm install --save-dev webpack-dev-server@3```  
修改webpack.dev.config.js文件   
```
 devServer: {
    contentBase: path.join(__dirname, './dist')
}
```  
修改package.json文件
```
"start": "webpack --config webpack.dev.config.js"
```  
改为  
```
"start": "webpack-dev-server --config webpack.dev.config.js"
```  
现在执行命令```npm run start```，打开浏览器,访问:http://localhost:8080，就能看到  
![avatar](/pubilc/1536990411(1).jpg)  
点击Page1:  
![avatar](/pubilc/1536990434(1).jpg)  
说明react-router起作用了。  
这儿```contentBase```是指URL的根目录，更多```webpack-dev-server```配置：https://www.webpackjs.com/guides/development/#%E4%BD%BF%E7%94%A8-webpack-dev-server  
### <span id='hmr'></span>模块热替换 
___
到目前，当我们修改代码的时候，浏览器会自动刷新，不信你可以去试试。  
  
我相信看这个教程的人，应该用过别人的框架。我们在修改代码的时候，浏览器不会刷新，只会更新自己修改的那一块。我们也要实现这个效果  
  
我们看下[webpack模块热替换](https://www.webpackjs.com/guides/development/#%E4%BD%BF%E7%94%A8-webpack-dev-server)教程。