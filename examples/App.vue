<template>
  <div id="app">
    <div>
      <main-header v-if="!isIndex"
                   :modName="targetHeader" />
      <div class="wrapper page-component">
        <div style="height: 100%; overflow: auto;">
          <div v-if="!isIndex" class="page-container">
            <side-nav class="nav"
                      :navsConf="data[targetHeader]"/>
            <router-view class="view" />
          </div>
        </div>
      </div>
      <router-view v-if="isIndex" class="page" />
      <!-- <main-footer v-if="!isIndex" /> -->
    </div>
  </div>
</template>

<script>
// import {
//   loginExample,
//   getUserInfo
// } from 'examples/api/common'
// import Cookies from 'js-cookie'
import mainHeader from './components/header'
import sideNav from './components/side-nav'
import navConf from './nav.conf.json'

export default {
  components: {
    mainHeader,
    sideNav
    // mainFooter
  },
  data () {
    return {
      init: false,
      isIndex: true,
      isEndGetUserInfo: false,
      targetHeader: 'component',
      data: navConf
    }
  },
  watch: {
    $route () {
      this.isIndex = this.$route.name === 'index'
      this.targetHeader = this.$route.meta.modName || 'component'
    }
  },
  mounted () {
    //  这里模拟数据请求
    setTimeout(() => {
      this.init = true
    }, 250)
  },
  created () {
    // this.getInfo()
  },
  methods: {
    login () {
      return loginExample({
        username: 'L10044',
        password: 'NjU0'
      }).then(res => {
        Cookies.set('BEARER_TOKEN', res.data
          ? `Bearer ${res.data.access_token}` : '', { expires: 9.8 })
        return res
      })
    },
    getInfo () {
      this.login().then(res => {
        if (res.success) {
          getUserInfo({
            token: res.data.access_token
          }).then(res => {
            this.isEndGetUserInfo = true
            if (res.success) {
              Cookies.set('userInfo', res.data, { expires: 9.8 })
            }
            // console.log(res)
          })
        }
      }).catch(() => {
        this.isEndGetUserInfo = true
      })
    }
  }
}
</script>

<style lang="scss" type="text/scss">
  .page-container {
    margin: 48px auto;
    width: 90%;
    background-color: #fff;
    // box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
    .nav {
      float: left;
      width: 215px;
    }
    .view {
      float: left;
      width: calc(100% - 215px);
      padding: 32px 48px 48px;
      box-sizing: border-box;
    }
  }
  .page-container:after {
    content: "";
    clear: both;
    display: block;
  }
  .placeholder {
    &-block {
      display: inline-block;
      vertical-align: middle;
      background-color: #F6F6F6;
    }
  }
  .patiend {
    &-info {
      &-headimg{
        font-size: 52px;
      }
      &-base {
        display: inline-block;
        line-height: 28px;
      }
    }
  }
  .wrapper {
    position: relative;
    height: calc(100% - 60px)!important;
    top: 60px;
    border: 1px soild red;
    overflow: hidden;
  }
</style>
