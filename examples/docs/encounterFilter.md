## win-encounter-filter 患者筛选面板

### 使用实例
:::demo 配合win-svg 组件使用
```html
<template>
  <div  style="position:relative; height: 40px; width: 100%;">
    <win-encounter-filter />
  </div>
</template>

<script>
  export default {
    data () {
      return {
          text: '版权所有'
      }
    }
  }
</script>

```
:::

### Attributes
| 参数          | 说明    | 类型      | 可选值       | 默认值   |
|------------- |-------- |---------- |-------------  |-------- |
| copyright-text | footer描述  | string  |   －            |    2020 Winning Health 版权所有     |

