# vue-jdm-project

created at 2019-10-31 by 1912

NodeJs + Webpack + Babel + ESLint
Vue + Vue-Router
ES6模块化语法
Vuex + axios + devServer代理
MintUI、Sass、Font-awesome、REM等比缩放布局、meta标签
BestScroll



## Project setup
```
npm install
npm run serve
npm run build
npm run lint
```

#### 1、UI框架资源

* [Font Awesome 字体](http://fontawesome.dashgame.com/)
* [Mint UI](http://mint-ui.github.io/#!/zh-cn)


#### 2、node-sass安装失败的解决方案

* [node-sass 安装失败报错的原因及解决办法(整理)](https://www.cnblogs.com/gitnull/p/10188030.html)
* 如果因为网络原因，node-sass安装失败，可以使用下面命令进行安装
```
npm install node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
```

#### 3、Better-Scroll实现上拉加载

* [Better-Scroll](https://better-scroll.github.io/docs/zh-CN/guide/how-to-install.html#npm)
* 安装2.x版本：`npm install @better-scroll/core@next -S`
* 注意区分版本

#### 4、Windows上如何使用命令行杀死指定端口？
```
netstat -ano | findstr '端口号'
taskkill -f -pid '该端口号对应的pid'
```
