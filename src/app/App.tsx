import * as React from "react";
import * as ReactDOM from "react-dom";
import Badge from "./components/badge/";
import Codebox from "./components/codebox/";
import Icon from "./components/icon/";
import Markdown from "./components/markdown/";

const root = document.getElementById("root");

ReactDOM.render(
  <div style={{ width: 500 }}>
    <Codebox
      title="基础"
      desc="简单的徽章展示，当 ```count``` 为 ```0``` 时，默认不显示，但是可以使用 ```showZero``` 修改为显示。"
      style={{ margin: 20 }}
    >
      <Icon type="back" style={{ color: "red" }} />
    </Codebox>
    <Codebox
      title="基础"
      desc="简单的徽章展示，当 count 为 0 时，默认不显示，但是可以使用 showZero 修改为显示。"
      style={{ margin: 20 }}
    >
      <Badge>
        <div style={{ width: 40, height: 40, background: "#ccc" }} />
      </Badge>
    </Codebox>
    <Codebox
      title="基础"
      desc="可以在编辑器中使用所有的 ```Markdown``` 语法"
      style={{ margin: 20 }}
      language="markdown"
      code="# Markdown 编辑器"
    >
      <Markdown source="# Markdown 编辑器" />
    </Codebox>
  </div>,
  root,
);

declare let module: any;
if (module.hot) {
  module.hot.accept();
}
