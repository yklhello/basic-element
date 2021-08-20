<style lang="scss" type="text/scss">
  .side-nav{
    display: inline-block;
    margin: 32px 0;
    padding: 0;
    color: #3F536E;
    background-color: #fff;
    z-index: 99;
    .group-container{
      margin-bottom: 32px;
    }
    .side-nav-title{
      padding: 0 24px 8px 0;
      font-size: 16px;
      color: #333;
      line-height: 40px;
      height: 40px;
      margin: 0;
      text-decoration: none;
      display: block;
      position: relative;
      transition: .15s ease-out;
      font-weight: 700;
    }
    .side-nav-items{
      font-size: 14px;
      font-weight: normal;
      line-height: 1.8;
      a{
        display: block;
        position: relative;
        padding: 8px 0;
        color: #3F536E;
        font-weight: normal;
        line-height: 1.5;
        cursor: pointer;
      }
      .side-nav-group{
        display: block;
        position: relative;
        padding: 6px 0 6px 0;
        color: #2C405A;
        font-weight: bold;
      }
      .slid-nav-component{
        display: block;
        position: relative;
        padding: 6px 24px 6px 0;
        color: #616367;
        font-size: 14px;
      }
      .active{
        color: #5A7BEF;
      }
    }
  }
</style>
<template>
  <div class="side-nav">
    <div v-for="title in (Object.keys(navsConf))"
         v-bind:key="title.index"
         class="group-container">
      <p class="side-nav-title">{{title}}</p>
      <div class="side-nav-items"
           v-for="nav in navsConf[title]"
           v-bind:key="nav.index">
        <div v-if="nav.desc">
          <router-link :class="$route.name===nav.name ? 'active' : ''"
                       v-if="nav.name" :to="{name: nav.name}">
                       {{nav.desc}}
          </router-link>
          <p v-else class="side-nav-group">{{nav.desc}}</p>
          <div v-for="item in nav.items"
               v-bind:key="item.index">
            <router-link :to="{name: item.name}"
                         :class="$route.name===item.name ? 'active' : ''"
                         class="slid-nav-component">{{item.desc}}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import navConf from '../nav.conf.json'

export default {
  data () {
    return {
      // data: navConf
    }
  },
  props: {
    name: String,
    navsConf: {
      type: Object,
      default: () => ([])
    }
  }
}
</script>
