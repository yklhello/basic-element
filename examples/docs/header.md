## win-header 头部组件
提供6.0统一的头部组件

### 基本功能
:::demo  普通使用时只需传入`title`字段替换标题名称即可，传入`logoLink`即可使用点击事件
```html
<template>
  <win-header :options="options"/>
</template>

<script>
  export default {
    data () {
      return {
         options: {
           title:'我的系统名称',
           logoLink: ()=>{
             console.log('clicked')
           },
           theme: true,
           setting: true,
           help: true,
           lang: true,
           userName: '欧阳正华',
           avatarUrl: '',
           gender: '',
           code: ''
         }
      }
    }
  }
</script>

```
:::

### 带通知和主题切换图标
:::demo  要显示通知图标，请设置badge对象，其中`value`值为通知数量，`handler`为点击事件函数。要显示换肤图标，请设置`theme`为true
```html
<template>
  <win-header :options="options"/>
</template>

<script>
  export default {
    data () {
      return {
         options: {
           theme: true,
           badge: {
              value: 99,
              handler: () => {
                console.log('badge click')
              }
            }
         }
      }
    }
  }
</script>

```
:::

### 带普通导航的Header
:::demo 要使用带导航的Header，只需要传入routes数组对象即可，组件内部使用`router-link`实现路由跳转，并且设置了`active-class`对导航激活样式进行绑定。具体参数见下表
```html
<template>
  <win-header :options="options" :routes="routes"/>
</template>

<script>
  export default {
    data () {
      return {
         options: {
           theme: true,
           themeHandler: (param)=> {
             console.log('theme click: ' + param)
           }
         },
         routes: [
              {
                name: "Footer组件",
                path: '/component/win-footer',
              },
           ]
      }
    }
  }
</script>

```
:::

### 带标签页导航的Header
:::demo 要使用带带标签页导航的Header，需要传入`tabRoutes`具体参数见下表
```html
<template>
  <win-header :options="options" :tabRoutes="tabs"/>
  <router-view/>
</template>

<script>
  export default {
    data () {
      return {
         options: {
           theme: true,
           themeHandler: (param)=> {
             console.log('theme click: ' + param)
           }
         },
        tabs:[
          {
            name: 'Svg 组件',
            checked: false,
            path: '/component/svg-icon',
            avatarOptions: {
              show: true,
              gender: '',
              url: '',
              code: ''
            },
            iconOptions: {
              name: 'win-icon-closeRound',
              handler: ()=> {
                console.log('nav icon click')
              }
            },
            handler: ()=> {
              console.log('nav click')
            }
          },
          {
            name: 'Svg 组件',
            path: '/component/svg-icon',
            checked: false,
            avatarOptions: {
              show: true,
              gender: '',
              url: '',
              code: ''
            },
            iconOptions: {
              name: 'win-icon-closeRound',
              handler: ()=> {
                console.log('nav icon click')
              }
            },
            handler: ()=> {
              console.log('nav click')
            }
          }
        ]
      }
    }
  }
</script>

```
:::

### 用户下拉菜单
:::demo 需要传入dropOptions对象数组即可，具体参数见下表
```html
<template>
  <win-header :options="options"/>
</template>

<script>
  export default {
    data () {
      return {
         options: {
           dropOptions: [
             {
               icon:'win-icon-medicalHuman',
               name:'个人中心',
               disabled: true
             },
             {
               icon:'el-icon-user',
               name:'切换用户',
               command:()=>{
                 console.log('切换成功')
               }
             },
             {
               icon:'el-icon-headset',
               name:'注销',
               divided:  true,
               command:()=>{
                 console.log('你已注销')
               }
             }
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
|------------- |-------- |---------- |-------------  |-------- |
| options | header配置信息  | Object  |   见下表         |    -     |
| routes | 普通类型导航菜单数组，详情见下表 | array | — | - |
| tabRoutes | 标签页导航菜单数组，详情见下表 | array | — | - |

### Options Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-----------------------------------  |-------- |
| logoName | Logo图标 | string | — | win-header-logo |
| logoLink | Logo点击事件 | string/function | — | - |
| title | 应用名称 | string | — | 卫宁医院住院医生站 |
| theme | 是否显示换肤图标 | boolean | — | false |
| themeHandler | 换肤点击事件 | function | — | - |
| lang | 是否显示语言图标 | boolean | — | false |
| help | 是否显示帮助图标 | boolean | — | false |
| setting | 是否显示设置图标 | boolean | — | false |
| userName | 当前用户名 | string | — | 用户 |
| avatarUr | 用户头像url | string | — | - |
| gender | 性别（术语） | string | 未知性别：50601<br/>男：50602<br/>女：50603<br/>... | — |
| code | 年龄分段代码（术语） | string | 婴儿期：256813<br/>幼儿期：256814<br/>... | — |
| badge | 通知标记对象，详情见下表 | Object | — | - |
| dropOptions | 用户下拉菜单选项，详情见下表 | array | — | - |

### Routes Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | 菜单名称 | string/array | — | - |
| path | 菜单路径 | string | — | - |

### NavOptions Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | 菜单名称 | string/array | — | - |
| path | 菜单路径 | string | — | - |
| checked | 选中状态 | boolean | — | false |
| handler | 菜单点击事件 | function | — | - |
| iconOptions | 图标对象，详情见下表 | object | — | - |
| avatarOptions | 患者图像对象，详情见下表 | object | — | - |

### Badge Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 标记显示值 | string | — | - |
| handler | 点击事件 | function | — | - |

### DropOptions Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| icon | 图标类名 | string | — | - |
| name | 菜单文本 | string | — | - |
| command | 指令函数 | function | — | - |
| divided | 显示分割线	 | boolean | — | - |
| disabled | 禁用 | boolean | — | - |

### IconOptions Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | 图标类名 | string | — | - |
| handler | 点击事件 | function | — | - |

### AvatarOptions Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| show | 是否显示患者图像 | boolean | — | false |
| url | 用户头像url | string | — | - |
| gender | 性别（术语） | string | 未知性别：50601<br/>男：50602<br/>女：50603<br/>... | — |
| code | 年龄分段代码（术语） | string | — | 婴儿期：256813<br/>幼儿期：256814<br/>... |