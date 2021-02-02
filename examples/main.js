import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import demoBlock from './components/demo-block.vue'
import ElementUI from 'element-ui'
import winComponents from 'main/index.js'
// import icon from './icon.json'
// import svgConf from './svg.json'
import 'babel-polyfill'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-light.css'
import 'examples/assets/style/markdown.css'
import 'examples/assets/style/index.scss'
// import 'svgxuse'
// import './svg.js'
import Cookie from 'js-cookie'

// 流程
import 'packages/winning-theme/lib/index.css'
// import 'packages/finance-theme/src/winning-components/data-analysis.scss'
// import 'packages/finance-theme/src/winning-components/finance-payment.scss'

Vue.component('demo-block', demoBlock)
Vue.use(ElementUI)
Vue.use(winComponents)

// Vue.prototype.$icon = icon
// Vue.prototype.$svg = svgConf
const isDev = process.env.NODE_ENV === 'development'
// if (isDev) {
//   const WinLogin = require('@winning-plugin/portal-login-plugin').default
//   /* eslint-disable no-new */
//   new WinLogin({
//     username: 'L10044',
//     password: '456'
//   })
//   Cookie.set('W-SEQ', 9999)
//   Cookie.set('W-FLOW', 'canary')
// }

Vue.config.productionTip = false

router.afterEach(route => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    var blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
  document.title = 'ykl-components'
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
