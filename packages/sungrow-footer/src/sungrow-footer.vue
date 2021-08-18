<template>
  <footer class="sungrow-footer-wrapper">
    <div class="sungrow-footer-wrapper__copyright">
      <span class="sungrow-footer-wrapper__copyright__symbol">©️</span>{{copyrightText}}</div>
  </footer>
</template>

<script>
export default {
  name: 'sungrow-footer',
  props: {
    copyrightText: {
      type: String,
      default: '2021 Sungrow 版权所有'
    }
  }
}
</script>
