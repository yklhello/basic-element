## 开发

### 项目结构

```
├── build                    # webpack 脚本和发布脚本
├── packages                 # 组件源码
│   ├── winning－theme       # 样式文件（包括element-ui 和 自定义样式）
│   └── ...                  # 其他组件
├── src
│   ├── utils                # 常用方法
│   └── index.js             # npm 包的打包入口
├── examples                 # 官网
```

### 安装依赖和准备工作

winning-components 使用 `yarn` 管理依赖版本，因此请确保本机已正确安装 yarn。进入项目文件夹，执行以下命令：

```shell
yarn bootstrap || npm run bootstrap
```
这个过程请耐心等待～

### 开始开发

执行 `yarn start` 命令，在浏览器中打开 [http://localhost:8085](https://webpack.js.org/)，导航直相应组件即可进行开发。组件由examples/component-docs 文件夹下的`md`文件渲染而来。

注意：
- 如果需要修改element-ui样式的定制，需要修改packages/finance-theme里组件对应的源文件即可。
- 如果新增组件，需要在packages文件夹下新增你的组件，同时执行`yarn build:file`生成最新的入口注册文件，最后在examples/component-docs中添加你的md文档

### 开发完成

- 如果是修复 bug，请确保该组件的其他功能没有受到本修复的影响。
- 如果是新增功能，请在文档中补充该功能的 API 说明，同时组件命名、css书写要符合规范。

### CSS 规范
组件库采style采用 BEM 命名规范

- Bem 是块（block）、元素（element）、修饰符（modifier）的简写

  > -中划线 ：仅作为连字符使用，表示某个块或者某个子元素的多单词之间的连接记号。

  > __ 双下划线：双下划线用来连接块和块的子元素

  > __ 双下划线：单下划线用来描述一个块或者块的子元素的一种状态

- BEM 是一个简单又非常有用的命名约定。让你的前端代码更容易阅读和理解，更容易协作，更容易控制，更加健壮和明确，而且更加严密。

- 所有组件命名均以 win-(模块名) 开头

