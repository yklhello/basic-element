import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import demoBlock from './components/demo-block.vue'
import ElementUI from 'element-ui'
import winComponents from '../src/index.js'

import 'babel-polyfill'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-light.css'
import 'examples/assets/style/markdown.css'
import 'examples/assets/style/index.scss'
import 'packages/sungrow-theme/lib/index.css'
import 'element-ui/lib/theme-chalk/index.css'


Vue.component('demo-block', demoBlock)
Vue.use(ElementUI)
Vue.use(winComponents)


Vue.config.productionTip = false

router.afterEach(route => {
  Vue.nextTick(() => {
    var blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
  document.title = 'sungrow-components'
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
