## sungrow-export 导出组件
支持Excel导出

### 使用实例
:::demo
```html
<template>
  <sungrow-export :text="text" :options="options" />
</template>

<script>
  export default {
    data () {
      return {
          text: '导出',
          title: '三年二班2021年期中考试分数',
          options: {
             labelList: ['编号', '分数'],
             valueList: [
               [1, 80],
               [2, 90]
             ]
          }
      }
    }
  }
</script>

```
:::

### Attributes
| 参数          | 说明    | 类型      | 可选值       | 默认值   |
|---- |--- |---- |-------------  |-------- |
| text | 按钮值  | string  |   －            |    导出     |
| title | 导出文件名  | string  |   －            |    导出文件     |
| loading | 是否加载中状态  | boolean  |   －            |    false     |
| options | 导出配置  | object  |   －            |    { labelList: [], valueList: [] }     |

