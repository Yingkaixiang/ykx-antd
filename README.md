# ykx-antd

深入学习 `React` `Webpack` `Typescript`。

从零开始搭建 [antd](https://ant.design/index-cn)，项目构建不使用任何的现成 demo 或脚手架。

```
cd app
yarn install
yarn start
```

## 技术栈

- [x] CSS Modules
- [x] Less
- [x] Prettier
- [x] TypeScript
- [x] tslint
- [x] Webpack
- [x] webpack-dev-middleware

## Prettier

如果你使用 `vscode` 则可以直接安装 [Prettier 插件](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)。插件会读取项目中的 `prettier.config.js` 配置进行格式化。

你可以设置编辑器保存时自动格式化：

```json
{
  "editor.formatOnSave": true
}
```

也可以在命令行执行以下命令进行统一的格式化：

```bash
npm run prettier
```

## 声明文件

### 1. 编写声明文件

[官方文档](https://www.tslang.cn/docs/handbook/declaration-files/introduction.html)

### 2. 测试声明文件

在你的项目目录下创建 `/types/<project-name>/index.d.ts`，`<project-name>` 就是你为其编写声明文件的包的名称。

在 `tsconfig.json` 下添加如下配置：

```js
{
  "compilerOptions": {
    // ...
    "baseUrl": "types",
    "typeRoots": ["types"]
  }
}
```

### 3. 提交声明文件

将你的声明文件按照官方格式提交到 `DefinitelyTyped`。

[官方文档](https://github.com/DefinitelyTyped/DefinitelyTyped)

## 资料参考

- [TypeScript Handbook（中文版）](https://legacy.gitbook.com/book/zhongsp/typescript-handbook)
