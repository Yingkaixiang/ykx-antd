# ykx-antd

从零开始搭建 `antd`。

```
yarn install
yarn start
```

## 功能

- [x] TypeScript
- [x] Less
- [x] CSS Modules
- [x] Webpack
- [x] webpack-dev-middleware
- [x] prettier
- [x] tslint

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
