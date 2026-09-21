const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dev_build',
    historyApiFallback: {
      htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
      rewrites: [
        { from: /^\/$/, to: '/index.html' },
        { from: /./, to: '/404.html' }
      ]
    }
  },
  output: {
    path: path.resolve('.', 'dev_build'),
    clean: true
  }
})
