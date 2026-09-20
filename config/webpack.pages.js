const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPages('./src/index.html', './index.html', ['index']),
  createPages('./src/pages/articles.html', './pages/articles.html', ['index']),
  createPages('./src/pages/tests.html', './pages/tests.html', ['index']),
  createPages('./src/pages/dictionary.html', './pages/dictionary.html', [
    'index'
  ]),
  createPages(
    './src/pages/articles/asap-rocky.html',
    './pages/articles/asap-rocky.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/daniel-arsham.html',
    './pages/articles/daniel-arsham.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/gucci-ghost.html',
    './pages/articles/gucci-ghost.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/hajime-sorayama.html',
    './pages/articles/hajime-sorayama.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/samuel-ross.html',
    './pages/articles/samuel-ross.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/kaws.html',
    './pages/articles/kaws.html',
    ['index']
  ),
  createPages('./src/pages/tests/test1.html', './pages/tests/test1.html', [
    'index'
  ])
]

module.exports = htmlPages
