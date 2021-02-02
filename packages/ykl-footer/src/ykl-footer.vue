<template>
  <footer class="ykl-footer-wrapper">
    <div class="ykl-footer-wrapper__copyright">
      <span class="ykl-footer-wrapper__copyright__symbol">©️</span>{{copyrightText}}</div>
  </footer>
</template>

<script>
export default {
  name: 'ykl-footer',
  props: {
    copyrightText: {
      type: String,
      default: '2020 Winning Health 版权所有'
    }
  }
}
</script>
