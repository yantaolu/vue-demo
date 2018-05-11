# WebPack4 Vue Demo

> 基础框架模板，引入iview组件库

## 开发说明

``` bash
# 安装依赖
npm install

# 开发环境启动 webpack-server
npm run dev

# 生产环境编译
npm run build

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

##目录结构说明

``` bash
--build 构建配置目录
  --build.js 生产环境构建时的入口文件
  --check-versions.js node环境检测
  --utils.js 工具类，提供css-loader及notifier函数
  --vue-loader.conf.js vue-loader配置
  --webpack.base.conf.js webpack基础配置
  --webpack.dev.conf.js webpack开发环境配置
  --webpack.prod.conf.js webpack生产环境配置
--config 不同环境构建时的相关变量配置
  --index.js 开发配置
--src 源码目录
  --components 组件目录
  --css 样式目录
  --img 图片目录
  --iview-custom-theme iView主题定制目录，定制方法参看iView官网 https://www.iviewui.com/docs/guide/theme 采用官方推荐的【变量覆盖】方式
  --js JavaScript目录
  --store VueX状态管理目录
  --views 视图目录
  --App.vue 主视图
  --main.js 入口文件
  --router.js 路由配置文件
......
```




