var fs = require('fs')
var path = require('path')
// var render = require('json-templater/object')
const glob = require('glob')

const OUTPUT_PATH = path.join(__dirname, '../../examples')
const OUTPUT_FILE = path.join(OUTPUT_PATH, './svg.json')
var filterPath = path.join(__dirname, '../../packages/finance-theme/src/icon-svg/*.svg')


function writeSvgConf () {
  const filterFiles = glob.sync(filterPath, { matchBase: true })
  const svgConf = []
  filterFiles.forEach(packagePath => {
    const svgObj = path.parse(packagePath)
    if (svgObj.name) {
      svgConf.push(svgObj.name)
      // conf[] = `./${path.relative(OUTPUT_PATH, packagePath)}`
    }
  })
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(svgConf, null, 2))
  console.log('[gen svg config] DONE:', OUTPUT_FILE)
}

writeSvgConf()