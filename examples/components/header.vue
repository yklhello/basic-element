<template>
  <header class="header-wrapper">
    <div class="header-container">
      <h1 class="header-logo">
        <router-link to="/">
          <img src="../assets/imgs/logo.svg" style="width: 200px;vertical-align: middle;">
        </router-link>
      </h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
  data () {
    return {
      defaultEnv: '测试213',
      envList: [{
        key: 213,
        value: '测试213'
      }, {
        key: 222,
        value: '测试222'
      }],
      data: [{
        id: 10,
        name: '业务组件',
        modName: 'component',
        link: '/component/introduction'
      }]
    }
  },
  props: {
    modName: String
  },
  methods: {
    handleChangeHeader (item) {
      this.$router.push({
        path: item.link
      })
    },
    handleEnvChange (e) {
      if (e === 213) return null
      // console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  &-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #fff;
    z-index: 10;
  }
  &-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #e4e8ef;
    max-width: 1140px;
    margin: 0 auto;
    a {
      color: #5A7BEF;
      font-weight: 800;
    }
  }
  &-logo {
    font-size: 24px;
    color: #5A7BEF;
  }
  &-nav, & li {
    display: flex;
    list-style: none;
  }
  &-nav {
    height: 60px;
    margin: 0;
    line-height: 60px;
    &-item {
      margin-left: 56px;
      & a {
        color: #7691ed;
        font-weight: 800;
      }
      &.active {
        & a {
          color: #5A7BEF;
        }
        // font-weight: 700;
        border-bottom: 3px solid #5A7BEF;
      }
    }
    &-dropdown {
      cursor: pointer;
      margin-top: -8px;
      color: #858990;
      &:hover {
        color:#5A7BEF;
      }
    }
  }
}
</style>
