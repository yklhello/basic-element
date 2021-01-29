var fs = require('fs')
var path = require('path')
// var render = require('json-templater/object')
const glob = require('glob')

const OUTPUT_PATH = path.join(__dirname, '../../')
const OUTPUT_FILE = path.join(OUTPUT_PATH, './components.json')
var filterPath = path.join(__dirname, '../../packages/**/index.js')


function writeComponentsConf () {
  const filterFiles = glob.sync(filterPath, { matchBase: true })
  const conf = new Map()
  filterFiles.forEach(packagePath => {
    const componentNames = path.dirname(packagePath).split('packages/')
    if (componentNames.length > 1 && componentNames !== 'finance-theme') {
      conf[componentNames[1]] = `./${path.relative(OUTPUT_PATH, packagePath)}`
    }
  })
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(conf, null, 2))
  console.log('[gen components config] DONE:', OUTPUT_FILE)
}

writeComponentsConf()
