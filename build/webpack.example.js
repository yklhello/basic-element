const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyPlugin = require('copy-webpack-plugin')
// const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin')
// const SvgSymbolWebpackPlugin = require('./svg-symbol-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'

const config = require('./config')

const webpackConfig = {
  mode: process.env.NODE_ENV,
  entry: {
    entry: path.resolve('./examples/main.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: isProd ? '/webcomponents-finance-common/' : '/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: config.alias,
    modules: ['node_modules']
  },
  devServer: {
    // host: '0.0.0.0',
    port: 9000,
    publicPath: '/',
    hot: true,
    contentBase: path.join(__dirname, '../public'),
    open: true,
    proxy: {
      '/outpat-person': 'http://172.16.6.213',
      '/api': 'http://172.16.6.29:20140',
      '/outp-finance-fee': 'http://172.16.6.29',
      '/finance-common': 'http://172.16.6.213',
      '/base': 'http://172.16.6.213',
      '/inpatient-encounter': 'http://172.16.6.213',
      '/outpat-encounter': 'http://172.16.6.213',
      '/schedule-outpatient': {
        target: 'http://172.16.6.23:41520',
        changeOrigin: true,
        pathRewrite: {
          '^/schedule-outpatient': ''
        }
      },
      '/portal/': {
        target: 'http://172.16.6.213', // 本地指向213服务
        changeOrign: true
      },
      '/cooperation-basic': {
        target: 'http://172.16.6.213',
        changeOrigin: true
      }
    }
  },
  performance: {
    hints: false
  },
  stats: {
    children: false
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(vue|jsx?)$/,
        include: config.mdclude,
        loader: 'eslint-loader'
      },
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: config.jsexclude,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          },
          {
            loader: path.resolve(__dirname, './md-loader/index.js'),
            options: {
              raw: true
            }
          }
        ]
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        exclude: [
          path.resolve(__dirname, '../packages/finance-theme/lib/icon-svg')
        ],
        // todo: 这种写法有待调整
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new SVGSpritemapPlugin('packages/finance-theme/src/components-svg/*.svg'),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: './index.html',
      favicon: 'public/favicon.ico'
    }),
    // new SvgSymbolWebpackPlugin({
    //   path: 'packages/finance-theme/lib/icon-svg/icon-svg.svg'
    // }),
    // new CopyWebpackPlugin([
    //   { from: 'examples/versions.json' }
    // ]),
    // new CopyPlugin([
    //   { from: 'packages/finance-theme/lib/avatar/avatar.svg' }
    // ]),
    new ProgressBarPlugin(),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env.FAAS_ENV': JSON.stringify(process.env.FAAS_ENV)
    }),
    new webpack.LoaderOptionsPlugin({
      vue: {
        compilerOptions: {
          preserveWhitespace: false
        }
      }
    })
  ],
  optimization: {
    minimizer: []
  },
  devtool: '#eval-source-map'
}

if (isProd) {
  // webpackConfig.externals = {
  //   vue: 'Vue',
  //   'vue-router': 'VueRouter',
  //   'highlight.js': 'hljs'
  // };
  webpackConfig.plugins.push(
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:7].css'
    })
  )

  webpackConfig.optimization.minimizer.push(
    new TerserPlugin({
      sourceMap: true, // Must be set to true if using source-maps in production
      test: /\.js(\?.*)?$/i,
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    }),
    // new UglifyJsPlugin({
    //   cache: true,
    //   parallel: true,
    //   sourceMap: false
    // }),
    new OptimizeCSSAssetsPlugin({})
  )
  // https://webpack.js.org/configuration/optimization/#optimizationsplitchunks
  webpackConfig.devtool = false
}

module.exports = webpackConfig
