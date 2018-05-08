# standard-vue-project

> 标准模版，资源文件采用相对路径

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

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

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
  --dev.env.js 开发环境配置merge
  --index.js 基础配置
  --prod.env.js 生产环境配置merge
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




