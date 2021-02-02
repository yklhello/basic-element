/* Automatically generated by './build/bin/build-entry.js' */

import YklFooter from '../packages/ykl-footer/index.js'

const components = [
  YklFooter
]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.0.6',
  install,
  YklFooter
}
