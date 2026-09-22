const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const htmlPages = require('./webpack.pages.js')

const webpack = require('webpack')
const path = require('path')

function footerPartial(template_filename, root) {
  return {
    path: path.join(__dirname, '../src/partials/footer.html'),
    location: 'body',
    priority: 'low',
    template_filename,
    options: { root }
  }
}

module.exports = {
  entry: {
    index: './src/javascripts/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('.', 'docs')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          sources: {
            urlFilter: (attribute, value) => !/\.html(?:#.*)?$/i.test(value)
          }
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    ...htmlPages,
    new HtmlWebpackPartialsPlugin([
      footerPartial(['./index.html', './404.html'], ''),
      footerPartial(
        ['./pages/articles.html', './pages/tests.html', './pages/dictionary.html'],
        '../'
      ),
      footerPartial(
        [
          './pages/articles/asap-rocky.html',
          './pages/articles/daniel-arsham.html',
          './pages/articles/gucci-ghost.html',
          './pages/articles/hajime-sorayama.html',
          './pages/articles/samuel-ross.html',
          './pages/articles/kaws.html',
          './pages/tests/test1.html'
        ],
        '../../'
      )
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  },
  resolve: {
    fallback: {
      stream: require.resolve('stream-browserify')
    }
  }
}
