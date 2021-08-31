# Chart-Design

> 一个基于 CSS、HTML、JavaScript 的 " **H5设计器** "，通过 Vue 组件实现数据动态刷新渲染，内部图表可实现自由替换。部分图表使用 DataV 自带组件，可进行更改，详情请点击下方 DataV 文档。



## 


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 相关依赖

``` bash
#  http://datav.jiaminghi.com/
npm install @jiaminghi/data-view
npm install echarts
npm install echarts-gl
npm install vue-router
```


## 功能需求
1. 拖拽元素组件
2. 渲染组件元素
3. 设置组件元素属性
4. 增加自定义元素组件
5. 调整元素位置
6. 控制拖拽元素范围
7. 拖拽高亮显示

## 技术问题
1. ondragover 事件中 调用ev.dataTransfer.getData("text") 无法获取数据id
2. 所有控件都需要外套一层拖拽盒子进行拖拽操作 
3. JSON 转 DOM 树算法，在拖拽中，发起一个Ajax请求获取JSON数据。
4. 预览H5页面，生成一个html页面 
5. 如果外层盒子都是拖拽盒子，如何数据传值
6. insertBefore是把元素差在前面，如果是最后一个元素则不交换，在加上一个判断在通过appendChild结合API
7. 如果控制盒子属性，进行set设置，双向绑定
8. H5 会导致文件也可以拖拽，要加上判断
9. 进度条和拖拽一起使用会用冲突

## 处理警告
```bash
erros 问题
Uncaught TypeError: Cannot read property 'draggable' of null
warning 问题

```

## Vue 脚手架

1.脚手架版本问题
2.utils 封装API
3.ESlint 配置
4.webpack 配置




## git步骤

``` bash
# 初始本地仓库
git init

# 查看当前状态 
git status 

# 看所有用户
git config --list

# 查看所有的分支 
git branch -a 

# 创建分支必须切换分支
git checkout -b main 

# 基于当前分支创建开发分支
git branch develop

```
## git 命令

``` bash
#  和最后一个快照的合并
git commit —amend

```

## 组件结构设计
   Echart--->components--->echart-Page
## 

