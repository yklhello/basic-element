<template>
  <footer class="win-footer-wrapper">
    <div class="win-footer-wrapper__copyright">
      <span class="win-footer-wrapper__copyright__symbol">©️</span>{{copyrightText}}</div>
  </footer>
</template>

<script>
export default {
  name: 'win-footer',
  props: {
    copyrightText: {
      type: String,
      default: '2020 Winning Health 版权所有'
    }
  }
}
</script>
