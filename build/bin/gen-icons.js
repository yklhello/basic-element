'use strict';

var postcss = require('postcss')
var fs = require('fs')
var path = require('path')
var fontFile = fs.readFileSync(path.resolve(__dirname, '../../packages/finance-theme/src/winning-components/component-icon.scss'), 'utf8')
var nodes = postcss.parse(fontFile).nodes 
var classObj = {
  common: [],
  outpatient: []
}

nodes.forEach((node) => {
  var selector = node.selector || ''
  var reg = new RegExp(/\.win-icon-([^:]+):before/)
  var arr = selector.match(reg)
  // console.log(arr, 'uuu')

  if (arr && arr[1]) {
    if (arr[1].indexOf('outpatient-') === 0) {
      classObj.outpatient.push(arr[1])
    } else {
      classObj.common.push(arr[1])
    }
  }
})

fs.writeFile(path.resolve(__dirname, '../../examples/icon.json'), JSON.stringify(classObj), () => {})
