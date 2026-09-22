const HtmlWebpackPlugin = require('html-webpack-plugin')
const cases = require('../src/data/cases.json')

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const casePages = cases.map((item) =>
  createPages(
    `./src/pages/cases/${item.id}.html`,
    `./pages/cases/${item.id}.html`,
    ['index']
  )
)

const htmlPages = [
  createPages('./src/index.html', './index.html', ['index']),
  createPages('./src/404.html', './404.html', ['index']),
  createPages('./src/pages/articles.html', './pages/articles.html', ['index']),
  createPages('./src/pages/cases.html', './pages/cases.html', ['index']),
  createPages('./src/pages/search.html', './pages/search.html', ['index']),
  createPages('./src/pages/dictionary.html', './pages/dictionary.html', [
    'index'
  ]),
  createPages('./src/pages/about.html', './pages/about.html', ['index']),
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
  createPages('./src/pages/tests.html', './pages/tests.html', ['index']),
  createPages('./src/pages/tests/test1.html', './pages/tests/test1.html', [
    'index'
  ]),
  createPages('./src/pages/tests/test2.html', './pages/tests/test2.html', [
    'index'
  ]),
  createPages('./src/pages/tests/test3.html', './pages/tests/test3.html', [
    'index'
  ]),
  ...casePages
]

module.exports = htmlPages
