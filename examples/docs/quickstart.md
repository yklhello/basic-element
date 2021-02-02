## 快速上手

本节将介绍如何在项目中使用 ykl-components。

### npm 安装

推荐使用 yarn或npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

```shell
yarn add ykl-components || npm install ykl-components -S
```

### 引入 ykl-components

你可以引入整个 ykl-components，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 ykl-components。

#### 完整引入

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import WinComponents from 'ykl-components';
import 'ykl-components/lib/finance-theme/index.css';
import App from './App.vue';

Vue.use(WinComponents);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

以上代码便完成了 ykl-components 的引入。样式文件需要单独引入。

另外需要注意的是:
- 我们对element-UI 进行了二次开发index.css 是包括了，*element-ui*所有组件自定义样式和ykl-components所有组件样式。
- 如果只引入*element-ui*样式
```javascript
import 'winning-components/lib/finance-theme/element-ui.css';
```
- 如果只引入*winning-components*样式
```javascript
import 'ykl-components/lib/finance-theme/ykl-components.css';
```

#### 按需引入组件CSS

借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

然后，将 `babel.config.js` 修改为：

```javascript
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'component',
      {
        libraryName: "ykl-components",
        styleLibraryName: 'finance-theme'
      }
    ]
  ]
}
```

接下来，如果你只希望引入部分组件，比如 PatientInput 和 SvgIcon main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import { PatientInput, SvgIcon } from 'ykl-components';
import App from './App.vue';

Vue.component(PatientInput.name, PatientInput);
Vue.component(SvgIcon.name, SvgIcon);
/* 或写为
 * Vue.use(PatientInput)
 * Vue.use(SvgIcon)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```

完整组件列表和引入方式（完整组件列表以 [components.json](http://tfs2018-web.winning.com.cn:8080/tfs/WINNING-6.0/W.in-MVP/_git/winning-webcomponents-finance-common?path=%2Fcomponents.json&version=GBdevelop) 为准）

```javascript
import Vue from 'vue';
import {
  PatientInput,
  iconSvg
} from 'ykl-components';

Vue.use(PatientInput);
Vue.use(iconSvg);
```



按需引入 ykl-components：

```js
import Vue from 'vue';
import { PatientInput } from 'ykl-components';

Vue.use(PatientInput);
```

#### 引入svg图片

组件依赖`icon` 或者 `svg`是很常见的事，所以在使用组件时必需引入组件所依赖的 `svg`资源，借助 webpack loader [svg-sprite-loader](https://github.com/JetBrains/svg-sprite-loader)，我们可以引入ykl-components中finance-theme中的icon-svg的svg，通常常用的icon会放在icon-svg中。具体使用可以参考[住院医生站](http://tfs2018-web.winning.com.cn:8080/tfs/WINNING-6.0/W.in-MVP/%E8%B4%B9%E7%94%A8%E5%9F%9F%E5%9B%A2%E9%98%9F/_git/winning-web-jindal)

### 开始使用

至此，一个基于 Vue 和 ykl-components 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。
