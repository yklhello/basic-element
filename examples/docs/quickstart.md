## 快速上手

本节将介绍如何在项目中使用 sungrow-components。

### npm 安装

推荐使用 yarn或npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

```shell
yarn add sungrow-components || npm install sungrow-components -S
```

### 引入 sungrow-components

你可以引入整个 sungrow-components，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 sungrow-components。

#### 完整引入

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import SungrowComponents from 'sungrow-components';
import 'sungrow-components/lib/finance-theme/index.css';
import App from './App.vue';

Vue.use(SungrowComponents);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

以上代码便完成了 sungrow-components 的引入。样式文件需要单独引入。

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
        libraryName: "sungrow-components",
        styleLibraryName: 'finance-theme'
      }
    ]
  ]
}
```

接下来，如果你只希望引入部分组件，比如 SungrowFooter， main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import { SungrowFooter } from 'sungrow-components';
import App from './App.vue';

Vue.component(SungrowFooter.name, SungrowFooter);
/* 或写为
 * Vue.use(SungrowFooter)
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
  SungrowFooter,
} from 'sungrow-components';

Vue.use(SungrowFooter);
```



按需引入 sungrow-components：

```js
import Vue from 'vue';
import { SungrowFooter } from 'sungrow-components';

Vue.use(SungrowFooter);
```

### 开始使用

至此，一个基于 Vue 和 sungrow-components 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。
