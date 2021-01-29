import encounterFilter from './src/win-encounter-filter'

encounterFilter.install = function (Vue) {
  Vue.component(encounterFilter.name, encounterFilter)
}

export default encounterFilter
