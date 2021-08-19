## sungrow-footer 页脚组件
提供统一的页脚组件

### 使用实例
:::demo
```html
<template>
  <div  style="position:relative; height: 40px; width: 100%;">
    <sungrow-footer :label="label"/>
  </div>
</template>

<script>
  export default {
    data () {
      return {
          label: '版权所有'
      }
    }
  }
</script>

```
:::

### Attributes
| 参数          | 说明    | 类型      | 可选值       | 默认值   |
|---- |--- |---- |-------------  |-------- |
| label | footer描述  | string  |   －            |    2021 Sungrow 版权所有     |

