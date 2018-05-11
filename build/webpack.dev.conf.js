'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  module: {
    rules: utils.styleLoaders({
      sourceMap: true,
      usePostCSS: true
    })
  },
  // devtool: 'eval-source-map',
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        {from: /.*/, to: path.posix.join('', 'index.html')},
      ],
    },
    hot: true,
    contentBase: false,
    compress: true,
    host: config.dev.host || 'localhost',
    port: config.dev.port || 8888,
    open: true,
    overlay: {warnings: false, errors: true},
    publicPath: '',
    proxy: config.dev.proxy,
    quiet: true,
    watchOptions: {
      poll: false,
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
      chunks: ['manifest', 'vendor', 'index'],
    }),
    ...utils.getMultiPages()
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = config.dev.port || 8888
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}/index.html`],
        },
        onErrors: utils.createNotifierCallback()
      }))

      resolve(devWebpackConfig)
    }
  })
})
