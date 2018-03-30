import express from 'express'
import webpack from 'webpack'
import bodyParser from 'body-parser'
import webpackConfig from '../../webpack/webpack.config.dev.js'

const webpackDevMid = require("webpack-dev-middleware")
const webpackHotMid = require("webpack-hot-middleware")
const env = process.env.NODE_ENV
const root = process.cwd()

export function setupServer(app) {
  app.use(bodyParser.json())
  app.use(express.static('dist'))
  app.set('views', root + '/view')
  app.engine('html', require('ejs').renderFile)
  app.set('view engine', 'html')
  if (env === 'development') {
    const compiler = webpack(webpackConfig)
    app.use(webpackDevMid(compiler, {
      noInfo: true, publicPath: webpackConfig.output.publicPath
    }))
    app.use(webpackHotMid(compiler, {
      log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
    }))
  }
}
