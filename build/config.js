const path = require('path')
// const fs = require('fs')
const nodeExternals = require('webpack-node-externals')
const Components = require('../components.json')
const package = require('../package.json')

let externals = {}

Object.keys(Components).forEach(function(key) {
  externals[`win-components/packages/${key}`] = `win-components/lib/${key}`
})

externals = [Object.assign({
  vue: 'vue',
  'vue-echarts': 'vue-echarts',
  svgxuse: 'svgxuse'
}, externals), nodeExternals()]

exports.externals = externals

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples'),
  'win-components': path.resolve(__dirname, '../')
}

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
}

function resolve (dir) {
  return path.join(__dirname, dir)
}

exports.version = package.version

exports.mdclude = [resolve('node_modules'), resolve('examples/docs'), resolve('examples/theme-docs'), resolve('lib')],

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/
