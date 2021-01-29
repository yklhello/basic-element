
import Vue from 'vue'
import VueRouter from 'vue-router'
import navConf from '../nav.conf.json'

Vue.use(VueRouter)

let routes = []
const routeConf = {}

Object.keys(navConf).forEach((header) => {
  routeConf[header] = []
  Object.keys(navConf[header]).forEach(title => {
    routeConf[header] = routeConf[header].concat(navConf[header][title])
  })
})

const addComponent = (router, name) => {
  router.forEach((route) => {
    if (route.items) {
      addComponent(route.items, name)
      routes = routes.concat(route.items)
    } else {
      if (route.type === 'pages') {
        route.component = r => require.ensure([], () =>
        // eslint-disable-next-line
          r(require(`../pages/${route.name}.vue`)))
        route.path = '/'
        return
      }
      route.component = r => require.ensure([], () =>
      // eslint-disable-next-line
        r(require(`../docs/${route.name}.md`)))
      route.path = `/${name}/${route.name}`
      route.meta = {
        modName: name
      }
    }
  })
}
// console.log(routes, 'kkk')
Object.keys(routeConf).forEach(component => {
  addComponent(routeConf[component], component)
  routes = routes.concat(routeConf[component])
})
const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    // if (savedPosition) {
    //   return savedPosition
    // }
    return { x: 0, y: 0 }
  }
})

export default router
